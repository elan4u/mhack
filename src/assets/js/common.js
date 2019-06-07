
//Common Function for POST Rest Service
function postData(method,url,data){
    alert('test');
    $.ajax({
        type:method,
        dataType: 'jsonp',
        url:url,
        data: data,
        success: function(data) {
          return data;
        }
    });
}