function showObject(){
    // 리터럴 방식
    var person = {
        name: "hong", 
        age: 20, 
        email: "se@jong.com",};
    console.log(person);

    person.name = "kim";
    person.password = 4567;
    console.log(person);

    var str = 
        "이름:" + person.name + "<br>" +
        " 나이:" + person.age + "<br>" +
        " email:" + person.email;
    document.getElementById("result1").innerHTML = str;}



function convertType(){
    //  숫자 클래스 :number, 문자클래스 :String, 참 거짓 : 
    var numStr = "10";
    var str = "문자열";
    var output = "Number 변환 : " + Number(numStr) + "<br>"
            + "String 변환 : " + String(10) + "<br>"
            + "Boolean 변환 : " + Boolean(0) + "<br>";
            
    document.getElementById("result2").innerHTML = output;}


function showNaN(){
    var output = "10" - "문자열";
    console.log(output);
    console.log(typeof output);
    document.getElementById("result3").innerHTML = output;}



function showNull(){
    var output1;
    var output2 = null;
    var output =    
                "output1의 타입은 " + (typeof output1) + "<br>" +
                "output2의 타입은 " + (typeof output2) + "<br>" + 
                "output1 == output2: " + (output1 == output2) + "<br>" + 
                "output1 === output2:  " + (output1 === output2) + "<br>"  ;
    document.getElementById("result4").innerHTML = output;}

    

function showDateConversion(){
    var date = new Date();
    var date_num = date.getDate();
    var date_str = date.toString();
    document.getElementById("result5").innerHTML = date_num + " : " + date_str;}


