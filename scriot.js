// =========================
// ORDER FORM
// =========================

const orderButtons = document.querySelectorAll(".order-btn");
const orderMenu = document.getElementById("orderMenu");
const orderQuantity = document.getElementById("orderQuantity");
const orderTotal = document.getElementById("orderTotal");
const orderForm = document.getElementById("orderForm");

let selectedPrice = 0;


// =========================
// PILIH MENU
// =========================

orderButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const menuName = button.getAttribute("data-menu");
        const menuPrice = Number(button.getAttribute("data-price"));

        selectedPrice = menuPrice;

        orderMenu.value = menuName;
        orderQuantity.value = 1;

        updateTotal();

        document.querySelector("#order").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// =========================
// HITUNG TOTAL
// =========================

function updateTotal() {

    const quantity = Number(orderQuantity.value);

    if (selectedPrice > 0 && quantity > 0) {

        const total = selectedPrice * quantity;

        orderTotal.value =
            "Rp" + total.toLocaleString("id-ID");

    }

}


// =========================
// JUMLAH PESANAN BERUBAH
// =========================

if (orderQuantity) {

    orderQuantity.addEventListener("input", function () {
        updateTotal();
    });

}


// =========================
// BUAT PESANAN
// =========================

if (orderForm) {

    orderForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const customerName =
            document.getElementById("customerName").value;

        const menuName =
            orderMenu.value;

        const quantity =
            orderQuantity.value;

        const total =
            orderTotal.value;

        if (!menuName) {

            alert("Silakan pilih menu terlebih dahulu.");

            return;
        }

        alert(
            "Pesanan berhasil dibuat!\n\n" +
            "Nama: " + customerName + "\n" +
            "Menu: " + menuName + "\n" +
            "Jumlah: " + quantity + "\n" +
            "Total: " + total
        );

        orderForm.reset();

        orderMenu.value = "";
        orderTotal.value = "";

        selectedPrice = 0;

    });

}


// =========================
// CONTACT FORM
// =========================

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "Pesan berhasil dikirim!\n\n" +
            "Terima kasih sudah menghubungi Brew Haven."
        );

        contactForm.reset();

    });

}