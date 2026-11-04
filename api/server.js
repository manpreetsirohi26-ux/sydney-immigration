import { createServer } from 'node:http';
import chatHandler from './chat.js';
import enquiryHandler from './enquiry.js';

const PORT = Number(process.env.PORT) || 10000;
const MAX_BODY_BYTES = 20000;
const allowedOrigins = new Set([
  'https://sydney-immigration.vercel.app',
  'https://sydney-immigration-api.onrender.com',
  'https://sydneyimmigrationindia.com',
  'https://www.sydneyimmigrationindia.com',
  'http://localhost:5173',
  'http://localhost:4173',
]);
const allowedVercelPreviewOrigin =
  /^https:\/\/sydney-immigration-[a-z0-9-]+-manpreetsirohi26-ux\.vercel\.app$/;

function isAllowedOrigin(origin) {
  return allowedOrigins.has(origin) || allowedVercelPreviewOrigin.test(origin);
}

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify(body));
}

async function readJsonBody(request) {
  const chunks = [];
  let bytes = 0;

  for await (const chunk of request) {
    bytes += chunk.length;
    if (bytes > MAX_BODY_BYTES) {
      throw Object.assign(new Error('Request body is too large.'), { statusCode: 413 });
    }
    chunks.push(chunk);
  }

  if (bytes === 0) return {};
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'));
  } catch {
    throw Object.assign(new Error('Request body must be valid JSON.'), { statusCode: 400 });
  }
}

function createHandlerResponse(response) {
  return {
    status(statusCode) {
      response.statusCode = statusCode;
      return this;
    },
    setHeader(name, value) {
      response.setHeader(name, value);
    },
    json(body) {
      if (!response.headersSent) {
        response.setHeader('Content-Type', 'application/json; charset=utf-8');
      }
      response.end(JSON.stringify(body));
      return this;
    },
    end(body) {
      response.end(body);
      return this;
    },
  };
}

const server = createServer(async (request, response) => {
  const origin = request.headers.origin;
  if (origin && !isAllowedOrigin(origin)) {
    sendJson(response, 403, { error: 'This website is not allowed to access the API.' });
    return;
  }
  if (origin) {
    response.setHeader('Access-Control-Allow-Origin', origin);
    response.setHeader('Vary', 'Origin');
  }
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const pathname = new URL(request.url, 'http://localhost').pathname;
  if (pathname === '/ping' && request.method === 'GET') {
    sendJson(response, 200, { status: 'ok' });
    return;
  }
  if (request.method === 'OPTIONS') {
    response.writeHead(204);
    response.end();
    return;
  }

  const handler = pathname === '/api/chat'
    ? chatHandler
    : pathname === '/api/enquiry'
      ? enquiryHandler
      : null;
  if (!handler) {
    sendJson(response, 404, { error: 'Not found.' });
    return;
  }

  try {
    request.body = await readJsonBody(request);
  } catch (error) {
    sendJson(response, error.statusCode || 400, { error: error.message });
    return;
  }

  try {
    await handler(request, createHandlerResponse(response));
  } catch (error) {
    console.error('API request failed.', error instanceof Error ? error.message : 'Unknown error');
    if (!response.headersSent) {
      sendJson(response, 500, { error: 'The service encountered an unexpected error.' });
    }
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend listening on port ${PORT}.`);
});
