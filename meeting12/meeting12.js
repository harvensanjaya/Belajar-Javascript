function rectangle() {
  let length = prompt("Enter the length of the rectangle in cm: ");
  let width = prompt("Enter the width of the rectangle in cm: ");

  if(isNaN(length) || isNaN(width)){
    let area = length * width;
    let perimeter = 2 * (length + width);

    console.log(`Rectangle Area: ${area} cm^2`);
    console.log(`Rectangle Perimeter: ${perimeter} cm`);
  } else {
    alert('Please enter a valid numbers for length and width');
  }
}

function square() {
  let side = prompt("Enter the side length of the square in cm: ");

  if (isNaN(side) {
    let area = side * side;
    let perimeter = 4 * side;

    console.log(`Square Area: ${area} cm^2`);
    console.log(`Square Perimeter: ${perimeter} cm`);
  } else {
    alert('Please enter a valid numbers for length and width');
  }
}