import classNames from 'classnames';
import React from 'react'

type Props = {
    children: React.ReactNode;
    className?: string;
}
const Text: React.FC<Props> = ({ children, className }) => {
    return (
        <p className={classNames('font-inter text-base md:text-lg font-normal leading-[1.66] tracking-[-0.36px]', className)}>
            {children}
        </p>
    )
}

export default Text
