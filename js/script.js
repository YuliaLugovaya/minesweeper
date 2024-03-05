// ссылка на body
const body = document.querySelector('body');

// отключение контекстного меню
document.body.oncontextmenu = function () {
  return false;
};

// создание элементов

// wrapper и заголовок
const wrapper = document.createElement('div');
const title = document.createElement('h1');

// кнопки навигации и звука
const buttonsNewGame = document.createElement('div');
const chooseLevel = document.createElement('button');
const offAudio = document.createElement('button');
const newGame = document.createElement('button');

// дисплей
const display = document.createElement('div');
const displaySeconds = document.createElement('div');
const displaySecondsText = document.createElement('p');
const displaySecondsCount = document.createElement('p');
const displayMines = document.createElement('div');
const displayMinesText = document.createElement('p');
const displayMinesCount = document.createElement('p');
const displayFlags = document.createElement('div');
const displayFlagsText = document.createElement('p');
const displayFlagsCount = document.createElement('p');
const displayClicks = document.createElement('div');
const displayClicksText = document.createElement('p');
const displayClicksCount = document.createElement('p');

// игровое поле и сообщение в конце игры
const container = document.createElement('div');
const message = document.createElement('div');

// выбор уровня сложности
const containerLevels = document.createElement('div');
const containerEasy = document.createElement('div');
const containerMedium = document.createElement('div');
const containerHard = document.createElement('div');
const titleEasy = document.createElement('h2');
const titleMedium = document.createElement('h2');
const titleHard = document.createElement('h2');
const textEasy = document.createElement('p');
const textMedium = document.createElement('p');
const textHard = document.createElement('p');
const easy = document.createElement('button');
const medium = document.createElement('button');
const hard = document.createElement('button');


// добавление классов
wrapper.className = 'wrapper';
title.className = 'title';
buttonsNewGame.className = 'buttons-new-game';
chooseLevel.className = 'button-new-game choose-level';
offAudio.className = 'audio';
newGame.className = 'button-new-game new-game';

display.className = 'display';
displaySeconds.className = 'display-wrap';
displayMines.className = 'display-wrap';
displayFlags.className = 'display-wrap';
displayClicks.className = 'display-wrap';
displaySecondsCount.className = 'display-count';
displayMinesCount.className = 'display-count';
displayFlagsCount.className = 'display-count';
displayClicksCount.className = 'display-count';
displaySecondsText.className = 'display-text';
displayMinesText.className = 'display-text';
displayFlagsText.className = 'display-text';
displayClicksText.className = 'display-text';

container.className = 'container';
message.className = 'message';

containerLevels.className = 'container-levels';
containerEasy.className = 'container-level container-level-easy';
containerMedium.className = 'container-level container-level-medium';
containerHard.className = 'container-level container-level-hard';
titleEasy.className = 'title-level';
titleMedium.className = 'title-level';
titleHard.className = 'title-level';
textEasy.className = 'text-level';
textMedium.className = 'text-level';
textHard.className = 'text-level';
easy.className = 'button-level button-level_easy';
medium.className = 'button-level button-level_medium';
hard.className = 'button-level button-level_hard';

// наследование
body.appendChild(wrapper);
wrapper.appendChild(title);
wrapper.appendChild(buttonsNewGame);
buttonsNewGame.appendChild(chooseLevel);
buttonsNewGame.appendChild(offAudio);
buttonsNewGame.appendChild(newGame);
wrapper.appendChild(containerLevels);
containerLevels.appendChild(containerEasy);
containerLevels.appendChild(containerMedium);
containerLevels.appendChild(containerHard);
containerEasy.appendChild(titleEasy);
containerEasy.appendChild(textEasy);
containerEasy.appendChild(easy);
containerMedium.appendChild(titleMedium);
containerMedium.appendChild(textMedium);
containerMedium.appendChild(medium);
containerHard.appendChild(titleHard);
containerHard.appendChild(textHard);
containerHard.appendChild(hard);
wrapper.appendChild(display);
display.appendChild(displaySeconds);
displaySeconds.appendChild(displaySecondsCount);
displaySeconds.appendChild(displaySecondsText);
display.appendChild(displayMines);
displayMines.appendChild(displayMinesCount);
displayMines.appendChild(displayMinesText);
display.appendChild(displayFlags);
displayFlags.appendChild(displayFlagsCount);
displayFlags.appendChild(displayFlagsText);
display.appendChild(displayClicks);
displayClicks.appendChild(displayClicksCount);
displayClicks.appendChild(displayClicksText);
wrapper.appendChild(container);
wrapper.appendChild(message);


