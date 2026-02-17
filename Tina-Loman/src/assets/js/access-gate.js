console.log("access gate loaded");

const ACCESS_PHRASES = {
  owen: "owen-access-2026",
};

document.addEventListener("DOMContentLoaded", () => {
  // 如果已輸入正確密碼，直接顯示
  if (localStorage.getItem("unlocked-owen") === "true") {
    showContent();
  }
});

function unlockCase(caseKey) {
  const input = document.getElementById("access-input").value;
  const error = document.getElementById("access-error");

  if (input === ACCESS_PHRASES[caseKey]) {
    localStorage.setItem(`unlocked-${caseKey}`, "true");
    showContent();
    error.classList.add("d-none");
  } else {
    error.classList.remove("d-none");
  }
}

function showContent() {
  document.getElementById("access-gate").classList.add("d-none");
  document.getElementById("case-content").classList.remove("d-none");
}
