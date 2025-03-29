function adjustPrice(id, adjustment) {
    const priceElement = document.getElementById(id);
    let currentPrice = parseInt(priceElement.textContent.replace('₩', '').replace(',', ''));
    currentPrice += adjustment;

    if (currentPrice < 0) {
        currentPrice = 0; // 가격이 마이너스 값이 되지 않도록 한계를 설정했습니다.
    }

    priceElement.textContent = `₩${currentPrice.toLocaleString()}`;
}

// - 버튼이 클릭되면 가격이 감소하도록 설정(간격: 10000원)
document.getElementById("decrease-1").addEventListener("click", function() {
    adjustPrice("price-1", -10000); 
});

// + 버튼이 클릭되면 가격이 감소하도록 설정(간격: 10000원)
document.getElementById("increase-1").addEventListener("click", function() {
    adjustPrice("price-1", 10000);
});

