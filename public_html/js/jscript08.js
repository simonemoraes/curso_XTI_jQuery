/*
 Autor: Simone Louzada Moraes
 Descrição: Aula 08 - Seletores de Atributos
 */

$(document).ready(function () {    
        //$("a[name]").css("background-color", "#ccc");//Seleciona um atributo especifico        
        //$("a[name=menu]").css("background-color", "#ccc");//Seleciona um atributo especifico que contenha um valor especifico        
        //$("a[href*=min]").css("background-color", "#ccc");//Seleciona um atributo especifico que contenha um valor especifico                
        //$("a[href$=js]").css("background-color", "#ccc");//Seleciona um atributo especifico que termina com um  valor especifico                
        //$("a[href^=simone]").css("background-color", "#ccc");//Seleciona um atributo especifico que começa com um  valor especifico                
        $("a[name!=menu]").css("background-color", "#ccc");//Seleciona um atributo especifico que tenha um  valor diferente do informado
        
        
});


