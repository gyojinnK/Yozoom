import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "요즘 트렌트를 Zoom - Yozoom",
    description: "틱톡 트렌드 분석 사이트",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="homeWrap">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
