import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryLink({
  title,
  category,
}: {
  title: string;
  category: string;
}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/${category}/${title.toLowerCase()}`);
  };

  return (
    <p className="ml-3 hover:underline cursor-pointer" onClick={handleNavigate}>
      {title}
    </p>
  );
}
