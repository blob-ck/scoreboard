import React, {useState} from 'react';
import {SearchBar} from "./SearchBar ";
import {ProductTable} from "./ProductTable ";

const products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

const FilterableProductTable = (props) => {
  const [keyword, setKeyword] = useState('');
  const [stockChecked, setStockChecked] = useState(false);

  return (
    <div className="scoreboard">
      <SearchBar keyword={keyword} setKeyword={setKeyword} stockChecked={stockChecked} setStockChecked={setStockChecked}/>
      <ProductTable product={products.filter(item => item.name.indexOf(keyword) >= 0).filter(item => stockChecked ? item.stocked : true)}/>
    </div>
  )
}

export default FilterableProductTable;