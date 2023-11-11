import React from "react";
import { Card, Col, Row } from "antd";
import Image from "next/image";
import sustainability from "public/assets/challenges/sustainability.jpg";
import education from "public/assets/challenges/education.jpg";
import health_social from "public/assets/challenges/health_social.jpg";
import anaytics from "public/assets/challenges/analytics.jpg";

type Props = {};

const Challenges = (props: Props) => {
    return (
        <section id="challenges" className="shadow-lg m-8 bg-white">
            <div className="flex flex-col items-center p-8">
                <h1 className="text-4xl font-bold text-secondary-blue">
                    Challenges
                </h1>
            </div>
            <Row gutter={16} className="p-4 text-center">
                <Col span={6}>
                    <Card
                        title="Sustainability"
                        bordered={true}
                        className="shadow-md"
                        hoverable={true}
                        style={{ height: "240" }}
                        cover={
                            <Image
                                src={sustainability.src}
                                alt="sustainability"
                                width={360}
                                height={360}
                            />
                        }
                    >
                        Sustainability projects focus on implementing ideas to
                        help the environment and reduce the impact of climate
                        change. This includes projects that focus on reducing
                        waste, improving energy efficiency, and more.
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        title="Education"
                        bordered={true}
                        className="shadow-md "
                        hoverable={true}
                        cover={
                            <Image
                                src={education.src}
                                alt="education"
                                width={360}
                                height={360}
                            />
                        }
                    >
                        Education projects focus on improving the learning
                        experience for students. This includes projects that
                        focus on improving the classroom experience, providing
                        new learning opportunities, and more.
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        title="Health and Social Issues"
                        bordered={true}
                        className="shadow-md "
                        hoverable={true}
                        cover={
                            <Image
                                src={health_social.src}
                                alt="health_social"
                                width={360}
                                height={360}
                            />
                        }
                    >
                        Health and Social Issues projects focus on improving the
                        lives of others. This includes projects that focus on
                        improving health, providing access to resources, and
                        more.
                    </Card>
                </Col>
                <Col span={6}>
                    <Card
                        title="Data Analytics"
                        bordered={true}
                        className="shadow-md"
                        hoverable={true}
                        cover={
                            <Image
                                src={anaytics.src}
                                alt="anaytics"
                                width={360}
                                height={360}
                            />
                        }
                    >
                        Data Analytics projects focus on using data to solve
                        problems. This includes projects that focus on data
                        visualization, data analysis, and more.
                    </Card>
                </Col>
            </Row>
        </section>
    );
};

export default Challenges;
