"use client";

export default function GetAurora() {
  return <div>nothing</div>;
}

function DownloadCard() {
  return (
    <div
      className={
        "w-full max-w-screen-2xl rounded-3xl border border-zinc-600 backdrop-blur-2xl"
      }
    ></div>
  );
}


/*
saving for later
<div
            className={
              "flex w-full flex-col justify-between gap-3 rounded-3xl border border-zinc-600 p-4 px-6 py-6 backdrop-blur-2xl"
            }
          >
            <h1
              className={
                "bg-gradient-to-r from-aurora-blue via-aurora-darkblue to-aurora-purple bg-clip-text text-3xl font-bold text-transparent"
              }
            >
              Aurora Helium (LTS) Edition
            </h1>
            <p>
              Derived a CentOS Stream Base, this is the ideal image for people
              who need a reliable day-to-day computing experience and don't need
              the latest and greatest kernel.
            </p>
            <div>
              <DownloadButtons imageName={"Aurora-Helium"} isHelium={true} />
            </div>
          </div>
 */
