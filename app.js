/* Es necesario agregar un callback al constructor del popover
   ya que el datepicker no puede ser cargado en un elemento del 
   DOM no existente. En este caso el popover no existe, hasta que
   se hace click sobre el elemento que lo activa. Cuando se hace
   click, el popover es creado y se debe ejecutar el callback para
   que los datepickers se añadan al DOM */

var tmp = $.fn.popover.Constructor.prototype.show;
$.fn.popover.Constructor.prototype.show = function () {
    console.log("Called show");
    tmp.call(this);
    if (this.options.callback) {
   	this.options.callback();
    }
};

$(function(){
  $('input[type="checkbox"]').pibeeCheckbox();
  $('input[type="radio"]').pibeeRadio();
  $('div[class=gusanoProgreso]').gusanoProgreso();
  $('div[class=barraProgreso]').barraProgreso();
  $('table').css('font-size','11px');
});

$(document).ready(function(){
  $('.pibee-checkbox').click(function(){
    $('[rel='+$(this).attr('rel')+"]").removeClass("checked-undefined");
    if ( $('#'+ $(this).attr('rel')).prop("checked")) {
      $('[rel='+$(this).attr('rel')+"]").removeClass("checked");
      $('#'+$(this).attr('rel')).prop("checked",false);
    } else {
      $('[rel='+$(this).attr('rel')+"]").addClass("checked");
      $('#'+$(this).attr('rel')).prop("checked",true);
    }
  });
});