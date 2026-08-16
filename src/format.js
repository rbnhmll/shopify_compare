// Vue 3 removed filters. These are the former `Vue.filter` definitions as plain
// functions, registered as global template helpers ($money, $camel, ...) in main.js.

export const money = value => `$${value.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

export const camel = value => value
  .replace(/\s(.)/g, $1 => $1.toUpperCase())
  .replace(/\s/g, '')
  .replace(/^(.)/, $1 => $1.toLowerCase());

export const id = value => `#${value}`;

// Two decimals, trailing zeros trimmed: 0.065 -> "6.5%", 0.03 -> "3%", and crucially
// 0.0215 -> "2.15%" (a fixed 1 decimal rounded Shopify Plus's rate to a wrong 2.2%).
export const percent = value => `${(value * 100).toFixed(2).replace(/\.?0+$/, '')}%`;

// Money in prose, e.g. "CA$3,400" or "$0.30" — whole amounts drop the cents.
export const amount = (value, currency) => {
  const digits = Number.isInteger(value) ? 0 : 2;
  const prefix = currency === 'CAD' ? 'CA$' : '$';

  return `${prefix}${value.toLocaleString('en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })}`;
};
