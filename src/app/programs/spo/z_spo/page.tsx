import { items } from "@/app/data/data";
import Link from "next/link";
import styles from "./z_spo.module.css";

export default function Zspo() {
  return (
    <div className="pb-[100px] px-[95px]">
      <ul className="flex flex-wrap gap-[25px] justify-center mt-[100px]">
        {items.map((item) => (
          <li
            key={item.id}
            className="w-[270px] h-[350px] bg-[#F2F2F2] rounded-[25px] border-[1px] border-solid border-[#D0D2D6]"
          >
            <Link
              href={`/programs/spo/z_spo/${item.slug}`}
              className="block h-full p-[35px] rounded-[25px] flex flex-col "
            >
              <h1 className="text-black text-[15px] font-[550]">{item.name}</h1>
              <div className="mt-auto">
                <h2 className={styles.subtitle}>Бюджетных мест</h2>
                <p className={styles.inf}>{item.places}</p>
                <h2 className={styles.subtitle}>Стоимость</h2>
                <p className={styles.inf}>{item.price}</p>
                <h2 className={styles.subtitle}>Срок обучения</h2>
                <p className={styles.inf}>{item.duration}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
