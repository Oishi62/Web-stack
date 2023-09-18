
document.addEventListener("DOMContentLoaded", function () {
    
    const fetchBooksButton = document.getElementById("fetchBooks");
    const bookListDiv = document.getElementById("bookList");

    fetchBooksButton.addEventListener("click", function () {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "books.json", true);
        xhr.onload = function () {
                const booksData = JSON.parse(xhr.responseText);
                displayBooks(booksData);
                
        };
        xhr.send();
    });

    function displayBooks(books) {
        bookListDiv.innerHTML = "";
        for (const book of books) {
            const bookItem = document.createElement("div");
            bookItem.className = "book";
            bookItem.textContent = `${book.title} by ${book.author}`;
            bookListDiv.appendChild(bookItem);
        }
    }
});
