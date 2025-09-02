const options = [
  { value: "a", label: "Option A" },
  { value: "b", label: "Option B" },
  { value: "c", label: "Option C" },
  { value: "d", label: "Option D" },
];
const dashcamSelect = document.getElementById("dashcamSelect");

options.forEach(({ value, label }) => {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  dashcamSelect.appendChild(option);
});

document.addEventListener("DOMContentLoaded", () => {
  const dashcamSelect = document.getElementById("dashcamSelect");
  const alertsSection = document.getElementById("alertsSection");

  dashcamSelect.addEventListener("change", () => {
    if (dashcamSelect.value) {
      alertsSection.style.display = "block";
    } else {
      alertsSection.style.display = "none";
    }
  });
});
