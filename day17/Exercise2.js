//1.Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student = {
    firstName: "Anveshika",
    lastName: "Shukla",
    age: 23,
    skills: ["HTML", "CSS", "JavaScript"],
    country: "India",
    enrolled: true
};

localStorage.setItem("student", JSON.stringify(student));
