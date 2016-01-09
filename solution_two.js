// Fibonacci Sequence generator
    
    var array = [1, 1, 2];
    var i = i;
    var input = 4000000;
    
    for(i = 0; i < input; ) {    
        var a = array.length;
        var b = array[a-1];
        var c = array[a-2];
        i = b + c;
        if( i < input ) {
        array.push(i);
        };
    };
        
    console.log(array);
    
    var x = [];
    var y = [];
        
    for(m = 0; m < array.length; m++) {
        var d = array[m];
        if ( d % 2 == 0 ) {
            x.push(d);
        } else {
            y.push(d);
    }};
    
    var evenFib = x.reduce(function(e, f) {
        return e + f;
    });
                           
    var oddFib = y.reduce(function(g, h) {
        return g + h;
    });
    
    // Logs the even and odd numbers of the Fib sequence
    
    console.log(evenFib);
    console.log(oddFib);
