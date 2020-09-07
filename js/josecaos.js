jQuery(document).ready(function($) {

    // contador();

    menu();
    logo_cursor();
    subliminal();
    // fondo_grid();
    // texto_cursor();

    if ($(document).width() > 1024) {
        $("#info").addClass("fixed");
    } else {
        $("#info").removeClass("fixed");

    };

    // cambio color fondo
    let tiempoFondo = [1000, 5000];
    let t = shuffle(tiempoFondo);
    let cambio;
    cambio = t[0];
    setInterval(() => {
        cambia_color();
    }, cambio);

    jQuery(window).resize(() => {
        let ancho = jQuery("#menu").width();
        setTimeout(() => {
            jQuery("#menu").css({
                "transition": "1s",
                "-webkit-transform": "translateX(" + ancho + "px)",
                "-moz-transform": "translateX(" + ancho + "px)",
                "-ms-transform": "translateX(" + ancho + "px)",
                "-o-transform": "translateX(" + ancho + "px)",
                "transform": "translateX(" + ancho + "px)"
            });
        });
    });
});

const logo_cursor = () => {

    let cursor = jQuery("span.logo-cursor");
    let i = 0;

    setInterval(() => {

        if (i % 2 === 0) {
            // console.log("even");
            cursor.html(" ");
        } else {
            cursor.html("|");
        }

        i++;

    }, 250);
};

// Array textos
let textos = [
    ["P", "r", "o", "y", "e", "c", "t", "o", " ", "d", "e", " ", "s", "í", "n", "t", "e", "s", "i", "s", ",", " ", "c", "ó", "d", "i", "g", "o", " ", "y", " ", "M", "ú", "s", "i", "c", "a"],
    ["S", "u", "p", "e", "r", "C", "o", "l", "l", "i", "d", "e", "r"],
    ["L", "i", "v", "e", " ", "C", "o", "d", "i", "n", "g", ", ", "A", "l", "g", "o", "r", "a", "v", "e", ", ", "B", "r", "o", "k", "e", "n", "T", "e", "c", "h", ", ", "T", "r", "i", "p", ", ", "N", "a", "d", "a"]
];
let id = null;
const texto_cursor = (num_array) => {

    // let texto = jQuery("span.texto-cursor");
    // let i = 0;
    // let letras;
    // texto.html("");

    // clearInterval(id);

    // if (!!num_array) {

    //     switch (num_array) {
    //         case 1:
    //             letras = textos[0];
    //             break;
    //         case 2:
    //             letras = textos[1];
    //             break;
    //         case 3:
    //             letras = textos[2];
    //             break;
    //     };


    //     id = setInterval(function() {

    //         if (i == letras.length + 25) {

    //             texto.html("");

    //         }

    //         texto.append(letras[i]);

    //         i++;

    //     }, 100);
    // }

};

