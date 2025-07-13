import { cardData } from "../../data";
import Card from "./Card";
import Button from "./common/Button";

const Home = () => {
  return (
    <section id='home' className='bg-[var(--dark-blue)] py-20'>
      <div className='container m-auto px-8'>
        <div className='home-header text-white text-center max-w-[450px] m-auto'>
          <span className='text-[var(--red)] font-semibold'>Join Us</span>
          <h1 className='text-[40px] text-[var(--light-pink)] font-semibold my-5'>
            Best Learning Opportunities
          </h1>
          <p className='mb-7 text-[var(--light-pink)]'>
            We Know How Larg Objects Will Act, But Things On A Small Scale Just
            Do Not Act That Way.
          </p>
          <div className='flex flex-wrap justify-center items-center gap-3.5'>
            <Button
              title={"Get Quote Now"}
              style='py-2.5 px-7 border-1 border-[var(--red)] rounded-lg mx-1 text-white bg-[var(--red)]'
            />
            <Button
              title={"Learn More"}
              style='py-2.5 px-7 border-1 border-[var(--red)] rounded-lg mx-1'
            />
          </div>
        </div>
        <div className='card-container mt-20 grid max-sm:grid-cols-1 min-md:grid-cols-2 min-lg:grid-cols-3 gap-10'>
          {cardData.map((card) => {
            return <Card key={card.id} data={card} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
