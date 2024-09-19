/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: 'nodejs18.x'
};

export const load = ({ url }) => {
	const { pathname } = url;

	return {
		pathname
	};
};