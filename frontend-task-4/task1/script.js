function convertFahrToCelsius(fahr) {
  if (Array.isArray(fahr)) {
    return (`${JSON.stringify(fahr)} is not a valid number but an array`);
  } else if (isNaN(fahr) === true || fahr === '' || typeof fahr === 'object') {
    return (`${JSON.stringify(fahr)} is not a valid number but a/an ${typeof fahr}`);
  } else {
    let cel = ((fahr - 32) * 5 / 9).toFixed(4);
    return cel;
  }
}

console.log(convertFahrToCelsius(0));