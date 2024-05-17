import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>
        Hello from DHIS2.
        Health for all.
      </h1>
    </div>
  );
}
