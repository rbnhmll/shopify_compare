// Vue 3 removed filters. These are the former `Vue.filter` definitions as plain
// functions, registered as global template helpers ($money, $camel, ...) in main.js.

export const money = value => `$${value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

export const camel = value => value
  .replace(/\s(.)/g, $1 => $1.toUpperCase())
  .replace(/\s/g, '')
  .replace(/^(.)/, $1 => $1.toLowerCase());

export const id = value => `#${value}`;

export const percent = value => `${(value * 100).toFixed(1)}%`;
