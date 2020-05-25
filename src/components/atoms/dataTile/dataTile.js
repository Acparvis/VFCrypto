import React from 'react';
import numeral from "numeral";
import styled from "styled-components";

const TitleStyle = styled.p`
      font-weight: bold;
      font-size: 14px;
      line-height: 0px;
      margin: 10px, 0px;
`;

const ValueStyle = styled.div`
      display: flex;
      align-items: center;
      font-size: 22px;
`;

const ValueSpan = styled.span`
      color: white;
`;

const TrailSpan = styled.span`
      font-weight: 700;
      font-size: 10px;
      line-height: 1;
      color: #2DB75F;
      margin: 5px;
`;

const DataTile = ({value, title, trail, currencySymbol}) => {
  return (
    <div>
      <TitleStyle>{title}</TitleStyle>
      <ValueStyle>{currencySymbol} <ValueSpan>{numeral(value).format('0,0')}</ValueSpan> <TrailSpan>{trail}</TrailSpan></ValueStyle>
    </div>
  )
};

export default DataTile;