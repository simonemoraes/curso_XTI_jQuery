/*
 Autor: Simone Louzada Moraes
 Descrição: Aula 10 - Maniplução de Atributos
 */

$(document).ready(function () {
    $("button").click(function () {

//         $("img")
//         .attr("src", "../imagens/lampada-apagada.jpg")
//         .attr("title", "Lampada Apagada         

//        $("img").attr({
//            src: "../imagens/lampada-apagada.jpg",
//            title: "Lampada Apagada"
//        });

//        $("img").removeAttr("src");//remove o atributo src
//        $("img").removeAttr("title");//remove o atributo title
//        $("img").removeAttr("alt");//remove o atributo alt

//        alert($("img").hasClass("destaque"));//Verifica se existe ou não a ocorrencia de uma determinada class
//        $("img").addClass("destaque");//Adiciona uma class
//        alert($("img").hasClass("destaque"));//Verifica se existe ou não a ocorrencia de uma determinada class

        $("img").toggleClass("destaque");//significa um alternador para uma tomada. Se a class existir ele remove e vice-versa

    })
});


