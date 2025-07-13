import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container m-auto px-8 pt-16 pb-8 text-center'>
        <div className='footer-row grid max-sm:grid-cols-2 min-[641px]:grid-cols-4 gap-12'>
          <div className='col'>
            <h2 className='capitalize mb-5 text-[var(--dark-blue)] font-bold'>
              git in touch
            </h2>
            <p className='text-[var(--light-grat)]'>
              Lorem ipsum dolor sit amet
            </p>
            <div className='social mt-5 text-[var(--sky-blue)]'>
              <a href='' className='mr-2.5'>
                <FontAwesomeIcon size="xl" icon={faFacebook} />
              </a>
              <a href='' className='mr-2.5'>
                <FontAwesomeIcon size="xl" icon={faInstagram} />
              </a>
              <a href='' className='mr-2.5'>
                <FontAwesomeIcon size="xl" icon={faTwitter} />
              </a>
            </div>
          </div>
          <div className='col'>
            <h2 className='capitalize mb-5 text-[var(--dark-blue)] font-bold'>
              Company info
            </h2>
            <ul>
              <li>
                <a href='' className='capitalize'>
                  about us
                </a>
              </li>
              <li>
                <a href='' className='capitalize'>
                  carrier
                </a>
              </li>
              <li>
                <a href='' className='capitalize'>
                  we are hireng
                </a>
              </li>
              <li>
                <a href='' className='capitalize'>
                  blog
                </a>
              </li>
            </ul>
          </div>
          <div className='col'>
            <h2 className='capitalize mb-5 text-[var(--dark-blue)] font-bold'>
              featuer
            </h2>
            <ul>
              <li>
                <a href='' className='capitalize'>
                  business
                </a>
              </li>
              <li>
                <a href='' className='capitalize'>
                  user analytic
                </a>
              </li>
              <li>
                <a href='' className='capitalize'>
                  live chat
                </a>
              </li>
              <li>
                <a href='' className='capitalize'>
                  unlimted support
                </a>
              </li>
            </ul>
          </div>
          <div className='col'>
            <h2 className='capitalize mb-5 text-[var(--dark-blue)] font-bold'>
              resources
            </h2>
            <ul>
              <li>
                <a href='' className='capitalize'>
                  IOS & android
                </a>
              </li>
              <li>
                <a href='' className='capitalize'>
                  watch a demo
                </a>
              </li>
              <li>
                <a href='' className='capitalize'>
                  customers
                </a>
              </li>
              <li>
                <a href='' className='capitalize'>
                  api
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='copyright text-center text-[var(--light-grat)] font-medium mt-10'>
          <p className='capitalize'>
            &copy; | all right made by{" "}
            <a href='https://mohamedelkashef.com' target='_blank'>
              <b className='text-lg font-semibold text-[var(--sky-blue)]'>
                Mohamed elkashef
              </b>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
