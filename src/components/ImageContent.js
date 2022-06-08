export function LeftImage() {
    return (<>

        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img src="images/startup.png" alt="image" loading="lazy" width="" height=""/>
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out
                            by passionate developers</h2>
                        <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum
                            tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur
                            atque doloremque!</p>
                        <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero
                            quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam
                            mollitia.</p>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export function RightImage() {
    return (<>

        <div className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="space-y-6 md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-blue-900 font-bold md:text-5xl">Nuxt development is carried out
                            by passionate developers.</h2>
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
                           className="block w-full py-3 px-6 text-center rounded-full transition bg-blue-200 hover:bg-blue-100 active:bg-blue-300 focus:bg-blue-100 sm:w-max">
            <span className="block text-blue-900 font-semibold text-sm">
                Learn More
            </span>
                        </a>
                    </div>
                    <div className="md:5/12 lg:w-6/12">
                        <img src="images/boost.png" alt="image" loading="lazy" width="" height=""/>
                    </div>
                </div>
            </div>
        </div>

    </>
)

}