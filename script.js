$(document).ready(function(){
    var template = $('#hidden-template').html();

    $(".addLine").click(function () {
        $(".phrases").append(template);
        $('.horizontalGrow textarea').autogrow({vertical: false, horizontal: true});
    });

    $(".modeCorrection").click(function () {
        $("textarea").toggleClass("blanc");
    });

    $(".phrases").append(template);
    $('.horizontalGrow textarea').autogrow({vertical: false, horizontal: true});
});