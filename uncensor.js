const uncensor = (text, letters) => {
    let arr1 = text.split('');
    let arr2 = letters.split('');
    let arr3 = [];        
    let arrIndex = 0;        
    for (let i = 0; arr1.length >= i; i++ ) {
      if (arr1[i] == '*') {
        arr3.push(arr2[arrIndex]);
        arrIndex += 1;            
      } else {
        arr3.push(arr1[i]);
      }
    }                
    return arr3.join('');
}

uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo");