import Image from "next/image"
import Link from "next/link"
import darkLogo from "@/public/black_logo_ts.png"
import lightLogo from "@/public/white_logo_ts.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className="w-10 md:w-12 overflow-hidden mr-1 md:mr-2">
            <Image src={darkLogo} alt="BrainBite logo" className="w-full dark:hidden rounded-full" sizes="10vw" priority />
            <Image src={lightLogo} alt="BrainBite logo" className="w-full hidden dark:flex rounded-full" sizes="10vw" priority />
        </div>
        <span className="font-bold dark:font-semibold text-lg md:text-xl">BrainBite</span>
    </Link>
  )
}

export default Logo