function BookBuilder() {
    var newBook, self = this;.

    function title(t) {
        newBook.title = t;
        return self;
    }

    function author(a) {
        newBook.author = a;
        return self;
    }

    function build() {
        return newBook;
    }
    
    this.build = build;
}

function QuoteBuilder() {
    var newQuote, self = this;

    function build() {
        return newQuote;
    }

    this.build = build;
}

function AuthorBuilder() {

}