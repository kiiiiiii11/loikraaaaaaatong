function launchKrathong() {
    let wishText = document.getElementById("wishInput").value;
    if (wishText.trim() === "") {
        alert("กรุณากรอกคำอวยพรก่อนลอยกระทง!");
        return;
    }

    // แสดงป๊อปอัพ
    document.getElementById("popup").style.display = "block";

    // สร้างกระทงและข้อความอวยพร
    let krathongContainer = document.createElement("div");
    krathongContainer.classList.add("krathong-container");
    krathongContainer.style.top = Math.random() * 200 + "px";

    let krathong = document.createElement("img");
    krathong.src = "krathong.png";
    krathong.classList.add("krathong");

    let wish = document.createElement("p");
    wish.classList.add("wish-text");
    wish.textContent = wishText;

    krathongContainer.appendChild(wish);
    krathongContainer.appendChild(krathong);
    document.getElementById("river").appendChild(krathongContainer);

    // ลบกระทงเมื่อมันลอยออกไป
    setTimeout(() => {
        krathongContainer.remove();
    }, 15000);
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("wishInput").value = "";
}
