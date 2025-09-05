document.addEventListener("DOMContentLoaded", function () {
  const dateRange = document.querySelector(".geo-date-input");
  const dateRangeDisplay = document.querySelector(".geo-date-range");

  flatpickr(dateRange, {
    mode: "range",
    dateFormat: "Y-m-d",
    onOpen: function () {
      console.log("Date range clicked");
    },
    onClose: function (selectedDates) {
      if (selectedDates.length === 2) {
        // Format dates to "Month DD, YYYY"
        const options = { year: "numeric", month: "long", day: "2-digit" };
        const start = selectedDates[0].toLocaleDateString("en-US", options);
        const end = selectedDates[1].toLocaleDateString("en-US", options);

        // Update the <div class="geo-date-range">
        if (dateRangeDisplay) {
          dateRangeDisplay.textContent = `${start} - ${end}`;
        }

        console.log("Range selected:", start, "-", end);
      }
    },
  });
});
