document.addEventListener('DOMContentLoaded', function() {
    const coverButton = document.getElementById('enter-site');
    const mainContent = document.getElementById('main-content');
    const feedbackSection = document.getElementById('feedback');
  
    coverButton.addEventListener('click', function() {
      document.getElementById('home').style.display = 'none';
      mainContent.style.display = 'block';
      feedbackSection.style.display = 'block';
    });
  });
  