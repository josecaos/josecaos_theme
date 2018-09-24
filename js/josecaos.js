/*
Funciones fuera del metodo .ready usar prefijo 'jQuery'
en vez de '$'
*/
//
var hero = 0;
jQuery(document).ready(function($){
  jQuery(document).foundation()


  // contador()

  menu()

  // svgs()
  logo_cursor()
  fondo_grid()

  subliminal()


  $('.imgLiquid.imgLiquidFill').imgLiquid()
  $('.imgLiquid.imgLiquidNoFill').imgLiquid({fill:false})
  $('.imgLiquid.imgLiquidNoFillTop').imgLiquid({fill:false, verticalAlign: 'top'})
  $('.imgLiquid.imgLiquidNoFillLeft').imgLiquid({fill:false, horizontalAlign: 'left'})


  if ($(document).width() > 1024) {
    $('#info').addClass('fixed')
  } else {
    $('#info').removeClass('fixed')

  }

  // cambio color fondo
  var tiempoFondo = [5000,8000,12000]
  var t  = shuffle(tiempoFondo)
  var cambio
  cambio = t[0]
  setInterval(function() {
    cambia_color()
  }, cambio)

  jQuery(window).resize(function() {
    var ancho = jQuery("#menu").width()
    setTimeout(function() {
      jQuery("#menu").css({
        'transition': '1s',
        '-webkit-transform': 'translateX('+ ancho +'px)',
        '-moz-transform': 'translateX('+ ancho +'px)',
        '-ms-transform': 'translateX('+ ancho +'px)',
        '-o-transform': 'translateX('+ ancho +'px)',
        'transform': 'translateX('+ ancho +'px)'
      })
    })
  })
})//ready

function logo_cursor() {

  var cursor = jQuery("span.logo-cursor")
  var i = 0

  setInterval(function () {

    if (i % 2 === 0) {
      // console.log("even");
      cursor.html(' ')
    } else {
      cursor.html('|')
    }

    i++

  }, 250)
}

// Array textos
var textos = [
  ['P','r','o','y','e','c','t','o',' ','d','e',' ','s','í','n','t','e','s','i','s',',',' ','c','ó','d','i','g','o',' ','y',' ','M','ú','s','i','c','a'],
  ['S','u','p','e','r','C','o','l','l','i','d','e','r'],
  ['L','i','v','e',' ','C','o','d','i','n','g',' ','A','l','g','o','r','a','v','e',' ','B','r','o','k','e','n','T','e','c','h']
]
var  id = null
function texto_cursor(num_array) {

  // var cursor = jQuery("span.logo-cursor")
  var texto = jQuery("span.texto-cursor")
  texto.html("") //default borra el texto existente
  var i = 0
  var letras

  clearInterval(id)

  switch (num_array) {
    case 1:
    letras = textos[0]
    break;
    case 2:
    letras = textos[1]
    break;
    case 3:
    letras = textos[2]
    break;
  }


  id = setInterval(function () {

    if (i == letras.length + 15) {

      texto.html("")

    }

    texto.append(letras[i])

    i++

  }, 100)
}

function svgs() {
  // new Vivus('jc-logo', {
  //   type: 'delayed',
  //   duration: 125,
  //   file: 'wp-content/themes/josecaos_theme/img/josecaos-logo.svg',
  //   onReady: function (obj) {
  //     // obj.el.setAttribute('height', '30')
  //     // obj.el.setAttribute('width', 'auto')
  //   },function() {
  //     console.log('Termino de escribir el logo');
  //   }
  // });

  var types = ['delayed', 'oneByOne', 'scenario']
  var esc = types[Math.floor(Math.random()*types.length)]
  console.log(esc);
  hero = new Vivus('heroscreen-svg', {
    duration: 850,
    type: esc,
    file: 'wp-content/themes/josecaos_theme/img/circuito.svg',
  },function (obj) {

  });


}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

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
}

function contador() {

  var iter = 0
  setInterval(function(){

    jQuery('.numeros').html('<p class="font-xxxl">' + iter + 'ms </p>')

    if (iter <= 10) {
      iter = iter + 1

    } else {
      iter = 0
    }

  },100)

}