const shuffle = (array) => {
    let currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

const contador = () => {

    // let iter = 0
    // setInterval(function(){
    //
    //   jQuery(".numeros").html("<p class="font-xxxl">" + iter + "ms </p>")
    //
    //   if (iter <= 10) {
    //     iter = iter + 1
    //
    //   } else {
    //     iter = 0
    //   }
    //
    // },1000)

};

const menu = () => {
    let menumovil = jQuery("#menu");
    // registra su posicion actual, fuera de la pantalla
    let anchomenumovil = menumovil.width();
    let posicioninicial = menumovil.css({
        "transition": "0.01s",
        "-webkit-transform": "translateX(" + anchomenumovil + "px)",
        "-moz-transform": "translateX(" + anchomenumovil + "px)",
        "-ms-transform": "translateX(" + anchomenumovil + "px)",
        "-o-transform": "translateX(" + anchomenumovil + "px)",
        "transform": "translateX(" + anchomenumovil + "px)"
    });
    //
    let salemenu = {
        "transition": "0.25s",
        "-webkit-transform": "translateX(" + anchomenumovil + "px)",
        "-moz-transform": "translateX(" + anchomenumovil + "px)",
        "-ms-transform": "translateX(" + anchomenumovil + "px)",
        "-o-transform": "translateX(" + anchomenumovil + "px)",
        "transform": "translateX(" + anchomenumovil + "px)"
    };
    // cambia consecutivamente el icono del menu
    let abreico = ["bars", "bars", "bars", "bars", "bars", "barcode", "barcode", "microchip", "align-left", "align-right", "bars"];
    let cierraico = ["close", "close", "close", "close", "close", "barcode", "check", "chevron-up", "close"];
    let iconindex = 0;
    let arrlong, iconos;

    // valor default al array
    if (jQuery(".iconos").hasClass("regresa-icono-menu")) {
        iconos = abreico;
    } else if (jQuery(".iconos").hasClass("gira-icono-menu")) {
        iconos = cierraico;
    }
    //una vez declarado el array base
    arrlong = iconos.length - 2;

    // default icono
    jQuery(".iconos a").html("<i class='fa fa-bars z-1 text-shadow'></i>");
    //
    // jQuery(".iconos a").on("mouseover",function () {
    //   //boton menu
    //   jQuery(".iconos a").html("<i class="fa fa-" + iconos[Math.floor(Math.random()*iconos.length)] + " z-1 text-shadow"></i>")
    // })

    // click
    jQuery(".iconos a").on("click", () => {

        jQuery(".iconos").toggleClass("gira-icono-menu regresa-icono-menu");

        setTimeout(() => {

            if (jQuery(".iconos").hasClass("regresa-icono-menu")) {
                iconos = abreico;
                // sale
                menumovil.css(salemenu);
                //
                setInterval(() => {
                    jQuery(".iconos a").html(`<i class="fa fa-${iconos[Math.floor(Math.random() * iconos.length)] }"></i>`);
                }, 750);

                // resetea la posicion si un link es presionado
                jQuery("#lista-menu > a").on("click", () => {

                    // retrasa cierre del menu despues del scroll
                    setTimeout(() => {

                        menumovil.css(salemenu);

                    }, 500);

                });
                //
                jQuery(".iconos a").removeClass("color-amarillo").addClass("color-claro");

            } else if (jQuery(".iconos").hasClass("gira-icono-menu")) {
                jQuery(".iconos a").removeClass("color-claro").addClass("color-amarillo");
                // entra menu
                menumovil.css({
                    "transition": "0.25s",
                    "-webkit-transform": "translateX(0px)",
                    "-moz-transform": "translateX(0px)",
                    "-ms-transform": "translateX(0px)",
                    "-o-transform": "translateX(0px)",
                    "transform": "translateX(0px)"
                });
                //
                iconos = cierraico;
            };

        }, 80);

    });
};

//fondo inicio

const get_color = () => {
    let colors = ["rgba(0,0,0,0)", "rgb(5,5,5)", "rgb(15,15,15)", "rgb(30,30,30)", "rgba(0,250,0,0.25)"];
    let index = Math.round(Math.random() * (colors.length - 1));
    return colors[index];
};

const cambia_color = () => {
    jQuery(".block").each(function() {
        let color = get_color();
        let style = {
            "background": color,
        };
        jQuery(this).css(style);
    });
};

const fondo_grid = () => {

    let size = [90, 120, 145, 175];
    let grid = jQuery("#fondo1");
    let blockSize = size[Math.floor(Math.random() * size.length)]; // Pixels
    let width = jQuery(document).width() / blockSize; //Math.round(jQuery(document).width()/blockSize) //#bloques de ancho
    console.log(width);
    //
    let height = Math.round(jQuery(document).height() / (blockSize)); //# bloques alto
    //
    let animationMs = Math.random() * (25 - 1);
    let dir = -1;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            let style = {
                "bottom": (i * (dir * -1)) * (blockSize * (dir * -1)) + "px",
                "left": (j * dir) * (blockSize * dir) + "px",
                // "background": color,
                "animation-delay": ((i + 1) + (j + 1)) * animationMs + "ms"
            };
            let block = jQuery("<div />").addClass("block").css(style);
            grid.append(block);
        }
    }
};

//
// titulo heroscreen
const texto_init = () => {
    let titulo = jQuery(".titulo-inicio").text();
    let a = titulo.split(""); //bug: agrega espacios al array
    titulo = shuffle(a);
    let b = titulo.join(" ").replace(/\s/g, ""); //Fix: quita los espacios
    let z = b.toString().replace(/(.{1})/g, " $1"); //Fix agrega espacios despues de cada letra
    return jQuery(".sub-titulo-inicio").html(z);
};

const subliminal = () => {
    setTimeout(() => {
        let t = 75;
        let x = setInterval(() => {
            texto_init();
            let y = document.getElementById("scrambled");
            let texto = y.innerText;
            //
            if (texto === "N O D I O S" || texto === "D I O S N O") {

                jQuery("#fondo1").html("");
                fondo_grid();
                //
                clearInterval(x);
                jQuery(".sub-titulo-inicio").css("color", "orange");

                setTimeout(() => {
                    subliminal();
                    jQuery(".sub-titulo-inicio").css("color", "#aaaaaa");
                }, 3000);

            } else if (texto === "S O N I D O") {
                jQuery("#fondo1").html("");
                //
                clearInterval(x);
                jQuery(".sub-titulo-inicio").css("color", "lime");

                setTimeout(() => {
                    subliminal();
                    jQuery(".sub-titulo-inicio").css("color", "#aaaaaa");
                }, 5000);

                fondo_grid();

            }

        }, t);
    }, 100);
};