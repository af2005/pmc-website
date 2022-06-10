import React from "react";

import appreciate from "../../img/icons/undraw/undraw_appreciation_re_8nbx.svg";
import phone from "../../img/icons/undraw/undraw_my_app_re_gxtj.svg";

import { LeftImage, RightImage } from "../../components/ImageContent";


export default function WhyPMC() {
  return (
    <>
      <RightImage image={appreciate} className={"bg-cultured"}>
        <h2 className="text-2xl pmc-h2 text-ming font-bold md:text-5xl">
          Der beste Ort um Deine Beziehung zu verbessern.
        </h2>
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
        <a
          href="#"
          className="block w-full py-3 px-6 text-center rounded-full transition btn-apple sm:w-max"
        >
          <span className="block font-semibold text-sm">Lerne mehr</span>
        </a>
      </RightImage>

      <LeftImage image={phone}>
        This is another content block with an image on the left side
      </LeftImage>
    </>
  );
}
