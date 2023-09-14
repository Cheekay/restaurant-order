import { menuArray } from "/data.js";

function buttonTest() {
	alert("clicked!");
}

function returnMenuArray(menuArr) {
	return menuArr
		.map((item) => {
			const { name, ingredients, id, price, emoji } = item;
			let count = 0;
			return `
            <div class="item">
					<div class="emoji">${emoji}</div>
					<div class="item-details">
						<h3 class="item-name">${name}</h3>
						<p class="item-desc">${ingredients}</p>
						<h4 class="item-price">$${price}</h4>
					</div>
						<button class="add-btn" data-id=${id}">+</button>
				</div>
        `;
		})
		.join("");
}

document.getElementById("itemList").innerHTML = returnMenuArray(menuArray);

function displayPreCheckout() {
	const addBTN = document.querySelectorAll(".add-btn");

	let totalSumArray = [];
	menuArray.map((item) => {
		const { name, id, price } = item;
		addBTN.forEach((button) => {
			button.addEventListener("click", function () {
				const dataInfo = button.getAttribute("data-id");
				if (parseInt(dataInfo) === id) {
					//Create the checkout title and assign inner text
					const checkoutTitle = document.getElementById("checkout-title");
					checkoutTitle.innerText = "Your Order";

					//Create the total price list-item that generated once an item is added to cart
					const totalPrice = document.getElementById("total-price");

					const checkoutList = document.getElementById("checkout-list");
					const checkoutItem = document.createElement("li");
					checkoutItem.innerHTML = `
							${name} <button class="remove-item">remove</button>
							<span class="item-price">$${price}</span>
						`;
					checkoutList.appendChild(checkoutItem);

					// Push each item's price to the total Array created earlier
					totalSumArray.push(price);

					const totalPriceSum = totalSumArray.reduce((total, current) => {
						return total + current;
					}, 0);
					totalPrice.innerHTML = `
					Total Price: <span class="item-price">$${totalPriceSum}</span>
					`;

					const purchaseBTN = document.getElementById("purchase-btn");
					purchaseBTN.style.display = "block";
				}
			});
		});
	});
}

function removeItem() {
	
}

displayPreCheckout();
