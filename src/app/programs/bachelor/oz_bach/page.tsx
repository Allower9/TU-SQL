'use client'

import { useState } from "react";
import { items } from "@/app/data/data_oz_bach";
import Link from "next/link";
import styles from "./o_spo.module.css";

export default function OchnoZaochnoBach() {
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  
    // Получаем уникальные наборы тестов для фильтра
    const allTests = Array.from(
      new Set(
        items.flatMap((item) =>
          item.tests.split(", ").map((test) => test.split(" / ")).flat()
        )
      )
    ).sort();
  
    // Фильтруем элементы
    const filteredItems = selectedTests.length === 0
      ? items
      : items.filter((item) =>
          selectedTests.every(test =>
            item.tests.split(", ").some(testGroup =>
              testGroup.split(" / ").includes(test)
            )
          )
        );
  
    // Обработчик изменения выбора
    const handleTestChange = (test: string) => {
      setSelectedTests(prev =>
        prev.includes(test)
          ? prev.filter(t => t !== test)
          : [...prev, test]
      );
    };
  return (
    <div className="pb-[100px] px-[95px]">
      <label className="block text-black text-lg font-medium mt-[50px]">
          Фильтр по предметам ЕГЭ:
        </label>
        <div className="flex flex-wrap gap-2 mt-[30px]">
          {allTests.map((test) => (
            <div key={test} className="flex items-center">
              <input
                type="checkbox"
                id={`test-${test}`}
                checked={selectedTests.includes(test)}
                onChange={() => handleTestChange(test)}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor={`test-${test}`}
                className="ml-2 text-sm font-medium text-gray-900"
              >
                {test}
              </label>
            </div>
          ))}
        </div>
        {selectedTests.length > 0 && (
          <button
            onClick={() => setSelectedTests([])}
            className="mt-2 text-sm text-blue-600 hover:text-blue-800"
          >
            Сбросить фильтр
          </button>
        )}
      <ul className="flex flex-wrap gap-[25px] justify-center mt-[100px]">
        {filteredItems.map((item) => (
          <li
            key={item.id}
            className="w-[270px] h-[350px] bg-[#F2F2F2] rounded-[25px] border-[1px] border-solid border-[#D0D2D6]"
          >
            <Link
              href={`/programs/bachelor/oz_bach/${item.slug}`}
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
