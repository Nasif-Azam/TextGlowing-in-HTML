$(document).ready(function () {
    if ($(window).width() > 768) {
        $(" ul.navig").show();
    } else {
        $(" ul.navig").hide();
    }
    $(".registration_form").hide();
});
$("#district").change(function () {
    $("#form1").submit();
});
$('#accept-check').click(function (event) {
        if (this.checked) {
            $('#accept-btn').removeClass("disabled");
            $('#accept-btn').click(function(){
                $(".agrement").hide();
                $(".registration_form").css("visibility","visible");
                $(".registration_form").show();
            });
            
        } else {
            $('#accept-btn').addClass("disabled");
        }
});