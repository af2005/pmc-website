import logo from "../img/logo.svg";

export function Home() {
    return (
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="text-3xl font-bold underline">
                    Hello world!
                </h1>
            </header>
        </>
    )
}