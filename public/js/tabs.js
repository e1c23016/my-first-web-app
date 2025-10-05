// ここからコードを書いてください

export function setupTabs() {
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterLink = document.querySelector('[data-tab="converter"]');
  const homeId = document.getElementById("home");
  const converterId = document.getElementById("converter");

  homeLink.addEventListener("click", () => {
    // イベントが発生したときに実行したい処理
    converterId.classList.add("hidden");
    homeId.classList.remove("hidden");
  });

  converterLink.addEventListener("click", () => {
    // イベントが発生したときに実行したい処理
    homeId.classList.add("hidden");
    converterId.classList.remove("hidden");
  });
}
