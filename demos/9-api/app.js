var key = "gc7kXsvMsDTr6mMHxbc8FMK8D23EPLG2";
var url = "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + key + "&limit=20";

$.getJSON(url, function(json) {

    console.log(json);

});



// Document Ready Event
$(document).ready(function() {

    $('#query').on("keypress", function(event) {

       if (event.which == 13) {

           var query = this.value;

       } 

    });

});