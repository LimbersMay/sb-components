import './mylabel.css';

export interface MyLabelProps {
    /**
     * Label text
     */
    label: string;

    /**
     * Size of the label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     *  color of the label
     */
    color?: 'primary' | 'secondary' | 'tertiary';

    /**
     * capitalize all letters
     */
    allCaps?: boolean;

    /**
     * Custom font color
     */
    fontColor?: string;

    /**
     * Custom background color
     */
    backgroundColor?: string;
}

export const MyLabel = ({
    label = 'No label',
    size = 'normal',
    color = 'primary',
    allCaps = false,
    fontColor = '',
    backgroundColor = 'transparent'
}: MyLabelProps ) => {
    return (
        <span
            className={`label ${ size } text-${color}`}
            style={{color: fontColor, backgroundColor}}
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}