"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DFRLogo from "public/icon.png";
import type { MenuProps } from "antd";
import { Menu, Button } from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MailOutlined,
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
            href="#Challenges"
            rel="noopener noreferrer"
        >
            Challenges
        </a>,
        "sub2",
        null
    ),
    getItem(
        <a className={"navbarLink"} href="#Schedule" rel="noopener noreferrer">
            Schedule
        </a>,
        "sub3",
        null
    ),
];

const Navbar = (props: Props) => {
    const [navbarToggle, setNavbarToggle] = useState<boolean>(false);
    return (
        <header className={"mb-0"}>
            <nav className="flex items-center w-full bg-wh-900 text-wh-10 px-4 py-4 navbar">
                <div className="basis-1/6 relative w-auto h-16">
                    <Link href="/" rel="noreferrer">
                        <Image
                            fill
                            alt="logo"
                            placeholder="blur"
                            src={DFRLogo}
                            className="object-contain"
                        />
                    </Link>
                </div>

                <div className="ml-auto w-0 invisible md:min-w-[625px] md:visible">
                    <Menu
                        mode="horizontal"
                        theme="dark"
                        items={items}
                        className="bg-wh-900 flex items-end"
                    />
                </div>

                <div className="block ml-auto md:hidden">
                    <Button
                        type="primary"
                        onClick={() => setNavbarToggle(!navbarToggle)}
                        className="bg-wh-900 text-white"
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
                            className="bg-wh-900 absolute top-20 right-0 z-[9999] w-full"
                        />
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
