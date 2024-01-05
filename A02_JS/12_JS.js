function callBackExample1(){
    alert("hello");
}


function callBackExample2(){
    processUserInput((name) => console.log(`콜백1 console 안녕하세요. ${name} 님`));
}


function callBackExample3(){
    processUserInput((name) => alert(`콜백 2 alert 안녕하세요. ${name} 님`));
}


function processUserInput(callback){
    let name = prompt("이름을 입력해주세요");
    callback(name)
}

function callBackExample4(){
    const numbers = [1, 2, 3, 4, 5];
    numbers.forEach(a => console.log(a));
    console.log("hello world")
}


function callBackExample5(){
    // setTimeOut 함수는 대표적인 JS의 비동기 함수(콜백 함수 처리)
    // 그외 네트워크 작업을 수행하는 많은 함수가 비동기 함수로 설계
    setTimeout(()=>
        console.log("wait 2000 1"),2000);
    
    console.log("hello world2");
    
    setTimeout(()=>
        console.log("wait 1000 3"),1000);
    
    console.log("hello world4");

    
}









