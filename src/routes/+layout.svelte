<script>
	import favicon from '$lib/assets/2027/favicon.ico';
	import appleTouchIcon from '$lib/assets/2027/apple-touch-icon.png';
	import favicon32 from '$lib/assets/2027/favicon-32x32.png';
	import favicon16 from '$lib/assets/2027/favicon-16x16.png';
	import siteManifest from '$lib/assets/2027/site.webmanifest';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
	<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
	<link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
	<link rel="manifest" href={siteManifest} />
	<title>Ski Trip Countdown 2027</title>
</svelte:head>

{@render children()}
