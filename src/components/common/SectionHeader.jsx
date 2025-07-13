const SectionHeader = ({ title, description }) => {
  return (
    <div className='sectionHeader container m-auto'>
      <span className='text-[var(--sky-blue)] font-semibold text-sm'>
        Practice Advice
      </span>
      <h2 className='text-4xl my-3.5 text-[var(--dark-blue)]'>{title}</h2>
      <p className='text-[var(--light-grat)] min-lg:w-3/4 text-justify'>
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
