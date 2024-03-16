const assert = require("assert");
const Phrase = require("../index.js");

describe("Phrase", () => {
    describe("#isPalindrome", () => {
        it("Should return false for a non-palindrome", () => {
            const nonPalindrome = new Phrase("Apple");
            assert(!nonPalindrome.isPalindrome());
        });

        it("Should return true for a plain palindrome", () => {
            const plainPalindrome = new Phrase("racecar");
            assert(plainPalindrome.isPalindrome());
        });

        it("Should return true for a mixed-case palindrome", () => {
            const mixedCasePalindrome = new Phrase("AbBAabba");
            assert(mixedCasePalindrome.isPalindrome());
        });

        it("Should return true for a palindrome with punctuation", () => {
            const complexPalindrome = new Phrase("A man, a plan, a canal—Panama!");
            assert(complexPalindrome.isPalindrome());
        });

        it("Should return true for a palindrome with punctuation and numbers", () => {
            const alphanumericPalindrome = new Phrase("3...2.1.A man, a plan, a canal—Panama1!2,3")
            assert(alphanumericPalindrome.isPalindrome());
        });

        it("Should return true for an empty string", () => {
            const emptyPhrase = new Phrase("");
            assert(emptyPhrase.isPalindrome());
        });

        it("Should return true for a string that does not contain any letters or numbers", () => {
            const punctuationPhrase = new Phrase(" ,. , .$* ^!@#$%^&*())_+~`|");
            assert(punctuationPhrase.isPalindrome());
        });
    });

    describe("#letters", () => {
        it("Should return letters only", () => {
            const punctatedPalindrome = new Phrase("Madam, I'm Adam.");
            assert.strictEqual(punctatedPalindrome.letters(), "MadamImAdam");
        });

        it("Should return letters and numbers", () => {
            const alphanumericPhrase = new Phrase("32,0, Madam, I'm Adam.0,2,3");
            assert.strictEqual(alphanumericPhrase.letters(), "320MadamImAdam023");
        });

        it("Should return an empty string when there are no letters or numbers", () => {
            const punctuationPhrase = new Phrase(" ,. , .$* ^!@#$%^&*())_+~`|");
            assert.strictEqual(punctuationPhrase.letters(), "");
        });
    });
});
