import Link from "next/link";
import {headers} from "next/headers";

function getHeaderHost() {
  let hostname = headers().get("X-Forwarded-Host") || headers().get("host");
  hostname = hostname?.split('.')[0] || hostname;
  // return headers().get("host")
  return hostname;
}

function isHome() {
  if (getHeaderHost() == "nohe-example") {
    return true
  }
  return false
}

export default function Home() {
  if (isHome()) {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
       Welcome to my wonderful site. We are no longer accepting new signups!
      </main>
    )
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     Home Page of {getHeaderHost()}
    </main>
  );
}
