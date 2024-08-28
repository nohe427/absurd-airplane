import Link from "next/link";
import {headers} from "next/headers";

function getHeaderHost() {
  let hostname = headers().get("X-Forwarded-Host") || headers().get("host");
  hostname = hostname?.split('.')[0] || hostname;
  // return headers().get("host")
  return hostname;
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     Home Page of {getHeaderHost()}
    </main>
  );
}
