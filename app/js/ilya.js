document.addEventListener('DOMContentLoaded', () => {

  function workflowIntro() {
    const readBtn = document.querySelector('.workflow-intro__read-btn');

    if (readBtn) {
      readBtn.addEventListener('click', () => {
        readBtn.style.display = 'none';
        readBtn.nextElementSibling.style.display = 'block';
      });
    }
  }

  workflowIntro();
});