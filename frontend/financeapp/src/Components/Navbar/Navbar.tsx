import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'

const Navbar = () => {
    // TODO: gerçek auth sistemi kurulunca bu mock state'in yerini alacak
    const [user, setUser] = useState<{ userName: string } | null>(null)

    const isLoggedIn = () => user !== null

    const logout = () => {
        setUser(null)
    }

    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-20">
                    <Link to="/">
                        <img src={logo} alt="" className="h-12 w-auto object-contain" />
                    </Link>
                    <div className="hidden font-bold lg:flex">
                        <Link to="/search" className="text-black hover:text-darkBlue">
                            Search
                        </Link>
                    </div>
                </div>
                {isLoggedIn() ? (
                    <div className="hidden lg:flex items-center space-x-6 text-back">
                        <div className="hover:text-darkBlue">Welcome, {user?.userName}</div>
                        <a
                            onClick={logout}
                            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
                        >
                            Logout
                        </a>
                    </div>
                ) : (
                    <div className="hidden lg:flex items-center space-x-6 text-back">
                        <Link to="/login" className="hover:text-darkBlue">
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
                        >
                            Signup
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
