var i = i;
        var smallArray = [];
        
        for(i = 1; i <= 100; i++) {
            var a = i * i;
            smallArray.push(a);
        }
        
        var j = j;
        var largeArray = [];
        
        for(i = 1; i <=100; i++) {
            var b = i;
            largeArray.push(b);
        }
        
        var smallTotal = smallArray.reduce(function(a, b) {
            return a  + b;
        });
        
        var largeTotal = largeArray.reduce(function(a, b) {
            return a + b;
        });
        
        var trueTotal = largeTotal * largeTotal;
        
        var final = trueTotal - smallTotal;
        
        // test logs and answer
        
        console.log(smallArray);
        console.log(largeArray);
        console.log(largeTotal);
        console.log(trueTotal);
        console.log(final);
