const books = [
    {
        id : 1,
        url: 'books/1.html',
        category : 'philosophy',
        image_small : 'images/1/nesto.png',
        image_large : 'images/1/nesto_lg.png',
        image_alt : 'alt',
        title: 'Title',
        author: 'Some author',
        price: 599
    },
    {
        id : 2,
        url: 'books/1.html',
        category : 'philosophy',
        image_small : 'images/1/nesto.png',
        image_large : 'images/1/nesto_lg.png',
        image_alt : 'alt',
        title: 'Title',
        author: 'Some author',
        price: 599
    },
    {
        id : 3,
        url: 'books/1.html',
        category : 'philosophy',
        image_small : 'images/1/nesto.png',
        image_large : 'images/1/nesto_lg.png',
        image_alt : 'alt',
        title: 'Title',
        author: 'Some author',
        price: 599
    },
    {
        id : 4,
        url: 'https://www.delfi.rs/knjige/165083_mracna_suma_knjiga_delfi_knjizare.html',
        category : 'fantasy',
        image_small : 'images/mracna_suma_v.jpg',
        image_large : 'images/mracna_suma_vv.jpg',
        image_alt : 'mracna_suma',
        title: 'Mračna Šuma',
        author: 'Liju Cisin',
        price: 1399
    },
    {
        id : 5,
        url: 'https://www.delfi.rs/knjige/161773_zmajeve_oci_knjiga_delfi_knjizare.html',
        category : 'fantasy',
        image_small : 'images/zmajeve_oci_v.jpg',
        image_large : 'images/zmajeve_oci_vv.jpg',
        image_alt : 'zmajeve_oci',
        title: 'Zmajeve oči',
        author: 'Stiven King',
        price: 1490
    },
    {
        id : 6,
        url: 'https://www.delfi.rs/knjige/161515_drakulin_gost_knjiga_delfi_knjizare.html',
        category : 'fantasy',
        image_small : 'images/drakulin_gost_v.jpg',
        image_large : 'images/drakulin_gost_vv.jpg',
        image_alt : 'drakulin_gost',
        title: 'Drakulin gost',
        author: 'Brem Stoker',
        price: 1210
    },
    {
        id : 7,
        url: 'books/1.html',
        category : 'history',
        image_small : 'images/1/nesto.png',
        image_large : 'images/1/nesto_lg.png',
        image_alt : 'alt',
        title: 'Title',
        author: 'Some author',
        price: 599
    },
    {
        id : 8,
        url: 'books/1.html',
        category : 'history',
        image_small : 'images/1/nesto.png',
        image_large : 'images/1/nesto_lg.png',
        image_alt : 'alt',
        title: 'Title',
        author: 'Some author',
        price: 599
    },
    {
        id : 9,
        url: 'books/1.html',
        category : 'history',
        image_small : 'images/1/nesto.png',
        image_large : 'images/1/nesto_lg.png',
        image_alt : 'alt',
        title: 'Title',
        author: 'Some author',
        price: 599
    },
    {
        id : 10,
        url: 'books/1.html',
        category : 'foreign_books',
        image_small : 'images/1/nesto.png',
        image_large : 'images/1/nesto_lg.png',
        image_alt : 'alt',
        title: 'Title',
        author: 'Some author',
        price: 599
    },
    {
        id : 11,
        url: 'books/1.html',
        category : 'foreign_books',
        image_small : 'images/1/nesto.png',
        image_large : 'images/1/nesto_lg.png',
        image_alt : 'alt',
        title: 'Title',
        author: 'Some author',
        price: 599
    },
    {
        id : 12,
        url: 'books/1.html',
        category : 'foreign_books',
        image_small : 'images/1/nesto.png',
        image_large : 'images/1/nesto_lg.png',
        image_alt : 'alt',
        title: 'Title',
        author: 'Some author',
        price: 599
    },
    {
        id : 13,
        url: 'books/1.html',
        category : 'foreign_books',
        image_small : 'images/1/nesto.png',
        image_large : 'images/1/nesto_lg.png',
        image_alt : 'alt',
        title: 'Title',
        author: 'Some author',
        price: 599
    },
    {
        id : 14,
        url: 'books/1.html',
        category : 'history',
        image_small : 'images/1/nesto.png',
        image_large : 'images/1/nesto_lg.png',
        image_alt : 'alt',
        title: 'Title',
        author: 'Some author',
        price: 599
    },
    {
        id : 15,
        url: 'books/1.html',
        category : 'philosophy',
        image_small : 'images/1/nesto.png',
        image_large : 'images/1/nesto_lg.png',
        image_alt : 'alt',
        title: 'Title',
        author: 'Some author',
        price: 599
    },
]

function getBookById(id) {
    let count = books.length;

    for (let i = 0; i < count; i++) {
        if (books[i].id === id)
            return books[i];
    }

    return null;
}