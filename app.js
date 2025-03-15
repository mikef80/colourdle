// THIS MAKES THE GAME LOAD ON PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
  let masterColorArray = [
    "219178144",
    "204140247",
    "230247177",
    "071045067",
    "201077013",
    "018020091",
    "155080063",
    "136123201",
    "239236080",
    "033169094",
    "102184226",
    "147219075",
    "114150135",
    "071071203",
    "188131111",
    "095215245",
    "008001165",
    "173133080",
    "187074080",
    "070252071",
    "152032143",
    "169059172",
    "153196034",
    "208237126",
    "208029217",
    "037205252",
    "094163104",
    "156236022",
    "095157221",
    "069125045",
    "064042155",
    "032201112",
    "212228216",
    "007045065",
    "200023028",
    "046002201",
    "025225157",
    "228086097",
    "044061221",
    "249226081",
    "015000091",
    "198056021",
    "111095098",
    "219013173",
    "124120123",
    "108018169",
    "104001184",
    "015197210",
    "108093021",
    "219135099",
    "097109037",
    "191230079",
    "162155156",
    "141139250",
    "025213168",
    "030021118",
    "245218188",
    "122099115",
    "186134185",
    "110238226",
    "069095201",
    "250219243",
    "215024208",
    "157200019",
    "242207179",
    "214114202",
    "044167154",
    "044107207",
    "113013143",
    "146255231",
    "105080181",
    "005212003",
    "229221071",
    "236221219",
    "141064205",
    "029016209",
    "254035075",
    "042193190",
    "175217082",
    "047206191",
    "116251012",
    "145158079",
    "146116067",
    "128108182",
    "248124170",
    "102032141",
    "242163074",
    "235233210",
    "141064092",
    "210190111",
    "032172159",
    "247161219",
    "091172111",
    "028085052",
    "218142201",
    "064173172",
    "172024207",
    "079032161",
    "189033230",
    "165153001",
    "198188091",
    "073039035",
    "004028019",
    "044107183",
    "056117000",
    "179119111",
    "076252186",
    "229104029",
    "067091085",
    "009222177",
    "063088037",
    "120139151",
    "215221037",
    "081246178",
    "088152158",
    "001072019",
    "081042244",
    "211047033",
    "105218227",
    "139009237",
    "034210199",
    "211129235",
    "036047095",
    "146098128",
    "234163072",
    "252222038",
    "049117070",
    "013087213",
    "084198122",
    "088123102",
    "012220215",
    "197051119",
    "129028126",
    "121024043",
    "075112199",
    "211116109",
    "185174209",
    "018030022",
    "087162073",
    "170214053",
    "240094201",
    "220141066",
    "135098211",
    "178198021",
    "087022027",
    "116033250",
    "246111047",
    "140019245",
    "149034064",
    "064062155",
    "072188178",
    "083161146",
    "058155029",
    "069105082",
    "027207052",
    "213065029",
    "134082053",
    "177090023",
    "008068214",
    "203135236",
    "208064085",
    "236114002",
    "207181196",
    "161075243",
    "132115059",
    "078242207",
    "190089221",
    "167153225",
    "215122070",
    "169059002",
    "080040078",
    "090051073",
    "011114030",
    "067236118",
    "024016069",
    "052229140",
    "083020146",
    "102053019",
    "030028153",
    "089023041",
    "007144097",
    "094025029",
    "030070168",
    "146130039",
    "160095026",
    "024219103",
    "005212111",
    "191151191",
    "125083028",
    "133005242",
    "076062141",
    "040162215",
    "184134250",
    "037100030",
    "160227138",
    "131021021",
    "252051143",
    "134251254",
    "058012022",
    "053164113",
    "233186073",
    "109068205",
    "250225011",
    "238132089",
    "216024180",
    "146207160",
    "183084252",
    "184187063",
    "206194009",
    "007139202",
    "075189241",
    "145065237",
    "043173112",
    "126146097",
    "243113042",
    "170131240",
    "115116125",
    "107073208",
    "216214247",
    "186212008",
    "105230115",
    "199224202",
    "226016101",
    "227208161",
    "124249181",
    "043126160",
    "034011114",
    "230032064",
    "225097054",
    "107068162",
    "045070180",
    "252071052",
    "061167171",
    "161228154",
    "064148029",
    "082185146",
    "170172002",
    "142135209",
    "057067234",
    "140145237",
    "175180082",
    "220030153",
    "164048048",
    "193078194",
    "054006198",
    "055113233",
    "114012224",
    "156051193",
    "177194073",
    "040185095",
    "155250020",
    "159156040",
    "070156203",
    "017042046",
    "031226019",
    "026197103",
    "183200240",
    "145007040",
    "051250017",
    "164036217",
    "152126167",
    "092242155",
    "040214196",
    "009097191",
    "140077088",
    "090106122",
    "009086253",
    "206142104",
    "119033129",
    "052148117",
    "197077210",
    "222086241",
    "165131235",
    "108141040",
    "206251189",
    "110162040",
    "018079090",
    "154089056",
    "222181203",
    "028009025",
    "059252092",
    "193125089",
    "252056186",
    "147142088",
    "151136050",
    "103218075",
    "125053088",
    "020084059",
    "032020078",
    "148022008",
    "213141015",
    "000031128",
    "150232032",
    "245217105",
    "224087015",
    "062193124",
    "161134062",
    "100174091",
    "255155245",
    "106035105",
    "024105198",
    "236252110",
    "137095069",
    "031217128",
    "092000086",
    "090069130",
    "116169230",
    "205066219",
    "161127107",
    "185132183",
    "075018001",
    "238185183",
    "031033140",
    "088221158",
    "201172019",
    "012175127",
    "056135252",
    "107042218",
    "087091100",
    "058253212",
    "022135105",
    "003019174",
    "060203039",
    "070044003",
    "098052168",
    "061140021",
    "123191185",
    "105004066",
    "026156127",
    "230186125",
    "121135108",
    "231033240",
    "035222236",
    "036024060",
    "230155131",
    "116105197",
    "160051042",
    "018081216",
    "166128162",
    "056198154",
    "060039136",
    "035137104",
    "112176113",
    "150160197",
    "178210118",
    "122025238",
    "240131253",
    "246024018",
    "192132073",
    "229041105",
    "049055227",
    "186196047",
    "190027126",
    "254067190",
    "070086209",
    "119123190",
    "152254187",
    "060022084",
    "089141163",
    "007248131",
    "123071226",
    "126139221",
    "255013026",
    "084246037",
    "119217213",
  ];

  let answer;
  let outputAnswer;
  // sets number of rows and columns
  const rows = 6;
  let checkpoint = 0;
  let gameState = window.localStorage.getItem("gameState");
  // window.localStorage.setItem('gameState', gameState);
  let guesses = [];
  let currentSquareNo = 1;

  const guessedRGB = [[]];
  let guessCount = 0;
  let kbDis = false;
  let guessCountArr = JSON.parse(window.localStorage.getItem("guessCountArray")) || [];
  let gameDurationArr = JSON.parse(window.localStorage.getItem("gameDurationArray")) || [];
  let boardArr = [];
  let sharePic;
  let startTime;
  let finishTime;
  let gameDuration;
  let numCount = {};

  clearLocalStorage();
  buildGrid(rows, 3);
  setSwatch();
  updateStats();
  countdown();
  checkPlayedToday();

  const keys = document.querySelectorAll(".keyboard-row button");
  const statsShare = document.querySelector(".scores-share i");
  const shareDialog = document.querySelector(".share-dialog");

  function refreshStats() {
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", "./chart.js");
    document.head.appendChild(script);
  }

  statsShare.addEventListener("click", () => {
    let moves = gameState === "LOST" ? "X" : `${guesses.length}`;
    let link = `colourdle.co.uk`;
    let date = new Date();
    let launchDate = new Date(2023, 2, 13);
    let dayCount = Math.floor((date.getTime() - launchDate.getTime()) / 86400000) + 1;
    // console.log(dayCount);

    if (navigator.share) {
      navigator.share({
        title: "Colourdle!",
        text: `Colourdle! #${dayCount}: ${moves}/6\n\n${link}\n\n${sharePic}`,
      });
      /* .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error)); */
    } else {
      (async () => {
        try {
          await navigator.clipboard.writeText(
            /* location.href */
            `Colourdle! #${dayCount}: ${moves}/6\n\n${link}\n\n${sharePic}`
          );

          window.alert("Copied to clipboard");
        } catch (err) {
          console.error("Failed to copy: ", err);
        }
      })();
    }
  });

  function createShareGrid(arr) {
    let output = [];

    // amended this function as boardArr is now an array of arrays, each containing an single guess, rather than one big array of all individual numnbers input
    arr.forEach((subArr) => {
      subArr.forEach((item) => {
        if (item === "correct") {
          // console.log('correct');
          output.push("🟩");
        } else if (item === "valid") {
          // console.log('valid');
          output.push("🟨");
        } else if (item === "invalid") {
          // console.log('invalid');
          output.push("⬛");
        }
      });
    });

    for (let i = 9; i < output.length; i += 10) {
      output.splice(i, 0, `\n`);
    }

    for (let i = 3; i < output.length; i += 4) {
      if (output[i] !== "\n") {
        output.splice(i, 0, "  ");
      }
    }

    // console.log(output);

    sharePic = output.join("");
  }

  function clearLocalStorage() {
    let localStorageReset = window.localStorage.getItem("resetFlag") || 0;
    // console.log('lsr: ' + localStorageReset);
    if (!localStorageReset) {
      // console.log('this would reset stuff');
      window.localStorage.clear();
      window.localStorage.setItem("resetFlag", 1);
    }
  }

  // COUNTDOWN TO NEXT COLOURDLE
  function countdown() {
    let clock = document.querySelector(".countdownClock");
    setInterval(() => {
      let future = new Date();
      future.setDate(future.getDate() + 2);
      future.setHours(0, 0, 0, 0);
      let now = new Date();
      let diff = new Date(future - now);
      let hours = String(diff.getHours() - 1).padStart(2, "0");
      let minutes = String(diff.getMinutes()).padStart(2, "0");
      let seconds = String(diff.getSeconds()).padStart(2, "0");

      clock.innerHTML = `${hours}:${minutes}:${seconds}`;
    }, 1000);
  }

  function setSwatch() {
    let today = new Date();
    let yearBegin = new Date(2025, 2, 15); //also changed this value to match date above.  was 2024,2,13
    let msPassed = today - yearBegin;
    let millisecsInDay = 1000 * 60 * 60 * 24;
    let daysPassed = Math.floor(msPassed / millisecsInDay);

    answer = masterColorArray[daysPassed];

    let swatchColour = `rgb(${answer[0]}${answer[1]}${answer[2]},${answer[3]}${answer[4]}${answer[5]},${answer[6]}${answer[7]}${answer[8]})`;
    outputAnswer = swatchColour;

    const swatch = document.querySelector(".colour.target");
    swatch.style.backgroundColor = swatchColour;
    currentColour = answer;
    window.localStorage.setItem("currentColour", currentColour);

    numCountTotal();
  }

  function numCountTotal() {
    // this creates an object with the count of every digit in the answer
    // console.log(numCount);
    numCount = {};
    for (digit of answer) {
      if (numCount[digit]) {
        numCount[digit] += 1;
      } else {
        numCount[digit] = 1;
      }
    }
  }

  // check if played today
  function checkPlayedToday() {
    let today = new Date().toLocaleDateString();
    // console.log(today);
    let lastPlayedDate = window.localStorage.getItem("lastPlayedDate") || 0;
    // console.log(lastPlayedDate);
    // console.log(today === lastPlayedDate);
    let status = window.localStorage.getItem("gameState");
    // console.log(window.localStorage.getItem('gameState') === 'IN PROGRESS');
    if (today === lastPlayedDate && (status === "WON" || status === "LOST")) {
      loadBoardState();
      createShareGrid(boardArr);
      setTimeout(() => {
        toggleStats();
      }, 400 * 9);

      kbDis = true;
    } else if (today === lastPlayedDate && status === "IN PROGRESS") {
      loadBoardState();
      startTime = Date.parse(window.localStorage.getItem("startTime"));
      // console.log(typeof startTime);
    } else if (today !== lastPlayedDate) {
      window.localStorage.setItem("gameState", "IN PROGRESS");
      window.localStorage.setItem("boardEval", []);
      startTime = new Date();
      window.localStorage.setItem("startTime", startTime);
    }
  }

  function loadBoardState() {
    let boardState = window.localStorage.getItem("boardEval");
    if (boardState) {
      boardState = JSON.parse(boardState);
    }

    let n = 1;

    if (boardState) {
      for (let i = 0; i < boardState.length; i++) {
        for (let j = 0; j < 9; j++) {
          let sq = document.querySelector(`.sq${n}`);

          sq.innerHTML = boardState[i][j];
          updateGuesses(Number(boardState[i][j]));

          n++;
        }
        handleSubmitGuess();
      }
    }
    currentSquareNo = n;
  }

  // getCurrentGuessArray
  function getCurrentGuessArr() {
    //the answer to the problem of prefilling squares an submitting lies in here somehwere
    const numbersofGuesses = guessedRGB.length;
    return guessedRGB[numbersofGuesses - 1];
  }

  // updateGuesses
  function updateGuesses(digit) {
    const currentGuessArr = getCurrentGuessArr();

    if (currentGuessArr && currentGuessArr.length < 9) {
      currentGuessArr.push(digit);

      const availableSpaceEl = document.getElementById(String(currentSquareNo));
      currentSquareNo += 1;

      availableSpaceEl.textContent = digit;
    }
  }

  // getTileColour
  function getTileColour(value) {
    if (value === "correct") {
      return "rgb(83, 141, 78)";
    } else if (value === "valid") {
      return "rgb(181, 159, 59)";
    } else {
      return "rgb(58, 58, 60)";
    }
  }

  function getKeyColour() {
    // console.log('get key colours here');
  }

  // isTileCorrect
  function isTileCorrect(digit, index) {
    const isCorrectDigit = answer.includes(digit);
    // console.log(numCount);

    if (!isCorrectDigit) {
      return "invalid";
    }

    const digitInThatPosition = Number(answer.charAt(index));
    const isCorrectPosition = digit === digitInThatPosition;

    if (isCorrectPosition) {
      numCount[digit] -= 1;
      return "correct";
    }

    numCount[digit] -= 1;
    return "valid";
  }

  // update key colours
  function updateKeyColours(digit, bgcolor, fontcolor) {
    const key = document.querySelector(`[data-key = "${digit}"]`);
    key.style.backgroundColor = bgcolor;
    key.style.color = fontcolor;
  }

  // update guess swatch
  function updateGuessSwatch(input) {
    const swatch = document.querySelector(".guess-colour");
    let ColorVal = `rgb(${input[0]}${input[1]}${input[2]},${input[3]}${input[4]}${input[5]},${input[6]}${input[7]}${input[8]})`;
    swatch.style.backgroundColor = ColorVal;
  }

  function checkInputs(arr) {
    let r = arr[0] * 100 + arr[1] * 10 + arr[2];
    let g = arr[3] * 100 + arr[4] * 10 + arr[5];
    let b = arr[6] * 100 + arr[7] * 10 + arr[8];

    if (r > 255 || g > 255 || b > 255) {
      return false;
    }

    return true;
  }

  // handleSubmitGuess
  function handleSubmitGuess() {
    numCountTotal();

    const currentGuessArr = getCurrentGuessArr();

    if (currentGuessArr.length !== 9) {
      window.alert("Guess must be 9 digits long!");
      return;
    }

    // add check here for valid RGB valus
    if (!checkInputs(currentGuessArr)) {
      // console.log('Error');
      window.alert("Each seperate RGB value must be between 0 and 255. Have another go!");
      return;
    } /* else {
      console.log('fine');
    }  */

    updateGuessSwatch(currentGuessArr);

    const currentGuess = currentGuessArr.join("");

    const firstDigitId = guessCount * 9 + 1;
    let interval = 400;

    let evalArr = [];
    /* let boardArr = []; */
    let forcedCountdown = 0;

    // iterate over currentGuessArr
    // check if tileCorrect
    // push to evalarr and boardarr

    // console.log(numCount);

    // iterate over boardArr

    currentGuessArr.forEach((digit, index) => {
      const tileCorrect = isTileCorrect(digit, index);
      // console.log(tileCorrect);
      if (tileCorrect === "invalid") {
        updateKeyColours(digit, "rgb(50, 50, 50)", "black");
      }

      evalArr.push(tileCorrect);
      // boardArr.push(tileCorrect); //Got rid of board pushing here, as it was doing it tile by tile. Moved to line 409
    });

    getKeyColour();

    // console.log(evalArr);
    // console.log(boardArr);
    // console.log(numCount);

    Object.keys(numCount).forEach((key) => {
      // console.log(key, numCount[key]);
      if (numCount[key] < 0) {
        /* console.log */ ("rectify here");

        let x = numCount[key];

        // for loop, starting at value of numCount[key] (assigned to new variable as numCount key won't change)
        for (let i = 8; i > -1; i--) {
          // console.log(currentGuessArr[i]);

          if (evalArr[i] === "valid" && x < 0 && currentGuessArr[i] === Number(key)) {
            // console.log('update' + i);
            x++;
            evalArr[i] = "invalid";
            // console.log('gc: ' & (guessCount + 1) * i);
          }
          // look for key and get index
          // check corresponsing index in eval arr
          // if value = valid, then change to invalid and +1 to loop iterator
        }
        // +1 each time, run whilst less than 0
      }
    });

    boardArr.push(evalArr); //moved board push here so that it's only done once the above corrections starting line 380 have been made

    // console.log(evalArr);

    // console.log(boardArr);

    evalArr.forEach((value, index) => {
      setTimeout(() => {
        const tileColour = getTileColour(value);

        const digitId = firstDigitId + index;
        const digitEl = document.getElementById(digitId);

        digitEl.classList.add("animate__flipInX");

        digitEl.style = `background-color:${tileColour};`;
      }, interval * index);
    });

    guesses.push(currentGuess);
    window.localStorage.setItem("boardEval", JSON.stringify(guesses));

    guessCount += 1;
    checkpoint += 9;

    if (currentGuess === answer) {
      let today = new Date().toLocaleDateString();
      let lastPlayedDate = window.localStorage.getItem("lastPlayedDate") || 0;
      let status = window.localStorage.getItem("gameState") || 0;

      if (today !== lastPlayedDate || (today === lastPlayedDate && status !== "WON")) {
        // ADD MAX STREAK
        finishTime = new Date();
        gameDuration = (finishTime - startTime) / 1000;
        gameDurationArr.push(gameDuration);
        window.localStorage.setItem("gameDurationArray", JSON.stringify(gameDurationArr));
        // console.log(gameDuration);

        setTimeout(() => {
          window.alert("Congratulations!");
          toggleStats();
          createShareGrid(boardArr);
        }, interval * 9);
        // console.log('guessCount: ' + guessCount);
        guessCountArr.push(guessCount);
        window.localStorage.setItem("guessCountArray", JSON.stringify(guessCountArr));

        const totalWins = window.localStorage.getItem("totalWins") || 0;
        window.localStorage.setItem("totalWins", Number(totalWins) + 1);
        const currentStreak = window.localStorage.getItem("currentStreak") || 0;
        window.localStorage.setItem("currentStreak", Number(currentStreak) + 1);
        gameState = "WON";
        window.localStorage.setItem("gameState", gameState);
        updateTotalGames();
        updateLastPlayedDate();
        updateStats();
        refreshStats();

        return;
      } else {
        // toggleStats();
        return;
      }
    }

    if (guessedRGB.length === rows) {
      let today = new Date().toLocaleDateString();
      let status = window.localStorage.getItem("gameState") || 0;

      if (today !== lastPlayedDate || (today === lastPlayedDate && status !== "LOST")) {
        finishTime = new Date();
        gameDuration = (finishTime - startTime) / 1000;
        gameDurationArr.push(gameDuration);
        window.localStorage.setItem("gameDurationArray", JSON.stringify(gameDurationArr));
        // console.log(gameDuration);

        setTimeout(() => {
          window.alert(`Sorry, you have no more guesses! The answer is ${outputAnswer}`);
          toggleStats();
          createShareGrid(boardArr);
        }, interval * 9);
        document.getElementById("test").textContent = outputAnswer;
        window.localStorage.setItem("currentStreak", Number(0));

        const totalLosses = window.localStorage.getItem("totalLosses") || 0;
        window.localStorage.setItem("totalLosses", Number(totalLosses) + 1);
        gameState = "LOST";
        window.localStorage.setItem("gameState", gameState);

        updateTotalGames();
        updateLastPlayedDate();
        updateStats();
        // refreshStats();

        return;
      } else {
        return;
      }
    }

    // createShareGrid();
    updateLastPlayedDate();
    guessedRGB.push([]);
    // console.log(guessedRGB);
  }

  // update total games
  function updateTotalGames() {
    const totalGames = window.localStorage.getItem("totalGames") || 0;
    window.localStorage.setItem("totalGames", Number(totalGames) + 1);
  }

  function updateLastPlayedDate() {
    lastPlayedDate = window.localStorage.getItem("lastPlayedDate") || 0;
    window.localStorage.setItem("lastPlayedDate", new Date().toLocaleDateString());
  }

  // handleDeleteDigit
  function handleDeleteDigit() {
    const currentGuessArr = getCurrentGuessArr();
    const removedDigit = currentGuessArr.pop();

    guessedRGB[guessedRGB.length - 1] = currentGuessArr;

    let lastDigitEl = document.getElementById(Number(currentSquareNo - 1));

    if (lastDigitEl.id != checkpoint) {
      lastDigitEl.textContent = "";
      currentSquareNo = currentSquareNo - 1;
    }
  }

  // BUILD GAME GRID
  function buildGrid(rows, cols) {
    for (let i = 0; i < rows; i++) {
      if (i === 0) {
        let title = document.createElement("div");
        let boardOne = document.querySelector(".board-1");
        // boardOne.style.gridTemplateColumns = `repeat(1, 1fr)`;
        title.classList.add("gridTitle");
        title.style.gridColumn = "1 / 4";
        title.innerHTML = `Red`;
        // title.style.backgroundColor = 'red';
        boardOne.appendChild(title);
      }

      for (let j = 0; j < cols; j++) {
        let square = document.createElement("div");
        let boardOne = document.querySelector(".board-1");
        boardOne.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

        let n = i * (cols * 3) + (j + (0 * cols + 1));
        square.classList.add(`sq${n}`, "square", "container", "animate__animated");
        square.id = String(n);
        boardOne.appendChild(square);
      }
    }

    for (let i = 0; i < rows; i++) {
      if (i === 0) {
        let title = document.createElement("div");
        let boardTwo = document.querySelector(".board-2");
        // boardOne.style.gridTemplateColumns = `repeat(1, 1fr)`;
        title.classList.add("gridTitle");
        title.style.gridColumn = "1 / 4";
        title.innerHTML = "Green";
        boardTwo.appendChild(title);
      }

      for (let j = 0; j < cols; j++) {
        let square = document.createElement("div");
        let boardTwo = document.querySelector(".board-2");
        boardTwo.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

        let n = i * (cols * 3) + (j + (1 * cols + 1));
        square.classList.add(`sq${n}`, "square", "container", "animate__animated");
        square.id = String(n);
        boardTwo.appendChild(square);
      }
    }

    for (let i = 0; i < rows; i++) {
      if (i === 0) {
        let title = document.createElement("div");
        let boardThree = document.querySelector(".board-3");
        // boardOne.style.gridTemplateColumns = `repeat(1, 1fr)`;
        title.classList.add("gridTitle");
        title.style.gridColumn = "1 / 4";
        title.innerHTML = "Blue";
        boardThree.appendChild(title);
      }

      for (let j = 0; j < cols; j++) {
        let square = document.createElement("div");
        let boardThree = document.querySelector(".board-3");
        boardThree.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

        let n = i * (cols * 3) + (j + (2 * cols + 1));
        square.classList.add(`sq${n}`, "square", "container", "animate__animated");
        square.id = String(n);
        boardThree.appendChild(square);
      }
    }
  }

  // TOGGLE INFO
  function toggleInfo() {
    let intro = document.querySelector(".intro");
    intro.classList.toggle("show");
  }

  function toggleHelp() {
    let help = document.querySelector(".helpdiv");
    help.classList.toggle("show");
  }

  function toggleStats() {
    let stats = document.querySelector(".score-modal");
    refreshStats();

    let status = window.localStorage.getItem("gameState");
    let share = document.querySelector(".scores-share");
    if (status === "IN PROGRESS") {
      share.style.display = "none";
    } else {
      share.style.display = "";
    }

    stats.classList.toggle("show");
    if (stats.classList.contains("show")) {
      window.localStorage.setItem("modalView", "true");
    } else {
      window.localStorage.setItem("modalView", "false");
    }
  }

  // UPDATE STATS SECTION

  function updateStats() {
    const played = document.querySelector(".played-number");
    const winPercentage = document.querySelector(".win-percent");
    const currentStreak = document.querySelector(".current-streak");
    const maxStreak = document.querySelector(".max-streak");

    winPercentage.textContent =
      Math.floor(
        (Number(window.localStorage.getItem("totalWins")) /
          Number(window.localStorage.getItem("totalGames"))) *
          100
      ) || 0;

    let currentStreakLS = Number(window.localStorage.getItem("currentStreak") || 0);
    let maxStreakLS = Number(window.localStorage.getItem("maxStreak") || 0);

    let maxStreakVar = currentStreakLS > maxStreakLS ? currentStreakLS : maxStreakLS;

    maxStreak.textContent = maxStreakVar;
    window.localStorage.setItem("maxStreak", maxStreakVar);

    played.textContent = window.localStorage.getItem("totalGames") || 0;
    currentStreak.textContent = window.localStorage.getItem("currentStreak") || 0;
  }

  // SHOW STUFF
  let showInfo = document.querySelector("#info");
  showInfo.addEventListener("click", toggleInfo);

  let showHelp = document.querySelector("#help");
  showHelp.addEventListener("click", toggleHelp);

  let showStats = document.querySelector("#stats");
  showStats.addEventListener("click", toggleStats);

  // HIDE STUFF
  let closeInfo = document.querySelector(".intro-close");
  closeInfo.addEventListener("click", toggleInfo);

  let closeHelp = document.querySelector(".help-close");
  closeHelp.addEventListener("click", toggleHelp);

  let closeStats = document.querySelector(".stats-close");
  closeStats.addEventListener("click", toggleStats);

  // KEYBOARD INPUT NUMBERS INTO GRID
  if (!kbDis) {
    window.addEventListener("keyup", (key) => {
      const input = key.key;

      if (input === "Enter") {
        handleSubmitGuess();
        return;
      }

      if (input === "Delete" || input === "Backspace") {
        handleDeleteDigit();
        return;
      }

      if (!Number.isInteger(Number(input))) {
        // console.log('You must enter numbers, not alphabetical characters!');
        return;
      }

      updateGuesses(Number(input));
    });
  }

  // MOUSE INPUT NUMBERS INTO GRID
  if (!kbDis) {
    keys.forEach((key) => {
      key.onclick = ({ target }) => {
        const number = target.getAttribute("data-key");

        if (number === "enter") {
          handleSubmitGuess();
          return;
        }

        if (number === "delete") {
          handleDeleteDigit();
          return;
        }

        updateGuesses(Number(number));
      };
    });
  }
});
