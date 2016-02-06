/*
 Autor: Simone Louzada Moraes
 Descrição: Aula 03 - jQuery
 */



$(document).ready(function () {
   
    /* Aula 05 
     * Seletores de Hierarquia  */
    $("div span").css("background-color", "yellow"); //Seletor de descendentes
    $("li > ul").css("color", "red"); //Seletor de filho
    $("#item1_1 + li").css("color", "blue"); //Seletor de irmao
    $("#item1_1 ~ li").css("color", "green"); //Seletor de todos os irmaos
});


