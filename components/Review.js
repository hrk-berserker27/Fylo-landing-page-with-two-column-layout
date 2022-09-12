function Review() {
  return (
    <div className="review-container font-family-2 light-color">
      <div className="quote"></div>
      <p className="review">
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
      <div className="author-container">
        <span className="revewer-image"></span>
        <div className="flex">
          <span className="reviewer">Kyle Burton</span>
          <span className="profession">Founder &#38; CEO, Huddle</span>
        </div>
      </div>
    </div>
  );
}

export default Review;
