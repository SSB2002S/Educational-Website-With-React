const Card = ({ data }) => {
  return (
    <div className='card p-6 bg-white rounded-2xl'>
      <span
        className='icon p-3 inline-block rounded-lg text-2xl'
        style={{ color: data.color, backgroundColor: data.bgColor }}>
        {data.img}
      </span>
      <h2 className='text-lg text-[var(--dark-blue)] font-bold mt-3.5'>
        {data.title}
      </h2>
      <span className='line my-3.5 w-12 inline-block h-0.5 bg-[var(--red)] rounded'></span>
      <p className='text-[14px]'>{data.description}</p>
    </div>
  );
};

export default Card;
