class Form {
  constructor(fields, domAnchorID) {
    this.id = domAnchorID;
    let anchor = document.getElementById(this.id);
    console.log(this.id);
    if (!anchor) {
      return;
    }
    self.formElement = document.createElement("form");
    self.formElement.id = this.id + "form";
    anchor.appendChild(self.formElement);

    for (const [key, value] of Object.entries(fields)) {
      self.label = key;
      self.type = value;

      let formField = document.createElement("input");
      formField.placeholder = self.label;
      formField.type = self.type;
      formField.id = self.label;
      formField.name = self.label;
      self.formElement.appendChild(formField);

      if (formField.type == "submit") {
        formField.onclick = this.submitForm;
      }
    }
  }

  hideForm() {
    self.formElement.hidden = true;
  }

  showForm() {
    self.formElement.hidden = false;
  }

  submitForm(event) {
    event.preventDefault();
    const form = document.getElementById(event.target.parentNode.id);
    const inputs = form.elements;
    console.log("submitting form: ", event.target.parentNode.id); // this cursed thing returns the id ofthe parent project...
    console.log(
      `to-do item: ${inputs[0].value}, to-do desc: ${inputs[1].value}`
    );
    form.hidden = true;

    //let todoItem = new Todo(inputs[0], inputs[1], inputs[2], inputs[3])
  }
}

export default Form;
