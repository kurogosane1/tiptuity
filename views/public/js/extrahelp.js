$(document).ready(function(){
   $("btnColor").on("click", function() {
    $("#tip-amount").val() = $("#btnColor").val(1);
    $("#carZip").val() = "11111";
    $("#cvv").val() = "111";
    $("#year").val() = "2019";
    $("#expiry-month").val() = "04";
    $("#card-number").val() = "4242424242424242";
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    });
   }) ;

});