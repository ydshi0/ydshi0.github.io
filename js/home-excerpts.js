// Remove template whitespace while preserving line breaks within each excerpt.
function tidyHomeExcerpts() {
  document.querySelectorAll('.home-post-content').forEach((excerpt) => {
    const first = excerpt.firstChild;
    const last = excerpt.lastChild;
    if (first && first.nodeType === Node.TEXT_NODE) first.textContent = first.textContent.trimStart();
    if (last && last.nodeType === Node.TEXT_NODE) last.textContent = last.textContent.trimEnd();
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', tidyHomeExcerpts);
} else {
  tidyHomeExcerpts();
}
