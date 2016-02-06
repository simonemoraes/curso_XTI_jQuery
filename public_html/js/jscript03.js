/*
 Autor: Simone Louzada Moraes
 Descrição: Aula 03 - jQuery
 */



$(document).ready(function () {
    
    /* Aula 03  */
    $("a").css("color", "red");

    $("a").click(function () {

        //Selecionar
        $("#titulo").css("color", "red");
        $("#titulo").text("Curso e jQuery");
        $("#titulo").hide();
        $("#titulo").fadeToggle();
        //Encadeamento e Encapsulamento
        $("#titulo").css("color", "red").text("Curso e jQuery").hide().fadeToggle();
        //Iterar Implicitamente 
        $("#titulo").css("color", "red");
        $("#titulo").text("Curso e jQuery");
        $("#titulo").hide();
        $("#titulo").fadeToggle();
    });
});


