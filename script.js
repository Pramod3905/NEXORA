const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (menu) {
  menu.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    menu.setAttribute('aria-expanded', open);
  });
}
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('quoteForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`NEXORA Enquiry - ${data.get('service')}`);
  const body = encodeURIComponent(
`Name: ${data.get('name')}
Company: ${data.get('company')}
Phone: ${data.get('phone')}
Email: ${data.get('email')}
Service: ${data.get('service')}

Requirement:
${data.get('message')}`
  );
  window.location.href = `mailto:hello@nexoranav.in?subject=${subject}&body=${body}`;
});
