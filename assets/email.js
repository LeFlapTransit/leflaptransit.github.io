// Turns obfuscated addresses into mailto links, so simple scrapers don't find them in the HTML.
document.querySelectorAll(".email[data-u][data-d]").forEach(function (el) {
  var address = el.dataset.u + "@" + el.dataset.d;
  var a = document.createElement("a");
  a.href = "mailto:" + address + (el.dataset.subject ? "?subject=" + encodeURIComponent(el.dataset.subject) : "");
  a.textContent = address;
  el.replaceChildren(a);
});
