export async function loadHeaderFooter() {
  try {
    const header = await fetch('/components/header.html').then(res => res.text());
    const footer = await fetch('/components/footer.html').then(res => res.text());

    // Insert header before #app
    document.body.insertAdjacentHTML('afterbegin', header);

    // Insert footer after #app
    document.body.insertAdjacentHTML('beforeend', footer);
  } catch (error) {
    console.error('Error loading header or footer:', error);
  }
}