function menu() {
  var menumovil = jQuery("#menu");
  // registra su posicion actual, fuera de la pantalla
  var anchomenumovil = menumovil.width()
  var posicioninicial = menumovil.css({
    'transition': '0.01s',
    '-webkit-transform': 'translateX(' + anchomenumovil + 'px)',
    '-moz-transform': 'translateX(' + anchomenumovil +'px)',
    '-ms-transform': 'translateX(' + anchomenumovil +'px)',
    '-o-transform': 'translateX(' + anchomenumovil +'px)',
    'transform': 'translateX(' + anchomenumovil +'px)'
  })
  //
  var salemenu = {
    'transition': '0.25s',
    '-webkit-transform': 'translateX(' + anchomenumovil + 'px)',
    '-moz-transform': 'translateX(' + anchomenumovil +'px)',
    '-ms-transform': 'translateX(' + anchomenumovil +'px)',
    '-o-transform': 'translateX(' + anchomenumovil +'px)',
    'transform': 'translateX(' + anchomenumovil +'px)'
  }
  // cambia consecutivamente el icono del menu
  var abreico = ['bars','bars','bars','bars','bars','barcode','barcode','microchip','align-left','align-right','bars']
  var cierraico = ['close','close','close','close','close','barcode','check','chevron-up','close']
  var iconindex = 0
  var arrlong,iconos

  // valor default al array
  if (jQuery('.iconos').hasClass('regresa-icono-menu')) {
    iconos = abreico
  } else if (jQuery('.iconos').hasClass('gira-icono-menu')) {
    iconos = cierraico
  }
  //una vez declarado el array base
  arrlong  = iconos.length - 2

  // default icono
  jQuery('.iconos a').html('<i class="fa fa-bars z-1 text-shadow"></i>')
  //
  // jQuery('.iconos a').on('mouseover',function () {
  //   //boton menu
  //   jQuery('.iconos a').html('<i class="fa fa-' + iconos[Math.floor(Math.random()*iconos.length)] + ' z-1 text-shadow"></i>')
  // })

  // click
  jQuery('.iconos a').on('click', function() {

    jQuery('.iconos').toggleClass('gira-icono-menu regresa-icono-menu')

    setTimeout(function () {

      if (jQuery('.iconos').hasClass('regresa-icono-menu')) {
        iconos = abreico
        // sale
        menumovil.css(salemenu)
        //
        setInterval(function(){
          //boton menu
          jQuery('.iconos a').html('<i class="fa fa-' + iconos[Math.floor(Math.random()*iconos.length)] + ' z-1 text-shadow"></i>')

        },750)

        //

        // resetea la posicion si un link es presionado
        jQuery('#lista-menu > a').on('click', function() {

          // retrasa cierre del menu despues del scroll
          setTimeout(function() {

            menumovil.css(salemenu);

          },500)

        })
        //
        jQuery('.iconos a').removeClass('color-amarillo').addClass('color-claro')

      } else if (jQuery('.iconos').hasClass('gira-icono-menu')) {
        jQuery('.iconos a').removeClass('color-claro').addClass('color-amarillo')
        // entra menu
        menumovil.css({
          'transition': '0.25s',
          '-webkit-transform': 'translateX(0px)',
          '-moz-transform': 'translateX(0px)',
          '-ms-transform': 'translateX(0px)',
          '-o-transform': 'translateX(0px)',
          'transform': 'translateX(0px)'
        })
        //
        iconos = cierraico
      }

    },80)

  })
}

//fondo inicio

function get_color() {
  var colors = ['rgba(0,0,0,0)','rgb(5,5,5)','rgb(10,10,10)','rgb(15,15,15)','rgba(0,250,0,0.35)']
  var index = Math.round(Math.random() * (colors.length - 1))
  return colors[index]
}
function cambia_color() {
  jQuery('.block').each(function () {
    var color = get_color()
    var style = {
      'background': color
    };
    jQuery(this).css(style)
  })
}
function fondo_grid(block_num) {

  var grid = jQuery('#fondo1')
  var blockSize = 115 // Pixels
  var width = jQuery(document).width()/blockSize //Math.round(jQuery(document).width()/blockSize) //#bloques de ancho
  //
  var height = Math.round(jQuery(document).height()/(blockSize)) //# bloques alto
  //
  var animationMs = Math.random() * (1000 - 250)
  var dir = -1
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      var style = {
        'bottom': (i * (dir* -1)) * (blockSize * (dir* -1)) + 'px',
        'left': (j * dir) * (blockSize * dir) + 'px',
        // 'background': color,
        'animation-delay': ((i + 1) + (j + 1)) * animationMs + 'ms'
      };
      var block = jQuery('<div />').addClass('block').css(style);
      grid.append(block);
    }
  }

  // setTimeout(function () {
  //   cambia_color()
  //
  // },1000)

}

//
// titulo heroscreen
function texto_init() {
  var titulo = jQuery('.titulo-inicio').text()
  var a = titulo.split('')//bug: agrega espacios al array
  titulo = shuffle(a)
  var b = titulo.join(' ').replace(/\s/g,'')//Fix: quita los espacios
  var z = b.toString().replace(/(.{1})/g," $1")//Fix agrega espacios despues de cada letra
  return jQuery('.sub-titulo-inicio').html(z)
}

function  steemit_posts() {
  // var author = "jazzvoon",
  var author = "elguille",
  permalink = "how-to-embed-steemit-content-in-a-web-page-for-example-inside-a-wordpress-post";

  function cleanHtml(s) {
    var div = document.createElement('div');
    div.innerHTML = s;
    var scripts = div.getElementsByTagName('script');
    var i = scripts.length;
    while (i--) {
      scripts[i].parentNode.removeChild(scripts[i]);
    }
    var styles = div.getElementsByTagName('style');
    var i = styles.length;
    while (i--) {
      styles[i].parentNode.removeChild(styles[i]);
    }
    console.log("hola");
    var imgs = div.getElementsByTagName('img');
    console.log(imgs);
    var i = imgs.length;
    while (i--) {
      imgs[i].removeAttribute("height");
    }
    return div.innerHTML;
  }

  var mdconverter = new showdown.Converter();

  document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
      steem.api.getContent(author, permalink, function(err, result) {
        if(!err) {
          document.getElementById("title").innerHTML = result.title;
          var converted = mdconverter.makeHtml(cleanHtml(result.body));
          converted = converted.replace(/\!\[([^\]]*)\]\(([^\)]*)\)/g, "<img src='$2' alt='$1'>")
          document.getElementById("output").innerHTML = converted;
        }
      });
    }
  }
}
//
function subliminal() {
  setTimeout(() => {
    var t = 50
    var x = setInterval(() => {
      texto_init()
      var y = document.getElementById('scrambled')
      var texto = y.innerText
      //
      if (texto === "N O D I O S" || texto === "D I O S N O") {

        clearInterval(x)
        jQuery('.sub-titulo-inicio').css('color','orange')

        setTimeout(() => {
          subliminal()
          jQuery('.sub-titulo-inicio').css('color','#aaaaaa')
        },3000)

      } else {

      }
    },t)
  },1000)
}
