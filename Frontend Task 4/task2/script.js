function checkYuGiOh(n) {
    if (isNaN(n) === true) {
        return  `invalid parameter: ${n}` 
      }
    let arr = [];
    for (var i = 1; i <= n; i++) {
      arr.push(i)
      if (i % 2 === 0) {
        arr.splice(arr.indexOf(i),1,'yu')
      }
      
      if (i % 3 === 0) {
        arr.splice(arr.indexOf(i),1,'gi')
      }
      
      if (i % 5 === 0) {
        arr.splice(arr.indexOf(i),1,'oh')
      }
      
      if (i % 2 === 0 && i % 3 === 0) {
        arr.splice(arr.indexOf(i),1,'yu-gi')
      }
      
      if (i % 2 === 0 && i % 5 === 0) {
        arr.splice(arr.indexOf(i),1,'yu-oh')
      }
      
      if (i % 5 === 0 && i % 3 === 0) {
        arr.splice(arr.indexOf(i),1,'gi-oh')
      }
      
      if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
        arr.splice(arr.indexOf(i),1,'yu-gi-oh')
      }
    }
    return arr;
  }
  console.log(checkYuGiOh(30));