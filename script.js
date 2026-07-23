if (window.lucide) {
  window.lucide.createIcons({
    attrs: {
      "stroke-width": 1.8
    }
  });
}

const reviewCarousel = document.querySelector("[data-review-carousel]");
const reviewPrev = document.querySelector("[data-review-prev]");
const reviewNext = document.querySelector("[data-review-next]");

if (reviewCarousel && reviewPrev && reviewNext) {
  const scrollReviews = (direction) => {
    const card = reviewCarousel.querySelector(".review-card");
    if (!card) return;

    const gap = Number.parseFloat(getComputedStyle(reviewCarousel).columnGap) || 18;
    reviewCarousel.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: "smooth"
    });
  };

  reviewPrev.addEventListener("click", () => scrollReviews(-1));
  reviewNext.addEventListener("click", () => scrollReviews(1));
}
