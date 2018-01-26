var Author = (function(){
    function Author(firstName, lastName, type, website, goodreadsLink, amazonLink) {
        this.setFirstName(firstName);
        this.setLastName(lastName);
    }

    Author.prototype.getFirstName = function(){
        return this.firstName;
    }

    Author.prototype.setFirstName = function(fn){
        this.firstName = fn;
    }

    Author.prototype.getLastName = function(){
        return this.lastName;
    }

    Author.prototype.setLastName = function(ln){
        this.lastName = ln;
    }

    return Author;
}());



