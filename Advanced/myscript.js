$(document).ready(function(){

    $("#moveme").on("click", function(){
        $(document).on('mousemove', function(e){
            $('#moveme').css({
                left:  e.pageX - 130,
                top:   e.pageY - 130
            });
        });
        $("#moveme").on("dblclick", function(){
            $(document).off('mousemove')
            $('#moveme').animate({
                marginTop: '+=500',
                opacity: 0
            },function(){
            $(this).css({
                    left:  25,
                    top:   71,
                    opacity: 1,
                    marginTop: '-=500'
                }) 
            })
            $("#moveme").off("click")
        })  
    })    
})
