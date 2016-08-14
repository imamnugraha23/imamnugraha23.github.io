
function perhitunganPangkat() {
	var hasil = [];

	if(hasil.length>0){
		document.getElementById("hasilPangkat").value = "";
	}
	else{
		var nilai1 = document.getElementById("pangkatnilai1").value;
		var nilai2 = document.getElementById("pangkatnilai2").value;
		document.getElementById("hasilPangkat").value = Math.pow(nilai1,nilai2)
	}	
	
}

function perhitunganAkar() {
	var valResult = [];

	if(valResult.length>0){
		document.getElementById("hasilAkar").value = "";
	}
	else{
		var nilai = document.getElementById("nilaiAkar").value;
		document.getElementById("hasilAkar").value = Math.sqrt(nilai);
	}
}

function perhitunganHipotenusa() {
	var valResult = [];

	if(valResult.length>0){
		document.getElementById("hipotenusa").value = "";
	}
	else{
		var nilai1 = document.getElementById("nilaiA").value;
		var nilai2 = document.getElementById("nilaiB").value;
		
		document.getElementById("hipotenusa").value = Math.sqrt(Math.pow(nilai1,2)+Math.pow(nilai2,2));
	}
}


function perhitunganLingkaran() {
	var valResult = [];

	if(valResult.length>0){
		document.getElementById("lingkaran").value = "";
	}
	else{
		var nilai = document.getElementById("nilair").value;
		document.getElementById("lingkaran").value = (Math.PI*Math.pow(nilai,2)).toFixed(0);
	}
}