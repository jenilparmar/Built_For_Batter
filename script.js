var buttons = document.querySelectorAll('.ticket button');

  // Add click event listener to each button
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Get the parent container of the clicked button
      var container = this.closest('.ticket');

      // Extract information from the container
      var trainName = container.querySelector('.information').innerText.match(/Train Type:- (.+)/)[1];
      var arrivalTime = container.querySelector('.information').innerText.match(/From :- (.+)/)[1];
      var departureTime = container.querySelector('.information').innerText.match(/To :- (.+)/)[1];

      // Call toggleForm function with extracted information
      alert(trainName+ "" +arrivalTime+" " +departureTime);
    });
  });


function boardTrain(trainIndex) {
  // Get train information with proper error handling
  const trainElements = document.querySelectorAll(".information");
  if (trainIndex < 1 || trainIndex > trainElements.length) {
    console.error("Invalid train index");
    return;
  }

  const information = trainElements[trainIndex - 1].innerText;
  const encodedInformation = encodeURIComponent(information);

  // Show loader with proper element checking
  const loaderElement = document.getElementById('one');
  if (loaderElement) {
    loaderElement.style.display = 'block';
  } else {
    console.warn("Loader element with id 'one' not found");
  }

  // Hide element with proper checking
  const hiddenElement = document.getElementById('d');
  if (hiddenElement) {
    hiddenElement.style.display = 'none';
  } else {
    console.warn("Element with id 'd' not found");
  }

  // Fixed: Corrected CSS selector (was '.loader -container' with extra space)
  setTimeout(() => {
    const loaderContainer = document.querySelector('.loader-container');
    if (loaderContainer) {
      loaderContainer.style.display = 'none';
    } else {
      console.warn("Loader container element not found");
    }
    window.location.href = "form.html?information=" + encodedInformation;
  }, 3000);
}
