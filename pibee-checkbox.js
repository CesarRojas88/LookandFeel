(function($) {
  var myHash = {'completo':'#428b12','incompleto':'#a6bfd6','encurso':'#0099ff'};
/*  myHash['completo'] = ['#428b12'];
  myHash['incompleto'] = ['#a6bfd6'];
  myHash['encurso'] = ['#0099ff'];*/
  $.fn.pibeeCheckbox = function(){
    $('h4 > table').css('font-size','11px');
    this.each( function(){
      $(this).after('<span rel="' + this.id + '" class="pibee-checkbox"></span>');
    }).change( function(){
      $('.pibee-checkbox[rel="' + this.id + '"]').toggleClass('checked');
    }).css('display','none');
    $('label').click( function(){
      tempChk = $('#'+$(this).attr('for')).change();
      $('.pibee-checkbox[rel="' + $(this).attr('for') + '"]').toggleClass('checked');
    });
  };
  $.fn.pibeeRadio = function(){
    this.each( function(){
      $(this).after('<span rel="' + this.id + '" class="pibee-radio" data-name='+$(this).attr('name')+'></span>');
    }).change( function(){
      $('.pibee-radio[rel="' + this.id + '"]').toggleClass('checked');
    }).css('display','none');
    $('.pibee-radio').click( function(){
      var name = $(this).data('name');
      $('.pibee-radio[data-name='+name+']').removeClass('checked');
      $(this).addClass('checked');
      $('#'+$(this).attr('rel')).prop("checked",true);
    });
    $('label').click( function(){
      tempChk = $('#'+$(this).attr('for')).change();
      $('.pibee-radio[rel="' + $(this).attr('for') + '"]').toggleClass('checked');
    });
  };
  $.fn.gusanoProgreso = function(){
    $('div[class=gusanoProgreso]').after('<table style="text-align:center;font-size:11px" class="gusanoProgreso">'
                                        +'<tr class="texto"></tr><tr class="bar"></tr></table>');
    $('div[class=gusanoProgreso] > label').each(function(index){
      var color = myHash[$(this).attr('for')];
      var titulo = $(this).attr('id');
      if(index == 0) {
        $('.texto').append('<td style="text-align:left;width:61px;color:'+color+'">'+(index+1)+"."+titulo+'</td>');
        $('.bar').append('<td><span class="'+$(this).attr('for')+'-cabeza"/></td>');
      } else if (index == $('div[class=gusanoProgreso] > label').length - 1) {
        $('.texto').append('<td style="text-align:right;width:61px;color:'+color+'">'+(index+1)+"."+titulo+'</td>');
        $('.bar').append('<td><span class="'+$(this).attr('for')+'-cola"/></td>');
      } else {
        $('.texto').append('<td style="width:98px;color:'+color+'">'+(index+1)+"."+titulo+'</td>');
        $('.bar').append('<td><span class="'+$(this).attr('for')+'-cuerpo"/></td>');
      }
    });
    $('table[class=gusanoProgreso]').appendTo('div[class=gusanoProgreso]');
    $('div[class=gusanoProgreso] > label').remove();
  };
  $.fn.barraProgreso = function(){
    $('div[class=barraProgreso]').after('<table style="text-align:center;font-size:11px" class="barraProgreso">'
                                       +'<tr class="bar"><td><b>Paso '+$('div[class=barraProgreso] > label[for=completo]').length
                                       +'</b> de '+$('div[class=barraProgreso] > label').length+'&nbsp;&nbsp;</td></tr></table>');
    $('div[class=barraProgreso] > label').each(function(index) {
      var color = myHash[$(this).attr('for')];
      var titulo = $(this).attr('id');
      if(index == 0)
        $('.bar').append('<td><span class="'+$(this).attr('for')+'-barra-cabeza"/></td>');
      else if (index == $('div[class=barraProgreso] > label').length - 1)
        $('.bar').append('<td><span class="'+$(this).attr('for')+'-barra-cola"/></td>');
      else
        $('.bar').append('<td><span class="'+$(this).attr('for')+'-barra-cuerpo"/></td>');
    });
    $('table[class=barraProgreso]').appendTo('div[class=barraProgreso]');
    $('div[class=barraProgreso] > label').remove();
  };
  $(document).ready(function(){
    $('a[band]').click(function(){
      if ($(this).attr('band') == '0') {
        $('[rel='+$(this).attr('href')+']').attr('src','/estilos/autogestion/images/mas.png');
        $(this).attr('band', '1');
      } else {
        $('[rel='+$(this).attr('href')+']').attr('src','/estilos/autogestion/images/menos.png');
        $(this).attr('band', '0');
      }
    });
  });
}( jQuery ));