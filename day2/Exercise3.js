// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
      let str = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'   
      let count = str.match(/love/gi).length;
      console.log(count);

// 2. Use match() method to count the number of all vowels in the sentence 'You cannot end a sentence with because because because is a conjunction'
      let str2 = 'You cannot end a sentence with because because because is a conjunction'
      let vowels = str2.match(/[aeiou]/gi).length;
      console.log(vowels);

// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//not done
// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
      let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
      let salary = text.match(/\d+/g).map(Number);
      let totalIncome = salary.reduce((acc, curr) => acc + curr, 0);
      console.log(totalIncome);
      
        


