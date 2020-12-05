class Cart {
    constructor () {
        this.cart = JSON.parse(localStorage.getItem('cart'));

        if (this.cart === null)
            this.cart = [];

        this.loadCart();
    }

    setToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.loadCart();
    }

    getTotalCount() {
        let count = 0;

        this.cart.forEach(item => {
            count += item.count;
        });

        return count;
    }

    loadCart() {
        if (this.cart.length !== 0) {
            $('#korpa-empty').addClass('d-none');

            let html = '';

            this.cart.forEach(item => {
                let book = getBookById(item.id);
                html += this.createCartItem(book, item.count);
            })

            $('#korpa-items').html(html);
        } else {
            $('#korpa-empty').removeClass('d-none');
            $('#korpa-items').html('');
        }

        let count = this.getTotalCount();
        $('#total-count').html(`(${count})`);
    }

    createCartItem(book, count) {
        return `
        <li class="list-group-item d-flex justify-content-between">
            <span>${book.title}</span>
            <span>
                <div class="input-group">
                    <div class="input-group-prepend">
                        <button class="input-group-text decrement-cart-item" data-id='${book.id}'>-</button>
                    </div>
                    <input type="text" class="form-control" style="width: 45px" value="${count}" readonly>
                    <div class="input-group-append">
                        <button class="input-group-text increment-cart-item" data-id='${book.id}'>+</button>
                        <button class="btn btn-danger remove-from-cart" data-id='${book.id}'>
                            <i class="fa fa-times" aria-hidden="true" data-id='${book.id}'></i>
                        </button>
                    </div>
                </div>
            </span>
        </li>
        `;
    }

    addToCart(id) {
        if (this.getById(id) === null) {
            this.cart.push({
                id: id,
                count: 1
            });
            this.setToLocalStorage();
            this.showNotification();
        } else {
            let confirmed = confirm("Izabrani artikal je već u korpi. Da li želite da povećate količinu?");

            if (confirmed) {
                this.incrementCartItem(id);
                this.showNotification();
            }
        }
    }

    showNotification() {
        new Noty({
            text: 'Artikal dodat u korpu.',
        }).show();
    }

    incrementCartItem(id) {
        this.cart.forEach(item => {
            if (item.id == id) {
                item.count++;
            }
        })
        this.setToLocalStorage();
    }

    decrementCartItem(id) {
        this.cart.forEach((item, index) => {
            if (item.id == id) {
                item.count--;

                if (item.count === 0) {
                    this.cart.splice(index, 1);
                }
            }
        })
        this.setToLocalStorage();
    }

    removeCartItem(id) {
        this.cart.forEach((item, index) => {
            if (item.id == id) {
                this.cart.splice(index, 1);
            }
        })
        this.setToLocalStorage();
    }

    getById(id) {
        let count = this.cart.length; 

        for (let i = 0; i < count; i++) {
            if (this.cart[i].id === id)
                return this.cart[i];
        }
        
        return null;
    }
}

$(function () {
    let cart = new Cart();

    $(document).on('click', '.add-to-cart', (event) => {
        let element = $(event.target);
        let id = element.data('id');

        cart.addToCart(id);
    });

    $(document).on('click','.increment-cart-item', (event) => {
        event.stopPropagation();
        let element = $(event.target);
        let id = element.data('id');

        cart.incrementCartItem(id);
    });

    $(document).on('click','.decrement-cart-item', (event) => {
        event.stopPropagation();
        let element = $(event.target);
        let id = element.data('id');

        cart.decrementCartItem(id);
    });

    $(document).on('click','.remove-from-cart', (event) => {
        event.stopPropagation();
        let element = $(event.target);
        let id = element.data('id');

        cart.removeCartItem(id);
    });
})