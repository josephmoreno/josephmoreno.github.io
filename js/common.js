// Menu functions
function hover_menu(x) {
    x.className = "hovered_menu_item";
}

function unhover_menu(x) {
    x.className = "unhovered_menu_item";
}

// collapse_switch function
var collapse_switches = document.getElementsByClassName("collapse_switch");
var i;

for (i = 0; i < collapse_switches.length; i++) {
    collapse_switches[i].addEventListener("click", function() {
        var collapsible_content = this.nextElementSibling;
        if (collapsible_content.style.display === "block") {
            collapsible_content.style.display = "none";
            this.innerHTML = "Expand";
        }else {
            collapsible_content.style.display = "block";
            this.innerHTML = "Collapse";
        }
    });
}