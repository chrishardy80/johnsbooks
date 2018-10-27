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

    $('#maincontent').click(function(e) {
      if( $(e.target).closest(".mobile").length > 0 ) {
        return false;
    }
        $('.mobilenav').animate({'right': '-190'});
    });
}
$(document).ready(main);
