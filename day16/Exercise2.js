//1.Stringify the students object with only firstName, lastName and skills properties
const students = [
    { firstName: 'John', lastName: 'Doe', age: 25, skills: ['HTML', 'CSS'] },    
    { firstName: 'Jane', lastName: 'Smith', age: 22, skills: ['JavaScript', 'React'] },
    { firstName: 'Mike', lastName: 'Johnson', age: 30, skills: ['Node.js', 'Express'] }
];
const studentsJSON = JSON.stringify(students, ['firstName', 'lastName', 'skills']);
console.log(studentsJSON);
