const submitButton = document.getElementsByClassName("submit-button")[0];

// ユーザーネーム要素取得
const userNameInput = document.getElementsByClassName("username-input")[0];
const userNameValidation = document.getElementsByClassName(
  "username-validation"
)[0];

// Email要素取得
const emailInput = document.getElementsByClassName("email-input")[0];
const emailValidation = document.getElementsByClassName("email-validation")[0];

// パスワード要素取得
const passwordInput = document.getElementsByClassName("password-input")[0];
const passwordValidation = document.getElementsByClassName(
  "password-validation"
)[0];

// パスワード確認要素取得
const confirmPasswordInput = document.getElementsByClassName(
  "confirm-password-input"
)[0];
const confirmPasswordValidation = document.getElementsByClassName(
  "confirm-password-validation"
)[0];

// バリデーションメッセージ一覧
const validMassage = {
  username: "ユーザー名は3文字以上で入力してください",
  email: "不正なメールアドレスです",
  password: "パスワードは6文字以上で入力してください",
  confirmPasswordRequird: "入力してください",
  confirmPasswordNotMatched: "パスワードが一致しません",
};

submitButton.addEventListener("click", (e) => {
  let formValid = true;
  e.preventDefault();
  resetValidationMessage();

  if (!isUsernameValid(userNameInput.value)) {
    userNameValidation.innerHTML = validMassage.username;
    userNameValidation.classList.remove("hidden");
    formValid = false;
  }

  if (!isEmailValid(emailInput.value)) {
    emailValidation.innerHTML = validMassage.email;
    emailValidation.classList.remove("hidden");
    formValid = false;
  }

  if (!isPasswordValid(passwordInput.value)) {
    passwordValidation.innerHTML = validMassage.password;
    passwordValidation.classList.remove("hidden");
    formValid = false;
  }

  if (!isConfirmPasswordRequired(confirmPasswordInput.value)) {
    confirmPasswordValidation.innerHTML = validMassage.confirmPasswordRequird;
    confirmPasswordValidation.classList.remove("hidden");
    formValid = false;
  }

  if (
    !isConfirmPasswordMatched(passwordInput.value, confirmPasswordInput.value)
  ) {
    confirmPasswordValidation.innerHTML =
      validMassage.confirmPasswordNotMatched;
    confirmPasswordValidation.classList.remove("hidden");
    formValid = false;
  }

  // フォーム送信の処理
  if (formValid) {
    console.log({
      userName: userNameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    });
  }
});

// Usernameバリデーション
const isUsernameValid = (userName) => {
  return userName.length >= 3;
};

// Emailバリデーション
const isEmailValid = (email) => {
  const regex = /.*@.*/;
  return regex.test(email);
};

// Passwordバリデーション
const isPasswordValid = (password) => {
  return password.length >= 6;
};

// ConfirmPasswordバリデーション
const isConfirmPasswordRequired = (confirmPassword) => {
  return confirmPassword.length >= 1;
};
const isConfirmPasswordMatched = (password, confirmPassword) => {
  return password === confirmPassword;
};

// バリデーションメッセージを全て消す
const resetValidationMessage = () => {
  userNameValidation.classList.add("hidden");
  emailValidation.classList.add("hidden");
  passwordValidation.classList.add("hidden");
  confirmPasswordValidation.classList.add("hidden");
};
