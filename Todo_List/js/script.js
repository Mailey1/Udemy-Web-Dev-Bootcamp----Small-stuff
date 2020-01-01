// Check of specific todos on click.
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Remove todo by clicking delete.
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Add new todos with the text input.
$("input[type='text']").keypress(function(event){
    // check for enter key and grab text in field.
    if(event.which === 13){
        var newTodo = $(this).val();
        // create new li and append to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + newTodo + "</li>");
        $(this).val("");
    }
});

// Toggle 'Add New Todo' field.
$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeToggle();
});