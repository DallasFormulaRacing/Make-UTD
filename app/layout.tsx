import React from "react";
import { Inter } from "next/font/google";
import { ConfigProvider } from "antd";
import Navbar from "./(Shared-Components)/Navbar";

import StyledComponentsRegistry from "../lib/AntdRegistry";

import "./globals.css";
import Footer from "./(Shared-Components)/Footer";

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
            horizontalLineHeight: "0px",
            // darkItemBg: "#0F0F0F",
            darkItemBg: "transparent",
            darkItemHoverColor: "#e20000",
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
                    <Footer />
                </ConfigProvider>
            </StyledComponentsRegistry>
        </body>
    </html>
);

export default RootLayout;
