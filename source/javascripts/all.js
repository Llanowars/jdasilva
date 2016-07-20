//= require jquery
//= require bootstrap-sprockets
//= require_tree .
// $(function() {
//     $(".fa fa-star").focus(function(){
//         $(this).val({padding:"10px"});
//     })
// });

$(".fa fa-star").hover(function(event) {
  $(this).toggle({padding: "10px"})
});
