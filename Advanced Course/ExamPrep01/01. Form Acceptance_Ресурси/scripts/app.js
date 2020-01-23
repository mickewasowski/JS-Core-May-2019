function acceptance() {
	let warehouseElements = document.getElementById('warehouse');
	
	let company = document.querySelector('input[name="shippingCompany"]');
	let product = document.querySelector('input[name="productName"]');
	let quantity = document.querySelector('input[name="productQuantity"]');
	let scrape = document.querySelector('input[name="productScrape"]');

	let accBtn = document.getElementById('acceptance');
	
	accBtn.addEventListener('click', addProduct);

	function addProduct(){
		if (company.value && product.value && +quantity.value && +scrape.value) {
			let finalQuantity = +quantity.value - +scrape.value;

			if (finalQuantity <= 0) {
				return;
			}

			let div = document.createElement('div');
			let p = document.createElement('p');
			let removeDivBtn = document.createElement('button');
			removeDivBtn.textContent = 'Out of stock';
			removeDivBtn.addEventListener('click', () => {div.remove()});

			p.textContent = `[${company.value}] ${product.value} - ${finalQuantity} pieces`;
			div.appendChild(p);
			div.appendChild(removeDivBtn);
			warehouseElements.appendChild(div);

			company.value = '';
			product.value = '';
			quantity.value = '';
			scrape.value = '';
		}
	}
}