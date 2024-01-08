const URL = 'https://jsonplaceholder.typicode.com/posts/';
// const URL = 'http://localhost:8080/csr/json/';

function createRow(data) {
    return `<tr>
                <td>${data.id}</td>
                <td>${data.title}</td>
                <td>${data.body}</td>
                <td>${data.userId}</td>
            </tr>`;
}

function addRow(respons, i) {        // <tbody id="Data">
    document.getElementById("Data") 
        .innerHTML += createRow(respons.data[i]);
}

async function callBackImp() {
    try {
        const reponse = await axios.get(URL)
        for (let i = 0; i < reponse.data.length; i++)
            addRow(reponse, i);
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


