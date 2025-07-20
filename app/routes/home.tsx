import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResuMech" },
    {
      name: "description",
      content:
        "We ensure your resume gets past Applicant Tracking Systems by checking for formatting errors and missing keywords",
    },
  ];
}

export default function Home() {
  return <main></main>;
}
