import { useTranslations } from "next-intl";

export default function CheckDocs() {
  const t = useTranslations("Download-Component");

  return (
    <div className={"w-full"}>
      <div className={"italic text-aurora-darkblue"}>
        {t("check-out")}{" "}
        <a className={"underline"} href={"https://docs.getaurora.dev"}>
          {" "}
          {t("documentation")}
        </a>
      </div>
      ülplok,olm,
    </div>
  );
}
