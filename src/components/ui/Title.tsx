import classNames from 'classnames';
import React from 'react'

type Props = {
    children: React.ReactNode;
    variant: 'h1' | 'h2';
    className?: string;
}

const Title: React.FC<Props> = ({ children, variant, className }) => {

    const baseClasses = 'font-inter font-bold';

    const variants = {
        h1: 'text-4xl lg:text-5xl xl:text-6xl tracking-[-1.28px] leading-tight',
        h2: 'text-3xl lg:text-4xl xl:text-5xl font-bold  leading-tight',
    }
    
    const Tag = variant === 'h1' ? 'h1' : 'h2';

    return (
        <Tag className={classNames(baseClasses, variants[variant], className)}>
            {children}
        </Tag>
    )
}

export default Title
