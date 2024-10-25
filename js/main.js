const main = document.querySelector("main");
const areas = document.querySelectorAll(".area");
let isScrolling;

areas.forEach(area => {
  const imgURL = area.dataset.image;
  const title = area.dataset.title;
  let node;
  node = document.createElement("div");
  node.classList.add("photo");
  node.style.backgroundImage = `url(${imgURL})`;
  area.append(node);
  node = document.createElement("div");
  node.classList.add("text");
  node.innerHTML = title;
  area.append(node);
});

main.addEventListener('scroll', function () {
  areas.forEach(area => area.classList.remove("active"));
  clearTimeout(isScrolling);

  isScrolling = setTimeout(function () {
    console.log('捲動停止');
    let area = getArea();
    document.querySelector(`.area${area}`).classList.add("active")
  }, 200);

});

function getArea() {
  let currentArea = null;
  areas.forEach((area, index) => {
    const rect = area.getBoundingClientRect();
    if (rect.left <= window.innerWidth / 2 && rect.right > window.innerWidth / 2) {
      console.log(`滾動到區域 ${index + 1}`);
      currentArea = index + 1;
    }
  });

  return currentArea;
}
