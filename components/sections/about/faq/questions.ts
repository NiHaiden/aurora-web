export const questions: Question[] = [
    {
        question: "Can I get GNOME with that?",
        answer: "If you'd like GNOME rather than KDE, install Bluefin!",
        optionalLink: "https://projectbluefin.io"
    },
    {
        question: "What's the difference between Aurora and Aurora-DX?",
        answer: "Depending on your chosen type of image, there can be quite the difference in package list." +
            " Aurora features a curated set of packages that adhere to end-users needs, while the developer edition includes more developer focused tooling, " +
            "including virtual machine software, preinstalled Visual Studio Code and more. For a comprehensive list, please look at the package list in the GitHub Repository.",
        optionalLink: "https://github.com/ublue-os/bluefin/blob/main/packages.json"
    }
]


export interface Question {
    question: string;
    answer: string;
    optionalLink: string;
}