import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export interface CardProps {
    // primary?: boolean;
    backgroundColor?: string;
    textColor?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
    label?: string;
    description?: string;
    content?: string;
    onClick?: () => void;
}

export const Cards = ({
    // primary = false,
    size = 'medium',
    variant = 'default',
    backgroundColor,
    textColor,
    label,
    description,
    content,
    ...props
}: CardProps) => {
    
    const sizeClasses = {
        small: "p-3 text-sm w-54",
        medium: "p-5 text-base w-72",
        large: "p-7 text-lg w-96",
    };
    
    const variantClasses = {
        default: 'bg-white border border-gray-200 text-gray-800',
        primary: 'bg-blue-500 border border-blue-600 text-white',
        secondary: 'bg-gray-100 border border-gray-300 text-gray-900',
        success: 'bg-green-500 border border-green-600 text-white',
        danger: 'bg-red-500 border border-red-600 text-white',
        warning: 'bg-yellow-400 border border-yellow-500 text-gray-900',
    };

    // const mode = primary ? variantClasses.primary : variantClasses.default;
    
    return (
        <Card style={{ background: backgroundColor, color: textColor }} className={[ variantClasses[variant] , sizeClasses[size], backgroundColor, '.card', textColor, ].join(' ')} {...props}>
            <CardHeader>
                <CardTitle className=" size">{label}</CardTitle>
                <CardDescription className={textColor}>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                {content}
            </CardContent>
        </Card>
    )
}
