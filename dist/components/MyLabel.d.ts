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
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
