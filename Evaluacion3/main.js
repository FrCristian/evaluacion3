$(function(){


    $(document).ready(function(){
        $("a[href='#About']").on('click', function(e){
            e.preventDefault(); 
            alert("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        });
    });



    $(document).ready(function(){
        $(".carousel-item a.btn").on('click', function(e){
            e.preventDefault(); // Evitar que el enlace siga su comportamiento normal
            window.location.href = "#collection";
        });
    });


    $(document).ready(function(){
        $("a[href='#Contacts']").on('click', function(e){
            e.preventDefault(); // Evitar que el enlace siga su comportamiento normal
            
            var whatsappLink = 'https://wa.link/29la8b';

            window.open(whatsappLink, '_blank');
        });
    });


    $(document).ready(function(){
        $(".collection-list .collection-img img").hover(function(){
            $(this).css('border', '2px solid #722F37'); // Cambiar el color a tu preferencia
        }, function(){
            $(this).css('border', 'none'); 
        });
    });


    


});


