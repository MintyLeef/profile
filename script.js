 

let about = document.getElementById("document");

about.addEventListener("click", whenClicked);

about.addEventListener("mouseover", whenHovered);



function whenClicked(){
let newheading = document.createElement("hi");
newHeading.innerText = "XDELRIOUS";
newHeading.style.color = "blue";
newHeading.style.fontsize = "48px";
about.appendChild(newHeading);
}

function whenHovered() {
	body.style.color = "pink";
}

function WhenNoHovered() {
	body.style.color = "white"

}