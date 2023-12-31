let title = document.querySelector(`.title`);
let ul = document.querySelector(`ul`);
let reload = document.querySelector(`.reload`);

window.onload = function () {
  if (window.navigator.onLine) {
    onLine();
  } else {
    offLine();
  }
};

window.addEventListener("online", function () {
  onLine();
});

window.addEventListener("offline", function () {
  offLine();
});

reload.onclick = function () {
  window.location.reload();
};

function onLine() {
  title.innerHTML = `Online Now`;
  title.style.color = `green`;
  ul.style.display = `none`;
  reload.style.display = `none`;
}

function offLine() {
  title.innerHTML = `Connection Lost !`;
  title.style.color = `black`;
  ul.style.display = `block`;
  reload.style.display = `block`;
}
