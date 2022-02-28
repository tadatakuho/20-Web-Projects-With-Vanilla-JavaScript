const submitButton = document.getElementsByClassName("submit-button")[0];
const userNameInput = document.getElementsByClassName("username-input")[0];
const userNameValidation = document.getElementsByClassName(
  "username-validation"
)[0];

const validMassage = {
  Username: "ユーザー名は3文字以上で入力してください。",
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  resetValidationMessage();

  if (!isUsernameValid(userNameInput.value)) {
    userNameValidation.innerHTML = validMassage.Username;
    userNameValidation.classList.remove("hidden");
  }
});

// Usernameバリデーション
const isUsernameValid = (userName) => {
  return userName.length >= 3;
};

// バリデーションメッセージを全て消す
const resetValidationMessage = () => {
  userNameValidation.classList.add("hidden");
};
