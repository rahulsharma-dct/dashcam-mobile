const emailInput = document.getElementById("email");
const submitBtn = document.getElementById("submit");
const alertList = document.querySelector(".alert-list");
const alertIcon = document.querySelector(".alert-list-icon");

let emailContacts = [];

console.log(emailContacts);

function createAlertItem(value) {
  const alertItem = document.createElement("div");
  alertItem.classList.add("alert-list-item");

  const span = document.createElement("span");
  span.textContent = value;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("alert-delete-btn");
  deleteBtn.innerHTML = `<svg
       width="11"
       height="13"
       viewBox="0 0 11 13"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
     >
       <path
         d="M2.15989 12.5836C1.8211 12.5836 1.53132 12.463 1.29056 12.2217C1.0498 11.9804 0.929165 11.6911 0.928657 11.3539V1.91693H0.547705C0.439515 1.91693 0.349102 1.88036 0.276467 1.80722C0.203833 1.73407 0.167261 1.64341 0.166753 1.53522C0.166245 1.42703 0.202817 1.33661 0.276467 1.26398C0.350118 1.19134 0.440531 1.15503 0.547705 1.15503H3.21437C3.21437 0.997565 3.27278 0.860423 3.38961 0.743597C3.50643 0.626772 3.64358 0.568359 3.80104 0.568359H7.19913C7.35659 0.568359 7.49373 0.626772 7.61056 0.743597C7.72738 0.860423 7.78579 0.997565 7.78579 1.15503H10.4525C10.5606 1.15503 10.6511 1.1916 10.7237 1.26474C10.7963 1.33788 10.8329 1.42855 10.8334 1.53674C10.8339 1.64493 10.7973 1.73534 10.7237 1.80798C10.65 1.88061 10.5596 1.91693 10.4525 1.91693H10.0715V11.3531C10.0715 11.6914 9.95087 11.9809 9.7096 12.2217C9.46833 12.4624 9.17881 12.5831 8.84103 12.5836H2.15989ZM9.3096 1.91693H1.69056V11.3531C1.69056 11.4897 1.7345 11.602 1.82237 11.6899C1.91024 11.7777 2.02275 11.8217 2.15989 11.8217H8.84103C8.97767 11.8217 9.08992 11.7777 9.17779 11.6899C9.26567 11.602 9.3096 11.4897 9.3096 11.3531V1.91693ZM4.21094 10.2979C4.31913 10.2979 4.4098 10.2613 4.48294 10.1882C4.55608 10.115 4.5924 10.0246 4.59189 9.91692V3.82169C4.59189 3.7135 4.55532 3.62309 4.48218 3.55045C4.40903 3.47782 4.31837 3.44125 4.21018 3.44074C4.10199 3.44023 4.01158 3.4768 3.93894 3.55045C3.86631 3.6241 3.82999 3.71451 3.82999 3.82169V9.91692C3.82999 10.0251 3.86656 10.1155 3.9397 10.1882C4.01284 10.2613 4.10326 10.2979 4.21094 10.2979ZM6.78999 10.2979C6.89818 10.2979 6.98859 10.2613 7.06122 10.1882C7.13386 10.115 7.17018 10.0246 7.17018 9.91692V3.82169C7.17018 3.7135 7.1336 3.62309 7.06046 3.55045C6.98732 3.47731 6.89691 3.44074 6.78922 3.44074C6.68103 3.44074 6.59037 3.47731 6.51722 3.55045C6.44408 3.62359 6.40776 3.71401 6.40827 3.82169V9.91692C6.40827 10.0251 6.44484 10.1155 6.51799 10.1882C6.59113 10.2608 6.68179 10.2974 6.78999 10.2979Z"
         fill="white"
       />
     </svg>
   `;

  deleteBtn.addEventListener("click", () => {
    alertItem.remove();

    emailContacts = emailContacts.filter((e) => e !== value);
    console.log("Emails:", emailContacts);
  });

  alertItem.appendChild(span);
  alertItem.appendChild(deleteBtn);
  alertList.appendChild(alertItem);
}

submitBtn.addEventListener("click", () => {
  const value = emailInput.value.trim();
  if (value) {
    createAlertItem(value);
    emailContacts.push(value);
    console.log("Emails:", emailContacts);
    emailInput.value = "";
  } else {
    alert("Please enter an email");
  }
});

alertIcon.addEventListener("click", () => {
  emailContacts.reverse();
  alertList.innerHTML = "";
  emailContacts.forEach((email) => createAlertItem(email));
});

["default1@example.com", "default2@example.com"].forEach((e) => {
  createAlertItem(e);
  emailContacts.push(e);
});

const phoneSubmit = document.querySelector(".phone-submit");
const phoneList = document.querySelector(".phone-list");
const phoneInput = document.querySelector("#phoneInput");
const phoneListIcon = document.querySelector(".phone-list-icon");

let phoneContacts = [];

console.log(phoneContacts);

function createPhoneContact(value) {
  const phoneItem = document.createElement("div");
  phoneItem.classList.add("phone-list-item");
  phoneItem.textContent = value;

  phoneList.appendChild(phoneItem);
}

phoneSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const value = phoneInput.value.trim();
  if (value) {
    createPhoneContact(value);
    phoneContacts.push(value);
    console.log("Phones:", phoneContacts);
    phoneInput.value = "";
  } else {
    alert("Please enter a phone number");
  }
});

phoneListIcon.addEventListener("click", () => {
  phoneContacts.reverse();
  phoneList.innerHTML = "";
  phoneContacts.forEach((phone) => createPhoneContact(phone));
});

["+636 315 981 6522", "+637 123 456 7890"].forEach((p) => {
  createPhoneContact(p);
  phoneContacts.push(p);
});
