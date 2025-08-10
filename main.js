// Year in footer
document.getElementById('y').textContent = new Date().getFullYear();

// Tiny future-proof module area
const Plugins = {};

// Simple calculator demo (no deps)
(function () {
  const $ = (id) => document.getElementById(id);
  const years = $('years'), rate = $('rate'), monthly = $('monthly');
  const run = $('runCalc'), out = $('result');

  const calc = () => {
    const n = (+years.value || 0) * 12;
    const r = (+rate.value || 0) / 100 / 12;
    const p = (+monthly.value || 0);
    // Future value of an annuity formula
    const fv = r === 0 ? p * n : p * ((Math.pow(1 + r, n) - 1) / r);
    out.textContent = fv ? `Estimated future value: $${Math.round(fv).toLocaleString()}` : '';
  };

  run?.addEventListener('click', calc);
})();
