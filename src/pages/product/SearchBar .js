import React from 'react';

export const SearchBar = (props) => {
  return (
    <div>
      <input type="text" placeholder="Search..." value={props.keyword} onChange={(e) => props.setKeyword(e.target.value)}/><br/>
      <input type="checkbox" checked={props.stockChecked} onChange={(e) => props.setStockChecked(e.target.checked)}/>Only show products in stock.
    </div>
  );
}