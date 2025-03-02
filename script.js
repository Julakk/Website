const hargaDiamond = {
    ml: [
        { diamond: "3 Diamond", harga: 1800 },
        { diamond: "12 Diamond", harga: 20000 },
        { diamond: "28 Diamond", harga: 9240 },
        { diamond: "36 Diamond", harga: 11000 },
        { diamond: "59 Diamond", harga: 18550 },
        { diamond: "74 Diamond", harga: 23365 },
        { diamond: "85 Diamond", harga: 27250 },
        { diamond: "170 Diamond", harga: 100000 },
        { diamond: "185 Diamond", harga: 102000 },
        { diamond: "222 Diamond", harga: 120000 },
        { diamond: "296 Diamond", harga: 122000 },
        { diamond: "370 Diamond", harga: 126000 },
        { diamond: "568 Diamond", harga: 155000 }
    ],
    ff: [
        { diamond: "50", harga: 9000, },
        { diamond: "100", harga: 18000, },
        { diamond: "200", harga: 35000, },
        { diamond: "500", harga: 85000, }
    ],
    pubg: [
        { diamond: "50 UC", harga: 12000 },
        { diamond: "100 UC", harga: 23000 },
        { diamond: "200 UC", harga: 45000 },
        { diamond: "500 UC", harga: 95000 }
    ],
    genshin: [
        { diamond: "60 Genesis Crystals", harga: 15000 },
        { diamond: "300 Genesis Crystals", harga: 75000 },
        { diamond: "980 Genesis Crystals", harga: 225000 },
        { diamond: "1980 Genesis Crystals", harga: 450000 }
    ],
    valorant: [
        { diamond: "125 VP", harga: 20000 },
        { diamond: "625 VP", harga: 100000 },
        { diamond: "1125 VP", harga: 200000 },
        { diamond: "2250 VP", harga: 400000 }
    ],
    codm: [
        { diamond: "80 CP", harga: 15000 },
        { diamond: "420 CP", harga: 75000 },
        { diamond: "880 CP", harga: 150000 },
        { diamond: "1980 CP", harga: 350000 }
    ]
};

const backgroundImages = {
    ml: "url('https://example.com/ml-background.jpg')",
    ff: "url('https://example.com/ff-background.jpg')",
    pubg: "url('https://example.com/pubg-background.jpg')",
    genshin: "url('https://example.com/genshin-background.jpg')",
    valorant: "url('https://example.com/valorant-background.jpg')",
    codm: "url('https://example.com/codm-background.jpg')"
};

function updateTable() {
    let game = document.getElementById("game").value;
    let diamondGrid = document.getElementById("diamondGrid");
    diamondGrid.innerHTML = "";
    selectedDiamond = null;

    hargaDiamond[game].forEach((item, index) => {
        let div = document.createElement("div");
        div.classList.add("diamond-item");
        div.innerHTML = `
            <img src="${item.icon}" alt="Diamond">
            <p><strong>${item.diamond} Diamonds</strong></p>
            <p>Rp${item.harga.toLocaleString()}</p>
        `;

        div.onclick = function () {
            document.querySelectorAll(".diamond-item").forEach(el => el.classList.remove("selected"));
            div.classList.add("selected");
            selectedDiamond = item;
        };

        setTimeout(() => { diamondGrid.appendChild(div); }, index * 100);
    });
}

document.addEventListener("DOMContentLoaded", updateTable);

function selectPayment(method) {
    document.querySelectorAll(".payment-item").forEach(el => el.classList.remove("selected"));
    selectedPayment = method;
    document.querySelectorAll(".payment-item").forEach(el => {
        if (el.innerText.includes(method)) el.classList.add("selected");
    });
}

// Fungsi checkout
function proceedToPayment() {
    if (!selectedDiamond || !selectedPayment) {
        alert("Pilih diamond dan metode pembayaran terlebih dahulu!");
        return;
    }

    let paymentURL = "";
    if (selectedPayment === "Dana") {
        paymentURL = `https://qr.dana.id/v1/281012012021091915586113=${selectedDiamond.harga}`;
    } else if (selectedPayment === "GoPay") {
        paymentURL = `https://gopay.co.id/payment?amount=${selectedDiamond.harga}`;
    }

    alert(`Anda akan diarahkan ke ${selectedPayment} untuk pembayaran.`);
    window.location.href = paymentURL;
}