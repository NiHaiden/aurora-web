import { redirect } from "@/i18n/routing";

export default function SwitchRedirectPage() {
  redirect({ locale: "en", href: "/switch" });
}
