document.getElementsByName("mobilephone")[0].addEventListener("change", (e) => {
  const phoneNumber = e.target.value;
  // Get only numbers
  const numbers = phoneNumber.replace(/\D/g, "");
  if (numbers.length <= 10) return numbers;
  // Get 9 last digits and add 0 at the beginning to remove international code
  e.target.value = "0" + numbers.slice(numbers.length - 9);
});
