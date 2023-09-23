import Link from "next/link"
import Logo from "./logo.png"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="app helpdesk logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <Link href={"/"}>Dashboard</Link>
      <Link href={"/tickets"}>Tickets</Link>
      <Link href={"/tickets/create"}> New Ticket</Link>
    </nav>
  )
}
