document.addEventListener("DOMContentLoaded", function () {
  const menuData = [
    {
      imgSrc: "/img/dish1.jpeg",
      name: "Pasta",
      price: 12.0,
    },
    {
      imgSrc: "/img/dish2.jpg",
      name: "Cobb Salad",
      price: 15.0,
    },
    {
      imgSrc: "/img/dish3.jpeg",
      name: "Blueberry Bliss",
      price: 12.0,
    },
    {
      imgSrc: "/img/dish4.jpeg",
      name: "Buttermilk Pancakes",
      price: 10.0,
    },
    {
      imgSrc: "/img/dish5.jpg",
      name: "Salmon BLT",
      price: 18.0,
    },
    {
      imgSrc: "/img/dish6.jpeg",
      name: "Patty Melt",
      price: 21.0,
    },
  ];

  const menu = document.querySelector(".menu");
  const ordersList = document.querySelector(".orders-list");
  const payBillBtn = document.getElementById("pay-bill-btn");
  const totalAmountDisplay = document.getElementById("total-amount");

  let totalAmount = 0;

  // Populate menu
  menuData.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const image = document.createElement("img");
    image.src = item.imgSrc;
    image.alt = item.name;
    menuItem.appendChild(image);

    const itemName = document.createElement("h2");
    itemName.textContent = item.name;
    menuItem.appendChild(itemName);

    const itemPrice = document.createElement("p");
    itemPrice.textContent = `$${item.price.toFixed(2)}`;
    menuItem.appendChild(itemPrice);

    menu.appendChild(menuItem);
  });

  // Add click event listener to menu
  menu.addEventListener("click", function (event) {
    const menuItem = event.target.closest(".menu-item");
    if (!menuItem) return;

    const itemName = menuItem.querySelector("h2").textContent;
    const itemPrice = parseFloat(
      menuItem.querySelector("p").textContent.replace("$", "")
    );

    const orderItem = document.createElement("li");
    orderItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
    ordersList.appendChild(orderItem);

    // Add item price to total amount
    totalAmount += itemPrice;
    totalAmountDisplay.textContent = `Total: $${totalAmount.toFixed(2)}`;
  });

  // Add click event listener to pay bill button
  payBillBtn.addEventListener("click", function () {
    alert(`Total Amount: $${totalAmount.toFixed(2)}`);
    ordersList.innerHTML = "";
    totalAmount = 0;
    totalAmountDisplay.textContent = "Total: $0.00";
  });
});
