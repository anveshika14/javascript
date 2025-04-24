//1.Destructure the countries object print name, capital, population and languages of all countries
const countries = [
  { name: 'Finland', capital: 'Helsinki', population: 5540720, languages: ['Finnish', 'Swedish'] },
  { name: 'Sweden', capital: 'Stockholm', population: 10327589, languages: ['Swedish'] },
  { name: 'Denmark', capital: 'Copenhagen', population: 5818553, languages: ['Danish'] },
  { name: 'Norway', capital: 'Oslo', population: 5421241, languages: ['Norwegian'] },
  { name: 'Iceland', capital: 'Reykjavik', population: 343599, languages: ['Icelandic'] },
  { name: 'Pakistan', capital: 'Islamabad', population: 225199937, languages: ['Urdu', 'English'] },
  { name: 'Afghanistan', capital: 'Kabul', population: 38928346, languages: ['Pashto', 'Dari'] },
  { name: 'Kazakhstan', capital: 'Nur-Sultan', population: 18776707, languages: ['Kazakh', 'Russian'] },
];

countries.forEach(country => {
  const { name, capital, population, languages } = country;
  console.log(`Name: ${name}, Capital: ${capital}, Population: ${population}, Languages: ${languages.join(', ')}`);
});

//2.A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['Asabeneh', ['HTML', 'CSS', 'JavaScript', 'React'], [95, 80, 85, 90]];
const [name, skills, scores] = student;
const [jsScore, reactScore] = scores;
console.log(`Name: ${name}, Skills: ${skills.join(', ')}, JavaScript Score: ${jsScore}, React Score: ${reactScore}`);

//3. Write a function called convertArrayToObject which can convert the array to a structure object.
const convertArrayToObject = (arr) => {
    const [name, skills, scores] = arr;
    const [jsScore, reactScore] = scores;
    return {
        name,
        skills,
        scores: {
        JavaScript: jsScore,
        React: reactScore
        }
    };
    }
const studentArray = ['Asabeneh', ['HTML', 'CSS', 'JavaScript', 'React'], [95, 80, 85, 90]];
const studentObject = convertArrayToObject(studentArray);
console.log(studentObject);

//4.Copy the student object to newStudent without mutating the original object. In the new object add the following ?
/*Add Bootstrap with level 8 to the front end skill sets

Add Express with level 9 to the back end skill sets
Add SQL with level 8 to the data base skill sets
Add SQL without level to the data science skill sets*/
const studentObject1 = {
    name: 'Asabeneh',
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 9 },
            { skill: 'JavaScript', level: 8 },
            { skill: 'React', level: 7 }
        ],
        backEnd: [
            { skill: 'Node', level: 8 },
            { skill: 'Express', level: 7 }
        ],
        dataBase: [
            { skill: 'MongoDB', level: 8 },
            { skill: 'SQL', level: 7 }
        ],
        dataScience: [
            { skill: 'Python', level: 8 },
            { skill: 'R', level: 7 }
        ]
    }
};
const newStudent = JSON.parse(JSON.stringify(studentObject1)); 
newStudent.skills.frontEnd.unshift({ skill: 'Bootstrap', level: 8 });
newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });
newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });
newStudent.skills.dataScience.push({ skill: 'SQL' });
console.log('Original Student Object:', studentObject1);
console.log('New Student Object:', newStudent);




