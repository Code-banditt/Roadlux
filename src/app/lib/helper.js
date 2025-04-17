export default function formatCurrency(amount, currencyCode = "USD") {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 0, // no decimals
    maximumFractionDigits: 0,
  }).format(amount);
}
