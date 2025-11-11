// script.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('trialForm');
  const successModal = new bootstrap.Modal(document.getElementById('successModal'));

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const program = document.getElementById('program').value;

    if (!name || !email || !program) {
      alert('⚠️ Please fill in all required fields!');
      return;
    }

    successModal.show();
    form.reset();
  });
});
