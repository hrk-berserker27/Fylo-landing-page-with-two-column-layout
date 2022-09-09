export default function Landing() {
  return (
    <>
      <section>
        <h1 className="font-weight-2 font-family-1">
          All your files in one secure location, accessible anywhere.
        </h1>
        <p>
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends,family, and
          co-workers.
        </p>
        <form>
          <label for="email-id">Enter your email...</label>
          <input type="email" id="email-id" />
          <label for="submit-1">Get Started</label>
          <input type="submit" id="submit-1" />
        </form>
        <aside className="land-page-image"></aside>
      </section>
    </>
  );
}
