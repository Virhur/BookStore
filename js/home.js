function createArticle(item) {
    return `
    <div class='book-listing' data-category='${item.category}'>
        <div class="card">
            <a href="${item.url}" class='image-holder'>
                <img class="card-img-top" src="${item.image_small}" alt="${item.image_alt}">
            </a>
            <div class="card-body">
                <h5 class="card-title">
                    <a href="${item.url}">${item.title}</a>
                </h5>
                <p class="card-text">${item.author}</p>
                <p class="card-text">${item.price} RSD</p>
                <button href="#" class="btn btn-primary add-to-cart" data-id=${item.id}>Dodaj u korpu</button>
            </div>
        </div>
    </div>
    `;
}

function loadBooks(books) {
    html = "";

    books.forEach((item) => {
        html += createArticle(item);
    });

    document.getElementById('knjige').innerHTML = html;
}

function filterBooks(books, filter) {
    return books.filter((item) => {
        return item.category === filter;
    });
}

function filterBooksEvent(event) {
    let element = event.target;
    let filter = element.getAttribute('data-filter');

    let filtered_books;

    if (filter === "all") {
        filtered_books = books;
    } else {
        filtered_books = filterBooks(books, filter);
    }
    
    document.getElementById('knjige').innerHTML = "";
    loadBooks(filtered_books);

    removeActiveClassesFromFilterButtons();
    element.classList.add('active');
}

function removeActiveClassesFromFilterButtons() {
    let toggleFilterElements = document.getElementsByClassName('toggle-filter');

    Array.from(toggleFilterElements).forEach(element => {
        element.classList.remove('active');
    });
}

$(function () {
    loadBooks(books);

    let toggleFilterElements = document.getElementsByClassName('toggle-filter');

    Array.from(toggleFilterElements).forEach(element => {
        element.addEventListener('click', (event) => {
            filterBooksEvent(event);
        });
    });
});