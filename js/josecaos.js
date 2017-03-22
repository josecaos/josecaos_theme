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


})//ready

function svgs() {

  new Vivus('heroscreen-svg', {
    type: 'oneByOne',
    duration: 500,
    file: 'wp-content/themes/josecaos_theme/img/test.svg'
    // file: 'wp-content/themes/josecaos_theme/img/m-board.svg'
  },function() {
    console.log('termino de animacion  svg');
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
