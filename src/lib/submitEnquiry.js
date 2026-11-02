const endpoint =
  import.meta.env.VITE_ENQUIRY_API_URL ||
  (window.location.hostname === 'sydney-immigration.vercel.app'
    ? '/api/enquiry'
    : 'https://sydney-immigration.vercel.app/api/enquiry');

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
