(function () {
  try {
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      document.addEventListener('DOMContentLoaded', function () {
        var meta = document.querySelector('meta[name="theme-color"]');
        if (meta) meta.setAttribute('content', '#F7F8FA');
      });
    }
  } catch {
    // Storage can be unavailable in privacy-restricted browsing contexts.
  }
})();
