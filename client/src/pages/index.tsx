import Head from "next/head";
import {Source_Sans_3} from "next/font/google";
import Image from "next/image";

const sourceSans = Source_Sans_3({subsets: ["latin"]});

export default function Home() {
  return (
    <>
      <Head>
        <title>Vedes Home Lab</title>
        <meta name="description" content="Vedes Home Lab" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col h-screen bg-gray-900 text-gray-200 px-8 sm:p-0">
        <div className="flex-1 flex flex-col gap-10 justify-center items-center ">
          <Image
            src="/images/homelab.png"
            alt="vedes home lab"
            width={500}
            height={500}
          />
          <div className={`${sourceSans.className} text-2xl`}>
            VEDES HOMELAB
          </div>
        </div>
        <div className="flex justify-center items-center text-sm py-4">
          2023 &#169; Edo
        </div>
      </main>
    </>
  );
}
