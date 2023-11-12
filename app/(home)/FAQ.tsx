import React from "react";
import { List, Space } from "antd";
import FAQSection from "../(Shared-Components)/FAQSection";

type Props = {};

const FAQData = [
    {
        key: "0",
        label: "What is a Makeathon?",
        children: (
            <p>
                A makeathon is a 24 hour event where teams of 1-4 students
                collaborate to create a project that solves a problem.
                Makeathons are a great way to learn new skills, meet new people,
                and have fun!
            </p>
        ),
    },
    {
        key: "1",
        label: "When is MakeUTD?",
        children: <p>MakeUTD will be held on March 23-24.</p>,
    },
    {
        key: "2",
        label: "What if I don't have a team?",
        children: (
            <p>
                {" "}
                We will have a teambuliding session at the start of the event
                for those who need help find one. You can also work on projects
                by yourself if you choose.
            </p>
        ),
    },
    {
        key: "3",
        label: "What if I'm not an Engineering major?",
        children: (
            <Space>
                <p>
                    All majors are welcome to join. There will be challenges
                    covering a wide range of topics, so there will be something
                    for everyone.
                </p>
            </Space>
        ),
    },

];

const FAQ = (props: Props) => {
    return (
        <div>
            <FAQSection faqItems={FAQData} />
        </div>
    );
};

export default FAQ;
