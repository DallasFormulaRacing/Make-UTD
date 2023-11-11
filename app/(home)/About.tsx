import React from "react";
import { Card } from "antd";

type Props = {};

const About = (props: Props) => {
    return (
        <section id="about" className="shadow-lg m-8">
            <div className="flex flex-col items-center min-h-[500px] p-8">
                <h1 className="text-4xl font-bold text-secondary-blue">About</h1>
                <div className="my-8 text-center flex flex-col items-center">
                    <p className="text-2xl my-4 md:w-4/5 md:text-3xl">
                        Make-UTD is a 24-hour makeathon hosted by Dallas Formula
                        Racing at the University of Texas at Dallas.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
