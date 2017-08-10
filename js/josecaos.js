/*
Funciones fuera del metodo .ready usar prefijo 'jQuery'
en vez de '$'
*/
jQuery(document).foundation()
//
var hero = 0;
jQuery(document).ready(function($){


  // contador()

  menu()

  // svgs()
  logo_cursor()
  fondo_grid()


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
  $(document).on('click', function () {
    cambia_color()
  })
})//ready

function logo_cursor() {

  var cursor = jQuery("span.logo-cursor")
  var i = 0

  setInterval(function () {

    if (i % 2 === 0) {
      // console.log("even");
      cursor.html(' ')
    }
    else {
      //  console.log("odd");
      cursor.html('|')
    }

    // console.log(i);
    i++

  }, 500)
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
  jQuery('.iconos a').on('mouseover focus',function () {
      //boton menu
      jQuery('.iconos a').html('<i class="fa fa-' + iconos[Math.floor(Math.random()*iconos.length)] + ' z-1 text-shadow"></i>')
  })

  // click
  jQuery('.iconos a').on('click', function() {

    jQuery('.iconos').toggleClass('gira-icono-menu regresa-icono-menu')

    setTimeout(function () {

      if (jQuery('.iconos').hasClass('regresa-icono-menu')) {
        iconos = abreico
        // sale
        menumovil.css(salemenu)
        //
        // setInterval(function(){
        //   //boton menu
        //   jQuery('.iconos a').html('<i class="fa fa-' + iconos[Math.floor(Math.random()*iconos.length)] + ' z-1 text-shadow"></i>')
        //
        // },750)

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
  var colors = ['rgba(0,0,0,0)','rgb(10,10,10)','rgb(20,20,20)','rgb(30,30,30)','rgba(0,250,0,0.35)']
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
  // debug
  console.log(width);
  //
  var height = Math.round(jQuery(document).height()/(blockSize*2)) //# bloques alto
  // debug
  console.log(height);
  //
  var animationMs = Math.random() * (1000 - 250) + 250
  var dir = -1
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      // var color = get_color();
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

  setTimeout(function () {
    cambia_color()

  },1000)

}
