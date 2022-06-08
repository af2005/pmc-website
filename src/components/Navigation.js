import {Navbar, Button} from "flowbite-react";


export function Navigation() {
    return (
        <>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="https://powermindclub.com/">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button color="green">
                        Say hello
                    </Button>
                    <Navbar.Toggle/>
                </div>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/"
                        active={true}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="/about-us">
                        Über uns
                    </Navbar.Link>
                    <Navbar.Link href="/why">
                        Warum PMC
                    </Navbar.Link>
                    <Navbar.Link href="/blog">
                        Blog
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}