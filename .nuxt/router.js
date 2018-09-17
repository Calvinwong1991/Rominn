import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _1748e6d3 = () => import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */).then(m => m.default || m)
const _3700c198 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */).then(m => m.default || m)
const _12a57b0f = () => import('..\\pages\\_lang\\index.vue' /* webpackChunkName: "pages__lang_index" */).then(m => m.default || m)
const _1a24bf6c = () => import('..\\pages\\_lang\\about.vue' /* webpackChunkName: "pages__lang_about" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/about",
			component: _1748e6d3,
			name: "about"
		},
		{
			path: "/",
			component: _3700c198,
			name: "index"
		},
		{
			path: "/:lang",
			component: _12a57b0f,
			name: "lang"
		},
		{
			path: "/:lang/about",
			component: _1a24bf6c,
			name: "lang-about"
		}
    ],
    
    
    fallback: false
  })
}