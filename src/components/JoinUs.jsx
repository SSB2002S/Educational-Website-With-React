const JoinUs = () => {
  return (
    <section id='join-us' className='bg-[var(--dark-blue)] p-10'>
      <div className='content container min-lg:max-w-1/2 m-auto relative text-white text-sm text-center'>
        <p className='text-[var(--sky-blue)] font-semibold text-sm'>
          Prictice Advice
        </p>
        <h2 className='uppercase text-4xl my-4 font-bold'>Join Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero
          minima consectetur accusamus esse alias aspernatur enim dignissimos
          labore cumque reiciendis recusandae aut ut et autem vel, distinctio
          ullam eligendi?
        </p>
        <form className='mt-16 relative'>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Your Email'
            className='p-3 bg-white placeholder:text-gray-400 border-0 outline-0 rounded-l-sm w-4/5 text-[var(--dark-blue)] max-sm:rounded-sm mb-4'
          />
          <button type='submit' className="cursor-pointer p-3 bg-[var(--sky-blue)] rounded-r-sm max-sm:rounded-sm">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default JoinUs;
