/*
 Autor: Simone Louzada Moraes
 Descrição: Aula 10 - Maniplução de Atributos
 */

$(document).ready(function () {
    $("button").click(function () {
//        alert($("p").html());
//        $("p").html("<h1>Conheça o Brasil</h1>");
//        $(".vazia").text("<h1>Conheça o Brasil</h1>");
//        $(".vazia").html("<h1>Conheça o Brasil</h1>");
//        $(".vazia").text($("p").html());
//        alert($("textarea").val());
//        $("p").html($("textarea").val());
          $(".vazia").replaceWith($("textarea").val());//troca o elemento por outro elemento
    })
});


