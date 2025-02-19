import { useState } from "react"
import SideBar from "./SideBar"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router";

const Header = () => {
  const [showMenu , setShowMenu] = useState(false)

  return (
    <div className='bg-[Coral] h-14 flex items-center px-2 md:px-5'>
        <Link to='/'><h1 className='title font-black text-2xl text-white hover:cursor-pointer'>Recipe App</h1></Link>
        <div className="lg:hidden"> {/** This container's element only visible when the size of the screen is less then Large(1024px)*/}
          <RxHamburgerMenu className="top-5 text-white text-xl right-5 absolute hover:cursor-pointer" onClick={() => setShowMenu(true)} />
          {
            showMenu && (
              <div className="z-100 left-0 top-0 w-screen fixed bg-gray-100 pt-7">
                <IoClose className="top-5  text-xl right-5 absolute hover:cursor-pointer" onClick={() => setShowMenu(false)} />
                <SideBar setShowMenu={setShowMenu}/>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default Header