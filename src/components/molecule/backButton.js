import React, {Component} from 'react';
import { Link } from "react-router-dom";

export const BackButton = () => {
  return (
    <Link to={"/"}>
      <button>Back</button>
    </Link>
  )
};