var contactList         = new Array();
var kontak             = Object.create(null);
		kontak.name    = "";
		kontak.email   = "";
		kontak.telpon    = "";
		
function tambahContact(name,email,telpon){
	var kontakBaru       = Object.create(kontak);
		kontakBaru.name  = name;
		kontakBaru.email = email;
		kontakBaru.telpon  = telpon;
	contactList.push(kontakBaru);
}
function tambahKontak(){
	var name  = prompt("Masukan Nama Anda ");
	var email = prompt("Masukan Email Anda");
	var telpon  = prompt("Masukan No Telepon Anda ");
	tambahContact(name,email,telpon);
	document.getElementById("hasil").innerHTML = "Total Kontak tersimpan : " + contactList.length;
	printContactList();
}
function printContactList(){
	var dataPerLine  = ""; 
	var tableHead    = "--- Daftar Kontak Yang Tersimpan --- <br>"
	if(contactList.length>0){
		for(var i=0 ; i<contactList.length ; i++)
		{
			dataPerLine += "Kontak No. "+ [i+1] +"<tr><br> Nama : " + contactList[i].name + "<br> Email : " + contactList[i].email + "<br> Telepon : " + contactList[i].telpon + "<br><br></tr>";
		}
		document.getElementById("showContactList").innerHTML = "<table>" + tableHead + dataPerLine + "</table>";		
	}
	else{
		document.getElementById("showContactList").innerHTML = "";	
		document.getElementById("pesan").innerHTML = "";
	}
}
function cariContact(){
	var name = prompt("Masukkan nama yang ingin di cari");
	var dataPerLine  = ""; 
	var tableHead    = "--- Daftar Nama --- <br>"
	var found = false;

	for(var i=0 ; i<contactList.length ; i++)
	{
		if(contactList[i].name.toUpperCase() === name.toUpperCase()){
			found = true;
			break;
		}		
	}
	if (found){
		dataPerLine += "Kontak No. "+ [i+1] +"<tr><br> Nama : " + contactList[i].name + "<br> Email : " + contactList[i].email + "<br> Telepon : " + contactList[i].telpon + "<br><br></tr>";
		document.getElementById("showContactList").innerHTML = "<table>" + tableHead + dataPerLine + "</table>";
		document.getElementById("pesan").innerHTML = "";
	}
	else{
		document.getElementById("pesan").innerHTML = "Nama "+name+" tidak ada dalam Kontak";	
		printContactList();
	}
}
