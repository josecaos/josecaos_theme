jQuery(function () {

    // contador();

    menu();
    logo_cursor();
    subliminal();
    fondo_grid();
    escribe();

    if (jQuery(document).width() > 1024) {
        jQuery("#info").addClass("fixed");
    } else {
        jQuery("#info").removeClass("fixed");
    };

    // cambio color fondo
    let tiempoFondo = [1000, 5000, 10000];
    let t = shuffle(tiempoFondo);
    let cambio;
    cambio = t[0];
    setInterval(() => {
        cambia_color();
    }, cambio);

    // resize
    const resize = () => {
        let ancho = jQuery("#menu").width();

        fondo_grid();

        setTimeout(() => {
            menu();
        });
    };

    window.onresize = resize;
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

let textos = [
    ["P", "r", "o", "y", "e", "c", "t", "o", " ", "d", "e", " ", "s", "í", "n", "t", "e", "s", "i", "s", ",", " ", "c", "ó", "d", "i", "g", "o", " ", "y", " ", "M", "ú", "s", "i", "c", "a"],
    ["S", "u", "p", "e", "r", "C", "o", "l", "l", "i", "d", "e", "r"],
    ["L", "i", "v", "e", " ", "C", "o", "d", "i", "n", "g", ", ", "A", "l", "g", "o", "r", "a", "v", "e", ", ", "B", "r", "o", "k", "e", "n", "T", "e", "c", "h", ", ", "T", "r", "i", "p", ", ", "N", "o", "t", "h", "i", "n", "g"]
];

let id = null;

const escribe = () => {

    let botones = document.querySelectorAll(".lista-about button");
    let preguntas = ["¿Qué hace?", "¿Con qué?", "¿Qué música?"];

    botones.forEach((boton, i) => {

        boton.innerHTML = preguntas[i];

        boton.addEventListener("click", b => {
            let indice = i + 1;
            texto_cursor(indice);
        });

    });
};

const texto_cursor = (num_array) => {

    let texto = jQuery("span.texto-cursor");
    let i = 0;
    let letras;
    texto.html("");

    clearInterval(id);

    if (!!num_array) {

        switch (num_array) {
            case 1:
                letras = textos[0];
                break;
            case 2:
                letras = textos[1];
                break;
            case 3:
                letras = textos[2];
                break;
        };


        id = setInterval(function () {

            if (i == letras.length + 25) {

                texto.html("");

            };

            texto.append(letras[i]);

            i++;

        }, 100);
    }

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
    menumovil.css({
        "transition": "0.01s",
        "-webkit-transform": "translateX(100%)",
        "-moz-transform": "translateX(100%)",
        "-ms-transform": "translateX(100%)",
        "-o-transform": "translateX(100%)",
        "transform": "translateX(100%)"
    });
    //
    let salemenu = {
        "transition": "0.25s",
        "-webkit-transform": "translateX(100%)",
        "-moz-transform": "translateX(100%)",
        "-ms-transform": "translateX(100%)",
        "-o-transform": "translateX(100%)",
        "transform": "translateX(100%)"
    };
    // cambia consecutivamente el icono del menu
    let abreico = ["bars", "bars", "bars", "bars", "bars", "barcode", "barcode", "microchip", "align-left", "align-right", "bars"];
    let cierraico = ["close", "close", "close", "close", "close", "barcode", "check", "chevron-up", "close"];
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

    // click
    jQuery(".iconos a").on("click", () => {

        jQuery(".iconos").toggleClass("gira-icono-menu regresa-icono-menu");

        setTimeout(() => {

            if (jQuery(".iconos").hasClass("regresa-icono-menu")) { //cierra
                console.log("menu cierra", );
                iconos = abreico;
                // sale menu
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

            } else if (jQuery(".iconos").hasClass("gira-icono-menu")) { //abre
                console.log("menu abre", );
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
    jQuery(".block").each(function () {
        let color = get_color();
        let style = {
            "background": color,
        };
        jQuery(this).css(style);
    });
};

const fondo_grid = () => {

    let grid = jQuery("#fondo1");
    let size = [90, 120, 145, 175].map((s, i) => {

        let resultado = i >= 2 ? s / 3 : s * 3;

        return resultado;
    });
    let blockSize = size[Math.floor(Math.random() * size.length)]; // Pixels
    let width = jQuery(document).width() / blockSize; //Math.round(jQuery(document).width()/blockSize) //#bloques de ancho
    let height = Math.round(jQuery(document).height() / (blockSize)); //# bloques alto
    let animationMs = Math.random() * (25 - 1);
    let dir = -1;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            let style = {
                "bottom": (i * (dir * -1)) * (blockSize * (dir * -1)) + "px",
                "left": (j * dir) * (blockSize * dir) + "px",
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
        let t = 175;
        let x = setInterval(() => {
            texto_init();
            let y = document.getElementById("scrambled");

            if (!!y) {// protege en otras paginas

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
                    }, 1000);

                } else if (texto === "S O N I D O") {
                    jQuery("#fondo1").html("");
                    //
                    clearInterval(x);
                    jQuery(".sub-titulo-inicio").css("color", "lime");

                    setTimeout(() => {
                        subliminal();
                        jQuery(".sub-titulo-inicio").css("color", "#aaaaaa");
                    }, 2000);

                    fondo_grid();

                }

            }
        }, t);
    }, 100);
};