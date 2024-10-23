function generateImage() {
  const query = document.querySelector('.searchInput').value;
  const clientId = 'tiPGSSsgw9JBOq3x-dxdjpUKpApceJ7xqjHcua9bGGY';
  const url = `https://api.unsplash.com/photos/random?query=${query}&count=4&client_id=${clientId}`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
      const images = document.querySelectorAll('.image-gallery img');
      data.forEach((item, index) => {
          images[index].src = item.urls.regular;
          images[index].alt = item.alt_description;
      });
  })
  .catch(error => console.error('Error fetching images:', error));
}