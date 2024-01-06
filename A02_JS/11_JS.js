// 03. 항목 추가 제거 시스템
let itemCount = 2;
function createItem() {
    const htmlContent = `
        <div id="content-div-${itemCount}">
            <label for="content-${itemCount}"> 항목 ${itemCount}  
                <input type="text" id="content-${itemCount}"> 
                <button onclick="deleteContent(${itemCount})">Delete</button>
            </label><br>
        </div>
    `;
    itemCount++;
    return htmlContent;
}

function addContent() {
    document.getElementById("addContent").innerHTML += createItem();
}

function deleteContent(id) {
    const contentDiv = document.getElementById(`content-div-${id}`);
    contentDiv.remove();
    itemCount--;
}



// 02. 계산기 관련내용
function calculate() {
    const inputs = document.getElementsByClassName("inputs");
    const a = Number(inputs[0].value);
    const b = Number(inputs[1].value);
    const oper = document.getElementById("oper").value;
    let result;

    if (oper === '+') result = a + b;
    else if (oper === '-') result = a - b;
    else if (oper === '*') result = a * b;
    else if (oper === '/') result = a / b;

    document.getElementById("result6").innerHTML = result;
}





// 01. 함수 관련 내용
function basicFunction1(){
    alert("함수호출완료");
}

function basicFunction2(){
    alert(makeString3());
}


function makeString1() {
    return "hello world1"
}

const makeString2 = function () {return "hello world2"};

const makeString3 = () => "hello world3";

function basicFunction3(name='Guest'){
    document.getElementById("result3").innerHTML = name;
}

function basicFunction4(a,b){
    alert(a+b);
}


function basicFunction5(...nums){
    const total = nums.reduce((a, b) => a + b, 100);
    alert("합계 : " + total);
}









