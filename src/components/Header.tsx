import Image from "next/image";
import logo from "../../public/img/logo.png";
import css from "@/styles/Header.module.css";
import textCss from "@/styles/text.module.css";

export default function Header() {
    return (
        <header className={css.header}>
            <Image
                src={logo}
                alt="logo of yozoom"
                width={140}
                height={27}
                priority={true}
            />
        </header>
    );
}
