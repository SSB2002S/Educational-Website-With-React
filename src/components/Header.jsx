import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header id='header' className='bg-[var(--dark-blue)]'>
      <nav className='container m-auto navbar flex justify-between items-center text-white h-[100px] px-8'>
        <a
          href='#'
          className='logo text-2xl font-semibold transition-colors hover:text-[var(--red)]'>
          Education
        </a>
        <ul className='flex gap-2.5 max-md:hidden'>
          <li>
            <a href='home' className='hover:text-[var(--red)] transition'>
              Home
            </a>
          </li>
          <li>
            <a href='product' className='hover:text-[var(--red)] transition'>
              Product
            </a>
          </li>
          <li>
            <a href='pricing' className='hover:text-[var(--red)] transition'>
              Pricing
            </a>
          </li>
          <li>
            <a href='content' className='hover:text-[var(--red)] transition'>
              Content
            </a>
          </li>
        </ul>
        <div className='account max-md:hidden'>
          <a href='login' className='transition-colors hover:text-[var(--red)]'>
            Login
          </a>
          <a
            href='join-us'
            className='bg-[var(--sky-blue)] py-2.5 px-5 ml-5 rounded-lg uppercase align-middle'>
            Join Us
            <FontAwesomeIcon icon={faArrowRight} className='ml-1 text-[12px]' />
          </a>
        </div>
        {/* <button type="button"><FontAwesomeIcon icon={faBars} className='text-xl border p-2 rounded-xl' /></button> */}
      </nav>
    </header>
  );
};

export default Header;
