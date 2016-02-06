/*
 Autor: Simone Louzada Moraes
 Descrição: Aula 10 - Maniplução de Atributos
 */

$(document).ready(function () {
//    $("button").click(function () {
//        var img =
//                $("<img/>", {
//                    src: "../imagens/lampada-apagada.jpg",
//                    title: "Lampada Apagada",
//                    click: function () {
//                        $("img").attr({
//                            src: "../imagens/lampada-acesa.jpg"
//                        });
//                        alert("A luz acendeu");
//                    }});
//                
//        var ul = $("<ul/>").append($("<li/>").append("Programador de Interface"));        
//        $("body").append(img).append(ul);
//    })

//    $("button").click(function () {
//        var img =
//                $("<img/>", {
//                    src: "../imagens/lampada-apagada.jpg",
//                    title: "Lampada Apagada",
//                    id:"img_01",
//                    height:"450px",
//                    width:"300px",
//                    click: function () {
//
//                        var srcRecuperado = $("img").attr("src");
//
//                        if (srcRecuperado == "../imagens/lampada-apagada.jpg") {
//
//                            $("img").attr({
//                                src: "../imagens/lampada-acesa.jpg"
//                            });
//                            alert("A luz acendeu");
//
//                        } else {
//                            $("img").attr({
//                                src: "../imagens/lampada-apagada.jpg"
//                            });
//                            alert("A luz apagou");
//                        }    
//                    }});
//
//        var ul = $("<ul/>").append($("<li/>").append("Programador de Interface Web"));
//        $("body").append(ul).append(img);
//    });

    $("button").click(function () {       
        $("img").toggle();       
    });

});
