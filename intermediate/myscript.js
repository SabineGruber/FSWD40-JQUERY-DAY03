$(document).ready(function() {
// $(".prod-info-main:eq(0),.prod-info-main:eq(1)").css("background-color", "red");
// $(".prod-info-main:eq(2),.prod-info-main:eq(1)").css("background-color", "red");
$(".prod-info-main:eq(0),.prod-info-main:eq(1)").addClass("computer");
$(".prod-info-main:eq(2),.prod-info-main:eq(3), .prod-info-main:eq(6)").addClass("mobiles");
$(".prod-info-main:eq(4),.prod-info-main:eq(5), .prod-info-main:eq(7)").addClass("tablets");

$(".computer").css("background-color", "red");
$(".mobiles").css("background-color", "green");
$(".tablets").css("background-color", "yellow");




});