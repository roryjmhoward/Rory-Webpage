// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });



















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



















