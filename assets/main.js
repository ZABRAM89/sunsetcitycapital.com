(function(){
  // Mobile menu toggle (simple)
  const btn = document.querySelector('[data-menu-btn]');
  const panel = document.querySelector('[data-menu-panel]');
  if(btn && panel){
    btn.addEventListener('click', () => {
      const open = panel.getAttribute('data-open') === 'true';
      panel.setAttribute('data-open', (!open).toString());
      panel.style.display = open ? 'none' : 'block';
    });
  }

  // Contact "form" -> mailto builder
  const form = document.querySelector('#contactForm');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name')||'').toString().trim();
      const company = (data.get('company')||'').toString().trim();
      const phone = (data.get('phone')||'').toString().trim();
      const email = (data.get('email')||'').toString().trim();
      const amount = (data.get('amount')||'').toString().trim();
      const product = (data.get('product')||'').toString().trim();
      const message = (data.get('message')||'').toString().trim();

      const subject = encodeURIComponent('Funding inquiry - Sunset City Capital');
      const bodyLines = [
        `Name: ${name}`,
        `Company: ${company}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Requested amount: ${amount}`,
        `Interested in: ${product}`,
        '',
        'Message:',
        message
      ];
      const body = encodeURIComponent(bodyLines.join('\n'));
      window.location.href = `mailto:zgold@sunsetcitycapital.com?subject=${subject}&body=${body}`;
    });
  }

  // Highlight active nav link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('a[data-nav]').forEach(a => {
    if(a.getAttribute('href') === path) a.classList.add('active');
  });
})();
