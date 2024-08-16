export const questions: Question[] = [
  {
    question: "Can I get GNOME with that?",
    answer: "If you'd like GNOME rather than KDE, install Bluefin!",
    optionalLink: "https://projectbluefin.io"
  },
  {
    question: "What is Aurora Developer Edition? (Aurora-DX)",
    answer: "Aurora Developer Edition is a special edition of Aurora featuring various additional packages that cater to a development audience. These included preinstalled VS Code with DevContainer capabilities, Docker and Podman as container runtimes, tools for creating and managing virtual machines, tools to create a containerized development environment with DevPod and much more. The developer experience also includes various tools for cloud-native developers. You can always install more via brew! If you want the raw package list, click the link.",
    optionalLink: "https://github.com/ublue-os/bluefin/blob/main/packages.json"
  },
  {
    question: "What's the difference between Vanilla Kinoite and Aurora?",
    answer: "Vanilla Kinoite is a very stock experience. Aurora includes many enhancements and tweaks, like included drivers for various printers, network adapters and more as well as included codecs. Aurora also features tweaks to enhance your battery life on a laptop.",
    optionalLink: ""
  },
  {
    question: "Where can I get the latest news and discussions about Aurora?",
    answer: "Check out our Discourse forums for the latest updates and discussions on Aurora.",
    optionalLink: "https://universal-blue.discourse.group/c/bluefin/6"
  }
];


export interface Question {
  question: string;
  answer: string;
  optionalLink: string;
}
