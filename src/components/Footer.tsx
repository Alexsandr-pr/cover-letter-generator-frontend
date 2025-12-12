import React from 'react'
import NavLink from './ui/NavLink'

const Footer = () => {
    
    const links = [
        { href: '/', label: 'Home' },
        // { href: '/about', label: 'About' },
        // { href: '/contact', label: 'Contact' },
    ]

    return (
        <footer className='bg-primary w-full'>
            <div className="container">
                <div className="flex py-8 border-t border-secondary items-center justify-between">
                    <nav>
                        <ul className='flex items-center gap-14'>
                            {links.map((link) => (
                                <li key={link.href}>
                                    <NavLink href={link.href}>
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer
