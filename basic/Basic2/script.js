$(document).ready(function(){

    $('#container').prepend("<ul></ul>")
    function createList () {
        $("ul").append("<li>dfkg</li>")
    }

    (function(){
        for (let i = 0; i < 5; i++) {
            createList()
        }
    }());

    function addItems () {
        let newTask = $("input").val()
        let task = $("ul").append(`<li>${newTask}</li>`)
        
    }
    
    $("#button1").on("click", function(){
        addItems()
        $("li:last").hide().slideDown()
    })

    $("ul").on("click", "li",function(){
        $(this).animate({
            opacity: 0,
            paddingLeft: '+=120'
        }, 460, function() {
            $(this).remove()
        })
    })
})