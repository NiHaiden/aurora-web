import { getImageName } from "@/lib/utils/download";
import { useToast } from "@/components/ui/use-toast";

export default function RebaseComponent({
  baseSystem,
  primaryGPU,
  developerEdition,
}: {
  baseSystem: string;
  primaryGPU: string;
  developerEdition: string;
}) {
  const { toast } = useToast();
  const imageName =
    getImageName(baseSystem, primaryGPU, developerEdition) + ":latest";
  const imageNameBeta =
    getImageName(baseSystem, primaryGPU, developerEdition) + ":40";

  const rebaseCommand = `rpm-ostree rebase ostree-unverified-registry:ghcr.io/ublue-os/${imageName}`;
  const rebaseBeta = `rpm-ostree rebase ostree-unverified-registry:ghcr.io/ublue-os/${imageNameBeta}`;

  const copyContent = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <section className={"flex flex-col gap-2"}>
      <div
        className={
          "cursor-pointer rounded-2xl bg-gradient-to-br from-aurora-darkblue to-aurora-purple p-2 text-white"
        }
        onClick={async () => {
          toast({
            title: "Copied command",
            description: "The command was copied successfully!",
          });
          await copyContent(rebaseCommand);
        }}
      >
        <code className={""}>{rebaseCommand}</code>
      </div>
      <p>Feeling like beta-testing? Rebase to our F40 based image!</p>
      <div
        className={
          "cursor-pointer rounded-2xl bg-gradient-to-br from-aurora-darkblue to-aurora-purple p-2 text-white"
        }
        onClick={async () => {
          toast({
            title: "Copied command",
            description: "The command was copied successfully!",
          });
          await copyContent(rebaseBeta);
        }}
      >
        <code className={""}>{rebaseBeta}</code>
      </div>
      <p className={"text-xl font-bold text-aurora-lightred"}>
        Please do not rebase from another desktop environment. This is not
        supported and will cause issues!
      </p>
    </section>
  );
}
