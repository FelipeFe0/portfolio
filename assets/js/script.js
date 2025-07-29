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

const formSumbit = new FormSumbit();
