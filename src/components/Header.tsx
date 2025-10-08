import React from 'react'
import Logo from './ui/Logo'
import Button from './ui/Button'
import NavLink from './ui/NavLink'

const Header = () => {

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <header className='bg-primary w-full py-4 fixed top-0 left-0 right-0 z-50'>
            <div className="container flex items-center justify-between">
                <Logo />
                <div className="md:flex items-center gap-16 hidden">
                    <nav>
                        <ul className='flex items-center gap-8'>
                            {links.map((link) => (
                                <li key={link.href}>
                                    <NavLink href={link.href}>
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Button variant="secondary">
                        <span>
                            Start writing for free
                        </span>
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header
