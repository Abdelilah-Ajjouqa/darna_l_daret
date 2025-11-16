import { useState } from 'react'

const HomePage = () => {
    const [activeTab, setActiveTab] = useState('buy')

    const featuredProperties = [
        {
            id: 1,
            title: "Modern Villa in Casablanca",
            price: "2,500,000 MAD",
            location: "Casablanca",
            beds: 4,
            baths: 3,
            area: "250m²",
            image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400"
        },
        {
            id: 2,
            title: "Seaside Apartment Rabat",
            price: "1,800,000 MAD",
            location: "Rabat",
            beds: 3,
            baths: 2,
            area: "120m²",
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400"
        },
        {
            id: 3,
            title: "Traditional Riad Marrakech",
            price: "3,200,000 MAD",
            location: "Marrakech",
            beds: 5,
            baths: 4,
            area: "300m²",
            image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400"
        }
    ]

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <section className="text-center space-y-6 py-12">
                <h1 className="text-5xl md:text-6xl font-bold text-regal-900">
                    Find Your <span className="text-school-bus-500">Dream</span> Home
                </h1>
                <p className="text-xl text-regal-700 max-w-2xl mx-auto">
                    Discover the perfect property with Darna - Where traditional Daret meets modern real estate
                </p>

                {/* Quick Search Tabs */}
                <div className="flex justify-center space-x-4">
                    {['buy', 'rent', 'daret'].map((tab) => (
                        <button
                            key={tab}
                            className={`px-6 py-3 rounded-full font-semibold transition-all ${activeTab === tab
                                    ? 'bg-school-bus-500 text-regal-900 shadow-lg'
                                    : 'bg-regal-800 text-school-bus-200 hover:bg-regal-700'
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-regal-900 text-school-bus-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                        <div className="text-3xl font-bold text-gold-400">500+</div>
                        <div className="text-sm text-school-bus-200">Properties Listed</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-gold-400">200+</div>
                        <div className="text-sm text-school-bus-200">Happy Clients</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-gold-400">50+</div>
                        <div className="text-sm text-school-bus-200">Daret Groups</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-gold-400">15+</div>
                        <div className="text-sm text-school-bus-200">Partner Banks</div>
                    </div>
                </div>
            </section>

            {/* Featured Properties */}
            <section>
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-regal-900">Featured Properties</h2>
                    <button className="text-school-bus-600 hover:text-school-bus-700 font-semibold">
                        View All →
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProperties.map((property) => (
                        <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-regal-200">
                            <div className="h-48 bg-regal-200 relative">
                                <img
                                    src={property.image}
                                    alt={property.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-school-bus-500 text-regal-900 px-3 py-1 rounded-full font-semibold">
                                    Featured
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-regal-900 mb-2">{property.title}</h3>
                                <div className="text-2xl font-bold text-school-bus-600 mb-3">{property.price}</div>
                                <div className="flex items-center text-regal-700 mb-4">
                                    <span className="mr-4">📍 {property.location}</span>
                                </div>
                                <div className="flex justify-between text-sm text-regal-600 border-t border-regal-200 pt-4">
                                    <span>🛏 {property.beds} beds</span>
                                    <span>🚿 {property.baths} baths</span>
                                    <span>📐 {property.area}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Daret Section */}
            <section className="bg-school-bus-500 rounded-2xl p-8 text-regal-900">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold mb-4">Start Your Daret Journey</h2>
                    <p className="text-lg mb-6">
                        Join collective savings groups and make property ownership achievable through traditional Moroccan Daret.
                    </p>
                    <div className="flex space-x-4">
                        <button className="bg-regal-900 text-school-bus-100 px-6 py-3 rounded-full hover:bg-regal-800 transition-colors font-semibold">
                            Create Daret Group
                        </button>
                        <button className="bg-white text-regal-900 px-6 py-3 rounded-full hover:bg-regal-50 transition-colors font-semibold">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-ink-100 p-6 rounded-xl border border-ink-200">
                    <div className="w-12 h-12 bg-school-bus-500 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-regal-900 font-bold">🏠</span>
                    </div>
                    <h3 className="text-xl font-bold text-regal-900 mb-2">Easy Listings</h3>
                    <p className="text-regal-700">List your property in minutes with our streamlined process</p>
                </div>

                <div className="bg-ink-100 p-6 rounded-xl border border-ink-200">
                    <div className="w-12 h-12 bg-school-bus-500 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-regal-900 font-bold">👥</span>
                    </div>
                    <h3 className="text-xl font-bold text-regal-900 mb-2">Daret Groups</h3>
                    <p className="text-regal-700">Join or create savings groups for collective property investment</p>
                </div>

                <div className="bg-ink-100 p-6 rounded-xl border border-ink-200">
                    <div className="w-12 h-12 bg-school-bus-500 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-regal-900 font-bold">💰</span>
                    </div>
                    <h3 className="text-xl font-bold text-regal-900 mb-2">Smart Financing</h3>
                    <p className="text-regal-700">Get the best financing options with our partner banks</p>
                </div>
            </section>
        </div>
    )
}

export default HomePage