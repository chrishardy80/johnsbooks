function main() {

$('#log').hide();
$('#form').hide();

$('#homenav').on('click',
    function() {
       $('#mainbit').show();
       $('#log').hide();
       $('#form').hide();
  });
$('#lognav').on('click',
    function() {
       $('#mainbit').hide();
       $('#log').show();
       $('#form').hide();
  });

  $('#formnav').on('click',
      function() {
         $('#mainbit').hide();
         $('#log').hide();
         $('#form').show();
    });

    $('.mobile').on('click',
      function() {
        $('.mobilenav').animate({'right': '0'});
    });

    $('#content').click(function(e) {
      if( $(e.target).closest(".mobile").length > 0 ) {
        return false;
    }
        $('.mobilenav').animate({'right': '-450'});
    });

    function inViewport($el) {
    var elH = $el.outerHeight(),
        H   = $(window).height(),
        r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));
}

$(window).on("scroll resize", function(){
  if (inViewport($('#maincontent')) > 900 ) {
    $('#homemob').switchClass('brown', 'orange');
  }
  else {
    $('#homemob').switchClass('orange', 'brown');
  }

  if (inViewport($('#formmobile')) > 900 ) {
    $('#formmob').switchClass('brown', 'orange');
  }
  else {
    $('#formmob').switchClass('orange', 'brown');
  }

});
}
$(document).ready(main);
