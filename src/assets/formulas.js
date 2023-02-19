//https://gist.github.com/Nitin-Daddikar/43899765e30274ec739f44ebbac434c3
export const NPER = (rate, payment, present, future, type) => {
	// Initialize type
	type = typeof type === "undefined" ? 0 : type;

	// Initialize future value
	future = typeof future === "undefined" ? 0 : future;

	// Return number of periods
	const num = payment * (1 + rate * type) - future * rate;
	const den = present * rate + payment * (1 + rate * type);
	return Math.log(num / den) / Math.log(1 + rate);
};

//https://gist.github.com/Nitin-Daddikar/43899765e30274ec739f44ebbac434c3
export const PMT = (rate, nper, pv, fv, type) => {
	if (!fv) {
		fv = 0;
	}
	if (!type) {
		type = 0;
	}

	if (rate == 0) {
		return -(pv + fv) / nper;
	}

	const pvif = Math.pow(1 + rate, nper);
	let pmt = (rate / (pvif - 1)) * -(pv * pvif + fv);

	if (type == 1) {
		pmt /= 1 + rate;
	}

	return pmt;
};
