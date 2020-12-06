class Book {
    constructor (item) {
        this.id = item.id;
        this.url = item.url;
        this.category = item.category;
        this.image_small = item.image_small;
        this.image_large = item.image_large;
        this.image_alt = item.image_alt;
        this.title = item.title;
        this.author = item.author;
        this.price = item.price;
        this.description = item.description;
    }

    getFormattedPrice() {
        return this.price.toLocaleString();
    }

    getListingHTML() {
        return `
        <div class='book-listing' data-category='${this.category}'>
            <div class="card">
                <a href="#" class='image-holder toggle-book-modal' data-id='#book-modal-${this.id}'>
                    <img class="card-img-top" src="${this.image_small}" alt="${this.image_alt}" data-id='#book-modal-${this.id}'>
                </a>
                <div class='card-body'>
                    <h5 class="text-center">
                        <a href="#" class='toggle-book-modal' data-id='#book-modal-${this.id}'>${this.title}</a>
                    </h5>
                    <p class="author text-center">${this.author}</p>
                    <p class="text-center">${this.getFormattedPrice()} RSD</p>
                    <div class='col-12 d-flex justify-content-center'>
                        <button href="#" class="btn btn-primary add-to-cart" data-id=${this.id}>Dodaj u korpu</button>
                    </div>
                </div>
            </div>
        </div>
        `;
    }

    getCartHTML(count) {
        return `
        <li class="list-group-item d-flex justify-content-between">
            <span>
                ${this.title} <br>
                ${this.getFormattedPrice()} RSD
            </span>
            <span>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <button class="input-group-text decrement-cart-item" data-id='${this.id}'>-</button>
                    </div>
                    <input type="text" class="form-control" style="width: 45px" value="${count}" readonly>
                    <div class="input-group-append">
                        <button class="input-group-text increment-cart-item" data-id='${this.id}'>+</button>
                        <button class="btn btn-danger remove-from-cart" data-id='${this.id}'>
                            <i class="fa fa-times" aria-hidden="true" data-id='${this.id}'></i>
                        </button>
                    </div>
                </div>
            </span>
        </li>
        `;
    }

    getModalHTML() {
        return `
        <div class="book-modal d-none" id="book-modal-${this.id}">
            <div class="container bg-white book-modal-content">
                <div class="row">
                    <div class="col-6">
                        <h1>${this.title}</h1>
                    </div>
                    <div class="col-6 d-flex justify-content-end">
                        <button class="btn btn-lg btn-dager close-book-modal">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
                <div class="row mt-2 flex-nowrap">
                    <div class="book-modal-image-holder d-none d-lg-block">
                        <img src="${this.image_large}" alt="${this.image_alt}">
                    </div>
                    <div class='book-modal-text-holder'>
                        <h3>Opis knjige:</h3>
                        <p class="text-justify mt-2">
                            ${this.description}
                        </p>
                        <div class="row justify-content-between mt-2">
                            <div class='book-modal-text-holder'>
                                <h4>Cena: ${this.getFormattedPrice()} RSD</h4>
                            </div>
                            <div class='book-modal-text-holder'>
                                <button href="#" class="btn btn-primary add-to-cart" data-id='${this.id}'>Dodaj u korpu</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}
class Books {
    constructor() {
        $.getJSON('data/books.json', (data) => {
            this.data = [];

            data.forEach(item => {
                this.data.push(new Book(item));
            })

            this.loadBooks(this.data);
            this.loadModals(this.data);
        });
    }

    getBookById(id) {
        const count = this.data.length;

        for (let i = 0; i < count; i++) {
            if (this.data[i].id == id)
                return this.data[i];
        }

        return null;
    }

    loadBooks(data) {
        let html = "";

        data.forEach((item) => {
            html += item.getListingHTML();
        });

        document.getElementById('knjige').innerHTML = html;
    }

    loadModals(data) {
        let html = "";

        data.forEach((item) => {
            html += item.getModalHTML();
        });

        document.getElementById('modals').innerHTML = html;
    }

    filterBooks(filter) {
        return this.data.filter((item) => {
            return item.category === filter;
        });
    }

    filterBooksEvent(event) {
        let element = event.target;
        let filter = element.getAttribute('data-filter');
    
        let filtered_books;
    
        if (filter === "all") {
            filtered_books = this.data;
        } else {
            filtered_books = this.filterBooks(filter);
        }
        
        document.getElementById('knjige').innerHTML = "";
        this.loadBooks(filtered_books);
    
        this.removeActiveClassesFromFilterButtons();
        element.classList.add('active');
    }

    removeActiveClassesFromFilterButtons() {
        let toggleFilterElements = document.getElementsByClassName('toggle-filter');
    
        Array.from(toggleFilterElements).forEach(element => {
            element.classList.remove('active');
        });
    }
}

let books = new Books();

$(function () {
    let toggleFilterElements = document.getElementsByClassName('toggle-filter');

    Array.from(toggleFilterElements).forEach(element => {
        element.addEventListener('click', (event) => {
            books.filterBooksEvent(event);
        });
    });
});