var BookBuilder = (function(){
    function BookBuilder() {
      var self = this;
      this.newBook = {};
      
      //function title(t) {
      //  this.newBook.title = t;
      //  return self;
      //}
      
      function build() {
        return this.newBook;
      }
      
      //this.title = title;
      this.build = build;
    }
    
    BookBuilder.prototype.title = function (t) {
      this.newBook.title = t;
      return this;
    }
    
    return BookBuilder;
  }());

function QuoteBuilder() {
    var newQuote, self = this;

    function build() {
        return newQuote;
    }

    this.build = build;
}

function AuthorBuilder() {

}