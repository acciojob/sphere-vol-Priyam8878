function volume_sphere() {
    //Write your code here
	const radius = document.getElementById("radius").value;
	
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
	
	const VolumeInput = document.getElementById("volume")
	VolumeInput.value =volume.toFixed(4);
}
  
 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
