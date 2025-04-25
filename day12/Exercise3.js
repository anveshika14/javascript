//1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
const text = 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the actual content is available.';
const cleanText = (text) => {
    return text.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase(); // Remove punctuation and convert to lowercase
};
const cleanedText = cleanText(text); // Clean the text
const words = cleanedText.split(/\s+/); // Split the cleaned text into words
const wordCount = {}; // Object to store word counts
words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1; // Count occurrences of each word
});
const sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]); // Sort words by frequency
const mostFrequentWords = sortedWords.slice(0, 3).map(entry => entry[0]); // Get the three most frequent words
console.log(mostFrequentWords); // Output the result

//2.  Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.
const findMostFrequentWords = (text) => {
    const cleanedText = cleanText(text); // Clean the text
    const words = cleanedText.split(/\s+/); // Split the cleaned text into words
    const wordCount = {}; // Object to store word counts
    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1; // Count occurrences of each word
    });
    const sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]); // Sort words by frequency
    return sortedWords.slice(0, 3).map(entry => entry[0]); // Get the three most frequent words
}
console.log(findMostFrequentWords(text)); // Output the result

