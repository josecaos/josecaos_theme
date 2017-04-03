/*
Funciones fuera del ready usar prefijo 'jQuery'
en vez de '$', este solo dentro de el ready
*/
jQuery(document).foundation()
//
var hero = 0;
jQuery(document).ready(function($){


  // contador()

  menu()

  svgs()



  $('.imgLiquid.imgLiquidFill').imgLiquid()
  $('.imgLiquid.imgLiquidNoFill').imgLiquid({fill:false})
  $('.imgLiquid.imgLiquidNoFillTop').imgLiquid({fill:false, verticalAlign: 'top'})
  $('.imgLiquid.imgLiquidNoFillLeft').imgLiquid({fill:false, horizontalAlign: 'left'})



    hero.play(1, function() {
      // console.log("play svg");
    })

    if ($(document).width() > 1024) {
      $('#info').addClass('fixed')
    } else {
      $('#info').removeClass('fixed')

    }


})//ready

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

  hero = new Vivus('heroscreen-svg', {
    duration: 500,
    type: 'oneByOne',
    file: 'wp-content/themes/josecaos_theme/img/circuito.svg',
    onReady: function (obj) {
      // `el` property is the SVG element
      // obj.el.setAttribute('height', '100')
      // obj.el.setAttribute('width', 'auto')
    }
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

  setInterval(function(){
    //boton menu
    jQuery('.iconos a').html('<i class="fa fa-' + iconos[Math.floor(Math.random()*iconos.length)] + ' z-1 text-shadow"></i>')

  },500)

  // click
  jQuery('.iconos a').on('click', function() {

    jQuery('.iconos').toggleClass('gira-icono-menu regresa-icono-menu')

    setTimeout(function () {

      if (jQuery('.iconos').hasClass('regresa-icono-menu')) {
        iconos = abreico
        // sale
        menumovil.css(salemenu)

        // resetea la posicion si un link es presionado
        jQuery('#lista-menu > a').on('click', function() {

          // retrasa cierre del menu despues del scroll
          setTimeout(function() {

            menumovil.css(salemenu);

          },500)

        })
        //
        jQuery('.iconos a').removeClass('color-amarillo').addClass('color-azul-claro')

      } else if (jQuery('.iconos').hasClass('gira-icono-menu')) {
        jQuery('.iconos a').removeClass('color-azul-claro').addClass('color-amarillo')
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
