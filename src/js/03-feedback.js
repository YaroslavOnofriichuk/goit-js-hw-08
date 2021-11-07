import throttle from 'lodash.throttle';

const formEl = document.querySelector("form");
formEl.addEventListener("input", throttle(saveInputMessage, 500));
formEl.addEventListener("submit", onSubmitButtonClick);
updateFormMessage();

function saveInputMessage () {
    let saveObject = {};
    saveObject.email = formEl.email.value;
    saveObject.message = formEl.message.value;

    localStorage.setItem("feedback-form-state", JSON.stringify(saveObject));
};

function onSubmitButtonClick (e) {
    e.preventDefault();
    try {
        console.log(JSON.parse(localStorage.getItem("feedback-form-state")));

      } catch (err) {
        console.log("error");

      }

    formEl.reset();
    localStorage.removeItem("feedback-form-state");
};

function updateFormMessage () {
    if (localStorage.getItem("feedback-form-state") === null) {
        return;
    }
    try {
        formEl.email.value = JSON.parse(localStorage.getItem("feedback-form-state")).email;
        formEl.message.value = JSON.parse(localStorage.getItem("feedback-form-state")).message;

      } catch (err) {
        console.log("error");

      }
};
  