function showComparismEqual(){
    var x = 3; 
    var y = '3';
    document.getElementById("result1").innerHTML = 
    "(x == y): " + (x == y) + "<br>" +
    "(x === y): " + (x === y) }




function showComparismString(){
    var x = 'abc';
    var y = 'bcd';
    
    document.getElementById("result2").innerHTML = 
    "(x <= y): " + (x <= y) + "<br>" +
    "(x >= y): " + (x >= y) }




function showOperatorResult(a, b){
    var bigger = (a > b) ? a : b;
    
    document.getElementById("result3").innerHTML = bigger}
