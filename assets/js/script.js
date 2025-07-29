class FormSumbit {
  constructor(settings){
    this.settings = settings;
    this.form = document.queryselector(settings.form);
    this.formButton = document.queryselector(settings.button);
    if(this.form) {
      this.url = this.form.getAttribute("action");
      
    }
  }
  displaySuccess() {
    this.form.innerHTML = this.settings.success;
  }
 DisplayError() {
    this.form.innerHTML = this.settings.error;
 }
  init() {
    if (this.form) this.formbutton.addEventlistener("click", () => this.displaySuccess());
    return this;
  }
}

const formSumbit = new FormSumbit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h2 class="success">Mensagem enviada!</h2>",
  error: "<h2 class="error">Não foi possivel enviar sua mensagem!</h2>",
});
formSubmit.init();
