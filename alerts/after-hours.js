const options = [
  { value: "a", label: "Option A" },
  { value: "b", label: "Option B" },
  { value: "c", label: "Option C" },
  { value: "d", label: "Option D" },
];

const afterhourSelect = document.querySelector(".afterhour-select");

options.forEach(({ value, label }) => {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = label;
  afterhourSelect.appendChild(option);
});
