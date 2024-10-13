import { RefObject } from "react";
import { CircleHelp } from "lucide-react";
import { Question, questions } from "@/components/sections/about/faq/questions";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ({ faqRef }: { faqRef: RefObject<any> }) {
  return (
    <div className={"min-h-[900px] w-full flex gap-5 flex-col items-center justify-center bgimg bgimg_faq text-white"}
         ref={faqRef}>
      <div className={"w-3/4 max-w-[900px] h-full flex flex-col gap-5 mt-5"}>
        <div className={"flex flex-col items-left gap-4"}>
          <h1
            className={"text-5xl lg:text-7xl flex flex-row items-center justify-center lg:justify-start gap-4 font-bold bg-gradient-to-br drop-shadow-md from-aurora-lightorange via-aurora-darkblue to-aurora-lightorange text-transparent bg-clip-text"}>
            <CircleHelp className={"w-12 h-12 lg:w-24 lg:h-24 animate-fade-up stroke-aurora-darkblue"} />
            Aurora FAQ
          </h1>
          <p className={"text-xl lg:text-2xl text-white text-center lg:text-left"}>Interested in more details?
            Find answers to the most burning questions.</p>
        </div>
        <div className={"flex flex-col gap-3"}>
          {questions.map((question: Question) => (
            <QuestionComponent key={question.question} question={question.question} answer={question.answer}
                               optionalLink={question.optionalLink} />
          ))}
        </div>
      </div>
    </div>
  );
}

const QuestionComponent = ({ question, answer, optionalLink }: {
  question: string;
  answer: string;
  optionalLink?: string
}) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className={"text-xl font-bold"}>{question}</AccordionTrigger>
        <AccordionContent className={"text-lg"}>
          {answer} <br /> {optionalLink &&
          <a className={"font-bold underline"} target={"_self"} href={optionalLink}>Click here!</a>}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};