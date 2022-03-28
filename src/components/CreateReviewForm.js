const CreateReviewForm = () => {
  return (
    <div className="review">
      <div>Title</div>
      <div className="review__Image">
        <div className="article__Text article__TextLeft">
          <input
            className="review__Input"
            type="textarea"
            placeholder="First Section"
          />
        </div>
      </div>
      <div>
        Image 2<p>Text 2</p>
      </div>
      <div>Summary</div>
      <div>Rating</div>
    </div>
  );
};

export default CreateReviewForm;
