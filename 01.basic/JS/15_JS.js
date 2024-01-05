

async function callBackImp() {
    try{
    const response1 = await $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/',
        type: 'GET',
        dataType: 'json',
    });
    console.log("ajax");
    console.log(response1);
    }
    catch (e){
        console.log(e);
    }
    //
    // const response2 = await $.ajax({
    //     url: 'https://daum.com',
    //     method: 'POST',
    //     dataType: 'json',
    //     data: response1,
    // });
    // console.log(response2);
    //
    // const response3 = await $.ajax({
    //     url: 'https://daum.com',
    //     method: 'POST',
    //     dataType: 'json',
    //     data: response2,
    // });
    // console.log(response3);
    try {
        const reponse1 = await axios.get('https://jsonplaceholder.typicode.com/posts/')
        console.log("axios");
        console.log(reponse1);
    }
    catch (a){
        console.log(a);
    }
    
};
callBackImp();



//
//
// async function performAjaxRequest(url, method, data) {
//     return await $.ajax({
//         url: url,
//         type: method,
//         dataType: 'json',
//         data: data
//     });
// }
//
// function logData(data) {
//     console.log(data);
// }
//
// async function callBackImp() {
//     const response1 = await performAjaxRequest('https://jsonplaceholder.typicode.com/posts/', 'GET');
//     logData(response1);
//
//     const response2 = await performAjaxRequest('https://daum.com', 'POST', response1);
//     logData(response2);
//
//     const response3 = await performAjaxRequest('https://daum.com', 'POST', response2);
//     logData(response3);
// };
//
// callBackImp();