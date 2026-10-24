const toastAccents = ["success", "warning", "information", "danger"];
const toastPositions = [
  "right-down",
  "left-down",
  "center-top",
  "center-down",
];

function showToast(duration, accent, content, position) {
  if (!Number.isFinite(duration) || duration <= 0) {
    console.error("Toast duration must be a positive number.");
    return;
  }

  if (!toastAccents.includes(accent) || !toastPositions.includes(position)) {
    console.error("Invalid toast accent or position.");
    return;
  }

  const containerClass = `toast-${position}`;
  let container = document.querySelector(`.${containerClass}`);

  if (!container) {
    container = document.createElement("div");
    container.className = `toast-container ${containerClass}`;
    container.setAttribute("aria-live", "polite");
    container.setAttribute("aria-atomic", "false");
    document.body.append(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${accent}`;
  toast.setAttribute("role", "status");
  toast.textContent = content;
  container.append(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add("toast-visible");

      window.setTimeout(() => {
        toast.classList.remove("toast-visible");
        toast.addEventListener(
          "transitionend",
          () => {
            toast.remove();

            if (container.childElementCount === 0) {
              container.remove();
            }
          },
          { once: true },
        );
      }, duration);
    });
  });
}