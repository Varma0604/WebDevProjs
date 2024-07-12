document.getElementById('url-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const urlInput = document.getElementById('url-input');
  const longUrl = urlInput.value;

  // API URL for tinyurl
  const apiUrl = `https://api.tinyurl.com/create?api_token=YOUR_API_TOKEN`;

  const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          url: longUrl
      })
  });

  const data = await response.json();
  const shortUrl = data.data.tiny_url;

  const resultDiv = document.getElementById('result');
  const shortUrlAnchor = document.getElementById('short-url');
  shortUrlAnchor.href = shortUrl;
  shortUrlAnchor.textContent = shortUrl;

  resultDiv.classList.remove('hidden');
});
