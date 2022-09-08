import Link from "next/link";
import Review from "../components/Review";
export default function Features() {
  return (
    <section className="features">
      <h1>Stay productive, wherever you are</h1>
      <p>
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.{" "}
      </p>
      <p>
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required!
      </p>
      <Link href="">See how Fylo works</Link>
      <Review />
    </section>
  );
}
