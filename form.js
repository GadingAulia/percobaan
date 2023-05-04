// ============ 1. ambil element ==========
const form = document.querySelector("#form-login")
const username = document.querySelector("#username")
const password = document.querySelector("#password")
const btnLogin = document.querySelector("#btn-login")


// ============ 2. manupulasi / event ==========
btnLogin.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("tesss btn login");

    // untuk melihat data username dan password
    console.log(username.value);
    console.log(password.value);


    // untuk mengosongkan ketika tombol login di tekan
    form.reset()
    // username.value = ""
    // password.value = ""
})