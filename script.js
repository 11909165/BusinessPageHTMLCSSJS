$(function(){
    $(document).scroll(function(){
        var $nav = $('.nav');
        $nav.toggleClass('scroll', $(this).scrollTop() > $nav.height());
    });
});

var menu = document.getElementById('bar');
var items = document.getElementById('navbar');

items.style.right= "-360px";
menu.onclick=function(){
    if(items.style.right == "-360px"){
        items.style.right= "0px";
    }
    else{
        items.style.right= "-360px";
    }
}
