export default function Footer() {
    return (
        <>
            <footer className={"min-h-[25vh] w-full bg-gray-800 flex flex-col justify-center gap-4 text-center text-white items-center"}>
                <div className={"text-xl"}>
                    Aurora is proudly built with technology from the <a className={"text-underline font-bold"} href={"https://universal-blue.org"}>Universal-Blue</a> Project.
                </div>
                <div>
                    © Copyright {new Date().getFullYear()} Niklas Haiden and the Project Aurora authors.
                </div>
                <div>
                    Aurora is not affiliated and or endorsed by The Fedora Project, KDE e.V., The KDE Project, Red Hat, Microsoft, ASUS or any other companies mentioned above.
                </div>
                <div>
                    Built with ❤️ in Austria.
                </div>
            </footer>
        </>
    )
}