import checklist from '../img/icons/undraw/undraw_booking_re_gw4j.svg'
import {useState} from 'react'
import {Tab} from '@headlessui/react'
import rocket from '../img/icons/doodle/misc/rocket.svg'
import {LeftImage} from "../components/ImageContent";
import {Col, Container, Row} from "../components/Layout";
import {Card} from "flowbite-react";
import happy from "../img/icons/doodle/emojis/happy-emoji.svg"
import heart from "../img/icons/doodle/interface/heart.svg"
import message from "../img/icons/doodle/interface/message.svg"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    let [categories] = useState({
        Recent: [{
            id: 1, title: 'Does drinking coffee make you smarter?', date: '5h ago', commentCount: 5, shareCount: 2,
        }, {
            id: 2, title: "So you've bought coffee... now what?", date: '2h ago', commentCount: 3, shareCount: 2,
        },], Popular: [{
            id: 1, title: 'Is tech making coffee better or worse?', date: 'Jan 7', commentCount: 29, shareCount: 16,
        }, {
            id: 2,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
        },], Trending: [{
            id: 1,
            title: 'Ask Me Anything: 10 answers to your questions about coffee',
            date: '2d ago',
            commentCount: 9,
            shareCount: 5,
        }, {
            id: 2,
            title: "The worst advice we've ever heard about coffee",
            date: '4d ago',
            commentCount: 1,
            shareCount: 2,
        },],
    })

    return (<div className="w-full max-w-md px-2 py-16 sm:px-0">
        <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                {Object.keys(categories).map((category) => (<Tab
                    key={category}
                    className={({selected}) => classNames('w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700', 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2', selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white')}
                >
                    {category}
                </Tab>))}
            </Tab.List>
            <Tab.Panels className="mt-2">
                {Object.values(categories).map((posts, idx) => (<Tab.Panel
                    key={idx}
                    className={classNames('rounded-xl bg-white p-3', 'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2')}
                >
                    <ul>
                        {posts.map((post) => (<li
                            key={post.id}
                            className="relative rounded-md p-3 hover:bg-gray-100"
                        >
                            <h3 className="text-sm font-medium leading-5">
                                {post.title}
                            </h3>

                            <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                <li>{post.date}</li>
                                <li>&middot;</li>
                                <li>{post.commentCount} comments</li>
                                <li>&middot;</li>
                                <li>{post.shareCount} shares</li>
                            </ul>

                            <a
                                href="#"
                                className={classNames('absolute inset-0 rounded-md', 'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2')}
                            />
                        </li>))}
                    </ul>
                </Tab.Panel>))}
            </Tab.Panels>
        </Tab.Group>
    </div>)
}

function CallToAction() {
    return (

        <div className="py-16 lg:py-40 pmc-gradient-green">
            <div className="container m-auto px-6 space-y-8 text-onyx md:px-12 lg:px-20">
                <div className="justify-center text-center gap-6 md:text-left md:flex lg:items-center  lg:gap-16">
                    <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                        <h1 className="text-4xl text-white font-bold md:text-4xl">Was kannst Du an Deiner Beziehung
                            verbessern?</h1>
                        <p className="text-lg text-white">Führende PMC Coaches haben ein System entwickelt... Erhalte in
                            3 Minuten Dein Ergebnis.</p>
                        <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                            <button type="button" title="Start buying"
                                    className="w-full py-3 px-6 text-center rounded-xl transition bg-ming shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max">
                        <span className="block text-white font-semibold">
                           Mache den Test
                        </span>
                            </button>

                        </div>
                    </div>
                    <div className="md:5/12 lg:w-5/12 pt-10 lg:py-0">
                        <img src={checklist} width="832" height="608" className="w-80 m-auto"
                             loading="lazy" alt="mobility_illustration"/>
                    </div>

                </div>
            </div>
        </div>

    )
}

function ThreeFeatures() {
    return (<>
        <div className={"py-16 lg:py-40 container m-auto text-center"}>

            <Row className={""}>
                <Col className="w-10/12 sm:w-7/12 md:w-4/12">
                    <Container className="flex flex-col">
                        <img src={happy} alt="smile" className="h-20 mb-5 "/>
                        <h6 className="pmc-h6">
                            Lerne
                        </h6>
                        <p>Wie Deine Beziehung noch besser werden kann</p>
                    </Container>
                </Col>
                <Col className="w-10/12 sm:w-7/12 md:w-4/12">
                    <Container className="flex flex-col">
                        <img src={heart} alt="heart" className="h-20 mb-5 "/>
                        <h6 className="pmc-h6">
                            Tausche Dich aus
                        </h6>
                        <p>Es gibt viele Menschen mit denselben Gefühlen wie du</p>
                    </Container>
                </Col>
                <Col className="w-10/12 sm:w-7/12 md:w-4/12">
                    <Container className="flex flex-col">
                        <img src={message} alt="talk" className="h-20 mb-5 "/>
                        <h6 className="pmc-h6">
                            Buche ein Power Mind
                        </h6>
                        <p> Finde einen zertifizierten Coach der genau für Dich passt.
                        </p>
                    </Container>
                </Col>


            </Row>
        </div>

    </>)
}

export function Home() {
    return (<>


        <CallToAction/>
        <ThreeFeatures/>


        <LeftImage image={rocket}>
            <h2 className="text-2xl text-ming font-bold md:text-4xl">We are the best</h2>
            <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eum omnis
                voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae
                unde
                aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
            <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero
                quaerat iure
                expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam
                mollitia.</p>
        </LeftImage>


    </>)
}