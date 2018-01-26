'use strict';
import {
    getBookType
} from 'config.js';

var AUTHOR_TYPE = {
        AUTHOR: 'author',
        GHOSTWRITER: 'ghostwriter'
    },
    BOOK_TYPE = {
        PHYSICAL: 'physical',
        EBOOK: 'ebook',
        AUDIOBOOK: 'audiobook'
    };

var Book = (function () {
    /**
     * ES5 class example setup for a Book
     * @param {String} isbn - ISBN identification for book
     * @param {String} title - Title of the book
     * @param {Array} authors - Author(s)
     * @param {Array} quotes - Any quotes worth sharing
     * @param {String} bookType - Type of book using BOOK_TYPE
     * @param {Array} genres - Array of genres the book can be categorized in
     */
    function Book(isbn, title, authors, quotes, bookType, genres) {
        this.setIsbn(isbn);
        this.setTitle(title);
        this.setAuthors(authors);
        this.setQuotes(quotes);
        this.setBookType(bookType);
        this.setGenres(genres);
    }

    Book.prototype.getIsbn = function () {
        return this.isbn;
    }

    Book.prototype.setIsbn = function (i) {
        this.isbn = i;
    };

    Book.prototype.getTitle = function () {
        return this.title;
    }

    Book.prototype.setTitle = function (t) {
        this.title = t;
    }

    Book.prototype.getAuthor = function () {
        return this.author;
    }

    Book.prototype.setAuthor = function (a) {
        var temp;
        if (Array.isArray(a)) {
            this.authors = a;
            this.authors.forEach(function (aut) {
                if (aut.type === AUTHOR_TYPE.AUTHOR) {
                    this.author = aut;
                }
            });
        } else {
            this.author = a;
            this.authors = [];
        }
        this.title = t;
    }

    Book.prototype.getQuotes = function () {
        return this.quotes;
    }

    Book.prototype.setQuotes = function (q) {
        this.quotes = q;
    }

    Book.prototype.setBookType = function () {
        return this.bookType;
    }

    Book.prototype.setBookType = function (bt) {
        this.bookType = bt;
    }

    Book.prototype.getGenres = function () {
        return this.genres;
    }

    Book.prototype.setGenres = function (g) {
        this.genres = g;
    }

    return Book;
}());



/**
 * 
 */
class BookES6 {
    /**
     * 
     * @param {*} isbn - ISBN
     * @param {*} title - Book title
     * @param {*} author - Author array
     * @param {*} quotes - Quotes array
     */
    constructor(isbn, title, author, quotes) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.quotes = quotes;
    }

    /**
     * 
     */
    get title() {
        return this.title;
    }

    /**
     * 
     */
    get quotes() {
        return this.quotes;
    }



}