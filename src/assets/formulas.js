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

// https://gist.github.com/ghalimi/4637388
export const PPMT = (rate, period, periods, present, future, type) => {
	return PMT(rate, periods, present, future, type) - IPMT(rate, period, periods, present, future, type);
}

// https://gist.github.com/ghalimi/4590988
export const IPMT = (rate, period, periods, present, future, type) => {
  // Credits: algorithm inspired by Apache OpenOffice

  // Initialize type
  var type = (typeof type === 'undefined') ? 0 : type;

  // Evaluate rate and periods (TODO: replace with secure expression evaluator)
  rate = eval(rate);
  periods = eval(periods);

  // Compute payment
  var payment = PMT(rate, periods, present, future, type);
  
  // Compute interest
  var interest;
  if (period === 1) {
    if (type === 1) {
      interest = 0;
    } else {
      interest = -present;
    }
  } else {
    if (type === 1) {
      interest = FV(rate, period - 2, payment, present, 1) - payment;
    } else {
      interest = FV(rate, period - 1, payment, present, 0);
    }
  }
  
  // Return interest
  return interest * rate;
}


// https://gist.github.com/ghalimi/4590219
function FV(rate, periods, payment, value, type) {
  // Credits: algorithm inspired by Apache OpenOffice

  // Initialize type
  var type = (typeof type === 'undefined') ? 0 : type;

  // Evaluate rate (TODO: replace with secure expression evaluator)
  rate = eval(rate);

  // Return future value
  var result;
  if (rate === 0) {
    result = value + payment * periods;
  } else {
    var term = Math.pow(1 + rate, periods);
    if (type === 1) {
      result = value * term + payment * (1 + rate) * (term - 1.0) / rate;
    } else {
      result = value * term + payment * (term - 1) / rate;
    }
  }
  return -result;
}
