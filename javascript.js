function myFunction(x) {
    x.classList.toggle("change");
}
function dropdown() {
	document.getElementById('mydropdown').classList.toggle("show");
}
window.onclick = function(event){
    if (!event.target.matches('.dropdown')) {
        var dropdowns = document.getElementsByClassName('drop-content');
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
    setTimeout(carousel, 4000); // Change image every 4 seconds
}
var slideIndex2 = 0;
carousel2();

function carousel2() {
    var p;
    var q = document.getElementsByClassName("slide2");
    for (p = 0; p < q.length; p++) {
        q[p].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > q.length) { slideIndex2 = 1 }
    q[slideIndex2 - 1].style.display = "block";
    setTimeout(carousel2, 5000); // Change image every 4 seconds
}



















$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});