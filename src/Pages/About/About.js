import React from 'react';
import useTitle from '../../hook/useTitle';
import Title from '../Shared/Title';

const About = () => {
  useTitle('About')
    return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <Title title="About Us"></Title>
        <div className="grid max-w-screen-lg mx-auto space-y-6 lg:grid-cols-2 lg:space-y-0 lg:divide-x pb-20">
          <div className='space-y-6 sm:px-10'>
            <img src="https://i.ibb.co/GxvfHdg/about.webp" alt="about_img" />
          </div>
          <div className="space-y-6 sm:px-10">
            <div className="flex flex-col max-w-md sm:flex-row mb-12">
              <div className="mb-4 mr-4">
                <img src="https://cdn.shopify.com/s/files/1/0566/8981/9857/files/icons_03_180x.png?v=1639802217" alt="" />
              </div>
              <div>
                <h6 className="mb-3 text-3xl">
                Only Natural Ingredients
                </h6>
                <p className="tracking-wide text-gray-900 ">
                Varius quam quisque id diam. Ipsum suspendisse ultrices gravida dictum fusce ut placerat sidet amet marques
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:flex-row mb-12">
              <div className="mb-4 mr-4">
                <img src="https://cdn.shopify.com/s/files/1/0566/8981/9857/files/icons_02_180x.png?v=1639802247" alt="" />
              </div>
              <div>
                <h6 className="mb-3 text-3xl">
                Support and Motivation
                </h6>
                <p className="tracking-wide text-gray-900 ">
                Accumsan in nisl nisi scelerisq amet sed due eu ultrices vitae auctor. Felis eget velit aliquet sagittis amet lor.
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:flex-row mb-12">
              <div className="mb-4 mr-4">
               <img src="https://cdn.shopify.com/s/files/1/0566/8981/9857/files/icons_180x.png?v=1639802267" alt="" />
              </div>
              <div>
                <h6 className="mb-3 text-3xl">
                100% Organic Farm Fresh
                </h6>
                <p className="tracking-wide text-gray-900 ">
                Est lorem ipsum dolor sit amet sit smret consectetur. Arcu risus quis varius quam quisque id diam vel tellus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;