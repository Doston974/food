import React from 'react';
import './style.css';
import MenuItem from './MenuItem';
import { forwardRef } from 'react';


const Menu = forwardRef(({ list }, ref) =>
  <main ref={ref}>
    {list.map((item) => (
      <MenuItem key={item.id} item={item} />
    ))}
  </main>
)


export default Menu