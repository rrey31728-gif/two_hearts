// ANIMASI HATI

function buatHati() {
    const hati = document.createElement("div");

    hati.className = "hati";
    hati.innerHTML = Math.random() > 0.5 ? "♡" : "♥";

    hati.style.left = Math.random() * 100 + "vw";
    hati.style.animationDuration = (5 + Math.random() * 4) + "s";

    document.body.appendChild(hati);

    setTimeout(() => hati.remove(), 9000);
}

setInterval(buatHati, 1000);


// ANIMASI BINTANG

function buatBintang() {
    const bintang = document.createElement("div");

    bintang.className = "bintang";
    bintang.innerHTML = "✦";

    bintang.style.left = Math.random() * 100 + "vw";
    bintang.style.top = Math.random() * 100 + "vh";
    bintang.style.fontSize = (10 + Math.random() * 15) + "px";

    document.body.appendChild(bintang);

    setTimeout(() => bintang.remove(), 4000);
}

setInterval(buatBintang, 900);


// ANIMASI KUPU-KUPU

function buatKupu() {
    const kupu = document.createElement("div");

    kupu.className = "kupu-terbang";
    kupu.innerHTML = "🦋";

    kupu.style.left = Math.random() * 80 + "vw";
    kupu.style.top = Math.random() * 70 + "vh";

    document.body.appendChild(kupu);

    setTimeout(() => kupu.remove(), 8000);
}

setInterval(buatKupu, 7000);


// EFEK HATI SAAT LAYAR DISENTUH

document.addEventListener("click", function(event) {
    const hati = document.createElement("div");

    hati.innerHTML = "♡";
    hati.style.position = "fixed";
    hati.style.left = event.clientX + "px";
    hati.style.top = event.clientY + "px";
    hati.style.color = "#e99bc2";
    hati.style.fontSize = "25px";
    hati.style.pointerEvents = "none";
    hati.style.zIndex = "2000";
    hati.style.transition = "1s";

    document.body.appendChild(hati);

    setTimeout(() => {
        hati.style.transform = "translateY(-60px)";
        hati.style.opacity = "0";
    }, 50);

    setTimeout(() => hati.remove(), 1100);
});


// SURAT CINTA

const tombolSurat = document.getElementById("tombolSurat");
const isiSurat = document.getElementById("isiSurat");

tombolSurat.addEventListener("click", function() {
    isiSurat.classList.toggle("tampil");

    if (isiSurat.classList.contains("tampil")) {
        tombolSurat.textContent = "Tutup Surat ♡";
    } else {
        tombolSurat.textContent = "Buka Surat 💗";
    }
});