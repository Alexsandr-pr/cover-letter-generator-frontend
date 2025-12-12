"use client"

import { Link } from "@/i18n/navigation";
import classNames from "classnames";
import { ArrowRight } from "lucide-react";

type Props = {
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
}

const Button: React.FC<Props> = ({
    href,
    type,
    onClick,
    children,
    variant = 'primary',
    className,
}) => {

    const baseClasses = 'font-inter max-w-fit hover:opacity-95 transition-opacity duration-300 hover:cursor-pointer flex items-center gap-2 text-base font-medium leading-normal tracking-[-0.36px] px-6 py-4 rounded-lg';

    const variantClasses = {
        primary: 'bg-primary text-white',
        secondary: 'bg-white text-primary',
    }

    const classes = classNames(baseClasses, variantClasses[variant], className);

    const content = (
        <>
            {children}
            <ArrowRight className="w-6 h-5" />
        </>
    )

    if(href) {
        return (
            <Link href={href} className={classes}>
                {content}
            </Link>
        )
    }

    return (
        <button className={classes} onClick={onClick} type={type}>
            {content}
        </button>
    )
}

export default Button
