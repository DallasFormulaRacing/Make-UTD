import React from "react";
import { Card, Col, Row } from "antd";

type Props = {};

const About = (props: Props) => {
    return (
        <section id="about" className="shadow-lg m-8 bg-white">
            <div className="flex flex-col items-center min-h-[300px] p-8">
                <h1 className="text-4xl font-bold text-secondary-blue">
                    About MakeUTD
                </h1>
                <div className="my-8 text-center flex flex-col items-center">
                    <p className="text-2xl my-4 md:w-4/5 md:text-3xl text">
                        MakeUTD is a weekend-long event where students of any
                        major design, build, and present an unique project from start to
                        finish. MakeUTD will serve as a platform for students of
                        any background to work together and showcase their
                        creativity and skills while learning new ones.
                    </p>
                </div>
            </div>
            <Row gutter={16} className="p-4 text-center">
                <Col span={8}>
                    <Card bordered={true} className="shadow-md">
                        <h1 className="text-3xl font-bold text-secondary-blue">
                            24 Hours
                        </h1>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true} className="shadow-md">
                        <h1 className="text-3xl font-bold text-secondary-blue">
                            300+ Attendees
                        </h1>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true} className="shadow-md">
                        <h1 className="text-3xl font-bold text-secondary-blue">
                            $10,000 in Prizes
                        </h1>
                    </Card>
                </Col>
            </Row>
        </section>
    );
};

export default About;
