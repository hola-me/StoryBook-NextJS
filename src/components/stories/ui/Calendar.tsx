import * as React from "react";
import { Calendar as ShadcnCalendar } from "@/components/ui/calendar";
// ⚠️ Note: We must also import the SelectSingleEventHandler and SelectRangeEventHandler types
import { type DateRange, type SelectSingleEventHandler, type SelectRangeEventHandler, type SelectMultipleEventHandler } from "react-day-picker";

// --- 1. Define the Base Props (for the 'multiple' case) ---
interface BaseProps {
  disabled?: (date: Date) => boolean;
  className?: string; // Add className for flexibility
}

// --- 2. Define Mode-Specific Props using Discriminated Unions ---

// Single Mode
interface SingleModeProps extends BaseProps {
  mode: "single";
  selected?: Date;
  onSelect?: SelectSingleEventHandler; // Specific handler for single date
}

// Multiple Mode
interface MultipleModeProps extends BaseProps {
  mode: "multiple";
  selected?: Date[];
  onSelect?: SelectMultipleEventHandler; // Specific handler for multiple dates
}

// Range Mode
interface RangeModeProps extends BaseProps {
  mode: "range";
  // The selected type MUST be the imported DateRange type
  selected?: DateRange;
  onSelect?: SelectRangeEventHandler; // Specific handler for date range
}

// --- 3. Create the Final Component Prop Type ---
export type CalendarProps = SingleModeProps | MultipleModeProps | RangeModeProps;

// --- 4. The Component Implementation (No Changes Needed Here) ---
export const Calendar: React.FC<CalendarProps> = ({
  mode = "single" as "single", // Assert default mode
  selected,
  onSelect,
  disabled,
}) => {
  return (
    <div className="p-4 border rounded-lg">
      <ShadcnCalendar
        mode={mode} // Pass the mode prop! (You had it commented out)
        selected={selected as any} // Cast selected as 'any' ONLY here to satisfy the union
        onSelect={onSelect as any}
        disabled={disabled}
        className="rounded-md border shadow"
      />
    </div>
  );
};