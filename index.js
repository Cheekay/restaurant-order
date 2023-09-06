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
						<button id="add-btn">+</button>
				</div>
        `;
		})
		.join("");
}

document.getElementById("itemList").innerHTML = returnMenuArray(menuArray);
