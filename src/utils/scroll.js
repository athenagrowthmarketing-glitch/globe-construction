export function scrollToEstimate() {
  const el = document.getElementById('estimate');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = '/#estimate';
  }
}
