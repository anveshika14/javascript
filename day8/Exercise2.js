//1. Find the person who has many skills in the users object.
const users = {
    Alex: {
        name: "Alex",
        age: 20,
        skills: ["HTML", "CSS", "JavaScript"],
        country: "USA",
        city: "New York",
        isMarried: false
    },
    Asab: {
        name: "Asab",
        age: 25,
        skills: ["HTML", "CSS", "JavaScript", "React", "Node"],
        country: "Finland",
        city: "Helsinki",
        isMarried: true
    },
    John: {
        name: "John",
        age: 30,
        skills: ["HTML", "CSS"],
        country: "USA",
        city: "New York",
        isMarried: false
    }
};

let mostSkilledUser = Object.keys(users).reduce((prev, curr) => {
    return users[curr].skills.length > users[prev].skills.length ? curr : prev;
}, Object.keys(users)[0]);
console.log(`The person with the most skills is: ${mostSkilledUser}`);

//2. Count logged in users, count users having greater than equal to 50 points from the following object.
const usersWithPoints = {
    Alex: {
        name: "Alex",
        age: 20,
        points: 30,
        country: "USA",
        city: "New York",
        isMarried: false
    },
    Asab: {
        name: "Asab",
        age: 25,
        points: 50,
        country: "Finland",
        city: "Helsinki",
        isMarried: true
    },
    John: {
        name: "John",
        age: 30,
        points: 70,
        country: "USA",
        city: "New York",
        isMarried: false
    }
};

let loggedInUsersCount = Object.keys(usersWithPoints).length;
let usersWithHighPointsCount = Object.values(usersWithPoints).filter(user => user.points >= 50).length;
console.log(`Logged in users count: ${loggedInUsersCount}`);
console.log(`Users with 50 or more points: ${usersWithHighPointsCount}`);

// Find people who are MERN stack developer from the users object
const usersWithSkills = {
    Alex: {
        name: "Alex",
        age: 20,
        skills: ["HTML", "CSS", "JavaScript"],
        country: "USA",
        city: "New York",
        isMarried: false
    },
    Asab: {
        name: "Asab",
        age: 25,
        skills: ["HTML", "CSS", "JavaScript", "React", "Node"],
        country: "Finland",
        city: "Helsinki",
        isMarried: true
    },
    John: {
        name: "John",
        age: 30,
        skills: ["HTML", "CSS", "JavaScript", "React", "Node"],
        country: "USA",
        city: "New York",
        isMarried: false
    }
};

let mernStackDevelopers = Object.keys(usersWithSkills).filter(user => {
    return usersWithSkills[user].skills.includes("MongoDB") && usersWithSkills[user].skills.includes("Express") && usersWithSkills[user].skills.includes("React") && usersWithSkills[user].skills.includes("Node");
});
console.log(`MERN stack developers: ${mernStackDevelopers.join(", ")}`);

//4. Set your name in the users object without modifying the original users object
const newUser = {
    name: "Anveshika",
    age: 24,
    skills: ["HTML", "CSS", "JavaScript"],
    country: "India",
    city: "Lucknow",
    isMarried: false
};
const updatedUsers = { ...users, [newUser.name]: newUser };
console.log(updatedUsers);

//5. Get all keys or properties of users object 
const userKeys = Object.keys(users);
console.log(`User keys: ${userKeys.join(", ")}`);

//6. Get all the values of users object
const userValues = Object.values(users).map(user => Object.values(user)).flat();
console.log(`User values: ${userValues.join(", ")}`);

//7. Use the countries object to print a country name, capital, populations and languages.
const countries = {
    Finland: {
        capital: "Helsinki",
        population: 5540720,
        languages: ["Finnish", "Swedish"]
    },
    Sweden: {
        capital: "Stockholm",
        population: 10327589,
        languages: ["Swedish"]
    },
    Norway: {
        capital: "Oslo",
        population: 5421241,
        languages: ["Norwegian"]
    }
};

for (const country in countries) {
    const { capital, population, languages } = countries[country];
    console.log(`Country: ${country}, Capital: ${capital}, Population: ${population}, Languages: ${languages.join(", ")}`);
}
