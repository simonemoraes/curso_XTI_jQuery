/*
 Autor: Simone Louzada Moraes
 Descrição: Aula 03 - jQuery
 */



$(document).ready(function () {
    /* Aula 04 
     * Seletores Simples "ASTERISTICOS" */
    $("*").css("color", "red"); //Seleciona todos
    $("#titulo").css("color", "green"); //Seleciona elemento especifico
    $("a").css("color", "blue"); //Seleciona todos
    $(".outro").css("color", "red"); //Seleciona class
    $("h1, a").css("background-color", "yellow"); //Seleciona todos
});


