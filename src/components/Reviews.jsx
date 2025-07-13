import { ratingData } from "../../data";
import SectionHeader from "./common/SectionHeader";
import Rating from "./Rating";

const Reviews = () => {
  return (
    <section id='reviews' className='container m-auto px-8 pb-28'>
      <div className=''>
        <SectionHeader
          title={"Each And Every Client Is Important"}
          description={
            "Descover What Our Students Are Saying In The Reviews Section Real Feedback From Learners Who Have Experienced And Benefited From Our Cources."
          }
        />
        <div className='ratings mt-20 grid max-sm:grid-cols-1 min-md:grid-cols-2 min-lg:grid-cols-3 gap-10'>
          {ratingData.map((rating) => {
            return <Rating key={rating.id} rating={rating} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
