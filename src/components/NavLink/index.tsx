import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

type Props = {
  name: string;
  navPath: string;
};

export default function NavLink(props: Props) {
  const router = useRouter();

  return (
    <>
      <Link
        href={`/${props.navPath}`}
        className={styles.nav_link}
        style={{
          color:
            router.asPath.replace("/", "") === props.navPath
              ? "#A76E52"
              : "#000",
        }}
      >
        {props.name}
      </Link>
    </>
  );
}
