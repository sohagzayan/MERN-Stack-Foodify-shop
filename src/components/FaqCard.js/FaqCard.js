import React from "react";

const FaqCard = ({ data }) => {
  const { title, des } = data;
  return (
    <div className="faqCard">
        <div className="dot-box"></div>
      <div className="faq-content">
        <h3 className="text-2xl p-4">{title}</h3>
        <hr className="border my-2 border-silver_soft" />
        <p className="p-3">{des}</p>
      </div>
    </div>
  );
};

export default FaqCard;
