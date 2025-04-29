//1.Parse the txt JSON to object.
const txt = '{"name":"John","age":25,"isMarried":false,"skills":["HTML","CSS","JavaScript"]}';
const txtObject = JSON.parse(txt);
console.log(txtObject);

//2.Find the user who has many skills from the variable stored in txt.
const users = [
    { name: 'John', age: 25, isMarried: false, skills: ['HTML', 'CSS', 'JavaScript'] },
    { name: 'Jane', age: 22, isMarried: true, skills: ['JavaScript', 'React'] },
    { name: 'Mike', age: 30, isMarried: false, skills: ['Node.js', 'Express'] }
];
const userWithManySkills = users.reduce((prev, curr) => {
    return (curr.skills.length > prev.skills.length) ? curr : prev;
}, users[0]);
console.log(userWithManySkills);
