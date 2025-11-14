export const formatCurrency = (amount: number, currency = '₹'): string => {
  return `${currency}${amount.toLocaleString()}`;
};

export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString();
};

export const formatStatus = (status: string): string => {
  return status.charAt(0).toUpperCase() + status.slice(1);
};