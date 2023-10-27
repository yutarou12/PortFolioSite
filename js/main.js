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

// プログレスバーの表示時びよーんとする --START--

var progress_1= document.getElementById("progress-1");
function progress_biyon_1(entries) {
  if (entries[0].intersectionRatio === 0) {
    return;
  } else {
    progress_1.classList.add("progress-css-alpha-1");
  }
}
let observer_progress_1 = new IntersectionObserver(progress_biyon_1, options);
observer_progress_1.observe(progress_1);

var progress_2= document.getElementById("progress-2");
function progress_biyon_2(entries) {
  if (entries[0].intersectionRatio === 0) {
    return;
  } else {
    progress_2.classList.add("progress-css-alpha-2");
  }
}
let observer_progress_2 = new IntersectionObserver(progress_biyon_2, options);
observer_progress_2.observe(progress_2);

var progress_3= document.getElementById("progress-3");
function progress_biyon_3(entries) {
  if (entries[0].intersectionRatio === 0) {
    return;
  } else {
    progress_3.classList.add("progress-css-alpha-3");
  }
}
let observer_progress_3 = new IntersectionObserver(progress_biyon_3, options);
observer_progress_3.observe(progress_3);

var progress_4= document.getElementById("progress-4");
function progress_biyon_4(entries) {
  if (entries[0].intersectionRatio === 0) {
    return;
  } else {
    progress_4.classList.add("progress-css-alpha-4");
  }
}
let observer_progress_4 = new IntersectionObserver(progress_biyon_4, options);
observer_progress_4.observe(progress_4);

// プログレスバーの表示時びよーんとする --END--
