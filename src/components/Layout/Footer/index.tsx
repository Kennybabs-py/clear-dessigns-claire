import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./footer.module.scss";

export default function Footer() {
  const router = useRouter();
  console.log(router);

  const modifiedPath = router.asPath.replace("/", "");

  return (
    <footer className={styles.footer}>
      <nav className={styles.footer__nav}>
        {navLinks.map((item) => {
          const { idx, title, links } = item;
          return (
            <div key={idx} className={styles.nav__category}>
              <h3>{title}</h3>

              <ul>
                {links.map((link) => {
                  return (
                    <li key={link.id}>
                      <Link
                        href={`/${
                          link.defaultPath === "" ? "" : link.defaultPath
                        }`}
                        className={styles.nav_link}
                        style={{
                          color:
                            modifiedPath === link.path ? "#A76E52" : "#fff",
                        }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>

      <div className={styles.footer__bottom}></div>
    </footer>
  );
}

const navLinks = [
  {
    idx: 0,
    title: "support",
    links: [
      { id: 0, name: "Newsletter", defaultPath: "", path: "newsletter" },
      { id: 1, name: "FAQs", defaultPath: "", path: "faqs" },
      { id: 2, name: "Help", defaultPath: "", path: "help" },
      { id: 3, name: "Documentation", defaultPath: "", path: "docs" },
    ],
  },
  {
    idx: 1,
    title: "company",
    links: [
      { id: 0, name: "About Us", defaultPath: "about", path: "about" },
      { id: 1, name: "Reviews", defaultPath: "", path: "reviews" },
      { id: 2, name: "Clients", defaultPath: "", path: "clients" },
      { id: 3, name: "Projects", defaultPath: "projects", path: "projects" },
    ],
  },
  {
    idx: 2,
    title: "product",
    links: [
      { id: 0, name: "Pricing", defaultPath: "", path: "pricing" },
      { id: 1, name: "Categories", defaultPath: "", path: "categories" },
      { id: 2, name: "Offers", defaultPath: "", path: "offers" },
      { id: 3, name: "Services", defaultPath: "", path: "services" },
    ],
  },
];
