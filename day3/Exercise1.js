// 1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
 
    let firstName = "Anveshika";
    let lastName = "Shukla";
    let country = "India";
    let city = "Lucknow";
    let age = 23;
    let isMarried = false;
    let year = 2025;
    console.log(typeof firstName); 
    console.log(typeof lastName); 
    console.log(typeof country); 
    console.log(typeof city); 
    console.log(typeof age); 
    console.log(typeof isMarried); 
    console.log(typeof year); 

// 2. Check if type of '10' is equal to 10
    console.log(typeof '10' === typeof 10); 

// 3. Check if parseInt('9.8') is equal to 10
    console.log(parseInt('9.8') === 10);

// 4. Boolean value is either true or false.
// 5. Write three JavaScript statement which provide truthy value.
    let tv1= true; 
    let tv2= 1;
    let tv3= "Anveshika";

// 6. Write three JavaScript statement which provide falsy value.
    let fv1= false; 
    let fv2= 0;
    let fv3= null;

// 7. Figure out the result of the following comparison expression first without using console.log(). Then check the result with console.log()
// 8. 4 > 3 
        console.log(4 > 3); 

// 9. 4 >= 3
        console.log(4 >= 3);

// 10. 4 < 3
        console.log(4 < 3);

// 11. 4 <= 3
        console.log(4 <= 3);

// 12. 4 == 4
        console.log(4 == 4);

// 13. 4 === 4
        console.log(4 === 4);

// 14. 4 != 4
        console.log(4 != 4); 

// 15. 4 !== 4
        console.log(4 !== 4);

// 16. 4 != '4'
        console.log(4 != '4');

// 17. 4 == '4'
        console.log(4 == '4');

// 18. 4 === '4'
        console.log(4 === '4');

// 19. Find the length of python and jargon and make a falsy comparison statement.
    let p = "python";
    let j = "jargon";
    console.log(p.length !== j.length);

// 20. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
// 21. 4 > 3 && 10 < 12
        console.log(4 > 3 && 10 < 12);

// 22. 4 > 3 && 10 > 12
        console.log(4 > 3 && 10 > 12);

// 23. 4 > 3 || 10 < 12
        console.log(4 > 3 || 10 < 12); 

// 24. 4 > 3 || 10 > 12
        console.log(4 > 3 || 10 > 12);

// 25. !(4 > 3)
        console.log(!(4 > 3));

// 26. !(4 < 3)
        console.log(!(4 < 3));  

// 27. !(false)
        console.log(!(false));

// 28. !(4 > 3 && 10 < 12)
        console.log(!(4 > 3 && 10 < 12));

// 29. !(4 > 3 && 10 > 12)
        console.log(!(4 > 3 && 10 > 12));
    
// 30. !(4 === '4')
        console.log(!(4 === '4'));

// 31. There is no 'on' in both jargon and python
        console.log(!(p.includes("on") && j.includes("on")));

// 32. Use the Date object to do the following activities
// 33. What is the year today?
    let date = new Date();
    console.log(date.getFullYear());

// 34. What is the month today as a number?
    console.log(date.getMonth() + 1); 

// 35. What is the date today?
    console.log(date.getDate());

// 36. What is the day today as a number?
    console.log(date.getDay());

// 37. What is the hours now?
    console.log(date.getHours());

// 38. What is the minutes now?
    console.log(date.getMinutes());

// 39. Find out the numbers of seconds elapsed from January 1, 1970 to now.
    console.log(Math.floor((date.getTime() / 1000)));

