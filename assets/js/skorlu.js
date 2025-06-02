const secenekler = ["taş", "kağıt", "makas"];

let kullaniciSkor = 0;
let bilgisayarSkor = 0;
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
kullaniciSkor++;
} else {
console.log("Kaybettiniz!");
bilgisayarSkor++;
}

console.log(`Skor - Kullanıcı: ${kullaniciSkor} // Bilgisayar: ${bilgisayarSkor}`);
} else {
console.log("Geçersiz seçim yaptınız. Lütfen taş, kağıt veya makas yazın.");
}

let tekrarOyna = prompt("Tekrar oynamak ister misiniz? (e/h):").toLowerCase();
if (tekrarOyna !== "e") {
oyunaDevamEt = false;}}
console.log("Oyun bitti. Teşekkürlerrs");
