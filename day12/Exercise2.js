//1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
const text = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the actual content is available.';
const tenMostFrequentWords = (text) => {
    const words = text.toLowerCase().match(/\b\w+\b/g); // Extract words and convert to lowercase
    const wordCount = {}; // Object to store word counts
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1; // Count occurrences of each word
    });
    const sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]); // Sort words by frequency
    return sortedWords.slice(0, 10).map(entry => entry[0]); // Return the ten most frequent words
};
console.log(tenMostFrequentWords(text)); // Output the result
