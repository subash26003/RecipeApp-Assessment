import PropTypes from 'prop-types'
import { NavLink } from 'react-router'

const SideBar = ({setShowMenu}) => { // the prop comes from Header when the device screen width is lwss than 1024px
    const navItems = [
        {
            displayText : 'Home',
            link : "/",
        },
        {
            displayText : 'Favourites',
            link : '/favourites'
        },
        
    ]

    const handleMobileNavbarVisiblilty = () =>{
        if(setShowMenu){ // to avoid error when sidebar is used from other component 
            setShowMenu(false)
        }
    }

  return (
    <div className='bg-gray-100 flex gap-5 flex-col min-h-screen pt-5'>
        {navItems.map((item ,index) => (
            <NavLink onClick={() => handleMobileNavbarVisiblilty()} to={item.link} key={index} className={`sidebarLink text-[1rem] mx-3 py-2 md:mx-5 md:py-3 rounded-3xl md:rounded-4xl text-center md:text-[1.25rem] font-medium '`}>
                {item.displayText}
            </NavLink>
        ))}
    </div>
  )
}

SideBar.propTypes = {
    setShowMenu : PropTypes.node
}

export default SideBar