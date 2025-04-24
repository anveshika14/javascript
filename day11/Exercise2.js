//1.Iterate through the users array and get all the keys of the object using destructuring
const users = [
  { name: 'John', age: 25, country: 'USA' },
  { name: 'Jane', age: 30, country: 'Canada' },
  { name: 'Mike', age: 35, country: 'UK' },
  { name: 'Sara', age: 28, country: 'Australia' },
  { name: 'Tom', age: 40, country: 'Germany' }
];
users.forEach(user => {
  const { name, age, country } = user;
  console.log(`Name: ${name}, Age: ${age}, Country: ${country}`);
});

//2.Find the persons who have less than two skills
const usersWithSkills = [
  { name: 'John', skills: ['JavaScript', 'HTML'] },
  { name: 'Jane', skills: ['Python'] },
  { name: 'Mike', skills: ['Java', 'C++', 'C#'] },
  { name: 'Sara', skills: [] },
  { name: 'Tom', skills: ['PHP'] }
];
const usersWithLessThanTwoSkills = usersWithSkills.filter(user => user.skills.length < 2);
console.log(usersWithLessThanTwoSkills);

