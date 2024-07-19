// index.js
const fetchBooks = () => {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
      renderBooks(data);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
};

const renderBooks = (books) => {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.textContent = book.name;
    main.appendChild(h2);
  });
};

// To ensure the functions are available globally for the tests
window.fetchBooks = fetchBooks;
window.renderBooks = renderBooks;
