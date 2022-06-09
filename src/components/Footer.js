import logo from '../img/logo/min/logo-text-black.svg'


export function Footer() {
    return (
        <>

            <footer className="bg-gray-100 rounded-xl">
                <div className="container m-auto px-6 py-16 space-y-8 text-gray-600 md:px-12 lg:px-20">
                    <div className="flex flex-col flex-wrap gap-4 items-center justify-between pb-8 border-b">
                        <img
                             src={logo} alt="Power mind club"
                             className="w-48"/>

                    </div>
                    <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                        <div>
                            <h6  className="pmc-h6">Company</h6>
                            <ul className="list-inside mt-4 space-y-4">
                                <li>
                                    <a href="#" className="hover:text-cyan-600 transition">About</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-cyan-600 transition">Customers</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-cyan-600 transition">Enterprise</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-cyan-600 transition">Partners</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-cyan-600 transition">Jobs</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6  className="pmc-h6">Products</h6>
                            <ul className="list-inside mt-4 space-y-4">
                                <li>
                                    <a href="#" className="hover:text-cyan-600 transition">About</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-cyan-600 transition">Customers</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-cyan-600 transition">Enterprise</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-cyan-600 transition">Partners</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-cyan-600 transition">Jobs</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="pmc-h6">Developers</h6>
                            <ul className="list-inside mt-4 space-y-4">
                                <li>
                                    <a href="#" className="hover:text-cyan-600 transition">About</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-cyan-600 transition">Customers</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-cyan-600 transition">Enterprise</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-cyan-600 transition">Partners</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-cyan-600 transition">Jobs</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="pmc-h6">Rechtliches</h6>
                            <ul className="list-inside mt-4 space-y-4">
                                <li>
                                    <a href="#" className="hover:text-cyan-600 transition">Impressum</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-cyan-600 transition">Datenschutzerklärung</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between px-4 py-3 rounded-md bg-gray-200 text-gray-600">
                        <span>&copy; Power Mind Club <span id="year"></span></span>
                        <span>Made with love in Hamburg</span>
                    </div>
                </div>
            </footer>

        </>
    )
}