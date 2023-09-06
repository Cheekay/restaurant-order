import { menuArray } from "/data.js";

function returnMenuArray(menuArr) {
	return menuArr
		.map((item) => {
			const { name, ingredients, id, price, emoji } = item;
			return `
            <div class="item">
					<div class="emoji">${emoji}</div>
					<div class="item-details">
						<h3 class="item-name">${name}</h3>
						<p class="item-desc">${ingredients}</p>
						<h4 class="item-price">$${price}</h4>
					</div>
						<button class="add-btn">+</button>
				</div>
        `;
		})
		.join("");
}

document.getElementById("itemList").innerHTML = returnMenuArray(menuArray);

function displayPreCheckout(menuArr) {
	const addBTN = document.querySelectorAll(".add-btn");
	const preCheckout = document.getElementById("pre-checkout");
	const title = document.createElement("h2");
	title.innerText = "Your Order";
	preCheckout.appendChild(title);

	menuArr.map((item) => {
		const { name, id, price } = item;
		addBTN.forEach((element) => {
			element.addEventListener("click", function (id) {
				console.log(item.name, item.price, item.id);
			});
		});
	});
}

displayPreCheckout(menuArray);
