const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || 'https://sydney-immigration-api.onrender.com')
  .replace(/\/+$/, '');
const endpoint = `${apiBaseUrl}/api/enquiry`;

export async function submitEnquiry(payload) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.error || 'We could not send your enquiry. Please try again.');
  }

  return result;
}
