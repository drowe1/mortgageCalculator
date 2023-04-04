<script>
	import { format, currencyFormatted } from "./assets/format";
	import { NPER, PMT } from "./assets/formulas";

	let purchasePrice = 290000;
	$: purchasePriceTxt = currencyFormatted(purchasePrice);
	let downPayment = 60500;
	$: downPaymentTxt = currencyFormatted(downPayment);
	let hoa = 0;
	$: hoaText = currencyFormatted(hoa);
	let interestRate = 0.072;
	let pmiRate = 0.0075;
	let insurance = 2000;
	let loanLength = 30;
	let purchasePriceChange = 5000;
	let downPaymentChange = 1500;
	$: downPaymentPct = downPayment / purchasePrice;
	let taxRate = 0.0102;
	$: yearlyTaxes = purchasePrice * taxRate;
	$: monthlyPMI = ((purchasePrice - downPayment) * pmiRate) / 12;

	$: pmiLength =
		downPaymentPct < 0.2
			? Math.floor(
					NPER(
						interestRate / 12,
						PMT(interestRate / 12, 360, purchasePrice - downPayment, 0),
						purchasePrice - downPayment,
						purchasePrice * -0.8
					)
			  )
			: 0;

	$: monthlyPrincipalInterest =
		((purchasePrice - downPayment) *
			((interestRate / 12) * (1 + interestRate / 12) ** loanLength * 12)) /
		((1 + interestRate / 12) ** loanLength * 12 - 1);

	$: monthly =
		monthlyPrincipalInterest +
		hoa +
		yearlyTaxes / 12 +
		insurance / 12 +
		(downPaymentPct < 0.2 ? monthlyPMI : 0);

	function selectText(event) {
		event.target.setSelectionRange(1, event.target.value.length);
	}

	function updateValues() {
		purchasePrice = parseInt(
			purchasePriceTxt.replace("$", "").replaceAll(",", "")
		);
		downPayment = parseInt(downPaymentTxt.replace("$", "").replaceAll(",", ""));
		hoa = parseInt(hoaText.replace("$", "").replaceAll(",", ""));
	}

	function monthsToText(months) {
		let yr = Math.floor(months/12);
		let mth = months%12;
		let text = ""
		if (yr > 0) {
			if (yr == 1) {
				text += yr + " year"
			}else {
				text += yr + " years"
			}
		}

		// todo: this will result in an extra space at the beginning if yr == 0 (even if it doesn't render)
		if (mth > 0) {
			if (mth == 1) {
				text += " " + mth + " month"
			}else {
				text += " " + mth + " months"
			}
		}

		return text;
	}
</script>

<main>
	<p>Purchase Price ({currencyFormatted(Math.round(downPayment * 5))})</p>
	<div class="incrementerHolder">
		<button class="incrementer" on:click={() => (purchasePrice -= purchasePriceChange)}>-</button>
		<input
			class="money"
			use:format={currencyFormatted}
			bind:value={purchasePriceTxt}
			on:keyup={updateValues}
			on:focus={selectText}
			inputmode="numeric"
		/>
		<button class="incrementer" on:click={() => (purchasePrice += purchasePriceChange)}>+</button>
		</div>

	<p>
		Down Payment ({(downPaymentPct * 100).toFixed(1)}%) 
		({currencyFormatted(Math.round(purchasePrice * 0.2))})
	</p>
	<div class="incrementerHolder">
		<button class="incrementer" on:click={() => (downPayment -= downPaymentChange)}>-</button>
		<input
			class="money"
			use:format={currencyFormatted}
			bind:value={downPaymentTxt}
			on:keyup={updateValues}
			on:focus={selectText}
			inputmode="numeric"
		/>
		<button class="incrementer" on:click={() => (downPayment += downPaymentChange)}>+</button>
	</div>

	<p>Interest Rate: {(interestRate * 100).toFixed(1)}%</p>
	<div class="sliderHolder">
		<input
			type="range"
			class="slider"
			min="0.05"
			max="0.09"
			step="0.001"
			bind:value={interestRate}
		/>
	</div>

	{#if downPaymentPct < 0.2}
		<p>PMI Rate: {(pmiRate * 100).toFixed(2)}%</p>
	{/if}
	<div class="sliderHolder">
		{#if downPaymentPct < 0.2}
			<input
				type="range"
				class="slider"
				min="0.002"
				max="0.025"
				step="0.0005"
				bind:value={pmiRate}
			/>
		{/if}
	</div>

	<p>Tax Rate: {(taxRate * 100).toFixed(2)}%</p>
		<div class="sliderHolder">
		<input
			type="range"
			class="slider"
			min="0.005"
			max="0.015"
			step="0.0001"
			bind:value={taxRate}
		/>
	</div>

	<p>HOA</p>
	<div class="incrementerHolder">
		<input
			class="money"
			use:format={currencyFormatted}
			bind:value={hoaText}
			on:keyup={updateValues}
			on:focus={selectText}
			inputmode="numeric"
		/>
	</div>

	<h1 style="text-align: center;">{currencyFormatted(Math.round(monthly))}</h1>
	{#if downPaymentPct < 0.2}
		<h1>
			{currencyFormatted(Math.round(monthly - monthlyPMI))}
		</h1>
	{/if}

	<h2 style="margin-top: 0; margin-bottom: 0;">Principal & Interest: {currencyFormatted(Math.round(monthlyPrincipalInterest))}</h2>
	{#if downPaymentPct < 0.2}
		<h2 style="margin-top: 0; margin-bottom: 0;">
			PMI: {currencyFormatted(Math.round(monthlyPMI))} for
			{monthsToText(pmiLength)}
			(Total PMI {currencyFormatted( Math.round(monthlyPMI * pmiLength))})
		</h2>
	{/if}
	<h2 style="margin-top: 0; margin-bottom: 0;">Taxes: {currencyFormatted(Math.round(yearlyTaxes/12))}</h2>
	<h2 style="margin-top: 0; margin-bottom: 0;">Insurance: {currencyFormatted(Math.round(insurance/12))}</h2>
</main>

<style>
	main {
		display: block;
	}

	.money {
		padding: 8px;
		font-size: 20px;
		/* margin: auto; */
		/* display: block; */
	}

	p {
		margin-bottom: 0;
		text-align: center;
	}

	.slider {
		-webkit-appearance: none;
		width: 20rem;
		height: 15px;
		border-radius: 5px;
		background: #d3d3d3;
		outline: none;
		opacity: 0.7;
		-webkit-transition: 0.2s;
		transition: opacity 0.2s;
		margin: auto;
		margin-top: 5px;
	}

	.slider:hover {
		opacity: 1;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background: #04aa6d;
		cursor: pointer;
	}

	.slider::-moz-range-thumb {
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background: #04aa6d;
		cursor: pointer;
	}

	.incrementer {
		height: 50px;
		width: 50px;
	}

	.incrementerHolder {
		margin: auto;
		display: flex;
		align-content: center;
		justify-content: center;
	}

	.sliderHolder {
		margin: auto;
		display: flex;
		align-content: center;
		align-items: center;
	}
</style>
