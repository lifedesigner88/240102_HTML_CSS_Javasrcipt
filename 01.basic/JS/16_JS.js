function createRow(data) {
    return `<tr>
                <td>${data.id}</td>
                <td>${data.title}</td>
                <td>${data.userId}</td>
            </tr>`;
}

function addRow(respons, i) {        // <tbody id="Data">
    document.getElementById("Data") 
        .innerHTML += createRow(respons.data[i]);
}

async function callBackImp() {
    try {
        const reponse = await axios.get('https://jsonplaceholder.typicode.com/posts/')
        for (let i = 0; i < reponse.data.length; i++)
            addRow(reponse, i);
        console.log("axios");
        console.log(reponse);
    } catch (a) {
        console.log(a);
    }
}

callBackImp();


