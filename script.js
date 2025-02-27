// 애니메이션 적용 함수
function animateText(element, direction) {
  let position = 0;
  let speed = 2; // 애니메이션 속도
  let maxDistance = 30; // 움직이는 최대 거리

  setInterval(() => {
    if (direction === "right") {
      position = (position + speed) % (maxDistance * 2);
      element.style.transform = `translateX(${position <= maxDistance ? position : maxDistance * 2 - position}px)`;
    } else {
      position = (position + speed) % (maxDistance * 2);
      element.style.transform = `translateX(${position <= maxDistance ? -position : -maxDistance * 2 + position}px)`;
    }
  }, 20);
}

// 애니메이션 실행
window.onload = () => {
  const text1 = document.getElementById("text1");
  const text2 = document.getElementById("text2");

  animateText(text1, "right");
  animateText(text2, "left");
};
