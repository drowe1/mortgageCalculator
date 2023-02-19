export const format = (node, formatFunction) => {
	function updateValue(e) {
		node.value = formatFunction(node.value);
	}

	node.addEventListener("input", updateValue);
	node.addEventListener("paste", updateValue);

	// Format on intial hydration
	node.value = formatFunction(node.value);

	return {
		destroy() {
			node.removeEventListener("input", updateValue);
			node.removeEventListener("paste", updateValue);
		},
	};
};

export const phoneNumber = (value) => {
	if (!value) return value;
	const phoneNumber = value.replace(/[^\d]/g, "");
	const phoneNumberLength = phoneNumber.length;
	if (phoneNumberLength < 4) return phoneNumber;
	if (phoneNumberLength < 7) {
		return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
	}
	return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
		3,
		6
	)}-${phoneNumber.slice(6, 10)}`;
};

export const money = (value) => {
	if (!value) return value;
	let number = value.replace(/[^\d]/g, "");
	number = number.replace(/^0*/g, "");
	const numberLength = number.length;
	// console.log(phoneNumberLength);
	if (numberLength < 4) {
		if (numberLength === 0) {
			return "";
		}
		return `$${number}`;
	} else {
		if (numberLength % 3 === 0)
			return `$${number.slice(0, 3)},${number.slice(3)}`;
		else if (numberLength % 3 === 1)
			return `$${number.slice(0, 1)},${number.slice(1)}`;
		else if (numberLength % 3 === 2)
			return `$${number.slice(0, 2)},${number.slice(2)}`;
	}
};

//https://codepen.io/559wade/pen/LRzEjj
export const currencyFormatted = (amt) => {
	return (
		"$" +
		String(amt)
			.replace(/\D/g, "")
			.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	);
};
