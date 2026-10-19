function mintaNilai(label) {
    var input = prompt("Masukkan " + label + " (0-100):");
    if (input === null) {
        return null;
    }

    var nilai = Number(input);
    if (input.trim() === "" || !Number.isFinite(nilai) || nilai < 0 || nilai > 100) {
        var pesan = "Nilai harus berupa angka dari 0 sampai 100.";
        console.log(pesan);
        alert(pesan);
        return null;
    }

    return nilai;
}

function mintaMenu() {
    return prompt("Pilih menu:\n1. Jalankan Soal 1\n2. Jalankan Soal 2\n3. Keluar");
}

function selesaikanSoal1() {
    var nama = prompt("Masukkan nama Anda:");
    if (nama === null) {
        return;
    }

    nama = nama.trim();
    if (nama === "") {
        var pesan = "Nama tidak boleh kosong.";
        console.log(pesan);
        alert(pesan);
        return;
    }

    var nilaiTugas = mintaNilai("nilai tugas");
    if (nilaiTugas === null) {
        return;
    }

    var nilaiUts = mintaNilai("nilai UTS");
    if (nilaiUts === null) {
        return;
    }

    var nilaiUas = mintaNilai("nilai UAS");
    if (nilaiUas === null) {
        return;
    }

    var nilaiAkhir = nilaiTugas * 0.3 + nilaiUts * 0.3 + nilaiUas * 0.4;
    var output = document.getElementById("output-soal1");
    output.textContent = "Nama: " + nama + "\nNilai Akhir: " + nilaiAkhir.toFixed(2);
    if (nilaiAkhir >= 75) {
        output.textContent += "\nStatus: Lulus";
    } else {
        output.textContent += "\nStatus: Tidak Lulus";
    }
    console.log(output.textContent);
    output.style.display = "block";
}

function mintaJumlah(menu, bolehNol) {
    var input = prompt("Masukkan jumlah " + menu.nama + (bolehNol ? " (0 jika tidak membeli):" : ":"));
    if (input === null) {
        return null;
    }

    var jumlah = Number(input);
    if (input.trim() === "" || !Number.isInteger(jumlah) || jumlah < (bolehNol ? 0 : 1)) {
        var pesan = "Jumlah harus berupa bilangan bulat " + (bolehNol ? "minimal 0." : "lebih dari 0.");
        console.log(pesan);
        alert(pesan);
        return null;
    }

    return jumlah;
}

function jalankanSoal2() {

    var nama = prompt("Masukkan nama Pembeli:");
    if (nama === null) {
        return;
    }

    nama = nama.trim();
    if (nama === "") {
        var pesan = "Nama tidak boleh kosong.";
        console.log(pesan);
        alert(pesan);
        return;
    }

    var menu = [
        { nama: "Nasi Goreng", harga: 15000 },
        { nama: "Es Teh", harga: 5000 },
        { nama: "Roti", harga: 7000 }
    ];
    var pilihan = prompt(
        "Pilih menu makanan:\n" +
        "1. Nasi Goreng - Rp 15.000\n" +
        "2. Es Teh - Rp 5.000\n" +
        "3. Roti - Rp 7.000\n" +
        "4. Semua"
    );
    if (pilihan === null) {
        return;
    }

    pilihan = pilihan.trim();
    if (!["1", "2", "3", "4"].includes(pilihan)) {
        var pesan = "Pilihan menu tidak valid.";
        console.log(pesan);
        alert(pesan);
        return;
    }

    var menuDipilih = pilihan === "4" ? menu : [menu[Number(pilihan) - 1]];
    var pesanan = [];
    var total = 0;
    for (var i = 0; i < menuDipilih.length; i++) {
        var jumlah = mintaJumlah(menuDipilih[i], pilihan === "4");
        if (jumlah === null) {
            return;
        }
        if (jumlah > 0) {
            var subtotal = jumlah * menuDipilih[i].harga;
            pesanan.push(menuDipilih[i].nama + " x " + jumlah + " = Rp " + subtotal.toLocaleString("id-ID"));
            total += subtotal;
        }
    }

    if (pesanan.length === 0) {
        var pesan = "Pilih minimal satu makanan untuk dibeli.";
        console.log(pesan);
        alert(pesan);
        return;
    }

    var output = document.getElementById("output-soal2");
    var hasil = "Pembeli: " + nama + "\nPesanan:\n" + pesanan.join("\n") +
        "\nTotal sebelum diskon: Rp " + total.toLocaleString("id-ID");
    if (total > 50000) {
        var diskon = total * 0.1;
        var totalSetelahDiskon = total - diskon;
        hasil += "\nDiskon 10%: Rp " + diskon.toLocaleString("id-ID") +
            "\nTotal setelah diskon: Rp " + totalSetelahDiskon.toLocaleString("id-ID");
    } else {
        hasil += "\nBelanja lebih dari Rp 50.000 untuk mendapatkan diskon 10%.";
    }

    console.log(hasil);
    output.textContent = hasil;
    output.style.display = "block";
}

function cetakKePDF() {
    var output1 = document.getElementById("output-soal1");
    var output2 = document.getElementById("output-soal2");
    
    if (output1 && output1.textContent.trim() !== "") {
        output1.style.display = "block";
    }
    if (output2 && output2.textContent.trim() !== "") {
        output2.style.display = "block";
    }

    window.print();
}
