$(document).ready(function() {
  //  Click event on radio
  ShowHideCreditcardsOptions();
  
  //  CC validation
  FormValidate();
});

function ShowHideCreditcardsOptions() {
  $('input[name="payment-method"]').on('change', function() {
    var option = $(this).val();
    
    if(option === "credit") {
      $('.creditcard').show();
    } else {
      $('.creditcard').hide();
    }
  });
}

function FormValidate() {
  
  //  Mask expiration validate
  $('#expiration').mask('00/00');
  $('#cvc').mask('000');
  
  $('form').validate({
    rules: {
      cardnumber: {
        required: true,
        creditcard: true
      },
      expiration: {
        required: true
      },
      cvc: {
        required: true
      }
    }  
  })
        //console.log('💵💸🤑 Payment processed!');
}
