
const pagination = document.querySelector('.pagination-component');

let allData = pagination?.dataset.content;
let groupPerPage = parseInt(pagination?.dataset.group);

let containerCards = pagination.previousElementSibling;
let cardIdxs = containerCards.querySelectorAll('li[data-idx]');
let cards = containerCards.querySelectorAll('li');

let containerPagination = pagination.querySelector('.container-pagination');
let buttonNavigationPrev = pagination.querySelector('.button-navigation-prev');
let buttonNavigationNext = pagination.querySelector('.button-navigation-next');

let cardsData = JSON.parse(allData);
let numberPage = parseInt(sessionStorage.getItem('currentPage')) || 1;
let totalPages = Math.ceil(cardsData.length / groupPerPage);

// Ocultar paginador si solo hay 1 página
if (totalPages <= 1) {
  pagination.style.display = 'none';
}

// Función para determinar qué páginas mostrar con elipsis
const getVisiblePages = (currentPage, totalPages) => {
  if (totalPages <= 2) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages = [];
  
  if (currentPage === 1) {
    // Página 1: 1, 2, ..., N
    pages.push(1);
    if (totalPages >= 2) {
      pages.push(2);
    }
    if (totalPages > 2) {
      pages.push('...');
      pages.push(totalPages);
    }
  } else if (currentPage === 2) {
    // Página 2: 1, 2, ..., N
    pages.push(1);
    pages.push(2);
    if (totalPages > 2) {
      pages.push('...');
      pages.push(totalPages);
    }
  } else {
    // Página 3+: currentPage, ..., N
    if(currentPage !== totalPages){
      pages.push(currentPage);
    }
    if (currentPage !== totalPages) {
      pages.push('...');
      pages.push(totalPages);
    }else if(currentPage === totalPages){
      pages.push(1);
      pages.push('...');
      pages.push(totalPages);
    }
  }
  
  return pages;
};

const renderPaginationButtons = (currentPage, totalPages) => {
  containerPagination.innerHTML = '';
  
  const visiblePages = getVisiblePages(currentPage, totalPages);
  
  visiblePages.forEach((page) => {
    if (page === '...') {
      const ellipsis = document.createElement('span');
      ellipsis.classList.add('font-pokemon-600', 'tracking-widest');
      ellipsis.textContent = '...';
      containerPagination.appendChild(ellipsis);
    } else {
      const button = document.createElement('button');
      button.classList.add('button-pagination', 'button-pagination-' + page);
      button.textContent = page;
      
      if (page === currentPage) {
        button.classList.add('active');
      }
      
      button.addEventListener('click', () => {
        numberPage = page;
        showHideCards(numberPage);
        sessionStorage.setItem('currentPage', numberPage);
      });
      
      containerPagination.appendChild(button);
    }
  });
};

const showHideCards = (numberPage) => {
  const startIndex = (numberPage - 1) * groupPerPage;
  const endIndex = startIndex + groupPerPage;
  const totalPages = Math.ceil(cardsData.length / groupPerPage);

  cardIdxs.forEach((cardIdx) => {
    const cardIdxValue = parseInt(cardIdx.dataset.idx);
    const card = cards[cardIdxValue]

    if(cardIdxValue >= 0 && cardIdxValue < cards.length) {
      if(cardIdxValue >= startIndex && cardIdxValue < endIndex) { 
        card.style.display = 'block';
      }else{
        card.style.display = 'none';
      }
    }
  });

  renderPaginationButtons(numberPage, totalPages);

  if(numberPage === 1) {
    buttonNavigationPrev.classList.add('desactive-nav');
    sessionStorage.removeItem('currentPage');
  } else {
    buttonNavigationPrev.classList.remove('desactive-nav');
  }
  
  if(numberPage === totalPages) {
    buttonNavigationNext.classList.add('desactive-nav');
  } else {
    buttonNavigationNext.classList.remove('desactive-nav');
  }
};

buttonNavigationPrev.addEventListener('click', () => {
  if(numberPage > 1) {
    numberPage--;
    showHideCards(numberPage);
    sessionStorage.setItem('currentPage', numberPage);
  }
});

buttonNavigationNext.addEventListener('click', () => {
  const totalPages = Math.ceil(cardsData.length / groupPerPage);
  if(numberPage < totalPages) {
    numberPage++;
    showHideCards(numberPage);
    sessionStorage.setItem('currentPage', numberPage);
  }
});


renderPaginationButtons(numberPage, totalPages);
showHideCards(numberPage);

// Guardar el índice de la tarjeta seleccionada al hacer clic
cards.forEach((card, index) => {
  const link = card.querySelector('a');
  if (link) {
    link.addEventListener('click', () => {
      sessionStorage.setItem('selectedCardIdx', index);
    });
  }
});

// Re-inicializar cuando se navega de vuelta con Astro ClientRouter
document.addEventListener('astro:page-load', () => {
  const paginationCheck = document.querySelector('.pagination-component');
  if (paginationCheck) {
    const savedPage = parseInt(sessionStorage.getItem('currentPage')) || 1;
    const savedCardIdx = parseInt(sessionStorage.getItem('selectedCardIdx')) || 0;
    
    // Actualizar la variable global numberPage
    numberPage = savedPage;
    
    // Re-seleccionar elementos del DOM
    const containerCardsCheck = paginationCheck.previousElementSibling;
    const cardIdxsCheck = containerCardsCheck.querySelectorAll('li[data-idx]');
    const cardsCheck = containerCardsCheck.querySelectorAll('li');
    const containerPaginationCheck = paginationCheck.querySelector('.container-pagination');
    const buttonNavigationPrevCheck = paginationCheck.querySelector('.button-navigation-prev');
    const buttonNavigationNextCheck = paginationCheck.querySelector('.button-navigation-next');
    const allDataCheck = paginationCheck?.dataset.content;
    const groupPerPageCheck = parseInt(paginationCheck?.dataset.group);
    const cardsDataCheck = JSON.parse(allDataCheck);
    const totalPagesCheck = Math.ceil(cardsDataCheck.length / groupPerPageCheck);
    
    // Actualizar referencias globales
    cardIdxs = cardIdxsCheck;
    cards = cardsCheck;
    containerPagination = containerPaginationCheck;
    buttonNavigationPrev = buttonNavigationPrevCheck;
    buttonNavigationNext = buttonNavigationNextCheck;
    cardsData = cardsDataCheck;
    
    // Re-renderizar botones y mostrar tarjetas
    renderPaginationButtons(numberPage, totalPagesCheck);
    showHideCards(numberPage);
    
    // Re-adjuntar event listeners a botones de navegación
    buttonNavigationPrev.onclick = () => {
      if(numberPage > 1) {
        numberPage--;
        sessionStorage.setItem('currentPage', numberPage);
        showHideCards(numberPage);
      }
    };
    
    buttonNavigationNext.onclick = () => {
      if(numberPage < totalPagesCheck) {
        numberPage++;
        sessionStorage.setItem('currentPage', numberPage);
        showHideCards(numberPage);
      }
    };
    
    // Scroll hasta la tarjeta seleccionada
    const selectedCard = cardsCheck[savedCardIdx];
    if (selectedCard) {
      selectedCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
});
