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
    }

    getFormattedPrice() {
        return this.price.toLocaleString();
    }

    getListingHTML() {
        return `
        <div class='book-listing' data-category='${this.category}'>
            <div class="card">
                <a href="${this.url}" class='image-holder'>
                    <img class="card-img-top" src="${this.image_small}" alt="${this.image_alt}">
                </a>
                <div class="card-body">
                    <h5 class="card-title">
                        <a href="${this.url}">${this.title}</a>
                    </h5>
                    <p class="card-text">${this.author}</p>
                    <p class="card-text">${this.getFormattedPrice()} RSD</p>
                    <button href="#" class="btn btn-primary add-to-cart" data-id=${this.id}>Dodaj u korpu</button>
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
}

class Books {
    constructor() {
        $.getJSON('/data/books.json', (data) => {
            this.data = [];

            data.forEach(item => {
                this.data.push(new Book(item));
            })

            this.loadBooks(this.data);
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