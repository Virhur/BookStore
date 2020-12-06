$(function () {
    books.loadBooks(books.data);
    books.loadModals(books.data);

    let toggleFilterElements = document.getElementsByClassName('toggle-filter');

    Array.from(toggleFilterElements).forEach(element => {
        element.addEventListener('click', (event) => {
            books.filterBooksEvent(event);
        });
    });
});