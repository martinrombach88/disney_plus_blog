import CreateReviewForm from "./CreateReviewForm";
import Header from "./Header";

const CreateReview = () => {
  return (
    <div className="mainContainer">
      <Header />
      <div className="homeContainer">
        <CreateReviewForm />
      </div>
    </div>
  );
};

export default CreateReview;
