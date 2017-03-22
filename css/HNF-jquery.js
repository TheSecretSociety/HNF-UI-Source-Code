
  //script for Clear button
  $(document).ready(function ClearButton(){
      // script for Cancle Buttons
      $("#Cancle-Button").click(function(){
        $("input, textarea, select").val('').prop('checked', false);
        $("option").prop("selected", function(){return this.defaultSelected;});
      });
  });
  //script for Production line Bar animation
  $(document).ready(function ProductionProgressBar(){
    $('#check1').change(function () {
        // this will contain a reference to the checkbox
        if (this.checked) {
            // the checkbox1 is now checked
            $('#progress1').css('width', '100%').css('transition', '0.5s')
            $('#progress2').css('width', '50%').css('transition','0.5s').css('transition-delay','0.1s')
            $("#check2").prop("disabled", false);
        } else {
            // the checkbox1 is now no longer checked
            $('#progress1').css('width', '50%').css('transition', '0.5s').css('transition-delay','0.1s')
            $('#progress2').css('width', '0%').css('transition', '0.5s')
            $("#check2").prop("disabled", true);

        }
    });
    $('#check2').change(function () {
          // this will contain a reference to the checkbox
          if (this.checked) {
              // the checkbox2 is now checked
              $('#progress2').css('width', '100%').css('transition', '0.5s')
              $('#progress3').css('width', '50%').css('transition','0.5s').css('transition-delay','0.1s')
              $("#check1").prop("disabled", true);
              $("#check3").prop("disabled", false);
          } else {
              // the checkbox2 is now no longer checked
              $('#progress2').css('width', '50%').css('transition', '0.5s').css('transition-delay','0.1s')
              $('#progress3').css('width', '0%').css('transition', '0.5s')
              $("#check1").prop("disabled", false);
              $("#check3").prop("disabled", true);
          }
      });
    $('#check3').change(function () {
        // this will contain a reference to the checkbox
        if (this.checked) {
            // the checkbox3 is now checked
            $('#progress3').css('width', '100%').css('transition', '0.5s')
            $('#progress4').css('width', '50%').css('transition','0.5s').css('transition-delay','0.1s')
            $("#check2").prop("disabled", true);
            $("#check4").prop("disabled", false);

        } else {
            // the checkbox3 is now no longer checked
            $('#progress3').css('width', '50%').css('transition', '0.5s').css('transition-delay','0.1s')
            $('#progress4').css('width', '0%').css('transition', '0.5s')
            $("#check2").prop("disabled", false);
            $("#check4").prop("disabled", true);

        }
    });
    $('#check4').change(function () {
          // this will contain a reference to the checkbox
          if (this.checked) {
              // the checkbox4 is now checked
              $('#progress4').css('width', '100%').css('transition', '0.5s')
              $('#progress5').css('width', '50%').css('transition','0.5s').css('transition-delay','0.1s')
              $("#check3").prop("disabled", true);
              $("#check5").prop("disabled", false);
          } else {
              // the checkbox4 is now no longer checked
              $('#progress4').css('width', '50%').css('transition', '0.5s').css('transition-delay','0.1s')
              $('#progress5').css('width', '0%').css('transition', '0.5s')
              $("#check3").prop("disabled", false);
              $("#check5").prop("disabled", true);
          }
      });
    $('#check5').change(function () {
        // this will contain a reference to the checkbox
        if (this.checked) {
            // the checkbox5 is now checked
            $('#progress5').css('width', '100%').css('transition', '0.5s')
            $('#progress6').css('width', '50%').css('transition','0.5s').css('transition-delay','0.1s')
            $("#check4").prop("disabled", true);
            $("#check6").prop("disabled", false);
        } else {
            // the checkbox5 is now no longer checked
            $('#progress5').css('width', '50%').css('transition', '0.5s').css('transition-delay','0.1s')
            $('#progress6').css('width', '0%').css('transition', '0.5s')
            $("#check4").prop("disabled", false);
            $("#check6").prop("disabled", true);
        }
    });
    $('#check6').change(function () {
          // this will contain a reference to the checkbox
          if (this.checked) {
              // the checkbox6 is now checked
              $('#progress6').css('width', '100%').css('transition', '0.5s')
              $("#check5").prop("disabled", true);

          } else {
              // the checkbox6 is now no longer checked
              $('#progress6').css('width', '50%').css('transition', '0.5s')
              $("#check5").prop("disabled", false);


          }
      });
  });
  //script for Datetimepicker
  $(document).ready(function DatetimePicker(){
    $('#sandbox-container .input-group.date').datepicker({
      weekStart: 1,
      orientation: "bottom auto",
      autoclose: true,
      todayHighlight: true,
      format: "dd/mm/yyyy",
      language:"vi"
    });
    $('#sandbox-container .input-daterange').datepicker({
      format: "dd/mm/yyyy",
      weekStart: 1,
      language: "vi",
      orientation: "bottom auto",
      keyboardNavigation: false,
      autoclose: true,
      todayHighlight: true
    });
  });
  //script for PasswordValidation
  $(document).ready(function FormValidation(){
    $("#Employee-Save-Button").click(function(e) {
      e.preventDefault;
    });
    // HNF-Employee-Personal
    $("#Personal-Update-Button").click(function(e){
      Employee_Personal_Information_FormValidation();
      e.preventDefault;
    });
    function Employee_Personal_Information_FormValidation(){
      var OldPW;
      var NewPW;
      var ConfirmNewPW;
      var OldPwGroup;
      OldPW = document.getElementById('txt-old-password').value;
      NewPW = document.getElementById('txt-new-password').value;
      ConfirmNewPW=document.getElementById('txt-confirm-new-password').value;
      if (OldPW == NewPW) {
        InputClear("txt-old-password");
        InputClear("txt-new-password");
        InputClear("txt-confirm-new-password");
        InputWarning("OldPasswordGroup");
        InputWarning("NewPasswordGroup");

      }else if(OldPW == ConfirmNewPW){

        InputClear("txt-old-password");
        InputClear("txt-new-password");
        InputClear("txt-confirm-new-password");
        InputWarning("OldPasswordGroup");
        InputWarning("ConfirmNewPasswordGroup");

      }else if(NewPW != ConfirmNewPW){

        InputClear("txt-old-password");
        InputClear("txt-new-password");
        InputClear("txt-confirm-new-password");
        InputWarning("NewPasswordGroup");
        InputWarning("ConfirmNewPasswordGroup");
      }
    }
    function InputWarning(GroupID) {
      $('#'+GroupID).addClass("has-danger");
      setTimeout(function InputWarningRemove() {
        $('#'+GroupID).removeClass("has-danger");
      } , 2000);
      return ;
    }
    function InputClear(InputID) {
      $('#'+InputID).val('');
      return;
    }
  });


  (function(document) {
      var _bars = [].slice.call(document.querySelectorAll('.bar-inner'));

      _bars.map(function (bar, index) {
          setTimeout(function() {
            bar.style.width = bar.dataset.percent;
        }, 0);
      })
  })(document);
