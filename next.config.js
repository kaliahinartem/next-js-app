const withCSS = require('@zeit/next-css')
module.exports = withCSS({
		/* config options here */

	'/': { page: '/' },
	'/terms': { page: '/terms' },
})