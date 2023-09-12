import Image from "next/image";
import logo from "../../public/img/logo.png";
import "./Header.css";

export default function Header() {
    return (
        <header>
            <Image src={logo} alt="logo of yozoom" width={140} />
            <nav>
                <ul>
                    <li>Searchs</li>
                    <li>Trends</li>
                    <li>MyTrend</li>
                </ul>
            </nav>
        </header>
    );
}
