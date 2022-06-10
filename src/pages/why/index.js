import React from "react";

import appreciate from "../../img/icons/undraw/undraw_appreciation_re_8nbx.svg";
import phone from "../../img/icons/undraw/undraw_my_app_re_gxtj.svg";

import { LeftImage, RightImage } from "../../components/ImageContent";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import pair from "../../img/icons/undraw/undraw_pair_programming_njlp.svg";
import { AnimatedArrowButton } from "../../components/PMCButton";

export default function WhyPMC() {
  return (
    <>
      <Helmet title="Warum" />

      <RightImage image={appreciate} className={"bg-cultured"}>
        <h1 className="text-2xl pmc-h2 text-ming font-bold md:text-5xl">
          Der beste Ort um Deine Beziehung zu verbessern.
        </h1>
        <div className="space-y-4">
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
            voluptatem accusantium nemo perspiciatis delectus atque autem!
            Voluptatum tenetur beatae unde aperiam, repellat expedita
            consequatur! Officiis id consequatur atque doloremque!
          </p>
          <p className="mt-4 text-gray-600">
            {" "}
            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
            expedita at? Asperiores nemo possimus nesciunt dicta veniam
            aspernatur quam mollitia.
          </p>
        </div>
        <Link to="why/learn-more" className="block w-full ">
          <AnimatedArrowButton>Lerne mehr</AnimatedArrowButton>
        </Link>
      </RightImage>

      <LeftImage image={phone}>
        This is another content block with an image on the left side
      </LeftImage>

      <RightImage image={pair} className="bg-ming">
        <h2 className="text-2xl text-apple font-bold md:text-4xl">
          Work together
        </h2>
        <p className="mt-6 text-cultured">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
          voluptatem accusantium nemo perspiciatis delectus atque autem!
          Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur!
          Officiis id consequatur atque doloremque!
        </p>
        <p className="mt-4 text-cultured">
          {" "}
          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
          expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur
          quam mollitia.
        </p>
      </RightImage>

      <div className="py-16 white">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">
            What's our customers say
          </h2>
          <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
            <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
              <div className="h-full flex flex-col justify-center space-y-4">
                <img
                  className="w-20 h-20 mx-auto rounded-full"
                  src="images/avatars/second_user.webp"
                  alt="user avatar"
                  height="220"
                  width="220"
                  loading="lazy"
                />
                <p className="text-gray-600 md:text-xl">
                  <span className="font-serif">"</span> Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quaerat repellat
                  perspiciatis excepturi est. Non ipsum iusto aliquam
                  consequatur repellat provident, omnis ut, sapiente voluptates
                  veritatis cum deleniti repudiandae ad doloribus.{" "}
                  <span className="font-serif">"</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Jane Doe
                  </h6>
                  <span className="text-xs text-gray-500">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
              <img
                className="w-20 h-20 mx-auto rounded-full"
                src="images/avatars/first_user.webp"
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                <p className="text-gray-600">
                  <span className="font-serif">"</span> Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quaerat repellat
                  perspiciatis excepturi est. Non ipsum iusto aliquam
                  consequatur repellat provident, omnis ut, sapiente voluptates
                  veritatis cum deleniti repudiandae ad doloribus.{" "}
                  <span className="font-serif">"</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Jane Doe
                  </h6>
                  <span className="text-xs text-gray-500">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
              <img
                className="w-20 h-20 mx-auto rounded-full"
                src="images/avatars/third_user.webp"
                alt="user avatar"
                height="220"
                width="220"
                loading="lazy"
              />
              <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
                <p className="text-gray-600">
                  <span className="font-serif">"</span> Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Quaerat repellat
                  perspiciatis excepturi est. Non ipsum iusto aliquam
                  consequatur repellat provident, omnis ut, sapiente voluptates
                  veritatis cum deleniti repudiandae ad doloribus.{" "}
                  <span className="font-serif">"</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Jane Doe
                  </h6>
                  <span className="text-xs text-gray-500">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
