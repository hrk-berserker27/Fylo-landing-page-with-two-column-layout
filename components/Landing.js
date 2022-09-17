import { useState } from "react";

export default function Landing() {
  //validator state
  const [emailValidator, setEmailValidator] = useState(false); //setting the default form state as false
  const submitCollector = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const form = e.currentTarget; //currentTarget property of the event object returns the element which has the event listener attached
      const label = form.children[0]; //children property of element object returns a collection of child nodes
      const inputElement = label.children[0];
      const emailValue = inputElement.value; //value property returns the value in the input field
      //using regular expression object
      let myRegEx = RegExp("^[a-z]([a-z]|[0-9])+[@]gmail.com", "gi"); //constructor takes two inputs one is the expression and other is the flags

      if (myRegEx.test(emailValue)) {
        if (inputElement.classList.contains("red-border"))
          inputElement.classList.remove("red-border");
        setEmailValidator(false);
      } else {
        inputElement.classList.add("red-border");
        setEmailValidator(true); //form failure triggers the addition of div with "Please enter the email" element to the DOM
      }
    }
  };
  return (
    <div className="section-flex">
      <section className="landing">
        <h1 className="h1-margin-top font-weight-2 font-family-1 dark-color line-height h1-width h1-font-size">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className="light-color font-family-2 font-weight-1 landing-p-width margin-top-bottom">
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends,family, and
          co-workers.
        </p>
        <div className="form-container">
          <form className="form-1" onSubmit={submitCollector}>
            <label className="label light-gray font-family-2">
              Enter your email...
              <input type="email" />
            </label>
            <label className="font-family-2 light-grayish-blue label-2 box-shadow">
              Get Started
              <input type="submit" />
            </label>
          </form>
          {emailValidator && (
            <div className="font-family-2 validator">
              Please check your email
            </div>
          )}
        </div>
      </section>
      <aside className="land-page-image"></aside>
    </div>
  );
}
