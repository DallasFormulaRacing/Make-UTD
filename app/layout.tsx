import React from "react";
import { Inter } from "next/font/google";
import { ConfigProvider } from "antd";
import Navbar from "./(Shared-Components)/Navbar";

import StyledComponentsRegistry from "../lib/AntdRegistry";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Make-UTD",
    description: "Official website for Make-UTD",
};

const antDCustomizeTheme = {
    token: {
        colorPrimary: "#2D8B49",
    },
    components: {
        Menu: {
            darkItemBg: "#0F0F0F",
            darkItemHoverColor: "#ff841c",
        },
    },
};

const RootLayout = ({ children }: React.PropsWithChildren) => (
    <html lang="en">
        <body className={inter.className}>
            <StyledComponentsRegistry>
                <ConfigProvider theme={antDCustomizeTheme}>
                    <Navbar />
                    {children}
                </ConfigProvider>
            </StyledComponentsRegistry>
        </body>
    </html>
);

export default RootLayout;
