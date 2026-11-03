// Renders content/cv.md into #cv. Edit that file (or swap it) to update the CV.
(function () {
  document.getElementById('year').textContent = new Date().getFullYear();

  var el = document.getElementById('cv');
  var src = el.dataset.src || 'content/cv.md';

  fetch(src, { cache: 'no-cache' })
    .then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.text();
    })
    .then(function (md) {
      var html = marked.parse(md.replace(/<!--[\s\S]*?-->/g, ''));
      el.innerHTML = DOMPurify.sanitize(html, { ADD_ATTR: ['target'] });
      el.querySelectorAll('a[href^="http"]').forEach(function (a) {
        a.target = '_blank';
        a.rel = 'noopener';
      });
    })
    .catch(function () {
      el.innerHTML = '<p class="muted">Could not load the CV. ' +
        '<a href="assets/Kirill_Kriger_CV.pdf">Open the PDF version</a>.</p>';
    });
})();
