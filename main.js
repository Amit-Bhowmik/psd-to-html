$('.menu-btn').click(function(){
    $('.menu--bar .menu').toggleClass("active");
     $('.menu-btn i').toggleClass("active");
  
 });
 $(window).scroll(function(){
    if(this.scrollY > 20){
       $('.menu--bar').addClass("sticky");
    }else{
       $('.menu--bar').removeClass("sticky");
    };
  
});