export default function Access() {
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

      <form className="font-family-2">
        <label className="input-first">
          email@example.com
          <input type="text" id="input-2" />
        </label>
        <label className="input-second">
          Get Started For Free
          <input type="submit" className="input-submit" />
        </label>
      </form>
    </div>
  );
}
