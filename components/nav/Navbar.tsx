export default function Navbar() {
    return (
        <header className={"z-40 fixed top-0 w-full flex flex-row gap-4 p-10 items-center "}>
            <nav className={"flex flex-row gap-16 text-xl text-white justify-center"}>
                <div><a href={"#about"}>About</a></div>
                <div><a href={"#features"}>Features</a></div>
                <div><a href={"#downloads"}>Community</a></div>
            </nav>
            <div className={"items-end text-white"}>
                Download
            </div>
        </header>
    );
}