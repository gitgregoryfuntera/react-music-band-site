import { AnchorHTMLAttributes, ReactNode } from 'react'
import CLASSES from './CustomAnchorButton.module.scss'

interface CustomAnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode
}

const CustomAnchorButton = ({children, ...props}: CustomAnchorButtonProps) => {
    return (
        <div className={CLASSES.root}>
            <a {...props}>{children}</a>
        </div>
    )
}

export default CustomAnchorButton