<script lang="ts">
	import Facebook from '$lib/icons/facebook.svelte';
	import Instagram from '$lib/icons/instagram.svelte';
	import MenuBars from '$lib/icons/menu-bars.svelte';
	import Twitter from '$lib/icons/twitter.svelte';

	let navMenu = ['Home', 'About', 'Blog', 'Categories', 'Pages', 'Contact'];

	let isHidden = true;

	function toggleMenuVisibility() {
		isHidden = !isHidden;
	}
</script>

<div class="header-main bg-slate-100">
	<div class="header-top bg-primary bg-primarybackgroud hidden py-2 lg:block">
		<div class="mx-auto max-w-[1200px] px-4">
			<div class="grid items-center gap-4 md:grid-cols-2">
				<div class="header-top__menu">
					<ul class="flex justify-center md:justify-start">
						<li
							class="relative mr-4 pr-5 after:absolute after:right-0 after:top-1/2 after:h-1 after:w-1 after:-translate-y-1/2 after:transform after:rounded-full after:bg-white after:content-[''] last:mr-0 last:after:content-none"
						>
							<a href="/contact" class="text-white">Help</a>
						</li>
						<li
							class="relative mr-4 pr-5 after:absolute after:right-0 after:top-1/2 after:h-1 after:w-1 after:-translate-y-1/2 after:transform after:rounded-full after:bg-white after:content-[''] last:mr-0 last:after:content-none"
						>
							<a href="/about" class="text-white">Status</a>
						</li>
						<li
							class="relative mr-4 pr-5 after:absolute after:right-0 after:top-1/2 after:h-1 after:w-1 after:-translate-y-1/2 after:transform after:rounded-full after:bg-white after:content-[''] last:mr-0 last:after:content-none"
						>
							<a href="/about" class="text-white">Writers</a>
						</li>
					</ul>
				</div>
				<div
					class="header-top__weather order-first flex items-center justify-center md:order-last md:justify-end"
				>
					<div class="flex items-center space-x-2">
						<a
							href="https://www.facebook.com/"
							aria-label="icon"
							target="_blank"
							class="block h-8 w-8 rounded-md border border-[#f4f4f4] !bg-transparent bg-[#f4f4f4] text-center leading-6 text-white hover:!bg-white hover:text-violet-500"
							><Facebook /></a
						>
						<a
							href="https://www.instagram.com/"
							aria-label="icon"
							target="_blank"
							class="block h-8 w-8 !rounded-full border border-[#f4f4f4] !bg-transparent bg-[#f4f4f4] text-center leading-6 text-white hover:!bg-white hover:text-violet-500"
							><Instagram /></a
						>
						<a
							href="https://www.x.com/"
							aria-label="icon"
							target="_blank"
							class="block h-8 w-8 rounded-full border border-[#f4f4f4] !bg-transparent bg-[#f4f4f4] text-center leading-6 text-white hover:!bg-white hover:text-violet-500"
							><Twitter /></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="header-middle border-b-[1px] border-[#f3f3f3] py-4">
		<div class="mx-auto max-w-[1200px] px-4">
			<div class="grid grid-cols-4 items-center justify-between">
				<div class="logo col-span-2">
					<a href="/" aria-current="page" class="nuxt-link-exact-active nuxt-link-active"
						><img src="https://bunzo.vuejstemplate.com/images/logo/logo.png" alt="logo" /></a
					>
				</div>
				<div class="col-span-2 hidden overflow-hidden rounded-lg text-right lg:block">
					<a href="/" aria-current="page" class="nuxt-link-exact-active nuxt-link-active"
						><img
							src="https://bunzo.vuejstemplate.com/images/banners/Add-banner.jpg"
							alt="banner"
							class="transition-all duration-500 hover:scale-110"
						/></a
					>
				</div>
				<div class="col-span-2 block text-right lg:hidden">
					<button
						on:click={toggleMenuVisibility}
						class="hover:bg-primarybackgroud h-11 w-11 rounded-md border-[1px] border-[#ddd] text-xl leading-7 transition-all hover:text-white"
					>
						<MenuBars />
					</button>
				</div>
			</div>
		</div>
	</div>
	<div class="header-bottom hidden py-3 lg:block lg:py-0">
		<div class="mx-auto max-w-[1200px] px-4">
			<div class="grid grid-cols-12 items-center">
				<div class="col-span-6 md:col-span-9">
					<nav class="navigation-menu p-0">
						<ul class="border-l-primarybackgroud flex border-l-4">
							{#each navMenu as nav}
								<li
									class="hover:bg-primaryhover group relative m-0 px-4 text-gray-600 hover:text-white"
								>
									<a
										href="/{nav}"
										aria-current="page"
										class="group-hover:text-primary nuxt-link-exact-active nuxt-link-active text-heading-light block py-3 font-semibold"
									>
										{nav}</a
									>
								</li>
							{/each}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</div>
	<div class="header-mobile {isHidden ? 'hidden' : ''} py-3 lg:hidden">
		<div class="mx-auto max-w-[1200px] px-4">
			<nav class="navigation-menu p-0">
				<ul class="border-l-primarybackgroud border-l-4">
					{#each navMenu as nav}
						<li
							class="hover:bg-primaryhover group relative m-0 px-4 text-gray-600 hover:text-white"
						>
							<a
								href="/{nav}"
								aria-current="page"
								class="group-hover:text-primary nuxt-link-exact-active nuxt-link-active text-heading-light block py-3 font-semibold"
							>
								{nav}</a
							>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</div>
</div>
