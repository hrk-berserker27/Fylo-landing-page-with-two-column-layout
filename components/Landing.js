export default function Landing() {
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
        <form className="form-1">
          <label className="label light-gray font-family-2">
            Enter your email...
            <input type="email" />
          </label>
          <label className="font-family-2 light-grayish-blue label-2 box-shadow">
            Get Started
            <input type="submit" />
          </label>
        </form>
      </section>
      <aside className="land-page-image"></aside>
    </div>
  );
}
