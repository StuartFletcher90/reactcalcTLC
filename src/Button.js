import React from 'react';

export const Button = (props) => {
  return (<button className={`${props.data.styleName} button`} onClick={() => props.handleButton(props.data.value)}>{props.data.value}</button>);
};