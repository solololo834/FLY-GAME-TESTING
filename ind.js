let posisiA = 0;
let posisi = 0;
let posisiB = 0;

function atas() {
  posisi -= 10
  document.getElementById("fli").style.top = posisi + "px"
}

function kanan() {
  posisiA-= 10
  document.getElementById("fli").style.right = posisiA + "px"
}

function bawah() {
  posisiB += 10
  console.log(posisiB)
  document.getElementById("fli").style.bottom =  posisiB + "px"
    }
