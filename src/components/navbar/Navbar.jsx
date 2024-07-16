import React, { useEffect } from 'react'
import { FiMenu } from 'react-icons/fi';
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';

const navMenus = [
  {
    name: "Home",
    link: "/#home",
  }, 
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Services",
    link: ".#services",
  },
  {
    name: "Contact",
    link : "#",
  },
]

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false)
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else{
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme])
  
  return (
    <>
      <nav className="bg-secondary dark:bg-gray-900">
        <div className="container flex justify-between items-center py-3 sm:py-0">
          <h1 className="text-3xl text-primary font-bold">Portfolio</h1>
          {/* desktop menu */}
          <div className="hidden sm:block">
            <ul className="flex items-center gap-4">
              {navMenus.map((menu) => (
                <li key={menu.name}>
                  <a
                    href={menu.link}
                    className="text-xl font-semibold px-2 py-4 md:py-6 inline-block dark:text-white cursor-pointer"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}

              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl dark:text-white"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl cursor-pointer dark:text-white"
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </div>

          {/* mobile view */}
          <div className="sm:hidden block">
            <div className="flex items-center gap-4">
              {/*theme change: dark and light mode*/}
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl dark:text-white"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl cursor-pointer dark:text-white"
                  onClick={() => setTheme("dark")}
                />
              )}

              <FiMenu
                className="text-2xl cursor-pointer dark:text-white"
                onClick={toggleMenu}
              />
            </div>

            {showMenu && (
              <div className="fixed top-16 bg-white dark:bg-gray-900 dark:text-white shadow-md rounded-b-xl z-10 py-10 left-0 right-0 ">
                <ul className="flex flex-col items-center gap-4">
                  {navMenus.map((menu) => (
                    <li key={menu.name}>
                      <a
                        className="text-xl font-semibold md:py-6 inline-block cursor-pointer px-2 py-4"
                        href={menu.link}
                      >
                        {menu.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar

