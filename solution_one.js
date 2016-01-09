var threeArray = [];
    var fiveArray = [];
    
    for (i = 1; i < 1000; i++) {
        if(i % 3 == 0) {
            threeArray.push(i);
        };
    
    if(i % 5 == 0 && i % 3 != 0) {
        fiveArray.push(i);
        };
    };
    
    // console.log is to check the arrays
    
    console.log(threeArray);
    console.log(fiveArray);
    
    // this function will be used to add the array value
    
    function sum (a, b) {
        return a + b;
    };
    
    // reduce allows us to add each element of the array together, via the sum function
    
    var threeTotal = threeArray.reduce(sum, 0);
    
    var fiveTotal = fiveArray.reduce(sum, 0);
    
    // this is the total sum of the two arrays
    
    var total = threeTotal + fiveTotal;
    console.log(total);
    
    // 233168
