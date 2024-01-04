function variableConsole1(){
    var x = 10;
    var y = "10";
    console.log( x + y );
}


function variableConsole2(){
    var arr = [10,"20",30,"40"];
    var total = 0;
    var arr2 = [10,20,30,40]
    for (i = 0; i < arr2.length; i++)
        total += arr2[i];
    console.log(arr);

    // 콘솔로 출력
    console.log("total : " + total);

    // pop up으로 출력: 확인 누르기전 까지 이후 코드 실행x
    // window.alert("total : " + total); ( 윈도우 생략가능)
    alert("total : " + total);
    document.write("total :  " + total); // 쓸일이 없다. 

}

function variableConsole3(){

    var arr = [10, 20, 30, function(){console.log("hello world")} ]

}
