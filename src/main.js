import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import octagonIcon from './img/bi_x-octagon-2.svg';
const gallery = document.querySelector('.gallery-wrapper');
const searchButtn = document.querySelector('.search-button');
const loader = document.querySelector('.loader-position');

iziToast.settings({
  timeout: 5000,
  theme: 'light',
  message:
    'Sorry, there are no images matching your search query. Please, try again!',
  messageColor: 'rgba(250, 250, 250, 1)',
  maxWidth: '392px',
  messageSize: '322px',
  position: 'topRight',
  color: '#EF4040',
  progressBar: true,
  progressBarColor: '#B51B1B',

  icon: '',
  iconText: '',
  iconColor: '',
  iconUrl: octagonIcon,
  image: '',
  imageWidth: 50,

  zindex: null,
  layout: 1,
  balloon: false,
  close: true,
  closeOnEscape: false,
  closeOnClick: true,
  displayMode: 0,
  target: '',
  targetFirst: true,

  animateInside: false,
  progressBarEasing: 'linear',
  overlayClose: true,

  transitionIn: 'fadeInUp',
  transitionOut: 'fadeOut',
  transitionInMobile: 'fadeInUp',
  transitionOutMobile: 'fadeOutDown',
  buttons: {},
  inputs: {},
  onOpening: function () {},
  onOpened: function () {},
  onClosing: function () {},
  onClosed: function () {},
});

const apiKey = '41858556-aa96e57fcb7c92b306b25a0e4';
const baseURL = 'https://pixabay.com/api/';
let options = {
  key: apiKey,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  page: 1,
  per_page: 9,
};
const lightbox = new SimpleLightbox('.gallery-item a', {
  close: true,
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

searchButtn.addEventListener('click', () => {
  performSearch();
});

window.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    performSearch();
  }
});

function performSearch() {
  options.q = document.querySelector('#input-field').value.trim();
  loader.style.display = 'flex';
  const queryStr = new URLSearchParams(options).toString();
  const apiUrl = `${baseURL}?${queryStr}`;

  fetchImages(apiUrl)
    .then(images => renderGallery(images))
    .catch(error => console.error(error));
}

function fetchImages(apiUrl) {
  return fetch(apiUrl).then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  });
}

function renderGallery(images) {
  loader.style.display = 'none';
  let markup = '';
  if (images.totalHits === 0) {
    gallery.innerHTML = markup;
    return iziToast.show();
  }
  images.hits.map(image => {
    markup += `<li class="gallery-item"> 
      <a class="gallery-link" href="${image.largeImageURL}">
        <img
          class="gallery-image"
          src="${image.webformatURL}"
          alt="${image.tags}">
      </a>
      <div class="image-info">
  <label class="label-text">Likes
    <p>${image.likes}</p>
  </label>
  <label class="label-text">Views
    <p>${image.views}</p>
  </label>
  <label class="label-text">Comments
    <p>${image.comments}</p>
  </label>
  <label class="label-text">Downloads
    <p>${image.downloads}</p>
  </label>
</div>
    </li>`;
  });
  gallery.innerHTML = markup;
  lightbox.refresh();
}
