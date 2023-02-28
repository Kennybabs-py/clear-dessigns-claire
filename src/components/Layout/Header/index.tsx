import Link from "next/link";
import Image from "next/image";

import CdcLogo from "@/assets/cdc_logo.svg";
import SearchIcon from "@/assets/SearchIcon.svg";
import NavLink from "@/components/NavLink";
import Button from "@/components/Button";

import styles from "./header.module.scss";

const navlinks = [
  { name: "home", navPath: "" },
  { name: "about us", navPath: "about" },
  { name: "projects", navPath: "projects" },
  { name: "products", navPath: "products" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src={CdcLogo}
          height={123}
          width={172}
          alt="Clear Designs by Claire"
        />
      </Link>

      <nav className={styles.nav}>
        <div className={styles.nav_links}>
          <ul>
            {navlinks.map((item, idx) => {
              const { name, navPath } = item;
              return (
                <li key={idx}>
                  <NavLink name={name} navPath={navPath} />
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.search__cta}>
          <Image src={SearchIcon} height={32} width={32} alt="search" />
          <Button content="contact us" />
        </div>
      </nav>
    </header>
  );
}
