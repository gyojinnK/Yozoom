import styles from "./page.module.css";
import Section from "../components/Section";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
                />
            </Head>
            <Section />
        </>
    );
}
