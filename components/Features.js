import Link from "next/link";
import Review from "../components/Review";
export default function Features() {
  return (
    <section className="features">
      <h1 className="h1-font-size font-family-1 dark-color">
        Stay productive, wherever you are
      </h1>
      <p className="para-width light-color para-margin-1 font-family-2">
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.{" "}
      </p>
      <p className="para-width light-color para-margin-2 font-family-2">
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required!
      </p>
      <div className="link-container font-family-2">
        <Link href="">
          <a className="link">See how Fylo works</a>
        </Link>
        <span className="arrow"></span>
      </div>

      <Review />
    </section>
  );
}
