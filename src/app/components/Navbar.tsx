import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <Link href="/" >
          <img src="/navbar/logo.png" className="h-[60px]" />
        </Link>
        <div className="pt-[16px] gap-[30px] flex">
          <Link href="https://unitech-mo.ru/abitur/" target="_blank" className={styles.navLink}>
            Приемная комиссия
          </Link>
          <Link href="/programs" className={styles.navLink}>
            Образовательные программыkalмык-lox-last-last
          </Link>
          <Link href="/admission" className={styles.navLink}>
            Поступление
          </Link>
          <Link href="/hostel" className={styles.navLink}>
            Об общежитиях
          </Link>
        </div>
      </div>
      <div className={styles.navRight}>
        <Link href="https://rutube.ru/channel/32791598/" className={styles.navLink} target="_blank">
          <img src="/navbar/Icon_RUTUBE_white_mono.svg" />
        </Link>
        {/* <Link href="https://dzen.ru/unitech" className={styles.navLink}>
          <img src="/navbar/dark-stella.svg" />
        </Link> */}
        <Link href="https://vk.com/unitechmo" className={styles.navLink} target="_blank">
          <img src="/navbar/Vk.svg" />
        </Link>
        <Link href="https://t.me/unitech_mo" className={styles.navLink} target="_blank">
          <img src="/navbar/Telegram (1).svg" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
