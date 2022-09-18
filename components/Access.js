import { useState } from "react";
export default function Access() {
  const [emailValidator, setEmailValidator] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const form = e.currentTarget; //currentTarget property of the event object returns the element which has the event listener attached
      const label = form.children[0]; //children property of element object returns a collection of child nodes
      const inputElement = label.children[0];
      const emailValue = inputElement.value; //value property returns the value in the input field
      //using regular expression object
      let myRegEx = RegExp(
        "^[a-z]([a-z]|[0-9])+[@](gmail.com|outlook.com|hotmail.com)$",
        "gi"
      ); //constructor takes two inputs one is the expression and other is the flags

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
    <div className="access">
      <div className="first">
        <h2 className="font-family-1 light-grayish-blue">
          Get early access today
        </h2>
        <p className="light-grayish-blue font-family-2">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <form className="font-family-2" onSubmit={handleSubmit}>
        <label className="input-first">
          email@example.com
          <input type="text" id="input-2" />
        </label>
        {emailValidator && (
          <div className="font-family-2 second-validator">
            Please check your email
          </div>
        )}
        <label className="input-second">
          Get Started For Free
          <input type="submit" className="input-submit" />
        </label>
      </form>
    </div>
  );
}
