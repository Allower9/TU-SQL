import Image from "next/image";
import "./globals.css";
import "./main_page.css";

export default function Home() {
  return (
    <div className="main_page">
      <header>
        <img src="/main_page/1.png" className="w-screen rounded-b-[60px]" />
      </header>

      <main>
        <section className="advantages">
            <div className="image-container">
              <img src="/main_page/adv-bg.svg" alt="advantages" />
              <h2>Высокое качество образования</h2>
            </div>

            <div className="image-container">
              <img src="/main_page/adv-bg.svg" alt="advantages" />
              <h2>Квалифицированные преподаватели</h2>
            </div>

            <div className="image-container">
              <img src="/main_page/adv-bg.svg" alt="advantages" />
              <h2>Современное оборудование</h2>
            </div>
        </section>

        <img src="/main_page/appeal.png" className="appeal" alt="appeal" />

        <section>
          <div className="about">
            <img src="main_page/about-t-l.svg" alt="about" />
            <img src="main_page/about-t-r.svg" alt="about" />
          </div>

          <div className="flex mt-[80px] px-[10px]">
            <h3 className="w-[42%]">Об университете</h3>
            <div className="w-[58%]">
              <h4>Технологический университет</h4>
              <h2 className="mt-[35px]">Имени Алексея Архиповича Леонова</h2>
              <p className="mt-[35px]">
                Федеральное государственное бюджетное образовательное учреждение
                высшего образования «Технологический университет имени дважды
                Героя Советского Союза, летчика-космонавта А.А. Леонова»
                находится в сердце ракетно-космической отрасли России –
                наукограде Королёв и является одним из ведущих
                инженерно-технических вузов России, готовящих специалистов в
                области технологий, инноваций и науки.
              </p>
            </div>
          </div>

          <div className="about">
            <img src="main_page/about-b-l.svg" alt="about" />
            <img src="main_page/about-b-r.svg" alt="about" />
          </div>
        </section>

        <section className="programs">
          <h3>Образовательные программы</h3>
          <ul>
            <li>
              <h5>Среднее профессиональное образование</h5>
              <h6>Узнать больше</h6>
            </li>
          
            <li>
              <h5>Бакалавриат и специалитет</h5>
              <h6>Узнать больше</h6>
            </li>

            <li>
              <h5>Магистратура</h5>
              <h6>Узнать больше</h6>
            </li>

            <li>
              <h5>Аспирантура</h5>
              <h6>Узнать больше</h6>
            </li>
          </ul>
        </section>

        <section className="labs">
          <h3>Лаборатории и мастерские</h3>
          <div className="labs_grid">
            <img src="/main_page/labs/labs-1.png" className="grid_col_2"/>
            <p>Инфраструктура университета включает в себя 4 учебных здания, 146 аудиторий и лабораторий, в их числе: лаборатория гетерогенного синтеза перспективных материалов; лаборатория новых способов формообразования тугоплавких материалов и армирующих каркасов; центр аддитивного производства и лазерных технологий; лаборатория программно-аппаратного моделирования информационных процессов.</p>
            <img src="/main_page/labs/labs-2.png"/>
            <p>В вузе работают 5 IT-мастерских: виртуальной и дополненной реальности; анализа защищённости информационных систем от внешних угроз; мастерская WEB-дизайна; разработки мобильных приложений; программных решений для бизнеса. В современных помещениях вуза есть всё необходимое для плодотворной научно-исследовательской работы, проектирования решений для науки и промышленности России.</p>
            <img src="/main_page/labs/labs-3.png" className="grid_row_2"/>
            <img src="/main_page/labs/labs-4.png"/>
            <img src="/main_page/labs/labs-abstract.svg"/>
            <img src="/main_page/labs/labs-5.png"/>
            <img src="/main_page/labs/labs-6.png" className="grid_col_2"/>
          </div>
        </section>

        <section className="leonov">
          <img className="h-[500px]" src="/main_page/quote-pic.png"/>
          <div>
            <h2>Не бойтесь трудностей и не пасуйте перед ними, в борьбе закаляется и крепнет характер, и происходит рождение Человека.</h2>
            <h2>Алексей Архипович Леонов</h2>
            <h6>Летчик-космонавт, дважды Герой Советского Союза</h6>
          </div>
        </section>
        
      </main>

      <footer className="bg-black mt-[750px] p-[50px] rounded-t-[40px] text-[15px]">
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
