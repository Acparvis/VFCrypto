import React from 'react';
import { Link } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi';

export const BackButton = () => {
  return (
    <Link to={"/"}>
      <FiArrowLeft/>
    </Link>
  )
};