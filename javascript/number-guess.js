var acakAngka = Math.floor(Math.random() * 10) + 1;

var tebakAngka = document.getElementById("tebakAngka");
var hasilTerakhir = document.getElementById("hasilTerakhir");
var besarKecil = document.getElementById("besarKecil");
var angkaPilihan = document.getElementById("angkaPilihan");
var tempatAngka = document.getElementById("tempatAngka");
var kesempatan = 1;

function cekAngka() {
  var angkaTebakan = Number(tempatAngka.value);
   tebakAngka.innerHTML += kesempatan + " ";

  if(kesempatan == 5) {
    hasilTerakhir.innerHTML = "!!!Maaf Anda Kurang Beruntung!!!";
    formOff();
  } else {
    
    if(angkaTebakan == acakAngka) {
      hasilTerakhir.innerHTML = "Selamat!!! Kamu Menebak Angka dengan Tepat!!!!";
      besarKecil.innerHTML = "";
      formOff();
    } else {
      hasilTerakhir.innerHTML = "Tebakan Salah!";
      if(angkaTebakan < acakAngka) {
        besarKecil.innerHTML = "Tebakan Anda Terlalu Kecil!";
      } else if(angkaTebakan > acakAngka) {
        besarKecil.innerHTML = "Tebakan Anda Terlalu Besar!";
      }
    }

    kesempatan++;
    tempatAngka.value = "";
  }
}

function formOff() {
  var wholeForm = document.querySelector(".form"); 
  wholeForm.style.opacity = 0.5;
  tempatAngka.setAttribute("disabled", "disabled");
  angkaPilihan.setAttribute("disabled", "disabled");
}

angkaPilihan.onclick = cekAngka;