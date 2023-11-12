export const convertPhoneNumber = (phoneNumber: string): string => {
  // Get only numbers
  const numbers = phoneNumber.replace(/\D/g, "");
  if (numbers.length <= 10) return numbers;
  // Get 9 last digits and add 0 at the beginning to remove international code
  return "0" + numbers.slice(numbers.length - 9);
};
