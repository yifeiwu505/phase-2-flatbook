import image from "next/image";
import {useState} from 'react'
import CoContainer from "./coContainer";
import Sidebar from "../components/Sidebar";
import Link from 'next/link'
import{
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import{
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";

function Header({setSearch, search}){
    const [show,setShow]=useState(true)
    function handleShow(){
    console.log('hi');
    setShow(!show)
}
    return (
      <div className="sticky top-0 z-50 bg-white items-center p-2 lg:px-5 shadow-md">
        {/* top left part */}
        <div className="flex items-center">
          <img
            src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
            width={40}
            height={40}
            layout="fixed"
          />
          <div className="flex ml-2 items-center rounded-full bg-grey-100 p-2 flex-shrink">
            <SearchIcon className="h-6" />

            {/* middle part */}
            <div className="flex justify-center flex-grow">
              <div className="flex space-x-6 md:space-x-2">
                <Link href="/">
                  <HeaderIcon Icon={HomeIcon} />
                </Link>
                <Link href="/news">
                  <HeaderIcon Icon={FlagIcon} />
                </Link>
                <Link handleShow={handleShow} show={show} href="/banish">
                  <HeaderIcon Icon={PlayIcon} />
                </Link>

                <Link href="/marketplace">
                  <HeaderIcon Icon={ShoppingCartIcon} />
                </Link>
                <Link href="/addfren">
                  <HeaderIcon Icon={UserGroupIcon} />
                </Link>
              </div>
            </div>

            {/* right part */}
            <div className="flex items-center sm:space-x-2 justify-end">
              {/* profiles goes here */}
              <p className="whitespace-nowrap fontsemibold pr-3">
                {" "}
                Your User Name{" "}
              </p>
              <ViewGridIcon className="icon" />
              <ChatIcon className="icon" />
              <BellIcon className="icon" />
              <ChevronDownIcon className="icon" />
            </div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="hidden md:inline-flex ml-2 items-center bg-transparent"
              type="text"
              placeholder="Search Flatbook"
            />
          </div>
        </div>

        {/* middle part */}
       

        {/* right part */}
      </div>
    );
}
export default Header;