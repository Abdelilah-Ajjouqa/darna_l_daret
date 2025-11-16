const Footer = () => {
    return (
        <footer className="bg-regal-900 text-school-bus-100">
            <div className="container mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-school-bus-500 rounded-full flex items-center justify-center">
                                <span className="text-regal-900 font-bold text-lg">D</span>
                            </div>
                            <span className="text-2xl font-bold text-white">Darna</span>
                        </div>
                        <p className="text-school-bus-200 text-sm">
                            Your trusted partner in real estate and collective savings.
                            Making property ownership accessible through modern technology
                            and traditional Daret values.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-regal-800 rounded-full flex items-center justify-center hover:bg-school-bus-500 hover:text-regal-900 transition-colors">
                                <span className="font-bold">f</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-regal-800 rounded-full flex items-center justify-center hover:bg-school-bus-500 hover:text-regal-900 transition-colors">
                                <span className="font-bold">t</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-regal-800 rounded-full flex items-center justify-center hover:bg-school-bus-500 hover:text-regal-900 transition-colors">
                                <span className="font-bold">in</span>
                            </a>
                            <a href="#" className="w-10 h-10 bg-regal-800 rounded-full flex items-center justify-center hover:bg-school-bus-500 hover:text-regal-900 transition-colors">
                                <span className="font-bold">ig</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-school-bus-200 hover:text-gold-300 transition-colors">Properties for Sale</a>
                            </li>
                            <li>
                                <a href="#" className="text-school-bus-200 hover:text-gold-300 transition-colors">Properties for Rent</a>
                            </li>
                            <li>
                                <a href="#" className="text-school-bus-200 hover:text-gold-300 transition-colors">New Projects</a>
                            </li>
                            <li>
                                <a href="#" className="text-school-bus-200 hover:text-gold-300 transition-colors">Commercial Properties</a>
                            </li>
                            <li>
                                <a href="#" className="text-school-bus-200 hover:text-gold-300 transition-colors">Luxury Villas</a>
                            </li>
                        </ul>
                    </div>

                    {/* Daret Services */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Daret Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-school-bus-200 hover:text-gold-300 transition-colors">Create Daret Group</a>
                            </li>
                            <li>
                                <a href="#" className="text-school-bus-200 hover:text-gold-300 transition-colors">Join Existing Group</a>
                            </li>
                            <li>
                                <a href="#" className="text-school-bus-200 hover:text-gold-300 transition-colors">Daret Rules & Guidelines</a>
                            </li>
                            <li>
                                <a href="#" className="text-school-bus-200 hover:text-gold-300 transition-colors">Payment Tracking</a>
                            </li>
                            <li>
                                <a href="#" className="text-school-bus-200 hover:text-gold-300 transition-colors">Group Management</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Support */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
                        <div className="space-y-3 text-school-bus-200">
                            <div className="flex items-center space-x-3">
                                <div className="w-6 h-6 bg-school-bus-500 rounded-full flex items-center justify-center">
                                    <span className="text-regal-900 text-xs">📍</span>
                                </div>
                                <span>123 Business District, Casablanca, Morocco</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-6 h-6 bg-school-bus-500 rounded-full flex items-center justify-center">
                                    <span className="text-regal-900 text-xs">📞</span>
                                </div>
                                <span>+212 5 XX XX XX XX</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-6 h-6 bg-school-bus-500 rounded-full flex items-center justify-center">
                                    <span className="text-regal-900 text-xs">✉️</span>
                                </div>
                                <span>hello@darna.com</span>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button className="bg-school-bus-500 text-regal-900 px-6 py-2 rounded-full hover:bg-school-bus-600 transition-colors font-semibold w-full">
                                Contact Support
                            </button>
                        </div>
                    </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="border-t border-regal-700 pt-8 mb-8">
                    <div className="max-w-md mx-auto text-center">
                        <h3 className="text-lg font-bold text-white mb-2">Stay Updated</h3>
                        <p className="text-school-bus-200 mb-4">Subscribe to our newsletter for the latest properties and Daret opportunities</p>
                        <div className="flex space-x-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 rounded-full bg-regal-800 text-white border border-regal-600 focus:outline-none focus:border-school-bus-500"
                            />
                            <button className="bg-school-bus-500 text-regal-900 px-6 py-2 rounded-full hover:bg-school-bus-600 transition-colors font-semibold">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-regal-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-school-bus-300 text-sm">
                            © 2024 Darna. All rights reserved. Made with Abdelilah in Morocco
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-school-bus-300 hover:text-gold-300 transition-colors">Privacy Policy</a>
                            <a href="#" className="text-school-bus-300 hover:text-gold-300 transition-colors">Terms of Service</a>
                            <a href="#" className="text-school-bus-300 hover:text-gold-300 transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer