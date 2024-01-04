function variableConsole1(){
    var x = 10;
    var y = "10";
    console.log( x + y );}



function variableConsole2(){
    var arr = [10,"20",30,"40"];
    var total = 0;
    var arr2 = [10,20,30,40]
    for (i = 0; i < arr2.length; i++)
        total += arr2[i];
    console.log(arr);


    arr2.push(50);
    arr.forEach((a) => console.log(a))

    // 콘솔로 출력
    console.log("total : " + total);

    // pop up으로 출력: 확인 누르기전 까지 이후 코드 실행x
    // window.alert("total : " + total); ( 윈도우 생략가능)
    alert("total : " + total);
    // document.write("total :  " + total); // 쓸일이 없다. 
}

function variableConsole3(){
    var arr = [10, 20, () => {console.log("hello world");}];
    arr[2]();}


function varExample(){
    // var는 같은 변수명에 재 선언과 재할당 가능.
    var x = 10;
    var x = 20;
    console.log("var: " + x)}


function letExample(){
    // let는 같은 변수명에 재할당만 가능
    let x = 10;
    x = 20;
    console.log("let: " + x)}

    
function constExample(){
    // const는 변수명에 재선언과 재할당 불가능 
    const x = 10;
    x = 20;
    console.log("const: " + x)}


function changeTextById(){
    document.getElementById("change1").innerHTML = "변경완료";
    document.getElementById("change1").style.fontSize = "30px";}


function chageTextByClass(){
    var arr = document.getElementsByClassName("class1");
    console.log(arr);
    for(i = 0; i < arr.length; i++){
        arr[i].innerHTML = "변경완료";
        arr[i].style.fontSize = "20px";
        arr[i].style.color = "red";
    }

}