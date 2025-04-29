//1.Parse the txt JSON to object.
const txt = '{"name":"John","age":25,"isMarried":false,"skills":["HTML","CSS","JavaScript"]}';
const txtObject = JSON.parse(txt);
console.log(txtObject);