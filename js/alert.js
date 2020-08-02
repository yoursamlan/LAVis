/*
function info() {
  alert("This is Info");
}

function help() {
  alert("This is Info");
}
*/
$( function() {
    $( "#open_screen_dialog" ).dialog();
  } );

$(function () {
        $("#info").dialog({
            modal: true,
            autoOpen: false,
            width:'auto',
        });
        $("#infobtn").click(function () {
            $('#info').dialog('open');
        });
    });

$(function () {
        $("#help").dialog({
            modal: true,
            autoOpen: false,
            delay:2,
            width:'auto',
        });
        $("#helpbtn").click(function () {
            $('#help').dialog('open');
        });
    });
