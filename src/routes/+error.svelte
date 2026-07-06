<script>
	import { page } from '$app/state';
</script>

<section>
	<h1>Big {page.status}</h1>
	<enhanced:img class="album" src="$lib/assets/misc/Big_chungus.webp" fetchpriority="high" alt="" />
</section>

<style>
	section {
		max-width: 400px;
		margin: 0 auto;
		text-align: center;
	}

	.album {
		max-width: 100%;
		height: auto;
	}
</style>
