// default
import React from "react";
// internal
import { authConfig, loginIsRequiredServer } from "../../lib/auth";
// external
import { getServerSession } from "next-auth";

const wait = (ms: number) => new Promise((rs) => setTimeout(rs, ms));

export default async function Dashboard({ children }: any) {
  await loginIsRequiredServer();
  const session = await getServerSession(authConfig);
  await wait(1000);

  return <React.Fragment>{session && children}</React.Fragment>;
}
