import React, { useState, useEffect } from "react";
import "./Portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {
  featuredPortfolio,
  mobilePortfolio,
  webPortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("Featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "Featured":
        setData(featuredPortfolio);
        break;
      case "Web App":
        setData(webPortfolio);
        break;
      case "Mobile App":
        setData(mobilePortfolio);
        break;
      case "Design":
        setData(designPortfolio);
        break;
      case "Content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;
    }
  }, [selected]);

  const list = [
    { id: "Featured", title: "Featured" },
    { id: "Web App", title: "Web App" },
    { id: "Mobile App", title: "Mobile App" },
    { id: "Design", title: "Design" },
    { id: "Branding", title: "Branding" },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list?.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data?.map((elem) => (
          <div className="item">
            <img src={elem.img} alt="" />
            <h3>{elem.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
