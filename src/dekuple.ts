var intervalID = setInterval(function() {
  var element = document.getElementsByName("mobilephone")
  if (element && element[0]) {
    element[0].addEventListener("change", (e) => {
      var phoneNumber = e.target.value;
      // Get only numbers
      var numbers = phoneNumber.replace(/\D/g, "");
      if (numbers.length <= 10) return numbers;
      // Get 9 last digits and add 0 at the beginning to remove international code
      e.target.value = "0" + numbers.slice(numbers.length - 9);
    });
    clearInterval(intervalID)
  }
}, 1000);
