import { RefObject } from "react";
import { CircleHelp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations, useMessages } from "next-intl";

interface FAQMessages {
  [key: string]: {
    question: string;
    answer: string;
    optionalLink: string;
  };
}

export default function FAQ({ faqRef }: { faqRef: RefObject<any> }) {
  const t = useTranslations("FAQ");
  const messages = useMessages() as unknown as { FAQ: { questions: FAQMessages } };
  const keys = Object.keys(messages.FAQ.questions);

  return (
    <div
      className={
        "bgimg bgimg_faq flex min-h-[900px] w-full flex-col items-center justify-center gap-5 text-white"
      }
      ref={faqRef}
    >
      <div className={"mt-5 flex h-full w-3/4 max-w-[900px] flex-col gap-5"}>
        <div className={"items-left flex flex-col gap-4"}>
          <h1
            className={
              "flex flex-row items-center justify-center gap-4 bg-gradient-to-br from-aurora-lightorange via-aurora-darkblue to-aurora-lightorange bg-clip-text text-5xl font-bold text-transparent drop-shadow-md lg:justify-start lg:text-7xl"
            }
          >
            <CircleHelp
              className={
                "h-12 w-12 animate-fade-up stroke-aurora-darkblue lg:h-24 lg:w-24"
              }
            />
            {t("faq-title")}
          </h1>
          <p
            className={
              "text-center text-xl text-white lg:text-left lg:text-2xl"
            }
          >
            {t("faq-intro")}
          </p>
        </div>
        <div className={"flex flex-col gap-3"}>
          {keys.map((key) => (
            <QuestionComponent
              key={key}
              question={t(`questions.${key}.question`)}
              answer={t(`questions.${key}.answer`)}
              optionalLink={t(`questions.${key}.optionalLink`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const QuestionComponent = ({
  question,
  answer,
  optionalLink,
}: {
  question: string;
  answer: string;
  optionalLink?: string;
}) => {
  const t = useTranslations("FAQ");
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className={"text-xl font-bold"}>
          {question}
        </AccordionTrigger>
        <AccordionContent className={"text-lg"}>
          {answer} <br />{" "}
          {optionalLink && (
            <a
              className={"font-bold underline"}
              target={"_self"}
              href={optionalLink}
            >
              {t("click-here")}
            </a>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
