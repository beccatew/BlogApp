import React from 'react';
import FilterLink from './FilterLink';

const Footer = () => {
  <div>
    <FilterLink>All</FilterLink>
    {' '}
    <FilterLink>Completed</FilterLink>
    {' '}
    <FilterLink>To Write or Edit</FilterLink>
  </div>
}

export default Footer;
