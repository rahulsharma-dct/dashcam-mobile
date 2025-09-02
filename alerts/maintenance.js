const maintenanceInput = document.getElementById("maintenanceInput");
const maintenanceSubmit = document.querySelector(".maintenance-submit");
const maintenanceList = document.querySelector(".maintenance-list");
const maintenanceListIcon = document.querySelector(".maintenance-list-icon");

let maintenanceContacts = [];

function renderMaintenanceContacts() {
  console.log(maintenanceContacts);
  maintenanceList.innerHTML = ""; // clear old list
  maintenanceContacts.forEach((value) => {
    const item = document.createElement("div");
    item.classList.add("maintenance-list-item");
    item.textContent = value;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("maintenance-delete-btn");
    deleteBtn.innerHTML = `
      <svg
        width="11"
        height="13"
        viewBox="0 0 11 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.15983 12.5836C1.82104 12.5836 1.53126 12.463 1.2905 12.2217C1.04974 11.9804 0.929104 11.6911 0.928596 11.3539V1.91693H0.547644C0.439454 1.91693 0.349041 1.88036 0.276406 1.80722C0.203772 1.73407 0.1672 1.64341 0.166692 1.53522C0.166184 1.42703 0.202756 1.33661 0.276406 1.26398C0.350057 1.19134 0.44047 1.15503 0.547644 1.15503H3.21431C3.21431 0.997565 3.27272 0.860423 3.38955 0.743597C3.50637 0.626772 3.64351 0.568359 3.80097 0.568359H7.19907C7.35653 0.568359 7.49367 0.626772 7.6105 0.743597C7.72732 0.860423 7.78573 0.997565 7.78573 1.15503H10.4524C10.5606 1.15503 10.651 1.1916 10.7236 1.26474C10.7963 1.33788 10.8328 1.42855 10.8333 1.53674C10.8339 1.64493 10.7973 1.73534 10.7236 1.80798C10.65 1.88061 10.5596 1.91693 10.4524 1.91693H10.0714V11.3531C10.0714 11.6914 9.95081 11.9809 9.70954 12.2217C9.46827 12.4624 9.17875 12.5831 8.84097 12.5836H2.15983ZM9.30954 1.91693H1.6905V11.3531C1.6905 11.4897 1.73444 11.602 1.82231 11.6899C1.91018 11.7777 2.02269 11.8217 2.15983 11.8217H8.84097C8.9776 11.8217 9.08986 11.7777 9.17773 11.6899C9.2656 11.602 9.30954 11.4897 9.30954 11.3531V1.91693ZM4.21088 10.2979C4.31907 10.2979 4.40974 10.2613 4.48288 10.1882C4.55602 10.115 4.59234 10.0246 4.59183 9.91692V3.82169C4.59183 3.7135 4.55526 3.62309 4.48212 3.55045C4.40897 3.47782 4.31831 3.44125 4.21012 3.44074C4.10193 3.44023 4.01151 3.4768 3.93888 3.55045C3.86624 3.6241 3.82993 3.71451 3.82993 3.82169V9.91692C3.82993 10.0251 3.8665 10.1155 3.93964 10.1882C4.01278 10.2613 4.1032 10.2979 4.21088 10.2979ZM6.78992 10.2979C6.89811 10.2979 6.98853 10.2613 7.06116 10.1882C7.1338 10.115 7.17011 10.0246 7.17011 9.91692V3.82169C7.17011 3.7135 7.13354 3.62309 7.0604 3.55045C6.98726 3.47731 6.89684 3.44074 6.78916 3.44074C6.68097 3.44074 6.59031 3.47731 6.51716 3.55045C6.44402 3.62359 6.4077 3.71401 6.40821 3.82169V9.91692C6.40821 10.0251 6.44478 10.1155 6.51792 10.1882C6.59107 10.2608 6.68173 10.2974 6.78992 10.2979Z"
          fill="white"/>
      </svg>
    `;

    deleteBtn.addEventListener("click", () => {
      maintenanceContacts = maintenanceContacts.filter((c) => c !== value);
      renderMaintenanceContacts();
    });

    item.appendChild(deleteBtn);
    maintenanceList.appendChild(item);
  });
}

// add contact
maintenanceSubmit.addEventListener("click", () => {
  const value = maintenanceInput.value.trim();
  if (value) {
    maintenanceContacts.push(value);
    renderMaintenanceContacts();
    maintenanceInput.value = "";
  } else {
    alert("Please enter a contact number");
  }
});

// reverse contacts
maintenanceListIcon.addEventListener("click", () => {
  maintenanceContacts.reverse(); // reverse array
  renderMaintenanceContacts(); // re-render
});

// initial data
maintenanceContacts = ["bowerschristina@gmail.com", "vperez@yahoo.com"];
renderMaintenanceContacts();
