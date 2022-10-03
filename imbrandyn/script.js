function loadingFade() {
    const loadingBg = document.querySelector('.loading__bg');
    const loadingImg = document.querySelector('.loading__img');
    loadingBg.style.opacity = "0";
    loadingImg.style.opacity = "0";
}

function loadingRemove() {
    const loading = document.querySelector('.loading');
    loading.style.display = "none";
}

const firstVisit = localStorage.getItem('visited');

if (firstVisit == null) {
    window.setInterval(loadingFade, 2800);
    window.setInterval(loadingRemove, 3000);
    localStorage.setItem('visited', 1)
} else {
    loadingRemove();
}