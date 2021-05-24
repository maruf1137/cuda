 
//  sticky nav
 $(document).ready(function(){
   $(".js-service-section").waypoint(function (n) {
		"down" == n ? $("nav").addClass("sticky") : $("nav").removeClass("sticky")
	});

  // mixitup
    var mixer = mixitup('.container');
 });

//  mobile manu
 function openNav() {
	document.getElementById("mynav").style.width = "100%"
}
function closeNav() {
	document.getElementById("mynav").style.width = "0%"
}