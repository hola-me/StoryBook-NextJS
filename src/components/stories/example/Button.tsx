import * as React from 'react';
import { cn } from '@/lib/utils'; // Assuming you have a 'cn' utility for Tailwind merging

/**
 * Interface defining the props for the Button component.
 */
export interface ButtonProps {
  /** The text displayed inside the button. */
  label: string;
  /** Sets the button to the primary (default) style. */
  primary?: boolean;
  /** Sets the size of the button. */
  size?: 'small' | 'medium' | 'large';
  /** Optional background color (used for demonstration purposes in stories). */
  backgroundColor?: string;
  /** Handler function for the click event. */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** Additional class names to apply to the button. */
  className?: string;
}

/**
 * A reusable UI button component styled with Tailwind CSS.
 * @param props The button properties.
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  primary = false,
  size = 'medium',
  backgroundColor,
  onClick,
  className,
}) => {
  // 1. Define base styling for all buttons
  const baseClasses = 'font-semibold transition-all duration-150 ease-in-out border border-transparent rounded-lg shadow-md';

  // 2. Define size-specific styling
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  }[size];

  // 3. Define color-specific styling
  const colorClasses = primary
    ? 'text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300'
    : 'text-gray-800 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300';

  // 4. Combine all classes using a utility function (like clsx or cn)
  // NOTE: If you don't have a 'cn' function, replace 'cn(...)' with template literal backticks (e.g., `${baseClasses} ${sizeClasses} ...`)
  const finalClasses = cn(
    baseClasses,
    sizeClasses,
    colorClasses,
    className
  );

  return (
    <button
      type="button"
      className={finalClasses}
      style={backgroundColor ? { backgroundColor } : undefined}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
