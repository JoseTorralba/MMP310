// Document Ready Event
$(document).ready(function () {

    $('#query').on("keypress", function (event) {

        if (event.which == 13) {
            var query = this.value;
            var key = "gc7kXsvMsDTr6mMHxbc8FMK8D23EPLG2";
            var url = "http://api.giphy.com/v1/gifs/search?q="

                + query
                // The & seperates the q= in the url link and adds it in the link
                + "&api_key=" 
                + key

//                This already searches up the thing u want to without typing.
//                + "&q=horror"

                + "&limit=20";

            $.getJSON(url, function (json) {
                console.log(json);

                // Hides previous results
                document.getElementById('gifs').innerHTML = "";

                for (let i = 0; i < json.data.length; i++) {

                    const img = json.data[i];

                    const imgElem = $('<img>')
                        .attr('src', img.images.downsized.url)

                    const imgContainer = $('<div>')
                        .addClass('gif');

                    imgContainer.append(imgElem)

                    $('#gifs').append(imgContainer);

                    
                }
                    
            });
        }
    });
});