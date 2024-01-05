
$(document).ready(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/',
        type: 'GET',
        dataType: 'json',
        // 성공
        success: function (response) {
            console.log(response);
            $.ajax({
                url: 'https://naver.com',
                method: 'POST',
                dataType: 'json',
                data: response,
                // 성공
                success: function (response2) {
                    console.log(response2);
                    $.ajax({
                        url: 'https://daum.com',
                        method: 'POST',
                        dataType: 'json',
                        data: response,
                        // 성공
                        success: function (response3) {
                            console.log(response3);
                        },
                        eroor: function (e) {
                            console.log(e);
                        }
                    })
                },
                eroor: function (e) {
                    console.log(e);
                }
            })
        },
        eroor: function (e) {
            console.log(e);
        }
    })
});
