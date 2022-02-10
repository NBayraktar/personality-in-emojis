const myEmojis = [];
// const getName = prompt('Add your name please!');
const nameEl = document.getElementById('user-name');
const inputEl = document.getElementById('input-el');
const emojiEl = document.getElementById('emoji-box');
const unshiftBtn = document.getElementById('btn-unshift');
const pushBtn = document.getElementById('btn-push');
const shiftBtn = document.getElementById('btn-shift');
const popBtn = document.getElementById('btn-pop');

// nameEl.innerHTML = `${getName} Emojis`;


unshiftBtn.addEventListener('click', function () {
  if (inputEl.value) {
    myEmojis.unshift(inputEl.value);
    inputEl.value = '';
    renderEmojis();
  }
})

pushBtn.addEventListener('click', function () {
  if (inputEl.value) {
    myEmojis.push(inputEl.value);
    inputEl.value = '';
    renderEmojis();
  }
})

shiftBtn.addEventListener('click', function () {
  myEmojis.shift();
  renderEmojis();
})

popBtn.addEventListener('click', function () {
  myEmojis.pop();
  renderEmojis();
})



function renderEmojis() {
  emojiEl.innerHTML = '';
  for (let i = 0; i < myEmojis.length; i++) {
    const spanEl = document.createElement('span');
    spanEl.innerHTML = myEmojis[i];
    emojiEl.append(spanEl);
    inputEl.value = '';
  }
}