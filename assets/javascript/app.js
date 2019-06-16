var food = ["Sushi", "Hot Dog", "Pizza", "Coockies"];

function displayButtons() {
    $(".buttons-holder").empty();

    for (var i = 0; i < food.length; i++) {
        var newBtn = $("<button>");
        newBtn.addClass("btn, btn-primary m-2");
        // Adding a data-attribute
        // newBtn.attr("name-data", food[i]);
        // Providing the initial button text
        newBtn.text(food[i]);
        // console.log(newBtn);
        // Adding the button to the buttons-view div
        $(".buttons-holder").append(newBtn);
    }
}

$("#add-gif").on("click", function (e) {
    e.preventDefault();
    var newFood = $("#food-input").val().trim();
    food.push(newFood);
    console.log(newFood);
    $("#food-input").val("");
    displayButtons();
    
});


