// Shared so the provider card and the summary cannot drift apart on fee maths.

// Most plans bill a flat platform fee. Shopify Plus bills the greater of its platform
// fee or a percentage of monthly GMV, capped where a cap is published.
const platformFee = (rates, monthlyGmv) => {
  const percentage = rates.monthlyFeeVariablePercentage;
  if (!percentage) {
    return rates.monthlyFee;
  }

  const cap = typeof rates.monthlyFeeVariableCap === 'number'
    ? rates.monthlyFeeVariableCap
    : Infinity;
  const variable = Math.min(monthlyGmv * percentage, cap);

  return Math.max(rates.monthlyFee, variable);
};

// Shopify Plus covers a main store plus nine expansion stores under one contract, so
// 1-10 stores cost the same. Every other plan is one subscription per store.
// Past a plan's included count you need another contract, hence the ceil — though the
// store slider is capped at 10, so Plus never reaches that branch. (Real Plus pricing
// beyond ten stores is negotiated with Shopify, not something we can model.)
export const effectiveMonthlyFee = (rates, monthlyGmv, storeCount = 1) => {
  const fee = platformFee(rates, monthlyGmv);
  const included = rates.includedStores || 1;

  return fee * Math.ceil(storeCount / included);
};

// What the buyer hands over per sale — the base for payment processing.
export const buyerPaidPerSale = userInfo => userInfo.avgTransactionPrice + userInfo.avgShippingCost;

export const monthlyGmv = (userInfo, months) => (userInfo.transactionCount / months)
  * buyerPaidPerSale(userInfo);
