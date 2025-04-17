import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How to register?</AccordionTrigger>
        <AccordionContent>
          Click the log in button at the top and follow the instructions
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How many Cars?</AccordionTrigger>
        <AccordionContent>
          over 50+ top notch and aesthetical cars components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do i contact you?</AccordionTrigger>
        <AccordionContent>
          There is a contact us button at the store page
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
