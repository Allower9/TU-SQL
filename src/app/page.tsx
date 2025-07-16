import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <header>
        <img src="/main_page/1.png" className="w-screen rounded-b-[60px]" />
      </header>

      <main className="px-[150px]">
        <div className="mt-[100px]">
          <img src="/main_page/2.png" className="w-screen rounded-[30px]" />
        </div>

        <div className="mt-[100px]">
          <img src="/main_page/3.png" className="w-screen rounded-[30px]" />
        </div>

        <div className="mt-[100px]">
          <img src="/main_page/4.png" className="w-screen rounded-[30px]" />
        </div>

        <div className="mt-[100px]">
          <img src="/main_page/5.png" className="w-screen rounded-[30px]" />
        </div>
      </main>

      <footer className="bg-black mt-[100px] p-[50px] rounded-t-[40px] text-[15px]">
        <div className="flex justify-between">
          <div>
            <img src="/main_page/6.png" className="h-[90px]" />
          </div>
          <ul>
            <li>
              <h2>+7 (495) 516-01-01</h2>
              <h2>+7 (495) 516-53-25</h2>
            </li>
            <li className="mt-[20px]">
              <div>
                <a href="mailto:sazonov.sy@ut-mo.ru" target="_blank">
                  sazonov.sy@ut-mo.ru
                </a>
              </div>
              <div>
                <a href="kvach.iv@ut-mo.ru" target="_blank">
                  kvach.iv@ut-mo.ru
                </a>
              </div>
            </li>
            <li className="mt-[20px]">
              <h2>
                141074 Московская область, г. Королев, ул. Пионерская, д. 8
              </h2>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
