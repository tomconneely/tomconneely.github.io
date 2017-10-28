var ReadingListViewModel = function() {
    var self = this;

    this.books = ko.observableArray(["Book 1", "Book 2"]);
};

ko.applyBindings(new ReadingListViewModel());