// FAQ copy with every figure read from providerData for the selected region, so
// updating the pricing data updates the answers, the page and the FAQPage structured
// data together. Nothing here should hard-code a price or a rate.

import { amount, percent } from './format';

export const buildFaq = (providerData, region) => {
  const plan = key => providerData[key][region];

  const etsy = plan('etsy');
  const basic = plan('basicShopify');
  const grow = plan('shopify');
  const advanced = plan('advancedShopify');
  const plus = plan('shopifyPlus');

  const money = value => amount(value, region);
  const processing = p => `${percent(p.paymentProcessingFeePercentage)} + ${money(p.paymentProcessingFeeFixed)}`;
  const regionName = region === 'CAD' ? 'Canadian' : 'US';
  const currencyNote = region === 'CAD'
    ? ' Shopify bills Canadian merchants in Canadian dollars rather than converting from USD, so these are the real prices rather than a conversion.'
    : '';

  return [
    {
      q: 'How much does Shopify cost per month?',
      a: `Billed monthly for ${regionName} merchants, ${basic.name} is ${money(basic.monthlyFee)}, ${grow.name} is ${money(grow.monthlyFee)} and ${advanced.name} is ${money(advanced.monthlyFee)}. Paying annually reduces each of those.${currencyNote}`,
    },
    {
      q: 'What are Shopify\'s payment processing fees?',
      a: `With Shopify Payments the online card rate for ${regionName} merchants is ${processing(basic)} on ${basic.name}, ${processing(grow)} on ${grow.name} and ${processing(advanced)} on ${advanced.name}. The percentage applies to the full amount the customer is charged, which includes any shipping you bill them for.`,
    },
    {
      q: 'What fees does Etsy charge sellers?',
      a: `Etsy charges ${money(etsy.listingFeeFixed)} per listing, a ${percent(etsy.salesFeePercentage)} transaction fee, and payment processing of ${processing(etsy)} for domestic orders. The ${percent(etsy.salesFeePercentage)} applies to the total the buyer pays, shipping included — not just the item price.`,
    },
    {
      q: 'Does it cost anything to open an Etsy shop?',
      a: `Etsy may charge a one-time set-up fee of $${etsy.setupFee.min}–$${etsy.setupFee.max} ${etsy.setupFee.currency} when you open a shop. It is not charged to every seller — it depends on your region and account — and it is non-refundable once paid. Because it is conditional, it is not included in the running totals on this page.`,
    },
    {
      q: 'Is Etsy cheaper than Shopify?',
      a: `It depends on your volume. Etsy has no monthly fee, so it wins at low sales volumes. Because it takes ${percent(etsy.salesFeePercentage)} of every sale on top of payment processing, its per-sale cost is much higher, and past a certain point ${basic.name} at ${money(basic.monthlyFee)} a month works out cheaper. This calculator finds that crossover point for your numbers.`,
    },
    {
      q: `How many stores does ${plus.name} include?`,
      a: `A ${plus.name} contract covers one main store plus ${plus.includedStores - 1} expansion stores — ${plus.includedStores} in total — at no additional cost. Staging stores do not count towards that limit. If you need more than ${plus.includedStores}, pricing is negotiated directly with Shopify.`,
    },
    {
      q: `How much does ${plus.name} cost?`,
      a: `${plus.name} starts at ${money(plus.monthlyFee)} per month on a three-year term. Shopify bills the greater of that platform fee or ${percent(plus.monthlyFeeVariablePercentage)} of your monthly sales, so high-volume merchants pay more than the headline figure. Card processing is ${processing(plus)}.`,
    },
  ];
};

export default buildFaq;
