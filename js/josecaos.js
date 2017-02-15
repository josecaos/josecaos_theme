/*
Funciones fuera del ready usar prefijo 'jQuery'
en vez de '$', este solo dentro de el ready
*/
jQuery(document).foundation()

jQuery(document).ready(function($){

  contador()

})//ready

function contador() {

  var iter = 0

  setInterval(function(){

    jQuery('#main').html('<p class="font-xxl">' + iter + '</p>')

    if (iter <= 10) {
      iter = iter + 1

    } else {
      iter = 0
    }



  },100)

}
