import { Collapse } from "antd";

interface FAQItem {
    key: string;
    label: string;
    children: JSX.Element;
}

export default function FAQSection({ faqItems }: { faqItems: FAQItem[] }) {
    return (
        <section id="FAQ-Section" className="p-12 m-8 bg-white">
            <h1 className="font-bold text-center mb-8 text-4xl text-secondary-blue">FAQ</h1>
            <Collapse
                className="border-none bg-transparent text-lg"
                items={faqItems}
            />
        </section>
    );
}
