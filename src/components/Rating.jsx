import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ rating }) => {
  return (
    <div className='rating border-1 p-4 border-[var(--sky-blue)] rounded-2xl'>
      <span className='stars block text-center'>
        {Array(rating.stars)
          .fill(0)
          .map((_, i) => (
            <FontAwesomeIcon
              className='ml-1'
              icon={faStar}
              color='gold'
              size='lg'
              key={i}
            />
          ))}
      </span>
      <p className='text-justify mt-2.5 text-sm text-[var(--light-grat)]'>
        {rating.description}
      </p>
      <div className='person flex items-center mt-7 font-medium'>
        <img
          src={rating.img}
          alt={rating.name}
          className='w-14 h-14 rounded-[50%] object-cover mr-2.5'
        />
        <div>
          <h3 className='text-lg font-semibold text-[var(--sky-blue)]'>
            {rating.name}
          </h3>
          <p>{rating.jop}</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
