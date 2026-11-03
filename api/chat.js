const GROQ_MODEL = 'openai/gpt-oss-20b';
const MAX_MESSAGES = 10;
const MAX_MESSAGE_LENGTH = 1600;

const SYSTEM_PROMPT = `You are the friendly chat assistant for Sydney Immigration India, Kaithal branch, Haryana, India.
Business information:
- Services: Study, Work, PR, and Visitor visas for Australia, Canada, the UK, the USA, New Zealand, and Europe.
- Free consultation is available.
- Office timings: 9 AM to 5 PM.
- Phone: +91 72069 99548.

Rules:
- Reply in the same language as the visitor: Hindi, Hinglish, or English.
- Keep answers short, clear, and friendly.
- Never guarantee visa approval, processing time, or outcomes.
- Do not give legal advice.
- For specific personal cases, ask the visitor to book a free consultation or call the office.
- Do not invent business details, fees, requirements, or policies.`;

function getMessages(body) {
  if (!Array.isArray(body.messages)) return null;

  const messages = body.messages
    .slice(-MAX_MESSAGES)
    .filter((message) => (
      message
      && typeof message === 'object'
      && (message.role === 'user' || message.role === 'assistant')
      && typeof message.content === 'string'
    ))
    .map(({ role, content }) => ({
      role,
      content: content.trim().slice(0, MAX_MESSAGE_LENGTH),
    }))
    .filter((message) => message.content);

  return messages.length ? messages : null;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  const body = req.body && typeof req.body === 'object' && !Array.isArray(req.body)
    ? req.body
    : {};
  if (Buffer.byteLength(JSON.stringify(body), 'utf8') > 20000) {
    return res.status(413).json({ error: 'Your message is too long. Please shorten it and try again.' });
  }

  const messages = getMessages(body);
  if (!messages) {
    return res.status(400).json({ error: 'Please send a non-empty chat message.' });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    console.error('GROQ_API_KEY is not configured.');
    return res.status(503).json({ error: 'Chat is not configured yet. Please call the office for help.' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
        temperature: 0.5,
        max_completion_tokens: 500,
      }),
      signal: AbortSignal.timeout(20000),
    });

    if (!response.ok) {
      console.error(`Groq chat request failed with status ${response.status}.`);
      if (response.status === 429) {
        return res.status(503).json({ error: 'Chat is busy right now. Please try again in a moment.' });
      }
      return res.status(502).json({ error: 'Chat is temporarily unavailable. Please try again shortly.' });
    }

    const result = await response.json();
    const reply = result.choices?.[0]?.message?.content;
    if (typeof reply !== 'string' || !reply.trim()) {
      console.error('Groq returned an empty chat response.');
      return res.status(502).json({ error: 'Chat could not prepare a reply. Please try again.' });
    }

    return res.status(200).json({ reply: reply.trim() });
  } catch (error) {
    console.error('Groq chat request could not be completed.', error instanceof Error ? error.name : 'Unknown error');
    return res.status(502).json({ error: 'Chat is temporarily unavailable. Please try again shortly.' });
  }
}
