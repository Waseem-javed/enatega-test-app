import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IAccordianProps } from "./types";

const Accordian: React.FC<IAccordianProps> = (props: IAccordianProps) => {
  const { title, content } = props;
  return (
    <Accordion className="border-2 rounded-sm px-2" type="single" collapsible>
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordian;
