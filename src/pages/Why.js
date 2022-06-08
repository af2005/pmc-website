import appreciate from "../img/icons/undraw/undraw_appreciation_re_8nbx.svg";
import {LeftImage, RightImage} from "../components/ImageContent";

export function Why() {
    return (
        <>

            <div className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="container m-auto px-12 text-gray-600 md:px-12">
                    <div className="space-y-6 md:space-y-0 lg:flex lg:gap-6 lg:items-center lg:gap-12">
                        <div className="space-y-6 md:7/12 lg:w-6/12">
                            <h2 className="text-2xl pmc-h2 text-ming font-bold md:text-5xl">Der beste Ort um Deine Beziehung zu verbessern.</h2>
                            <div className="space-y-4">
                                <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum
                                    tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur
                                    atque doloremque!</p>
                                <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero
                                    quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur
                                    quam mollitia.</p>
                            </div>

                            <a href="#"
                               className="block w-full py-3 px-6 text-center rounded-full transition btn-apple sm:w-max">
            <span className="block font-semibold text-sm">
                Lerne mehr
            </span>
                            </a>
                        </div>
                        <div className="md:5/12 lg:w-6/12">
                            <img src={appreciate} alt="spread love" className="w-80 m-auto"/>
                        </div>
                    </div>
                </div>
            </div>

            <RightImage/>
            <LeftImage/>

        </>
    )
}