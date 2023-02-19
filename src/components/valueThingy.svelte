<script>
	import { format, money } from "../assets/format";
	export let changeAmt;
	export let bigChangeAmt;
	export let val;
	export let type;
	export let title;
</script>

<div class="holder">
	<h1>{title}</h1>
	<div class="adjuster">
		<button on:click={() => (val -= bigChangeAmt)}>{"<"}</button>
		<button on:click={() => (val -= changeAmt)}>-</button>
		<!-- <h1>{formatMoney(value)}</h1> -->
		<input use:format={money} />
		<button on:click={() => (val += changeAmt)}>+</button>
		<button on:click={() => (val += bigChangeAmt)}>></button>
	</div>
</div>

<style>
	.adjuster {
		display: flex;
	}
</style>
