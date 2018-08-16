const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

const photoCount = 14;

// generate number of img boxes per photocount
function generateHTML(i, loaded) {
  return `
    <div class="img-box">
      <img src="photos/${i}.jpg" ${loaded ? `onload="clearLoading()"` : null}>
      <div class="img-box-overlay">
        <button class="view-img">View &#10145;</button>
      </div>
    </div>
  `;
};

function clearLoading() {
  let loadingText = document.querySelector('.loading');
  loadingText.style.opacity = '0';
  let summaryText = document.querySelector('.summary-text');
  summaryText.style.paddingTop = '2.5em';
}

// create image boxes to DOM
const html = Array.from({ length: photoCount }).map((current, i = 1) => {
  if (i === 13) {
    return generateHTML(i+1, 'loaded');
  } else {
    return generateHTML(i+1);
  }
}).join('');
gallery.innerHTML += html;
const items = document.querySelectorAll('.img-box');

// on click show image overlay modal
function handleClick(e) {
  const src = e.currentTarget.querySelector('img').src;
  overlayImage.src = src;
  let inner = overlay.children[0];
  let imgHeight = inner.querySelector('img').naturalHeight;
  if (imgHeight > 800) {
    if(window.innerHeight > window.innerWidth){
      inner.classList.add('tallimg');
    } else {
      inner.classList.add('tallimgWide');
    }
  }
  overlay.classList.add('open');
};

// close overlay modal
function close() {
  overlay.classList.remove('open');
  let inner = overlay.children[0];
  inner.classList.remove('tallimg');
  inner.classList.remove('tallimgWide');
};

// add event listeners
items.forEach(item => item.addEventListener('click', handleClick));

overlayClose.addEventListener('click', close);

// click off overlay modal to close as well
overlay.addEventListener('click', function(e) {
  e.stopPropagation();
  if (e.target.className === 'overlay open') {
    close();
  }
});

// handle orientation change on mobile to scale tall images
window.addEventListener("orientationchange", function() {
  let inner = overlay.children[0];
  if (inner.classList.contains('tallimg')) {
    inner.classList.remove('tallimg');
    inner.classList.add('tallimgWide');
  } else if (inner.classList.contains('tallimgWide')) {
    inner.classList.remove('tallimgWide');
    inner.classList.add('tallimg');
  }
}, false);
