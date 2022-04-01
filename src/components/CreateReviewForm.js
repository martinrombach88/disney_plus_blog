const CreateReviewForm = () => {
  return (
    <div className="review">
      <div>Title</div>
      <div className="review__Section">
        <div>
          <textarea
            className="review__SectionTextArea review__TextAreaBorderLeft"
            name="section1"
            placeholder="Add First Text Section"
            maxLength="705"
          />
        </div>
        <div className="review__Image">
          <p>Add First Background Image</p>
        </div>
      </div>
      <div className="review__Section review__SectionRight">
        <div className="review__Image">
          <p>Add Second Background Image</p>
        </div>
        <div>
          <textarea
            className="review__SectionTextArea review__TextAreaBorderRight"
            name="section2"
            placeholder="Add Second Text Section"
            maxLength="800"
          />
        </div>
      </div>
      <div>Summary</div>
      <div>Rating</div>
    </div>
  );
};

export default CreateReviewForm;
