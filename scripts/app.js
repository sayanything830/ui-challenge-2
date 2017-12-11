'use strict';

let selectBoxClosed = function() {
  $('.sprite-down-arrow').on('click', function() {
    $('.c').hide();
    $('.d').show();
  });
};

let selectBoxOpen = function() {
  $('.sprite-up-arrow').on('click', function(){
    $('.d').hide();
    $('.c').show();
  });
}

let textError = function() {
  $('.text').on('click', function() {
    $('.text').hide();
    $('.error').show();
  });
};

let textUndoError = function() {
  $('.error').on('click', function() {
    $('.error').hide();
    $('.text').show();
  });
};

let submitOn = function() {
  $('.a').on('click', function() {
    $('.a').hide();
    $('.b').show();
  });
};

let submitOff = function() {
  $('.b').on('click', function() {
    $('.b').hide();
    $('.a').show();
  })
}

$(document).ready(function() {
  $('.d').hide();
  $('.error').hide();
  $('.b').hide();
  selectBoxClosed();
  selectBoxOpen();
  textError();
  textUndoError();
  submitOn();
  submitOff();
});
