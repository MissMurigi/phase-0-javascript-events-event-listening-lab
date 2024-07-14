function addingEventListener() {
  const input = document.getElementById("button"); // Assuming there's an element with id 'button'

  function clickAlert() {
    alert("I was clicked!");
  }

  input.addEventListener("click", clickAlert);
}

addingEventListener(); // Call the function to set up the event listener
