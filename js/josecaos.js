/*
Funciones fuera del ready usar prefijo 'jQuery'
en vez de '$', este solo dentro de el ready
*/
jQuery(document).foundation()
//
jQuery(document).ready(function($){


  contador()

  boton_menu_movil()

  svgs()

  menu()

})//ready

function svgs() {
  new Vivus('jc-logo', {
    type: 'oneByOne',
    duration: 500,
    file: 'wp-content/themes/josecaos_theme/img/josecaos-logo.svg'
  },function() {
    console.log('Termino de escribir el logo');
  });

  new Vivus('heroscreen-svg', {
    type: 'oneByOne',
    duration: 250,
    file: 'wp-content/themes/josecaos_theme/img/circuito.svg'
  },function() {
    console.log('termino de dibujar circuitos');
  });

}



function contador() {

  var iter = 0

  setInterval(function(){

    jQuery('.numeros').html('<p class="font-xxxl">' + iter + '</p>')

    if (iter <= 10) {
      iter = iter + 1

    } else {
      iter = 0
    }



  },100)

}

function boton_menu_movil() {

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

  },200)

  jQuery('.iconos').on('click', function() {

    jQuery('.iconos').toggleClass('gira-icono-menu regresa-icono-menu')
    setTimeout(function () {

      if (jQuery('.iconos').hasClass('regresa-icono-menu')) {
        iconos = abreico
      } else if (jQuery('.iconos').hasClass('gira-icono-menu')) {
        iconos = cierraico
      }

    },80)

  })


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
  console.log(posicioninicial);
  //  var menuicono = $('#menu-movil-boton i');
  // reset del icono en caso de resize
  //  if (menuicono.hasClass('fa-close')) {
  //
  //    menuicono.removeClass('fa-close').addClass('fa-bars color-secondary-1-2');
  //
  //  }
  //
  var salemenu = {
    'transition': '0.25s',
    '-webkit-transform': 'translateX(' + anchomenumovil + 'px)',
    '-moz-transform': 'translateX(' + anchomenumovil +'px)',
    '-ms-transform': 'translateX(' + anchomenumovil +'px)',
    '-o-transform': 'translateX(' + anchomenumovil +'px)',
    'transform': 'translateX(' + anchomenumovil +'px)'
  }

  // accion boton
  jQuery('#menu-bars').on('click', function() {

    var posicion = menumovil.position();

    if(posicion.left >= jQuery(document).width()) {
      // entra menu
      menumovil.css({
        'transition': '0.25s',
        '-webkit-transform': 'translateX(0px)',
        '-moz-transform': 'translateX(0px)',
        '-ms-transform': 'translateX(0px)',
        '-o-transform': 'translateX(0px)',
        'transform': 'translateX(0px)'
      });
      //
      // gira
      //  menuicono.toggleClass('gira-icono-menu');

      //cambia el icono
      //  setTimeout(function() {
      //
      //    menuicono.removeClass('fa-bars color-secondary-1-2').addClass('fa-close color-complement-2');
      //
      //  },125);

      // reset gira-icono-menu
      //  setTimeout(function() {
      //
      //    menuicono.toggleClass('gira-icono-menu');
      //
      //  },500)
      //

      // resetea la posicion si un link es presionado
      jQuery('a').on('click', function() {

        // retrasa cierre del menu despues del scroll
        setTimeout(function() {

          menumovil.css(salemenu);
          // setTimeout(function() {
          //
          //   menuicono.toggleClass('gira-icono-menu');
          //   menuicono.removeClass('fa-close color-complement-2').addClass('fa-bars color-secondary-1-2');
          //
          // },125);
          // reset giro
          // setTimeout(function() {
          //
          //   menuicono.toggleClass('gira-icono-menu');
          //
          // },500)

        },750)

      })

    } else {
      // // sale menu
      // menumovil.css(salemenu);
      // // gira
      // menuicono.toggleClass('gira-icono-menu');
      // //cambia el icono
      // setTimeout(function() {
      //
      //   menuicono.removeClass('fa-close color-complement-2').addClass('fa-bars color-secondary-1-2');
      //
      // },125);
      //
      // //reset giro
      // setTimeout(function() {
      //
      //   menuicono.toggleClass('gira-icono-menu');
      //
      // },500);

    }

  });

}
