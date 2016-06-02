$(function() {
  $("#triangle-form").submit(function(event){
  var aside = parseInt($("#side-a").val());
  var bside = parseInt($("#side-b").val());
  var cside = parseInt($("#side-c").val());
  event.preventDefault();

  if (aside === bside && aside === cside){
    $("#triangle-result").append("<h1>Equilateral</h1><img src='http://study.com/cimages/multimages/16/diagramequilateraltriangle.png'>");
    $("#triangle-result").show();
  }
  else if ((aside === bside && aside !== cside) || (aside !== bside && bside === cside) || (aside === cside && cside !== bside)){
    $("#triangle-result").append("<h1>Isosceles</h1><img src='https://upload.wikimedia.org/wikipedia/commons/9/90/Triangle-isosceles.svg'>");
    $("#triangle-result").show();
  }
  else if ((aside !== bside && bside !== cside && aside !== cside) && ((aside + bside) > cside && (bside + cside) > aside && (aside + cside) > bside)){
    $("#triangle-result").append("<h1>Scalene</h1><img src='http://www.wpclipart.com/education/geometry/triangle/triangle.scalene.png'>");
    $("#triangle-result").show();
  } else {
    $("#triangle-result").append("<h1>Not a triangle</h1>");
    $("#triangle-result").show();
  }

  });
});
