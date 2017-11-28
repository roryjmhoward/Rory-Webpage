function dropdown(){
	document.getElementById('mydropdown').classList.toggle("show");
}
window.onclick = function(event){
	if (!event.target.matches('.dropdown')){
		var dropdowns = document.getElementByClassName('drop-content');
		var i;
		for (i = 0; i < dropdowns.length; i++){
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')){
				openDropdown.classList.remove('show');
			}
		}
	}
}
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 4000); // Change image every 2 seconds
}