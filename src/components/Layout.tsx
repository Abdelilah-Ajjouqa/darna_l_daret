import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen bg-ink-50 flex flex-col">
            <Navbar />
            <main className="container mx-auto px-4 py-8 flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout