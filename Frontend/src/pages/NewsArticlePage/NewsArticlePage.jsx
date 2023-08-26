import React from "react";
import s from "./NewsArticlePage.module.css";
import { Breadcrumbs } from "../../components";

export default function NewsArticlePage() {

  const breadcrumbsItems = [
    { text: "Home /", link: "/Online_Store" },
    { text: "News /", link: "#" },
    { text: "Demand for household tools grew by 38% in a year", link: "#" },
  ];
  return (
    <div className={s.article_wrapper}>
      <div className="container">
        <Breadcrumbs items={breadcrumbsItems} />
        <h1 className={s.article_title}>
          Demand for household tools grew by 38% in a year
        </h1>
      </div>
      <section className={s.top_banner}>
        <img src={require("./assets/article-top.png")} alt="" />
      </section>
      <section className={s.pre_text}>
        <div className="container">
          <p className={s.pre_text_paragraph}>
            The online hypermarket of goods for home, summer cottage,
            construction and repair analyzed the demand for battery, hand and
            power tools in October 2021 and compared these figures with the same
            period in 2020. This autumn, Russians bought goods in this category
            more often by 38%.
          </p>
          <p className={s.pre_text_paragraph}>
            “Several factors could have influenced the growth in demand in the
            category of instruments. In 2021, housing commissioning in Russia
            increased by almost 30%, which led to an increase in the number of
            repairs in new apartments. Also this year, the Russians admitted
            that they began to save on repairs and, if possible, carry them out
            on their own. In this regard, many of them needed their own tool,
            ”comments the head of the press service of Instruments.ru Sergey
            Denisenko
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={s.main_text}>
            <div className={s.main_text_left}>
              <div className={s.left_block}>
                <p>
                  “Several factors could have influenced the growth in demand in
                  the category of instruments. In 2021, housing commissioning in
                  Russia increased by almost 30%, which led to an increase in
                  the number of repairs in new apartments. Also this year, the
                  Russians admitted that they began to save on repairs and, if
                  possible, carry them out on their own.
                </p>
                <p>
                  In this regard, many of them needed their own tool”, -
                  comments the head of the press service of Instruments.ru
                  Sergey Denisenko
                </p>
              </div>
              <p className={s.left_block_bottom}>
                The online hypermarket of goods for the home, cottage,
                construction and repair analyzed the demand for battery, hand
                and power tools in October 2021 and compared these figures with
                the same period in 2020. This autumn, Russians bought goods in
                this category more often by 38%.
              </p>
            </div>
            <div className={s.main_text_right}>
              <div className={s.main_text_right_block}>
                <p>
                  The online hypermarket of goods for home, summer cottage,
                  construction and repair analyzed the demand for battery, hand
                  and power tools in October 2021 and compared these figures
                  with the same period in 2020. This autumn, Russians bought
                  goods in this category more often by 38%.
                </p>
                <p>
                  “Several factors could have influenced the growth in demand in
                  the category of instruments. In 2021, housing commissioning in
                  Russia increased by almost 30%, which led to an increase in
                  the number of repairs in new apartments. Also this year, the
                  Russians admitted that they began to save on repairs and, if
                  possible, carry them out on their own. In this regard, many of
                  them needed their own tool”, - comments the head of the press
                  service of Instruments.ru Sergey Denisenko
                </p>
              </div>
              <img src={require("./assets/article-middle.png")} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={s.analyze}>
        <div className="container">
          <div className={s.analyze_wrapper}>
            <h2 className={s.section_title}>
              Online hypermarket analyzed the demand:
            </h2>
            <ul className={s.analyze_list}>
              <li className={s.analyze_list_item}>
                — A completed and signed application for state registration of
                the termination of activities of individuals as an individual
                entrepreneur - form No. R26001 .
              </li>
              <li className={s.analyze_list_item}>
                — Document confirming the payment of state duty in the amount of
                160 ₽;
              </li>
              <li className={s.analyze_list_item}>
                — A document confirming the provision of information to the
                territorial body of the PFR .
              </li>
              <li className={s.analyze_list_item}>
                — A completed and signed application for state registration of
                the termination of activities of individuals as an individual
                entrepreneur - form No. R26001 .
              </li>
              <li className={s.analyze_list_item}>
                — Document confirming the payment of state duty in the amount of
                160 ₽;
              </li>
              <li className={s.analyze_list_item}>
                — A document confirming the provision of information to the
                territorial body of the PFR
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className={s.statistic}>
        <div className="container">
          <div className={s.statistic_wrapper}>
            <h2 className={s.section_title}>
              A similar explosive growth was shown by materials for
              corresponding tools. The company is actively expanding its
              presence in the regions of Siberia
            </h2>
            <p className={s.statistic_text}>
              The online hypermarket of goods for the home, summer cottage,
              construction and repair "Tools" analyzed the demand for battery,
              hand and power tools in October 2021 and compared these figures
              with the same period in 2020. This autumn, Russians bought goods
              in this category more often by 38%.
            </p>
            <p className={s.statistic_text}>
              “Several factors could have influenced the growth in demand in the
              category of instruments. In 2021, housing commissioning in Russia
              increased by almost 30%, which led to an increase in the number of
              repairs in new apartments. Also this year, the Russians admitted
              that they began to save on repairs and, if possible, carry them
              out on their own. In this regard, many of them needed their own
              tool”, - comments the head of the press service of Instruments.ru
              Sergey Denisenko
            </p>
          </div>
          <div className={s.statistic_table}>
            <div className={s.row}>
              <p className={s.head}>Name</p>
              <p className={s.cell}>1 column</p>
              <p className={s.cell}>2 column</p>
              <p className={s.cell}>3 column</p>
              <p className={s.cell}>4 column</p>
            </div>
            <div className={s.row}>
              <p className={s.head}>Purpose</p>
              <p className={s.cell}>
                for facades, for walls, for ceilings, for kitchen/bathrooms, for
                children's rooms
              </p>
              <p className={s.cell}>
                for windows and doors, for metal products, for wooden products,
                for plinths, for loggias, for fences
              </p>
              <p className={s.cell}>
                for metal products, for wooden products, for plinths, for
                loggias, for fencing
              </p>
              <p className={s.cell}>for facades, for walls</p>
            </div>
            <div className={s.row}>
              <p className={s.head}>Type of work</p>
              <p className={s.cell}>internal, external</p>
              <p className={s.cell}>internal, external</p>
              <p className={s.cell}>internal</p>
              <p className={s.cell}>external</p>
            </div>
            <div className={s.row}>
              <p className={s.head}>The basis</p>
              <p className={s.cell}>acrylic</p>
              <p className={s.cell}>acrylic</p>
              <p className={s.cell}>acrylic</p>
              <p className={s.cell}>-</p>
            </div>
            <div className={s.row}>
              <p className={s.head}>Thinner</p>
              <p className={s.cell}>water</p>
              <p className={s.cell}>water</p>
              <p className={s.cell}>water</p>
              <p className={s.cell}>water</p>
            </div>
            <div className={s.row}>
              <p className={s.head}>Color</p>
              <p className={s.cell}>Red</p>
              <p className={s.cell}>Red</p>
              <p className={s.cell}>Red</p>
              <p className={s.cell}>Red</p>
            </div>
          </div>
        </div>
      </section>
      <section className={s.bottom}>
        <div className={s.bottom_wrapper}>
          <div className={s.bottom_left}>
            <img src={require("./assets/article-bottom.png")} alt="" />
          </div>
          <div className={s.bottom_right}>
            <div className={s.bottom_right_text_block}>
              <p className={s.bottom_right_text}>
                “Several factors could have influenced the growth in demand in the
                category of instruments. In 2021, housing commissioning in Russia
                increased by almost 30%, which led to an increase in the number of
                repairs in new apartments. Also this year, the Russians admitted
                that they began to save on repairs and, if possible, carry them
                out on their own.
              </p>
              <p className={s.bottom_right_text}>
                In this regard, many of them needed their own tool”, - comments
                the head of the press service of Instruments.ru Sergey Denisenko
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
