declare module "astro:actions" {
	type Actions = typeof import("/Users/beb/projects/current/astrolio/src/actions")["server"];

	export const actions: Actions;
}