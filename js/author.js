var Author = (function(){
    function Author(firstName, lastName, type, website, goodreadsLink, amazonLink) {
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setType(type);
        this.setWebsite(website);
        this.setGoodreadsLink(goodreadsLink);
        this.setAmazonLink(amazonLink);
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

    Author.prototype.getType = function(){
        return this.type;
    }

    Author.prototype.setType = function(t){
        this.type = t;
    }

    Author.prototype.getWebsite = function(){
        return this.website;
    }

    Author.prototype.setWebsite = function(w){
        this.website = w;
    }

    Author.prototype.getGoodreadsLink = function(){
        return this.goodreadsLink;
    }

    Author.prototype.setGoodreadsLink = function(gl){
        this.goodreadsLink = gl;
    }

    Author.prototype.getAmazonLink = function(){
        return this.goodreadsLink;
    }

    Author.prototype.setAmazonLink = function(al){
        this.goodreadsLink = al;
    }

    return Author;
}());