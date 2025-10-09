import { Link, useLocation } from "react-router-dom"
import logo from '../assets/logo.png'
import wishlist from '../assets/Wish list.png'
import addtocart from '../assets/Add to card.png'
import Button from "./Button"
import user from '../assets/user.png'

function Header() {
    let location = useLocation()
    let paths = {
        home: true,
        fakedata: false,
        signin: false,
        signup: false
    }
    switch (location.pathname) {
        case "/fakedata":
            paths.home = false
            paths.signin = false
            paths.signup = false
            paths.fakedata = true
            break
        case "/signin":
            paths.home = false
            paths.signin = true
            paths.signup = false
            paths.fakedata = false
            break
        case "/signup":
            paths.home = false
            paths.signin = false
            paths.signup = true
            paths.fakedata = false
            break;
        default:
            paths.home = true
            paths.signin = false
            paths.signup = false
            paths.fakedata = false
            break;
    }


    return (
        <div>
            <nav className="bg-white z-20 border-gray-200 dark:bg-white shadow-md dark:border-gray-700 m-4 mx-20  rounded-xl fixed top-2 w-[87vw]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-gray-700">DigiSell</span>
                    </Link>
                    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  dark:border-gray-700">
                            
                            <img src={wishlist} alt="" className="w-10 h-10" />
                            <img src={addtocart} alt="" className="w-10 h-10" />
                            <Link to="/signin">
                                <Button text={"Sign In"} icon={user} />
                            </Link>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header