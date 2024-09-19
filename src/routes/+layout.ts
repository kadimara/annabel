/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: 'nodejs20.x'
};

export const load = ({ url }) => {
	const { pathname } = url;

	return {
		pathname
	};
};