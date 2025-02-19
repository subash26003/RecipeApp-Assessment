
import SideBar from './SideBar'
import Header from './Header'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <>
        <Header />
        <div className='w-full flex '>
            <div className='hidden lg:block md:w-[20%] lg:w-[15%]'>
                <SideBar />
            </div>
            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default Layout