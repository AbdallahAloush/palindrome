module.exports = Phrase;

//! Add reversing a string as a functionality to String objects
String.prototype.reverse = function reverse() {
    return Array.from(this).reverse().join("");
}

function Phrase(content) {
    this.content = content

    this.letters = function letters(){
        return (this.content.match(/[a-z0-9]/gi) || []).join("");
    }

    this.processContent = function processContent(){
        return this.letters().toLowerCase();
    }

    this.isPalindrome = function isPalindrome(){
        const processedString = this.processContent();
        return processedString === processedString.reverse();
    }
}
