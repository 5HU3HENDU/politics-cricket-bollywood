// Renders the trending shelf and character timelines from data.js. No build step.

const tabsEl = document.getElementById("tabs");
const introEl = document.getElementById("section-intro");
const cardsEl = document.getElementById("cards");
const shelfView = document.getElementById("shelf-view");
const personView = document.getElementById("person-view");
const backBtn = document.getElementById("back-btn");

let currentVertical = DATA.verticals[0].id;

function verticalById(id) {
  return DATA.verticals.find(v => v.id === id);
}

function charactersFor(verticalId) {
  // Trending first, then the rest — the data file already stores them in heat order.
  const list = DATA.characters.filter(c => c.vertical === verticalId);
  return [...list.filter(c => c.trending), ...list.filter(c => !c.trending)];
}

function renderTabs() {
  tabsEl.innerHTML = "";
  DATA.verticals.forEach(v => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = v.name;
    btn.dataset.color = v.color;
    btn.style.setProperty("--tab-color", v.color);
    if (v.id === currentVertical) btn.classList.add("active");
    btn.addEventListener("click", () => {
      currentVertical = v.id;
      showShelf();
    });
    tabsEl.appendChild(btn);
  });
}

function cardEl(person) {
  const v = verticalById(person.vertical);
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "card";
  btn.innerHTML =
    '<div class="avatar" style="--avatar-color:' + v.color + '">' + person.initials + "</div>" +
    "<div>" +
      "<h3>" + person.name + "</h3>" +
      '<p class="role">' + person.role + "</p>" +
      '<p class="why">' + person.why + "</p>" +
      (person.trending ? '<span class="pill">TRENDING</span>' : "") +
    "</div>";
  btn.addEventListener("click", () => showPerson(person.id));
  return btn;
}

function showShelf() {
  const v = verticalById(currentVertical);
  renderTabs();
  introEl.textContent = v.tagline;
  cardsEl.innerHTML = "";
  charactersFor(currentVertical).forEach(p => cardsEl.appendChild(cardEl(p)));
  personView.hidden = true;
  shelfView.hidden = false;
  window.scrollTo(0, 0);
}

function showPerson(id) {
  const person = DATA.characters.find(c => c.id === id);
  if (!person) return;
  const v = verticalById(person.vertical);
  renderTabs();
  document.getElementById("person-avatar").textContent = person.initials;
  document.getElementById("person-avatar").style.setProperty("--avatar-color", v.color);
  document.getElementById("person-name").textContent = person.name;
  document.getElementById("person-role").textContent = person.role;
  document.getElementById("person-why").textContent = person.why;
  const tl = document.getElementById("timeline");
  tl.innerHTML = "";
  tl.style.setProperty("--dot-color", v.color);
  person.events.forEach(ev => {
    const li = document.createElement("li");
    let html = '<div class="date">' + ev.date + "</div><h4>" + ev.title + "</h4>";
    ev.body.forEach(line => { html += "<p>" + line + "</p>"; });
    html += '<div class="source">Source: <a href="' + ev.source.url + '" target="_blank" rel="noopener">' + ev.source.name + " ↗</a></div>";
    li.innerHTML = html;
    tl.appendChild(li);
  });
  shelfView.hidden = true;
  personView.hidden = false;
  window.scrollTo(0, 0);
}

backBtn.addEventListener("click", showShelf);
document.getElementById("updated").textContent = DATA.updated;
showShelf();
