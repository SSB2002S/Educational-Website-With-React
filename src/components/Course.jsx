import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons/faBookOpen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Course = ({ course }) => {
  return (
    <div className='course relative rounded-[40px] overflow-hidden'>
      <span className='absolute top-5 left-5 py-1.5 px-2 text-white bg-[var(--red)] rounded-xl font-medium text-[12px]'>
        Sale
      </span>
      <img className='w-full' src={course.img} alt={course.title} />
      <div className='content p-4 text-sm text-[var(--light-grat)]'>
        <div className='course-field flex justify-between items-center'>
          <p className='text-lg font-semibold text-[var(--sky-blue)]'>
            {course.department}
          </p>
          <p className='bg-[var(--dark-blue)] text-white py-1.5 px-2.5 rounded-2xl'>
            <FontAwesomeIcon icon={faStar} color='gold' /> {course.rating}
          </p>
        </div>
        <h3 className='text-2xl my-2.5 text-[var(--dark-blue)] font-semibold'>
          {course.title}
        </h3>
        <p>{course.description}</p>
        <p className='my-2.5 font-semibold'>{course.sales} Sales</p>
        <p>
          <del className='mr-2.5'>{course.price} </del>
          <span className='text-[var(--green)]'>{course.discount}</span>
        </p>
        <div className='course-info flex items-center my-3.5'>
          <p className=''>
            <FontAwesomeIcon icon={faClock} color='var(--sky-blue)' size='lg' />{" "}
            {course.duration}
          </p>
          <p className='ml-2.5'>
            <FontAwesomeIcon
              icon={faBookOpen}
              color='var(--sky-blue)'
              size='lg'
            />
            {course.lessons}
          </p>
        </div>
        <a
          href='#'
          className='inline-block p-3 border-1 border-[var(--sky-blue)] text-[var(--sky-blue rounded-3xl'>
          Learn More <FontAwesomeIcon icon={faAngleRight} />
        </a>
      </div>
    </div>
  );
};

export default Course;
