// 首頁：依 ROCKS 產生卡片，並處理岩類篩選
(function () {
  const grid = document.getElementById("rock-grid");
  const buttons = document.querySelectorAll(".filter-btn");

  function render(filter) {
    const list = filter === "all" ? ROCKS : ROCKS.filter(r => r.type === filter);
    grid.innerHTML = list.map(r => `
      <a class="card" href="rocks/${r.id}.html">
        <div class="swatch swatch--${r.id}"></div>
        <div class="card-body">
          <span class="tag tag--${r.type}">${TYPE_LABEL[r.type]}</span>
          <h2>${r.name} <span class="en">${r.en}</span></h2>
          <p>${r.summary}</p>
        </div>
      </a>`).join("");
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      render(btn.dataset.filter);
    });
  });

  render("all");
})();
