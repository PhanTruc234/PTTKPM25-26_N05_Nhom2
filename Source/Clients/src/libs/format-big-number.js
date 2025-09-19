export const formatBigNumber = (num, hasCurrencySymbol) => {
  return (
    new Intl.NumberFormat("de-DE").format(num).toString() +
    (hasCurrencySymbol ? "₫" : "")
  );
};