function addTableData(data) {
    return `
        <tr>
            <td class="title">id</td>
            <td>${data.id}</td>
        </tr>

        <tr>
            <td class="title">title</td>
            <td>${data.title}</td>
        </tr>
        <tr>
            <td class="title">contents</td>
            <td>${data.body}</td>
        </tr>
        <tr>
            <td class="title">authorId</td>
            <td>${data.userId}</td>
        </tr>
`;
}

function insertTable(respons, i) {        // <table id="detailInfo">
    document.getElementById("detailInfo")
        .innerHTML += addTableData(respons.data[i]);
}

async function callBackImp() {
    try {
        const reponse = await axios.get('https://jsonplaceholder.typicode.com/posts/')
        for (let i = 0; i < reponse.data.length; i++)
            insertTable(reponse, i);
        console.log("axios");
        console.log(reponse);
    } catch (a) {
        console.log(a);
    }
}

// response1.data.array.forEach(element => {
//     myTarget.innerHTML += `<tr><td>${element.id}</td><td>${element.title}</td><td>${element.userId}</td></tr>`
// });


callBackImp();


