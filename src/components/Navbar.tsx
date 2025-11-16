import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const searchQuery = useSelector((state: any) => state.app.searchQuery)
    const dispatch = useDispatch()

    return (
        <nav className="bg-regal-900 text-school-bus-100 shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-school-bus-500 rounded-full flex items-center justify-center">
                            <span className="text-regal-900 font-bold text-lg">D</span>
                        </div>
                        <span className="text-2xl font-bold text-white">Darna</span>
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-2xl mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search properties, locations..."
                                className="w-full px-4 py-2 rounded-full bg-regal-800 text-white border-2 border-school-bus-500 focus:outline-none"
                                value={searchQuery}
                                onChange={(e) => dispatch({ type: 'app/setSearchQuery', payload: e.target.value })}
                            />
                            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-school-bus-500 text-regal-900 px-4 py-1 rounded-full hover:bg-school-bus-600 transition-colors font-semibold">
                                Search
                            </button>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#" className="text-school-bus-200 hover:text-gold-300 transition-colors">Properties</a>
                        <a href="#" className="text-school-bus-200 hover:text-gold-300 transition-colors">Daret</a>
                        <a href="#" className="text-school-bus-200 hover:text-gold-300 transition-colors">Financing</a>
                        <button className="bg-school-bus-500 text-regal-900 px-6 py-2 rounded-full hover:bg-school-bus-600 transition-colors font-semibold">
                            Sign In
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="w-6 h-0.5 bg-school-bus-500 mb-1.5"></div>
                        <div className="w-6 h-0.5 bg-school-bus-500 mb-1.5"></div>
                        <div className="w-6 h-0.5 bg-school-bus-500"></div>
                    </button>
                </div>

                {/* Mobile Search & Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-school-bus-500">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-4 py-2 rounded-full bg-regal-800 text-white border-2 border-school-bus-500"
                            />
                        </div>
                        <div className="flex flex-col space-y-3">
                            <a href="#" className="text-school-bus-200 hover:text-gold-300">Properties</a>
                            <a href="#" className="text-school-bus-200 hover:text-gold-300">Daret</a>
                            <a href="#" className="text-school-bus-200 hover:text-gold-300">Financing</a>
                            <button className="bg-school-bus-500 text-regal-900 px-6 py-2 rounded-full w-full font-semibold">
                                Sign In
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar