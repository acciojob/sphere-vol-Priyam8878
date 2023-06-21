// function volume_sphere() {
//     //Write your code here
// 	const radius = document.getElementById("radius").value;
	
//     const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
	
// 	const VolumeInput = document.getElementById("volume")
// 	VolumeInput.value =volume.toFixed(4);
// }
  
 

// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

function volume_sphere(event) {
event.preventDefault(); // Prevent form submission

let radius = document.getElementById("radius").value;
let volume = (4 / 3) Math.PI Math.pow(radius, 3);

document.getElementById("volume").value = volume.toFixed(4); // Adjust precision here
}

window.onload = function() {
document.getElementById('MyForm').addEventListener('submit', volume_sphere);
};