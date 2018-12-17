$(document).ready(function(){
    $(document).on("click", ".car2", function() {
        console.log("you clicked the GIF");
        var state = $(this).attr("data-state");
        console.log(state);
        if (state === "still") {
            $(this).attr("src", $(this).attr("animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });


function gifts() {

    var car = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=lbRPxzWZs6Ihwc1kqXj8mImOEcjcjlbz&q=" + car + "&limit=10&offset=2&rating=G&lang=en";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    //   $("#gifs").text(JSON.stringify(response));
    console.log(queryURL);
    console.log(response);

    var results = response.data;
      $("#gifs").empty(); 
    for (var i = 0; i < results.length; i++) { 
             
            console.log("empty");
            var newDiv = $("<div class='car1'>");
     
        var rating = results[i].rating;
        var pOne = $("<p>").text("Rating: " + rating);
        newDiv.append(pOne);

        var animate= results[i].images.fixed_height.url;
        var gifURL= results[i].images.fixed_height_still.url;
        var still = results[i].images.fixed_height_still.url;
        var image = $("<img>").attr("src", gifURL).attr("data-still", still).attr("animate", animate).attr("data-state", "still");
        image.addClass("car2")
        newDiv.append(image);

        $("#gifs").prepend(newDiv);
        }
       
    });
}





var topics = ["Mustang", "Ferrari", "Audi R8"];
function buttons(){
    $("#Buttons").empty();

    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("car");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#Buttons").append(a);
    }
}



$("#addBtn").on("click", function(){
    event.preventDefault();
    var car = $("#input").val().trim();
   
    if(car === ""){
        alert("add a car");
    }
    else{
        topics.push(car);
        buttons();
        console.log(topics);
    }
});


$(document).on("click", ".car", gifts);
buttons();
})
