function volume_sphere() {
    //Write your code here
	const radiusInput = document.getElementById("radius")
	const radius=parseFloat(radiusInput.value);
	
     const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
	const VolumeInput = document.getElementById("volume")
	VolumeInput.value = volume;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
