String.prototype.reverse = function reverse() {
    return Array.from(this).reverse().join("");
}

function Phrase(content) {
    this.content = content

    this.processContent = function processContent(){
        return this.content.toLowerCase();
    }

    this.isPalindrome = function isPalindrome(){
        const processedString = this.processContent();
        return processedString === processedString.reverse();
    }

    this.louder = function() {
        return this.content.toUpperCase();
    }
}

function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    this.processContent = function processContent() {
        return this.translation.toLowerCase();
    }
}

TranslatedPhrase.prototype = new Phrase();
