const secenekler = ["taş", "kağıt", "makas"];

function skorGetir(a) {
  return parseInt(localStorage.getItem(a)) || 0;
}

function skorGuncelle(a) {
  let mevcutSkor = skorGetir(a);
  localStorage.setItem(a, mevcutSkor + 1);
}

function oyunuOyna() {
let kullaniciSkor = skorGetir("kullaniciSkor");
let bilgisayarSkor = skorGetir("bilgisayarSkor");
let oyunaDevamEt = true;

while (oyunaDevamEt) {
let kullaniciSecimi = prompt("Taş, kağıt veya makas seçin:").toLowerCase();

if (
kullaniciSecimi === "taş" ||
kullaniciSecimi === "kağıt" ||
kullaniciSecimi === "makas"
) {
let bilgisayarSecimi = secenekler[Math.floor(Math.random() * 3)];

console.log(`Kullanıcı: ${kullaniciSecimi}`);
console.log(`Bilgisayar: ${bilgisayarSecimi}`);

if (kullaniciSecimi === bilgisayarSecimi) {
console.log("Berabere!");
} else if (
(kullaniciSecimi === "taş" && bilgisayarSecimi === "makas") ||
(kullaniciSecimi === "kağıt" && bilgisayarSecimi === "taş") ||
(kullaniciSecimi === "makas" && bilgisayarSecimi === "kağıt")
) {
console.log("Kazandınız!");
{
console.log("Kaybettiniz!");
skorGuncelle("bilgisayarSkor");
}
console.log(`Skor - Kullanıcı: ${skorGetir("kullaniciSkor")} // Bilgisayar: ${skorGetir("bilgisayarSkor")}`);
} else {
console.log("Geçersiz seçim yaptınız. Lütfen taş, kağıt veya makas yazın.");
}

let tekrarOyna = prompt("Tekrar oynamak ister misiniz? (e/h):").toLowerCase();
if (tekrarOyna !== "e") {
oyunaDevamEt = false;}}
  console.log("Oyun bitti. Teşekkürlerrrs");
}}
oyunuOyna();


































