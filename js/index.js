function myFunction(x) {
    x.classList.toggle("change");
}
$(document).ready(function(){

  $('.button-container').on('click', function(){
      $('.container ul').toggleClass('show');
  });

  //get amount of scrollers and store number in array
  var numberOfItems = [];
  var getItemNumber = $('.scroll_full').length;
  var leftPosPx;
  var leftPosNum;
  var moveAmount;
  var childWidth;


  for(var i=0; i < getItemNumber; i++){
    numberOfItems.push(i);
    $('.scroll_full').each(function (i) {
      $(this).attr('id', 'scroll_full_' +  i);
      $('#scroll_full_' + i).data("childCount",$('#scroll_full_' + i + ' .scroll_content').children().length);
      $('#scroll_full_' + i).data("fullWidth",($('#scroll_full_' + i + ' .scroll_content').children().length)*($('#scroll_full_' + i + ' .scroll_content .box').outerWidth(true)));
      $('#scroll_full_' + i + ' .scroll_content').width(($('#scroll_full_' + i + ' .scroll_content').children().length)*($('#scroll_full_' + i + ' .scroll_content .box').outerWidth(true)));
    });
  }

  function genericPos(myParent){
    fullWidth_data = $("#" + myParent).data("fullWidth");
    leftPosPx = $("#" + myParent + ' .scroll_content').css("left");//with px
    leftPosNum = leftPosPx.substr(0, leftPosPx.length-2);//remove px
    moveAmount = -(fullWidth_data - $("#" + myParent + ' .scroll_container').width());
    childWidth = $('.scroll_content .box').outerWidth(true);
  }

  $('.wrapper__next').click(function(e){
    e.preventDefault();
    var myParent = $(this).closest("div").attr("id");
    genericPos(myParent);

    if(leftPosNum > moveAmount){
      $("#" + myParent + ' .scroll_content').css("left", '-='+ childWidth +'px');
    }else{//snap back
      $("#" + myParent + ' .scroll_content').css("left", moveAmount + 'px');
    }
  });

  $('.wrapper__prev').click(function(e){
    e.preventDefault();
    var myParent = $(this).closest("div").attr("id");
    genericPos(myParent);

    if(leftPosNum < 0){
      $("#" + myParent + ' .scroll_content').css("left", '+='+ childWidth +'px');
    }else{//snap back
      $("#" + myParent + ' .scroll_content').css("left", '0px');
    }
  });


    $('.button-container').on('click', function(){
        $('nav ul').toggleClass('show');
    });
});
$('.responsive').slick({
  dots: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 365,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
