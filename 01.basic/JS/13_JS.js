
$(document).ready(function () {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts/',
        type: 'GET',
        dataType: 'json',
        success: function (a) {
            console.log(a);
            
        },
        eroor: function (e) {
            console.log(e);
        }
    })
});
