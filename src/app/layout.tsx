import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
import Intro from "@/components/Intro";

export const metadata: Metadata = {
    title: "요즘 트렌트를 Zoom - Yozoom",
    description: "키워드 분석 및 시각화 사이트",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
                />
            </Head>
            <body>
                <div className="homeWrap">
                    <Header />
                    <Intro />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
