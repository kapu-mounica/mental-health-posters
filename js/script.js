// Dark mode toggle + localStorage
const toggle = document.getElementById('theme-toggle');
if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
}

// Share functionality
function sharePoster(url) {
  if (navigator.share) {
    navigator.share({
      title: 'Mental Health Poster',
      text: 'Check out this mental health awareness poster!',
      url: location.origin + '/' + url,
    });
  } else {
    alert('Sharing not supported on this device');
  }
}
