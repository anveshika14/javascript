//1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
const regex = /(\d+)\s*euro/g; // Regular expression to match numbers followed by 'euro'
const matches = text.match(regex); // Find all matches in the text

const monthlySalary = parseInt(matches[0]); // Monthly salary
const annualBonus = parseInt(matches[1]); // Annual bonus
const monthlyCourses = parseInt(matches[2]); // Monthly online courses income
const annualCourses = monthlyCourses * 12; // Annual online courses income
const totalAnnualIncome = (monthlySalary * 12) + annualBonus + annualCourses; // Total annual income calculation
console.log(`Total annual income: ${totalAnnualIncome} euro`); // Output the result

//2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
const particlesText = '-12, -4, -3, -1, 0, 4, 8'; // Text containing particle positions
const particles = particlesText.split(',').map(Number); // Split the text and convert to numbers
const minParticle = Math.min(...particles); // Find the minimum particle position
const maxParticle = Math.max(...particles); // Find the maximum particle position
const distance = maxParticle - minParticle; // Calculate the distance between the two furthest particles
console.log(`Distance between the two furthest particles: ${distance}`); // Output the result

