import { Link } from '@/i18n/navigation'
import React from 'react'

type Props = {
    href: string;
    children: React.ReactNode;
}

const NavLink: React.FC<Props> = ({href, children}) => {

    return (
        <Link href={href} className='font-inter hover:opacity-95 text-white transition-opacity duration-300 hover:cursor-pointer text-lg font-medium leading-normal tracking-[-0.36px]'>
            {children}
        </Link>
    )
}

export default NavLink
