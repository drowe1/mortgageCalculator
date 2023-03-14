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
	$: yearlyTaxes = purchasePrice * 0.0102;
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

	function updateValues() {
		purchasePrice = parseInt(
			purchasePriceTxt.replace("$", "").replaceAll(",", "")
		);
		downPayment = parseInt(downPaymentTxt.replace("$", "").replaceAll(",", ""));
		hoa = parseInt(hoaText.replace("$", "").replaceAll(",", ""));
	}
</script>

<main>
	<p>Purchase Price ({currencyFormatted(downPayment * 5)})</p>
	<button class="incrementer" on:click={() => (purchasePrice -= purchasePriceChange)}>-</button>
	<input
		class="money"
		use:format={currencyFormatted}
		bind:value={purchasePriceTxt}
		on:keyup={updateValues}
		inputmode="numeric"
	/>
	<button class="incrementer" on:click={() => (purchasePrice += purchasePriceChange)}>+</button>

	<p>
		Down Payment ({(downPaymentPct * 100).toFixed(1)}%) ({currencyFormatted(
			purchasePrice * 0.2
		)})
	</p>
	<button class="incrementer" on:click={() => (downPayment -= downPaymentChange)}>-</button>
	<input
		class="money"
		use:format={currencyFormatted}
		bind:value={downPaymentTxt}
		on:keyup={updateValues}
		inputmode="numeric"
	/>
	<button class="incrementer" on:click={() => (downPayment += downPaymentChange)}>+</button>

	<div class="sliderHolder">
		<p>{(interestRate * 100).toFixed(1)}%</p>
		{#if downPaymentPct < 0.2}
			<p>{(pmiRate * 100).toFixed(2)}%</p>
		{/if}
		<input
			type="range"
			class="slider"
			id=""
			min="0.02"
			max="0.12"
			step="0.001"
			bind:value={interestRate}
		/>

		{#if downPaymentPct < 0.2}
			<input
				type="range"
				class="slider"
				id=""
				min="0.002"
				max="0.025"
				step="0.0005"
				bind:value={pmiRate}
			/>
		{/if}
	</div>

	<p>HOA</p>
	<input
		class="money"
		use:format={currencyFormatted}
		bind:value={hoaText}
		on:keyup={updateValues}
		inputmode="numeric"
	/>

	<h1>{currencyFormatted(Math.round(monthly))}</h1>
	{#if downPaymentPct < 0.2}
		<h1>
			{currencyFormatted(Math.round(monthly - monthlyPMI))} after 
			{pmiLength > 12 ? Math.floor(pmiLength / 12) : ""} {pmiLength > 12 ? "year" : ""}{pmiLength > 24 ? "s" : ""} 
			{pmiLength % 12} {pmiLength % 12 == 1 ? "month" : "months"}
			(Total PMI {currencyFormatted( Math.round(monthlyPMI * pmiLength))})
		</h1>
	{/if}
</main>

<style>
	main {
		display: block;
	}

	.money {
		padding: 8px;
		font-size: 20px;
	}

	p {
		margin-bottom: 0;
	}

	.slider {
		-webkit-appearance: none;
		/* -webkit-transform: rotate(90deg);
		-moz-transform: rotate(90deg);
		-o-transform: rotate(90deg);
		transform: rotate(90deg); */
		width: 20rem;
		height: 15px;
		/* margin-left: 150px; */
		border-radius: 5px;
		background: #d3d3d3;
		outline: none;
		opacity: 0.7;
		-webkit-transition: 0.2s;
		transition: opacity 0.2s;
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
</style>
