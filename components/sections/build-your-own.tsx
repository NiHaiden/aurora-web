import { ArrowRightCircle, Hammer } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function BuildYourOwn() {
  const t = useTranslations('Build-Your-Own');
  return (
    <div
      className={
        "h-full min-h-fit w-full bg-gradient-to-tr from-aurora-darkblue to-aurora-blue p-20 lg:p-40"
      }
    >
      <div className={"flex w-full flex-col justify-center gap-5"}>
        <div className={"flex flex-row gap-3"}>
          <h1
            className={
              "lg: flex items-center gap-2 text-2xl font-bold text-white drop-shadow-md lg:text-6xl"
            }
          >
            <Hammer className={"h-12 w-12 text-white"} />
            {t('build-your-own')}
          </h1>
        </div>
        <div
          className={
            "grid h-fit w-full grid-cols-1 grid-rows-1 gap-20 lg:grid-cols-2 lg:grid-rows-1"
          }
        >
          <div
            className={
              "flex w-full flex-col gap-3 text-xl text-white lg:text-2xl"
            }
          >{t('want-to-build')}
            <a
              className={
                "flex w-fit flex-row items-center justify-center gap-2 rounded-3xl bg-gradient-to-tr from-aurora-purple to-aurora-darkblue p-5 drop-shadow-md"
              }
              href={"https://github.com/ublue-os/image-template"}
            >
              {t('get-image-template')}{" "}
              <ArrowRightCircle className={"h-10 w-10"} />
            </a>
          </div>
          <div className={"h-fit"}>
            <img
              className={"hidden w-full lg:block lg:max-w-[900px]"}
              alt={"Picture of Code for first Aurora Custom Image"}
              src={"/carbon(3).png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
