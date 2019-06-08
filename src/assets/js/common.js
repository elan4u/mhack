
//Common Function for POST Rest Service
function postData(method,url,data){
    $.ajax({
        type:method,
        dataType: 'jsonp',
        url:url,
        data: data,
        headers:{
          'Access-Control-Allow-Origin':'*'
        },
        success: function(data) {
          return data;
        }
    });
}


function getData(method,url){
  $.ajax({
    type:method,
    dataType: 'jsonp',
    url:url,
    headers:{
      'Access-Control-Allow-Origin':'*'
    },
    success: function(data) {
      console.log('etst');
      return data;
    }
  });
}

function callAjax(url, callback){
  var xmlhttp;
  // compatible with IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
          callback(xmlhttp.responseText);
      }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}