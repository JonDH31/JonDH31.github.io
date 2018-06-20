
$(document).ready(function() {


var emotions = ["Laughing", "Angry", "Smiling", "Confused", "Crying"];
    

function displayGifButtons() {
    $("#gifButtonsView").empty();
    for (var i = 0; i < emotions.length; i++) {
        var gifButton = $("<button>");
        gifButton.addClass("action");
        gifButton.addClass("btn btn-primary");
        gifButton.attr("data-name", emotions[i]);
        gifButton.text(emotions[i]);
        $("#gifButtonsView").append(gifButton);
        }
    }

    $("#addGif").on("click", function() {
        var emotions = $("#action-input").val().trim();
        if (emotions == "") {
            return false;
        }
        emotions.push(actions);

        displayGifButtons();
        return false;

    });



function removeLastButton() {
    $("#removeGif").on("click", function(){
        emotions.pop(action);
        displayGifButtons();
        return false;
    });

}


function displayGifs() {
    var emotion = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + emotion + "&api_key=2t9IWGjceZ1rYdhLxKvHynbkBHQB9ZC3&limit=25&offset=0&rating=G&lang=en"
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
    .done(function(response) {
        console.log(response);
        $("#gifsView").empty();
        var results = response.data;
        if (results == "") {
            alert("No gif for this selected button");
        }
         for(var i = 0; i < results.length; i++ ) {

            var gifDiv = $("<div>");
            gifDiv.addClass("gifDiv");

            var gifRating = $("<p>").text("Rating:" + results[i].rating);
            gifDiv.append(gifRating);

            var gifImage = $("<img>");
            gifImage.attr("src", results[i].images.original_still.url);
            gifImage.attr("data-still", results[i].images.fixed_height_small_still.url);
            gifImage.attr("data-animate", results[i].images.original.url);
            gifImage.attr("data-state", "still");
            gifImage.addClass("image");
            gifDiv.append(gifImage);

            $("#gifsView").prepend(gifDiv);
        }
    });
}

displayGifButtons();
removeLastButton();

$(document).on("click", ".action", displayGifs);
$(document).on("click", ".image", function() {
    var state = $(this).attr('data-state');
    console.log($(this).attr('data-state'))
    if ( state == 'still') {
        console.log($(this).data('animate'))
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }
    else {
        console.log($(this).data('still'))
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
});
});

