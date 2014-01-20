// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_self
//= require_tree .
//= require twitter/bootstrap

 var start = $('#start')
 function hideYesandNo( ) {
    $('#yes').fadeToggle( "slow", "linear" )
    $('#no').fadeToggle( "slow", "linear" )
    start.prop("disabled",false)
  }




$(function() {
  var start = $('#start')
  counter = 0
  start.on("click", function() {
    if ($('#textbox').val().length >= 1) {
      counter++
      var itemNum = "item" + counter
      var itemNumber = document.createElement("div")
      itemNumber.setAttribute("id", itemNum)
      itemNumber.setAttribute("class", "completed")
      $('.list-container').append(itemNumber)
      $('.completed').css("display", "inline")
      var useritem = $('#textbox').val()
      $("#" + itemNum).text(useritem)
    }
    start.prop("disabled",true)
    countdown("countdown", 0, 2);
  })
  function countdown(element, minutes, seconds) {
    var time = minutes*60 + seconds;
    var countdown = $('#countdown');
    var interval = setInterval(function() {
    var el = document.getElementById(element);
      if(time == -1) {
        countdown.fadeOut('slow', function() {
          countdown.text("Finished?")
          countdown.fadeIn('slow')
          $('#start').fadeToggle( "slow", "linear" )
          $('#start').css("display", "none")
          hideYesandNo()
        })
        clearInterval(interval);
        return;
      }
      var minutes = Math.floor( time / 60 );
      if (minutes < 10) minutes = "0" + minutes;
      var seconds = time % 60;
      if (seconds < 10) seconds = "0" + seconds;
      var text = minutes + ':' + seconds;
      el.innerHTML = text;
      time--;
  }, 1000);
}
  $('#no').on("click", function() {
    list()
    var start = $('#start')
    hideYesandNo()
    $('#no').css("display", "none")
    $('#yes').css("display", "none")
    start.fadeToggle( "slow", "linear" )
    start.css("display", "inline")
    start.prop("disabled", false)
    $('#countdown').text("25:00")
  })
})
function list(yes) {
  if (yes) {
    var moveItem = (counter * -20) +25
    var topAmount = "+=" + (180 + moveItem)
    $('#item' + counter).animate({
    top: topAmount,
    }, 3000, function() {
    // Animation complete.
    });
  }
  else {
    var moveItem = (counter * -20) +25
    var topAmount = "+=" + (200 + moveItem)
    $('#item' + counter).animate({
    opacity: 0.0,
    top: topAmount,
    }, 3000, function() {});
  }
}

$(function() {
  var id = 10
  start = $('#start')
  $('#yes').on("click", function() {
    list(yes)
    countdown = $('#countdown')
    hideYesandNo()
    $('#no').css("display", "none")
    $('#yes').css("display", "none")
    console.log("this is hit")
    countdown.fadeOut('slow', function() {
      countdown.text("25:00")
      countdown.fadeIn('slow');
      start.css("display", "inline")
      start.prop("disabled", false)
    })
    id +=10
    $('.progressBar').attr("id", "max" + id)
    function progress(percent, element) {
      var progressBarWidth = percent * element.width() / 100;
      element.find('div').animate({ width: progressBarWidth }, 500);
    }
    $('.progressBar').each(function() {
      var bar = $(this);
      var max = $(this).attr('id');
      max = max.substring(3);
      progress(max, bar);
    });
  });
})

var NewsFeed = {
  init: function () {
    NewsFeed.displays()
  },
  texts: [["hello world"], ["still sunny"]],
  textdisplay: document.getElementById('newsfeed'),
  displays: function () {
    var counter = 0
    var feed = document.getElementById('newsfeed')
      setInterval(function(){
        $('#newsfeed').css("display", "none")
        feed.innerHTML = NewsFeed.texts[counter][0]
        $('#newsfeed').show( 1000, function() {
          // Animation complete.
        });
        counter++
        if (counter == NewsFeed.texts.length) {
          counter = 0;
        }
      },10000)
    }
  }


$(function (){
  NewsFeed.init()
})