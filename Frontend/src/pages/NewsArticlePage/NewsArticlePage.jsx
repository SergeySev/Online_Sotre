import React from "react";
import s from "./NewsArticlePage.module.css";
import { Breadcrumbs } from "../../components";
import { useParams } from "react-router-dom";
import { news_list } from "../../data/data";

export default function NewsArticlePage() {
  const article_id = useParams().article;
  console.log(article_id);

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
                  and power tools in October 2021 and compared these figures with
                  the same period in 2020. This autumn, Russians bought goods in
                  this category more often by 38%.
                </p>
                <p>
                  “Several factors could have influenced the growth in demand in
                  the category of instruments. In 2021, housing commissioning in
                  Russia increased by almost 30%, which led to an increase in the
                  number of repairs in new apartments. Also this year, the
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
      <section className={s.analyze}></section>
    </div>
  );
}
