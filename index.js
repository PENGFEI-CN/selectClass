
$(document).ready(function (){

$("#form1").submit(function () {

  let t = $('#form1').serializeArray();
  $.each(t, function (i,item) {
    if (item.value != "") {
      $("#selected").append(item.value);
    }
  });
      return false;
});

$("#form2").submit(function () {
  let t1 = $('#week option:selected').text();
  let t2 = $('#class option:selected').text();
  console.log(t1,t2);
  $("#unselected").append(t1,t2);
return false;
});
var d= $("#selected").text();
/*$.each(t, function (i,item) {
  if (item.value != "") {
    $("#unselected").append(item.value);
  }
}); */
/*$("#selectedClasses").click(function(){
  alert($("#selected").text());
});*/


})
