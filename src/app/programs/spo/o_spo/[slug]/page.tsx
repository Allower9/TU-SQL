import { items } from "@/app/data/data_o_spo";
import styles from "./page.module.css";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: Props) {
  const item = items.find((p) => p.slug === params.slug);

  if (!item) {
    return <div>Образовательная программа не найдена</div>;
  }

  return (
    <div className="text-black px-[150px] mt-[100px] pb-[100px]">
      <h1 className="text-[40px] font-[700]">{item.name}</h1>
      <p className="text-[20px] text-[#7E899B]">{item.number}</p>
      <div className="mt-[100px]">
        <h2 className={styles.subtitle}>Форма обучения</h2>
        <p>{item.form}</p>
        <h2 className={styles.subtitle}>Бюджетных мест</h2>
        <p>{item.places}</p>
        <h2 className={styles.subtitle}>Стоимость обучения</h2>
        <p>{item.price}</p>
        <h2 className={styles.subtitle}>Срок обучения</h2>
        <p>{item.duration}</p>
        <h2 className={styles.subtitle}>Вступительные испытания</h2>
        <p>{item.tests}</p>
        <h2 className={styles.subtitle}>Твоя будущая работа</h2>
        <p>{item.jobs}</p>
      </div>
    </div>
  );
}
