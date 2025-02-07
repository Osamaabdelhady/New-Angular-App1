
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/New-Angular-App1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/New-Angular-App1/home",
    "route": "/New-Angular-App1"
  },
  {
    "renderMode": 2,
    "route": "/New-Angular-App1/home"
  },
  {
    "renderMode": 2,
    "route": "/New-Angular-App1/about"
  },
  {
    "renderMode": 2,
    "route": "/New-Angular-App1/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/New-Angular-App1/contact"
  },
  {
    "renderMode": 2,
    "route": "/New-Angular-App1/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5930, hash: '0ae6afbde3cd3a50e1d0e31f18d7558d17baafbd50e65a7711e5a5779aef2ebb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1090, hash: '5ae521059aa29a8f8ad5f2e8da47c34751561479b4384c9ca67116b1da5daae1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 19570, hash: '840271ca40e491a44c7e97813cce85fa4665e54f8d0f31daa6f1f0e4a3f3ddb9', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 21418, hash: '8c68b021f97a48948532d641fcedbd32b75bae63a5f08ed2337094a8f8335b76', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 19017, hash: 'b94dc2a4c6befa953fefd19c6cac6e70852bd3a0d20264deb5e711f6d4ea7ad7', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 22845, hash: 'b73248af201dedb75f1de154633e461cafffec4535ec0c34ce21f20455296420', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-CON6YUZV.css': {size: 305312, hash: 'o2N/S4UGvEs', text: () => import('./assets-chunks/styles-CON6YUZV_css.mjs').then(m => m.default)}
  },
};
