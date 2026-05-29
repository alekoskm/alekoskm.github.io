// ════════════════════════════════════════════════
//  Shared site footer — single source of truth.
//  Used by every page via:  <site-footer></site-footer>
//  To edit footer content (Instagram URL, email, etc.),
//  change the markup below ONCE and every page updates.
// ════════════════════════════════════════════════

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<footer class="site-footer">
  <div class="site-footer__inner">
    <div class="site-footer__contacts">
      <a href="https://www.instagram.com/alexandrosmm/" class="site-footer__icon" aria-label="Instagram" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      </a>
      <a href="mailto:alekos_km@yahoo.gr" class="site-footer__icon" aria-label="Email">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </a>
    </div>
    <div class="site-footer__meta">© Alexandros Mylonas — Athens</div>
    <div class="site-footer__credit">All work and images.</div>
  </div>
</footer>
    `;
  }
}
customElements.define('site-footer', SiteFooter);
