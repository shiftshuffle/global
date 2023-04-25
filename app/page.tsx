import Image from 'next/image'
import { Inter } from 'next/font/google'

import Calculator from '@/components/CalcWraper';
import ContactForm from "@/components/ContactForm";
import PositiveThings from "@/components/PositiveThings3"
import DepImage from '@/components/DepImage';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div>
        <main className="flex min-h-screen flex-col items-center justify-between p-4">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">


            {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}

          </div>

          {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div> */}

          <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">





          </div>





          <Calculator />
          <ContactForm />
          <PositiveThings />
          <DepImage />

        </main>
      </div>
    </>
  )
}
