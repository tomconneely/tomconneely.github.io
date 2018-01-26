var AUTHOR_TYPE = {
        AUTHOR: 'author',
        GHOSTWRITER: 'ghostwriter'   
    },
    BOOK_TYPE = {
        PHYSICAL: 'physical',
        EBOOK: 'ebook',
        AUDIOBOOK: 'audiobook'
    };

export function getAuthorType() {
    return AUTHOR_TYPE;
}

export function getBookType() {
    return BOOK_TYPE;
}