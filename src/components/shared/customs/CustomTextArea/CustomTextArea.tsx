import { TextareaHTMLAttributes } from 'react';
import CLASSES from './CustomTextArea.module.scss';

interface CustomTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    customrootclass?: string
    customTextAreaClassType?: 'default'
}

const CustomTextArea = (props: CustomTextAreaProps) => {
    const { customrootclass, customTextAreaClassType } = props
    return (
        <div className={`${CLASSES.root} ${customrootclass}`}>
            <textarea className={CLASSES[customTextAreaClassType as string]} {...props}/>
        </div>
    )
}

export default CustomTextArea;