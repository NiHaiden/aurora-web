"use client";

import useSWR from "swr";


export default function Contributors() {
  return (
      <div>
        <div
            className={
              "flex max-w-screen-2xl flex-col items-center justify-center gap-5"
            }
        >
          <h1
              className={
                "bg-gradient-to-r from-aurora-blue to-aurora-lightorange bg-clip-text text-4xl font-bold text-transparent lg:text-7xl"
              }
          >
            For the community, by the community.
          </h1>
          <div className={"text-xl"}>
            Aurora is built and maintained by the community, for the
            community. We are passionate in what we do.
          </div>
          <ContributorsGrid />
        </div>
      </div>
  )
}



function ContributorsGrid() {
  const { data, error} = useSWR("/api/contributors", getContributors);


  if(data) {
    return (
        <div className={"flex flex-wrap h-fit w-full max-w-screen-2xl gap-4 justify-center\n"}>
          {filterBotContributors(data.contributors!).map((contributor: GitHubContributor) => (
              <ContributorBadge
                  key={contributor.id}
                  img={contributor.avatar_url}
                  profileUrl={contributor.html_url}
                  name={contributor.login}
              />
          ))}
        </div>
    );
  } else {
    return (
        <div className={"flex flex-wrap h-fit w-full max-w-screen-2xl gap-4 justify-center"}>
          Contributors could not be loaded.
        </div>
    )
  }
}

const filterBotContributors = (contributors: GitHubContributor[]): GitHubContributor[] => {
  return contributors.filter(contributor => !contributor.login.includes('[bot]'));
};


function ContributorBadge({
  img,
  profileUrl,
  name,
}: {
  img: string;
  profileUrl: string;
  name: string;
}) {
  return (
    <a href={profileUrl} className={"flex flex-row gap-5 items-center justify-center h-fit w-fit bg-gradient-to-r from-aurora-blue to-aurora-darkblue p-2 lg:px-4 px-2 rounded-full"}>
      <img width={55} height={55} src={img} alt={name} className={"rounded-full"} />
      <span className={"text-white"}>
        {name}
      </span>
    </a>
  );
}

async function getContributors() {
  const response = await fetch(
    "https://api.github.com/repos/ublue-os/aurora/contributors",
  );

  if (!response.ok) {
    return {
      contributors: undefined,
      error: {
        message: response.statusText,
      },
    };
  }

  const contributors = await response.json();
  return {
    contributors,
    error: undefined,
  };
}

type GetReturnType = {
  contributors: GitHubContributor[] | undefined;
  error:
    | {
        message: string;
      }
    | undefined;
};

type GitHubContributor = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
  contributions: number;
};
