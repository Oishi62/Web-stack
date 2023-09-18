document.addEventListener("DOMContentLoaded", function () {
    // Get references to the button and book list elements
    const fetchBooksButton = document.getElementById("fetchBooks");
    const bookList = document.getElementById("bookList");

    // Add a click event listener to the "Fetch Books" button
    fetchBooksButton.addEventListener("click", function () {
        const apiUrl = "https://books-api-rz6d.onrender.com/books"; // API URL with your API key

        // Perform an AJAX request to fetch the JSON data
        const xhr = new XMLHttpRequest();
        xhr.open("GET", apiUrl, true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                try {
                    const booksData = JSON.parse(xhr.responseText);
                    displayBooks(booksData);
                } catch (error) {
                    console.error("Error parsing JSON data:", error);
                }
            } else {
                console.error("Error fetching data. Status code:", xhr.status);
            }
        };

        xhr.onerror = function () {
            console.error("Network error occurred");
        };

        xhr.send();
    });

    // Function to display the list of books
    function displayBooks(booksData) {
        // Clear the existing content in the book list
        bookList.innerHTML = "";

        // Create an unordered list to hold the book titles
        const ul = document.createElement("ul");

        // Iterate through the books and create list items for each book title
        booksData.forEach(function (book) {
            const li = document.createElement("li");
            li.textContent = book.title;
            ul.appendChild(li);
        });

        // Append the list to the book list div
        bookList.appendChild(ul);
    }
});