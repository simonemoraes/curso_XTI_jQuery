/*
 Autor: Simone Louzada Moraes
 Descrição: Aula 08 - Seletores de Atributos
 */

$(document).ready(function () {    
    $(function () {
        // Código onde é feito o includ do formulario
        $("#formulario").load("formulario.html", function () {
            $(this).css({"margin-top": "50px"});
            
            //$("input").css("border", "3px solid #FF0000");// todos os elementos do tipos input receberam um border vermelho
            $(":button").click( function (){
                //$(":text").css("border", "3px solid #FF0000");
                //$(":password").css("border", "3px solid #FF0000");
                //$(":radio").parent().css("border", "3px solid #FF0000");
                //$(":checkbox").parent().css("border", "3px solid #FF0000");
                //$("select").css("border", "3px solid #FF0000");
                //$("textarea").css("border", "3px solid #FF0000");
                //$(":submit").css("border", "3px solid #FF0000");
                //$(":reset").css("border", "3px solid #FF0000");
                //$(":file").css("border", "3px solid #FF0000");
                //$(":disabled").css("border", "3px solid #FF0000");
                //$(":checked").parent().css("border", "3px solid #FF0000");
                $(":selected").css("border", "3px solid #FF0000");
            });           
        });
    });   
});


