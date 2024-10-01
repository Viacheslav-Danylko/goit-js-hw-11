export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '46290699-f987c2a4595ee60b837e9e9f4';

export function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true'
  });

  return fetch(`${BASE_URL}?${params.toString()}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    });
}