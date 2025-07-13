import { coursesData } from "../../data";
import SectionHeader from "./common/SectionHeader";
import Course from "./Course";

const Courses = () => {
  return (
    <>
      <section id='courses' className='container m-auto px-8 py-28'>
        <div className=''>
          <SectionHeader
            title={"Make Online Education Acessible"}
            description={
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A voluptatum enim totam molestiae quidem. Ad aliquid ut quo pariatur! Dicta distinctio amet expedita eveniet non nemo blanditiis animi mollitia accusamus."
            }
          />
        </div>
        <div className='mt-9 grid max-sm:grid-cols-1 min-md:grid-cols-2 min-lg:grid-cols-3 gap-10'>
          {coursesData.map((course) => {
            return <Course key={course.id} course={course} />;
          })}
        </div>
      </section>
    </>
  );
};
export default Courses;
