import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav_bar'>
        <div>
            <img src="src/images/Logo(2).png" alt="logo" />
        </div>
        {/* left section */}
        <div className='nav_left'>
            <img src="src/images/Notifications.png" alt="noti" />
            <img src="src/images/user image.png" alt="user" />
            <div>
                <h2>Lisa </h2>
                <p>Operator </p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar