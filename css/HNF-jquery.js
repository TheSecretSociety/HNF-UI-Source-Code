// script for HNF-Customer-ContractDetail-DetailDesign
// Cancle Buttons
  $(document).ready(function(){
    $("#Cancle-Button").click(function(){
      $("input, textarea, select").val('').prop('checked', false);
    });
  });
  // script for HNF-CustomerCare-Detail.html
  // Cancle Buttons
  $(document).ready(function(){
    $("#CustomerCare-Cancle-Button").click(function(){
      $("select").empty().append('<option selected="selected" value="whatever">ádasdasd</option>');
    });
  });
