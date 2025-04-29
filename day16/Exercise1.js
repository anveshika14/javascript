//1.Change skills array to JSON using JSON.stringify()
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];
const skillsJSON = JSON.stringify(skills);
console.log(skillsJSON); 

//2.Stringify the age variable
const age = 25;
const ageJSON = JSON.stringify(age);
console.log(ageJSON);

//3.Stringify the isMarried variable
const isMarried = false;
const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarriedJSON);

//4.Stringify the student object
const student = {
    name: 'John',
    age: 25,
    isMarried: false,
    skills: ['HTML', 'CSS', 'JavaScript']
};
const studentJSON = JSON.stringify(student);
console.log(studentJSON);
