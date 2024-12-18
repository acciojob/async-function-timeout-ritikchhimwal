//your JS code here. If required.
async function displayMessageWithDelay() {
  const textInput = document.getElementById('text');
  const delayInput = document.getElementById('delay');
  const outputDiv = document.getElementById('output');

  const text = textInput.value;
  const delay = delayInput.value;

  outputDiv.textContent = '';

  await new Promise(resolve => setTimeout(resolve, delay));

  outputDiv.textContent = text;
}

document.getElementById('btn').addEventListener('click', displayMessageWithDelay);