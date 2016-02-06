/*
 Autor: Simone Louzada Moraes
 Descrição: Aula 03 - jQuery
 */



$(document).ready(function () {
    
    /* Aula 07
     * Seletores de conteudo */

    $(function () {
        $("#tabela").load("tabela.html", function () {
            $(this).css({"margin-top": "50px"});
            $("th").css({"text-align": "center",
                "background": "black",
                "color": "white"});
            $("tbody td:contains(Comédia)").css("background", "#ccc"); // Seleciona a celula que contem o valor expecifico
            $("tbody td:empty").css("background", "#ccc"); // Seleciona todas as celula que estiverem vazias
            $("tbody td:has(strong)").css("background", "#ccc"); // Seleciona todas as celula que estiverem vazias
        });
    });    
});


