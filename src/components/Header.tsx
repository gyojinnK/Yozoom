import Image from "next/image";
import logo from "../../public/img/logo.png";
import css from "@/styles/Header.module.css";

export default function Header() {
    return (
        <header className={css.header}>
            <Image src={logo} alt="logo of yozoom" width={140} />
            <nav className={css.headerNav}>
                <ul className={css.headerNavUl}>
                    <li>Searchs</li>
                    <li>Trends</li>
                    <li>MyTrend</li>
                </ul>
            </nav>
        </header>
    );
}
