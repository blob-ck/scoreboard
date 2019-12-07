import React from 'react';
import styles from './ProductRow.module.scss';
import classNames from 'classnames'

export const ProductRow = (props) => {
  return (
    //[styles.stock] -> Css 에서 사용하는 Computed Property
    <tr className={classNames({[styles.stock]: !props.stocked}, {[styles.foo]: true})}>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  )
}