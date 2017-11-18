// JavaScript Document
$(function(){
    $("#pageTop").click(function(){
        $("html,body").animate({scrollTop:0},'slow');
        return false;
    });
});
