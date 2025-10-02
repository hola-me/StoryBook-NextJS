import * as React from "react";
import {
  Accordion as ShadcnAccordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export interface AccordionProps {
  items: { title: string; content: string }[];
  type?: "single" | "multiple"; // single = only one open, multiple = multiple open
  defaultValue?: string | string[];
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  type = "single",
  defaultValue,
}) => {
  return (
    <ShadcnAccordion type={type} defaultValue={defaultValue} className="w-full">
      {items.map((item, index) => (
        <AccordionItem value={`item-${index}`} key={index}>
          <AccordionTrigger className="text-left font-semibold text-gray-800">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </ShadcnAccordion>
  );
};
