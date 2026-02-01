"use client"
import Link from 'next/link'
import { GoHomeFill } from "react-icons/go";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdConnectWithoutContact } from "react-icons/md";
import { usePathname } from 'next/navigation';
import { GiPartyPopper } from "react-icons/gi";



const Links = [
  {
    id: 1,
    name: "მთავარი",
    href: "/admin",
    icon: <GoHomeFill/>
  },

  {
    id: 3,
    name: "ივენთები",
    href: "/admin/events",
    icon: <GiPartyPopper />
  },

  {
    id:2,
    name: "ვიზიტორები",
    href: "/admin/visitors",
    icon: <FaPeopleGroup/>
  },
  {
    id:3,
    name: "კონტაქტები",
    href: "/admin/contacts",
    icon: <MdConnectWithoutContact/>
  }
]

export default function SideBar() {
  const pathname = usePathname()
  return (
    <section className='w-64 flex flex-col gap-5 py-10 min-h-screen fixed top-18 left-0 bg-white border-r border-gray-100'>
      {
        Links.map(link => {
          return (
            <Link className={`px-5 flex items-center gap-2 py-3 rounded-xl duration-200
  ${pathname === link.href
                ? "bg-blue-500 text-white"
                : "text-gray-600 bg-gray-50/50 hover:bg-blue-500 hover:text-white"}`} key={link.id} href={link.href}>
              <span className='text-2xl'>
                {link.icon}
              </span>
              <span className='font-bold'>
                {
                  link.name
                }
              </span>
            </Link>
          )
        })
      }
    </section>
  )
}
