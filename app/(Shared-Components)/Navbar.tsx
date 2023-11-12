"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DFRLogo from "public/icon.png";
import tempLogo from "public/temp_logo.png";
import type { MenuProps } from "antd";
import { Menu, Button, Avatar } from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MailOutlined,
    UserOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

type Props = {};

const items: MenuProps["items"] = [
    getItem(
        <a className={"navbarLink"} href="#about" rel="noopener noreferrer">
            About
        </a>,
        "sub1",
        null
    ),
    getItem(
        <a
            className={"navbarLink"}
            href="#challenges"
            rel="noopener noreferrer"
        >
            Challenges
        </a>,
        "sub2",
        null
    ),
    getItem(
        <a className={"navbarLink"} href="#sponsors" rel="noopener noreferrer">
            Sponsors
        </a>,
        "sub3",
        null
    ),
    getItem(
        <a className={"navbarLink"} href="#faq" rel="noopener noreferrer">
            FAQ
        </a>,
        "sub4",
        null
    ),
    getItem(
        <a className={"navbarLink"} href="#schedule" rel="noopener noreferrer">
            Schedule
        </a>,
        "sub5",
        null
    ),
];

const Navbar = (props: Props) => {
    const [navbarToggle, setNavbarToggle] = useState<boolean>(false);
    return (
        <nav className="navbarStyle px-4 py-4 backdrop-blur-lg bg-black">
            <div className="basis-1/6 relative w-auto h-24">
                <Link href="/" rel="noreferrer">
                    <Image
                        fill
                        alt="logo"
                        placeholder="blur"
                        src={tempLogo}
                        className="object-contain"
                        style={{ clipPath: "circle()" }}
                    />
                </Link>
            </div>

            <div className="mx-auto w-0 invisible md:min-w-[625px] md:visible">
                <Menu
                    mode="horizontal"
                    theme="dark"
                    items={items}
                    className="flex items-center justify-between text-secondary-blue text-xl"
                />
            </div>

            <div className="w-0 invisible md:min-w-[50px] md:visible ml-auto mr-4">
                <Avatar shape="circle" size="large" icon={<UserOutlined />} />
            </div>

            <div className="block ml-auto md:hidden">
                <Button
                    type="primary"
                    onClick={() => setNavbarToggle(!navbarToggle)}
                    className=" text-secondary-blue"
                >
                    {navbarToggle ? (
                        <MenuUnfoldOutlined />
                    ) : (
                        <MenuFoldOutlined />
                    )}
                </Button>

                {navbarToggle && (
                    <Menu
                        mode="inline"
                        theme="dark"
                        items={items}
                        className="bg-wh-900 absolute top-20 right-0 z-[9999] w-full text-secondary-blue"
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
