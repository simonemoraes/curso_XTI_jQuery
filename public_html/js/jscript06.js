/*
 Autor: Simone Louzada Moraes
 Descrição: Aula 03 - jQuery
 */



$(document).ready(function () {
    
    /* Aula 06 
     * Seletores de Ordem  
     * Função que faz include e configuração da tabela  */

    $(function () {
        $("#tabela").load("tabela.html", function () {
            $(this).css({"margin-top": "50px"});
            $("th").css({"text-align": "center",
                "background": "black",
                "color": "white"});
            $("tbody tr:first").css("background", "#ccc"); // Seleciona o primeiro
            $("tbody tr:last").css("background", "#ccc"); // Seleciona o ultimo
            $("tbody tr:not(tbody tr:last)").css("background", "#ccc"); // Seleciona todos nemos a ultima
            $("tbody tr:even").css("background", "#F5F5F5"); // Seleciona as ocorrencias pares
            $("tbody tr:odd").css("background", "#ccc"); // Seleciona as ocorrencias impares
            $("tbody tr:eq(3)").css("background", "#708090"); // Seleciona uma ocorrencia especifica
            $("tbody tr:gt(6)").css("background", "#00FF7F"); // Seleciona as ocorrencias depois apos a indicada
            $("tbody tr:lt(3)").css("background", "#FF69B4"); // Seleciona as ocorrencias anteriores a indicada

        });
    });
});


