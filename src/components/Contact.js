import React, {useState} from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Modal from './Modal';

import content from '../content';
import useWindowPosition from '../hook/useWindowPosition';

export default function Contact() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  
  }

  const transition = (duration) =>
    `transition duration-${duration} ease-in-out`;
  const styleTranslate = 'translate-y-10 opacity-0';

  const animated = useWindowPosition('header', 0.6, 4);
  return (
    <div
      className=" min-h-screen  flex justify-center items-center  "
      id="mycontact"
    >
      <div
        style={{
          minHeight: '55vh',
          background: '#091C29',
        }}
        className="w-full md:w-4/5 md:rounded-xl shadow-2xl flex md:flex-row flex-col-reverse justify-around items-center"
      >
        <LazyLoadImage
          effect="blur"
          src={content.contact.img}
          placeholderSrc={content.contact.imgPlaceholder}
          alt="profile"
          width="300px"
          className="mt-10 transtion duration-2000 ease-in-out mx-auto"
        />
        <div className="font-dosis w-4/5 md:w-2/5 mt-5 transtion duration-2000">
          <h1
            className={`${
              animated ? '' : 'translate-y-10 opacity-0'
            } transform transition duration-3000 text-white text-5xl font-bold`}
          >
            {content.contact.title}
          </h1>
          <p
            className={`${
              animated ? '' : 'translate-y-10 opacity-0'
            } transform transition duration-3000 text-white text-2xl`}
          >
            {content.contact.desc}
          </p>
          <div
            className={`flex ${
              animated ? '' : 'translate-y-10 opacity-0'
            } transform transition duration-3000 `}
          >
            {content.contact.socials.map((social, index) => {
              return (
                <LazyLoadImage
                  effect="blur"
                  className="m-2"
                  width="50px"
                  key={index}
                  src={social.img}
                  alt={social.alt}
                />
              );
            })}
          </div>
          <button
            className={` animate-bounce bg-indigo-500 px-10 py-3 text-lg uppercase text-white rounded-lg mt-10 hover:bg-indigo-300 transform  ${animated ? 'translate-y-0' : styleTranslate
              } ${transition(3500)}`}
            onClick={openModal}>
            Contact
          </button>
          <Modal showModal={showModal} setShowModal={setShowModal}/>
        </div>
      </div>
    </div>
  );
}
