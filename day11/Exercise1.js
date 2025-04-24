//1.Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.718, 3.14, 9.81, 37, 100];
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

//2.Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

//3.Destructure the rectangle object by its properties or keys.
const rectangle = {
  width: 20,
  height: 10,
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  }
};
const { width, height, area, perimeter } = rectangle;
console.log(width, height, area(), perimeter());


