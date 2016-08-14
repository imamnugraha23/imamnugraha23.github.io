function pilihanPengguna(){
	var pilihan =  prompt("Ketik Jempol / Telunjuk / Kelingking?");
	return pilihan.toLowerCase();
}

function pilihanLawan(){
	var mathRandom = (Math.random() * (1 - 0 + 1) + 0);
	var pilihanLawan;
	if (mathRandom <= 0.33) {
    	pilihanLawan = "jempol";
	} else if(mathRandom <= 0.66) {
	    pilihanLawan = "telunjuk";
	} else {
	    pilihanLawan = "kelingking";
	}	
	return pilihanLawan;
}

function bertarung(pengguna, lawan){
	if(pengguna==="jempol" && lawan==="telunjuk")
	{
		document.getElementById("hasil").innerHTML = "Selamat Pemenangnya adalah: Pengguna,    Karena Lawan Menggunakan telunjuk";
	}
	if(pengguna==="telunjuk" && lawan==="kelingking")
	{
		document.getElementById("hasil").innerHTML = "Selamat Pemenangnya adalah: Pengguna,    Karena Lawan Menggunakan kelingking";
	}
	if(pengguna==="kelingking" && lawan==="jempol")
	{
		document.getElementById("hasil").innerHTML = "Selamat Pemenangnya adalah: Pengguna,    Karena Lawan menggunkan jempol";
	}	
	if(pengguna==="jempol" && lawan==="jempol")
	{
		document.getElementById("hasil").innerHTML = "Permainan Suit Seri, karena sama-sama menggunakan jempol";
	}		
	if(pengguna==="kelingking" && lawan==="kelingking")
	{
		document.getElementById("hasil").innerHTML = "Permainan Suit Seri, karena sama-sama menggunakan kelingking";
	}
	if(pengguna==="telunjuk" && lawan==="telunjuk")
	{
		document.getElementById("hasil").innerHTML = "Permainan Suit Seri, karena sama-sama menggunakan telunjuk";
	}
	if(pengguna==="jempol" && lawan==="kelingking")
	{
		document.getElementById("hasil").innerHTML = "Maaf Pemenangnya adalah: Komputer, karena komputer menggunakan kelingking";
	}
	if(pengguna==="telunjuk" && lawan==="jempol")
	{
		document.getElementById("hasil").innerHTML = "Maaf Pemenangnya adalah: Komputer, karena komputer menggunakan jempol";
	}
	if(pengguna==="kelingking" && lawan==="telunjuk")
	{
		document.getElementById("hasil").innerHTML = "Maaf Pemenangnya adalah: Komputer, karena komputer menggunakan telunjuk";
	}
	
}

function suit(){
	var pengguna = pilihanPengguna();
	var lawan    = pilihanLawan();
	bertarung(pengguna,lawan);
}