display.style.display = 'none';
buttonsNewGame.style.display = 'none';

// текст по умолчанию
title.innerText = 'Minesweeper';
chooseLevel.innerText = 'Choose a level';
newGame.innerText = 'New game';
easy.innerText = 'Let\'s play!';
medium.innerText = 'Let\'s play!';
hard.innerText = 'Let\'s play!';
titleEasy.innerText = 'Easy';
titleMedium.innerText = 'Medium';
titleHard.innerText = 'Hard';
textEasy.innerText = 'The size of the frame is 10x10 with 10 mines';
textMedium.innerText = 'The size of the frame is 15x15 with 25 mines';
textHard.innerText = 'The size of the frame is 25x25 with 99 mines';
displaySecondsCount.innerText = '000';
displayClicksCount.innerText = 0;
displaySecondsText.innerText = 'seconds';
displayMinesText.innerText = 'mines';
displayFlagsText.innerText = 'flags';
displayClicksText.innerText = 'clicks';
offAudio.innerHTML = '🔈';

offAudio.addEventListener('click', (e) => {
  offAudio.classList.toggle('off');
});


//секундомер
let second = 000;
let interval;

container.addEventListener('click', (e) => {
  clearInterval(interval);
  interval = setInterval(startStopwatch, 999);
}, { once: true });

function startStopwatch() {
  second++;
  if (second <= 9) {
    displaySecondsCount.innerText = '00' + second;
  }
  if (second > 9) {
    displaySecondsCount.innerText = '0' + second;
  }
  if (second > 99) {
    displaySecondsCount.innerText = second;
  }
}

// функции для отображения элементов
function changeValues() {
  second = 000;
  display.style.display = 'flex';
  container.style.display = 'flex';
  containerLevels.style.display = 'none';
  buttonsNewGame.style.display = 'flex';
}

function returnValues() {
  clearInterval(interval);
  interval = setInterval(startStopwatch, 999);
  second = 000;
  displaySecondsCount.innerText = '000';
  displayClicksCount.innerText = 0;
}

// функционал игры

// при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  startGame(10, 10, 10);
  container.className = 'container easy';
  display.className = 'display easy';
  buttonsNewGame.className = 'buttons-new-game easy';
  changeValues();
})

// легкий уровень
easy.addEventListener('click', () => {
  startGame(10, 10, 10);
  container.className = 'container easy';
  display.className = 'display easy';
  buttonsNewGame.className = 'buttons-new-game easy';
  changeValues();
})

// средний уровень
medium.addEventListener('click', () => {
  startGame(15, 15, 25);
  container.className = 'container medium';
  display.className = 'display medium';
  buttonsNewGame.className = 'buttons-new-game medium';;
  changeValues();
})

// сложный уровень
hard.addEventListener('click', () => {
  startGame(25, 25, 99);
  container.className = 'container hard';
  display.className = 'display hard';
  buttonsNewGame.className = 'buttons-new-game hard';
  changeValues();
})

// выбор уровня
chooseLevel.addEventListener('click', () => {
  returnValues();
  display.style.display = 'none';
  container.style.display = 'none';
  message.innerHTML = '';
  containerLevels.style.display = 'flex';
  buttonsNewGame.style.display = 'none';
})

// новая игра
newGame.addEventListener('click', () => {
  returnValues();
  message.innerHTML = '';
  if (display.className === 'display easy') {
    startGame(10, 10, 10);
    container.className = 'container easy';
    display.className = 'display easy';
    buttonsNewGame.className = 'buttons-new-game easy';
    changeValues();
  }
  if (display.className === 'display medium') {
    startGame(15, 15, 15);
    container.className = 'container medium';
    display.className = 'display medium';
    buttonsNewGame.className = 'buttons-new-game medium';
    changeValues();
  }
  if (display.className === 'display hard') {
    startGame(20, 20, 20);
    container.className = 'container hard';
    display.className = 'display hard';
    buttonsNewGame.className = 'buttons-new-game hard';
    changeValues();
  }
})

