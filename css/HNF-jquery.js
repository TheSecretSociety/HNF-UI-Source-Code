
  //============ Clear button =============//
  $(document).ready(function ClearButton(){
      // script for Cancle Buttons
      $("#Cancle-Button").click(function(){
        $("input, textarea, select").val('').prop('checked', false);
        $("option").prop("selected", function(){return this.defaultSelected;});
      });
  });
  // =========== Delete Button Warning ======== //
  $(document).ready(function DeleteButtonWarning() {
    $('#EmployeeDeleteBtn').click(function() {
      DeleteWarning();
    })
    $('#CustomerDetailDeleteBtn').click(function() {
      DeleteWarning();
    })
    $('#CustomerDeleteBtn').click(function(){
      DeleteWarning();
    });
    function DeleteWarning() {
      var DeleteState = confirm("Bạn Có Chắc Chắn Muốn Xoá ?");
      if (DeleteState == true) {
        alert("Xoá Thành Công!");
        return true;
      }else{
        alert("Đã Huỷ Lệnh Xoá");
        return false;
      }
    }
  });
  //=========== Production line Bar animation ===== //
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
  //========== Datetimepicker ============//
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
  // =========== Login Validation ===========//
  $(document).ready(function LoginValidation() {
      $('#LoginButton').click(function() {
        LoginValidate();
      });
      // validate email and password
      function LoginValidate() {
        var PasswordValue = $('#TxtLoginPassword').val();
        var UsernameValue = $('#TxtLoginID').val();
        if (LoginUsernameValidate(UsernameValue) && LoginPasswordValidate(PasswordValue)){
          alert("Login Successfully");

        }else{
          alert("Login Fail");
        }
      };
      // validate email format
      function LoginUsernameValidate(TxtLoginID){
        var EmailRegEx= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(EmailRegEx.test(TxtLoginID));
        return EmailRegEx.test(TxtLoginID);
      }
      // validate password format
      function LoginPasswordValidate(TxtLoginPassword) {
        var PasswordRegEx= /^.{1,}$/;
        console.log(PasswordRegEx.test(TxtLoginPassword));
        return PasswordRegEx.test(TxtLoginPassword);
      }
    }
  );
  // =========== Employee Personal Validation ======= //
  $(document).ready(function EmployeePersonalValidation() {
      $('#Personal-Update-Button').delay(200).click(function() {
        EmployeePersonalValidate();
      });
      function EmployeePersonalValidate() {
        var NameValue = $('#InputName').val();
        var PhoneValue = $('#InputPhone').val();
        if (EmployeePersonalValidate(NameValue) && EmployeePersonalValidate(PhoneValue)){
          alert("Edit Successfully");
        }else{
          alert("Edit Fail");
        }
      };
      //validate name format
      function EmployeeNameValidate(InputName){
        var NameRegEx= /^[a-zA-Z ]{2,30}$/;
        console.log(NameRegEx.test(InputName));
        return NameRegEx.test(InputName);
      }
      //validate phone number format
      function EmployeePhoneValidate(InputPhone){
        var PhoneRegEx= /^[\d]{2,13}$/;
        console.log(PhoneRegEx.test(InputPhone));
        return PhoneRegEx.test(InputPhone);
      }
    });
      //validate employee information





  // ============= Statictis ============= //
  (function(document) {
      var _bars = [].slice.call(document.querySelectorAll('.bar-inner'));

      _bars.map(function (bar, index) {
          setTimeout(function() {
            bar.style.width = bar.dataset.percent;
        }, 0);
      })
  })(document);
