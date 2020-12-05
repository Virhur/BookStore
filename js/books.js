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
        url: 'books/1.html',
        category : 'fantasy',
        image_small : 'images/1/nesto.png',
        image_large : 'images/1/nesto_lg.png',
        image_alt : 'alt',
        title: 'Title',
        author: 'Some author',
        price: 599
    },
    {
        id : 5,
        url: 'books/1.html',
        category : 'fantasy',
        image_small : 'images/1/nesto.png',
        image_large : 'images/1/nesto_lg.png',
        image_alt : 'alt',
        title: 'Title',
        author: 'Some author',
        price: 599
    },
    {
        id : 6,
        url: 'books/1.html',
        category : 'fantasy',
        image_small : 'images/1/nesto.png',
        image_large : 'images/1/nesto_lg.png',
        image_alt : 'alt',
        title: 'Title',
        author: 'Some author',
        price: 599
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
]

function getBookById(id) {
    let count = books.length;

    for (let i = 0; i < count; i++) {
        if (books[i].id === id)
            return books[i];
    }

    return null;
}