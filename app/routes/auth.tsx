import React from "react";
import { usePuterStore } from "~/lib/puter";

export const meta = () => [
  { title: "ResuMech | Auth" },
  { name: "description", content: "Log into your account" },
];

const auth = () => {
  const { isLoading } = usePuterStore();

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className="flex flex-col gap-2 text-center items-center justify-center">
            <h1>Welcome</h1>
            <h2>Log in to continue your job journey</h2>
          </div>
        </section>
      </div>
    </main>
  );
};

export default auth;
