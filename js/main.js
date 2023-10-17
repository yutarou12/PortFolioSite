function kantan(entries) {
  if (entries[0].intersectionRatio === 0) {
    return;
  } else {
    if (card_1.classList.contains("alpha")){
      card_1.classList.remove("alpha")
    }
    card_1.classList.add("alpha");
  }
}

var card_1 = document.getElementById("row-card-1");
var options = {
  threshold:1
}
var observer = new IntersectionObserver(kantan, options);

observer.observe(card_1);