// общая функция для начала игры
function startGame(width, height, mines) {
  const cells = width * height;
  container.innerHTML = '<button class="button"></button>'.repeat(cells);
  const allCells = [...container.children];

  let closedCount = cells;

  // рандомное расставление мин
  const allMines = [...Array(cells).keys()].sort(() => Math.random() - 0.5).slice(0, mines);

  let sumMoves = 0;
  let countMines = mines;
  let countFlags = 0;
  displayMinesCount.innerText = countMines;
  displayFlagsCount.innerText = countFlags;

  let audioClick;
  let audioFlagPut;
  let audioFlagRemove;
  let audioLoose;
  let audioWin;

  // клик левой клавишей мыши по полю
  container.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') {
      return;
    }
    e.preventDefault();
    audioClick = new Audio('./assets/audio/click.mp3');
    if (offAudio.className === 'audio off') {
      audioClick.pause();
    } else {
      audioClick.play();
    }
    const indexCell = allCells.indexOf(e.target);
    const column = indexCell % width;
    const row = Math.floor(indexCell / width);
    sumMoves++;
    displayClicksCount.innerText = sumMoves;
    openCell(row, column);
  });

  // клик правой клавишей мыши по полю
  container.addEventListener('mousedown', (e) => {
    const indexCell = allCells.indexOf(e.target);
    e.preventDefault();
    if (e.button === 2) {
      if (allCells[indexCell].textContent === '') {
        allCells[indexCell].innerHTML = '❓';
        countMines--;
        countFlags++;
        displayMinesCount.innerText = countMines;
        displayFlagsCount.innerText = countFlags;
        audioFlagPut = new Audio('./assets/audio/flag.mp3');
        if (offAudio.className === 'audio off') {
          audioFlagPut.pause();
        } else {
          audioFlagPut.play();
        }
      } else if (allCells[indexCell].textContent === '❓') {
        allCells[indexCell].innerHTML = '';
        countMines++;
        countFlags--;
        displayMinesCount.innerText = countMines;
        displayFlagsCount.innerText = countFlags;
        audioFlagRemove = new Audio('./assets/audio/remove-flag.mp3');
        if (offAudio.className === 'audio off') {
          audioFlagRemove.pause();
        } else {
          audioFlagRemove.play();
        }
      }
    }
  });

  // проверка доступности поля
  function isValid(row, column) {
    return row >= 0 && row < height && column >= 0 && column < width;
  }

  // подсчет мин вокруг ячейки
  function getCount(row, column) {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (isMine(row + j, column + i)) {
          count++;
        }
      }
    }
    return count;
  }

  // открытие ячейки
  function openCell(row, column) {
    if (!isValid(row, column)) {
      return;
    }
    const index = row * width + column;
    const cell = allCells[index];

    if (cell.disabled === true) {
      return;
    }
    cell.disabled = true;

    // действия в случае мины
    if (isMine(row, column)) {
      clearInterval(interval);
      audioLoose = new Audio('./assets/audio/loose.mp3');
      if (offAudio.className === 'audio off') {
        audioLoose.pause();
      } else {
        audioLoose.play();
      }
      cell.innerHTML = '💣';
      message.innerHTML = 'Game over. Try again';
      cell.disabled = false;
      for (let i = 0; i < allCells.length; i++) {
        for (let j = 0; j < allMines.length; j++) {
          if (i === j) {
            allCells[allMines[j]].innerHTML = '💣';
          }
        }
        if (i !== index && allCells[i].disabled === false) {
          allCells[i].addEventListener('click', (e) => {
            e.stopPropagation();
          });
          allCells[i].addEventListener('mousedown', (e) => {
            e.stopPropagation();
          });
        }
      }
      return;
    }

    // действия в случае чистой ячейки
    closedCount--;

    // победа
    if (closedCount <= mines) {
      clearInterval(interval);
      audioWin = new Audio('./assets/audio/win.mp3');
      if (offAudio.className === 'audio off') {
        audioWin.pause();
      } else {
        audioWin.play();
      }
      message.innerHTML = `Hooray! You found all mines in ${second} seconds and ${sumMoves} moves!`;
      for (let i = 0; i < allCells.length; i++) {
        if (allCells[i].disabled === false) {
          allCells[i].addEventListener('click', (e) => {
            e.stopPropagation();
          });
          allCells[i].addEventListener('mousedown', (e) => {
            e.stopPropagation();
          });
        }
      }
      return;
    }
    const count = getCount(row, column);
    if (count !== 0) {
      cell.innerHTML = count;
      if (count === 1) {
        cell.style.color = 'blue';
      }
      if (count === 2) {
        cell.style.color = 'green';
      }
      if (count === 3) {
        cell.style.color = 'red';
      }
      if (count === 4) {
        cell.style.color = 'darkblue';
      }
      if (count === 5) {
        cell.style.color = 'firebrick';
      }
      if (count === 6) {
        cell.style.color = 'teal';
      }
      return;
    }

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        openCell(row + j, column + i)
      }
    }
  }

  // проверка, есть ли в ячейке мина
  function isMine(row, column) {
    if (!isValid(row, column)) {
      return false;
    }
    const index = row * width + column;
    return allMines.includes(index);
  }
}
