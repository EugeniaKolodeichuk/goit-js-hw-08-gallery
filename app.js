const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

//добавление списка карточек к разметке
const galleryContainer = document.querySelector('.js-gallery');
const pictureMarkup = createPictureGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', pictureMarkup);

//создаём список карточек (рендеринг разметки)
console.log(createPictureGallery(galleryItems));

function createPictureGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;
  })
    .join('');
}

//делегируем событие на ul по клику

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
  event.preventDefault(event);

  const isGalleryContainerEl = event.target.classList.contains('gallery__image');
  

  if (!isGalleryContainerEl) {
    return;
  }

  console.log(event.target.src);
  console.log(event.target.dataset.source);
  console.log(event.currentTarget);
  console.log(event.target);
  /* console.log(event); */
    
  //открытие модалки

  modal.classList.toggle('is-open');
  
  //подмена url при открытой модалке
  const currentActiveImg = document.querySelector('.lightbox.is-open');
    
if (currentActiveImg) {
  imageEl.setAttribute("src", `${event.target.dataset.source}`);
  imageEl.setAttribute("alt", `${event.target.alt}`);
}
  
}
const imageEl = document.querySelector('img.lightbox__image');
const modal = document.querySelector('.lightbox');

//закрытие модалки
const closeButton = document.querySelector('button[data-action="close-lightbox"]');

function closeModal() {
  modal.classList.remove('is-open');

  //очистка src и alt после закрытия модалки
  
  imageEl.setAttribute("src", '');
  imageEl.setAttribute("alt", '');
}

closeButton.addEventListener('click', closeModal);

//закрытие по ESC

function closeModalESC(event) {
  if (event.key !== 'Escape') {
    return;
  }
  closeModal();
}

window.addEventListener('keyup', closeModalESC);

//закрытие по клику на оверлей
const closeButtonOverlay = document.querySelector('div.lightbox__overlay');

function closeModalOverlay(event) {
  closeModal();
}
closeButtonOverlay.addEventListener('click', closeModalOverlay);