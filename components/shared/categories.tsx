import React from "react";

interface Props {
  className?: string;
}

const Categories: React.FC<Props> = ({ className }) => {
  return <div className={className}></div>;
};

export default Categories;
