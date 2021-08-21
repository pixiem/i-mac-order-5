//----------- Price Sector -------------------//
document.getElementById('total-cost').innerText = 1299;
function quantity(process) {
    if (process == 8) {
        document.getElementById('totalMemory').innerText = 0;
        totalPrice()
    }
    if (process == 16) {
        document.getElementById('totalMemory').innerText = parseInt(180);
        totalPrice()
    }
    if (process == 256) {
        document.getElementById('totalStorage').innerText = 0;
        totalPrice()
    }
    if (process == 512) {
        document.getElementById('totalStorage').innerText = 100;
        totalPrice()
    }
    if (process == "tb") {
        document.getElementById('totalStorage').innerText = 180;
        totalPrice()
    }
    if (process == "free") {
        document.getElementById("delivery").innerText = 0;
        totalPrice()
    }
    if (process == "paid") {
        document.getElementById("delivery").innerText = 20;
        totalPrice()
    }
}
//--------------Total-Cost-Sector----------------//
function totalPrice() {
    const totalBestPrice = document.getElementById('bestPrice').innerText;
    const totalBestPriceNumber = parseFloat(totalBestPrice);

    const totalMemoryPrice = document.getElementById("totalMemory").innerText;
    const totalMemoryPriceNumber = parseFloat(totalMemoryPrice);

    const totalStoragePrice = document.getElementById("totalStorage").innerText;
    const totalStoragePriceNumber = parseFloat(totalStoragePrice);

    const totalDeliverPrice = document.getElementById("delivery").innerText;
    const totalDeliveryPriceNumber = parseFloat(totalDeliverPrice);


    const iMacPrice = parseInt(totalMemoryPriceNumber + totalStoragePriceNumber + totalDeliveryPriceNumber + totalBestPriceNumber);

    document.getElementById('total-cost').innerText = iMacPrice;
    document.getElementById('final').innerText = iMacPrice;
}
//--------------Promo Section--------------
document.getElementById("apply").addEventListener('click', function () {
    const promoCode = document.getElementById('promo').value;
    if (promoCode == "stevekaku") {
        const totalMoney = document.getElementById('total-cost').innerText;
        var discount = totalMoney * 0.2;
        const BeforePromo = document.getElementById('final').innerText;
        const beforePromoNumber = parseInt(BeforePromo);
        ;
        document.getElementById('final').innerText = beforePromoNumber - discount;
        document.getElementById('promo').value = "";
    }
    else alert("Invalid Promo Code")
})
//_____________________THE END________________//





