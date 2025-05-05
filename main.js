document.addEventListener('DOMContentLoaded', function () {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const incompleteBookshelfList = document.getElementById('incompleteBookList');
    const completeBookshelfList = document.getElementById('completeBookList');    
    const inputBookForm = document.getElementById('bookForm');
    const inputBookTitle = document.getElementById('bookFormTitle');
    const inputBookAuthor = document.getElementById('bookFormAuthor');
    const inputBookYear = document.getElementById('bookFormYear');
    const inputBookIsComplete = document.getElementById('bookFormIsComplete');
    const searchBookForm = document.getElementById('searchBook');
    const searchBookTitle = document.getElementById('searchBookTitle');


    function renderBooks(searchQuery = '') {
        incompleteBookshelfList.innerHTML = '';
        completeBookshelfList.innerHTML = '';
      
        books
          .filter(book => book.title.toLowerCase().includes(searchQuery)) 
          .forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.setAttribute('data-bookid', book.id);
            bookElement.setAttribute('data-testid', 'bookItem');
            bookElement.innerHTML = `
              <h3 data-testid="bookItemTitle">${book.title}</h3>
              <p data-testid="bookItemAuthor">Penulis: ${book.author}</p>
              <p data-testid="bookItemYear">Tahun: ${book.year}</p>
              <div>
                <button data-testid="bookItemIsCompleteButton">${book.isComplete ? 'Belum Selesai Dibaca' : 'Selesai Dibaca'}</button>
                <button data-testid="bookItemDeleteButton">Hapus</button>
                <button data-testid="bookItemEditButton">Edit</button>
              </div>
              `;
      
            const isCompleteButton = bookElement.querySelector('[data-testid="bookItemIsCompleteButton"]');
            const deleteButton = bookElement.querySelector('[data-testid="bookItemDeleteButton"]');
            const editButton = bookElement.querySelector('[data-testid="bookItemEditButton"]');
      
            isCompleteButton.addEventListener('click', function () {
              book.isComplete = !book.isComplete;
              localStorage.setItem('books', JSON.stringify(books));
              renderBooks();
            });
      
            deleteButton.addEventListener('click', function () {
              const index = books.findIndex(b => b.id === book.id);
              books.splice(index, 1);
              localStorage.setItem('books', JSON.stringify(books));
              renderBooks();
            });
      
            editButton.addEventListener('click', function () {
              const newTitle = prompt('Masukkan judul baru:', book.title);
              const newAuthor = prompt('Masukkan penulis baru:', book.author);
              const newYear = prompt('Masukkan tahun baru:', book.year);
      
              if (newTitle && newAuthor && newYear) {
                book.title = newTitle;
                book.author = newAuthor;
                book.year = newYear;
                localStorage.setItem('books', JSON.stringify(books));
                renderBooks();
              }
            });
      
            if (book.isComplete) {
              completeBookshelfList.appendChild(bookElement);
            } else {
              incompleteBookshelfList.appendChild(bookElement);
            }
          });
      }

    searchBookForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const searchQuery = searchBookTitle.value.toLowerCase();
         renderBooks(searchQuery);
    });
      
  
    inputBookForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const newBook = {
        id: +new Date(),
        title: inputBookTitle.value,
        author: inputBookAuthor.value,
        year: parseInt(inputBookYear.value),
        isComplete: inputBookIsComplete.checked
      };
      books.push(newBook);
      localStorage.setItem('books', JSON.stringify(books));
      renderBooks();
      inputBookForm.reset();
    });
  
    renderBooks();
  });