$( document ).ready(function(){
    $("#menulat").click(function(){
       $("#sidebar-wrapper").show();
    });
    $("#logolat").click(function(){
        $("#sidebar-wrapper").hide();
    });
    
     $("#footer").load("footer.html"); 
});