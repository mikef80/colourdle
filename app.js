// THIS MAKES THE GAME LOAD ON PAGE LOAD
document.addEventListener('DOMContentLoaded', () => {

  let masterColorArray = [
    "244183016",
    "059217049",
    "179242008",
    "089242090",
    "219086042",
    "216138244",
    "027229169",
    "176190173",
    "235146155",
    "078195235",
    "248201141",
    "120103074",
    "244188023",
    "035162125",
    "137107196",
    "144031027",
    "106056207",
    "208023255",
    "193237164",
    "178133041",
    "139159021",
    "144178035",
    "156180086",
    "176204116",
    "057163197",
    "118133132",
    "219034158",
    "148218182",
    "241032039",
    "229157140",
    "161134210",
    "222166087",
    "020145101",
    "243073114",
    "121223210",
    "036236174",
    "176110098",
    "108035039",
    "000182245",
    "095065152",
    "221121203",
    "141057080",
    "057181177",
    "202063154",
    "078203055",
    "151007121",
    "026167078",
    "013242127",
    "156052163",
    "235153096",
    "129214208",
    "078186130",
    "142077087",
    "231039154",
    "152056044",
    "039051001",
    "104033206",
    "097107207",
    "140229207",
    "032007111",
    "010044176",
    "249075255",
    "249170127",
    "142075223",
    "187082178",
    "060229031",
    "064091198",
    "001133145",
    "102212060",
    "038134158",
    "175052172",
    "086028207",
    "167119036",
    "061147038",
    "189196205",
    "065019108",
    "176247235",
    "101112224",
    "048042070",
    "104017138",
    "185171235",
    "141140130",
    "022136197",
    "217058016",
    "068127109",
    "009002058",
    "212034251",
    "201167192",
    "208034018",
    "195165097",
    "063059198",
    "083240069",
    "101023221",
    "035180204",
    "182035124",
    "011250229",
    "053133033",
    "007197232",
    "120113058",
    "154065061",
    "108196078",
    "244001051",
    "084008058",
    "050182022",
    "142065094",
    "049191101",
    "246204252",
    "146167114",
    "219080043",
    "103211167",
    "097252178",
    "114239174",
    "128141037",
    "112027010",
    "206095131",
    "115083049",
    "238127046",
    "017068134",
    "068088095",
    "013006001",
    "009073253",
    "142023246",
    "187247229",
    "130215067",
    "003107003",
    "068116104",
    "145061076",
    "189105175",
    "170027117",
    "108223045",
    "116043159",
    "040202139",
    "067191008",
    "240113012",
    "025075064",
    "203014130",
    "164198247",
    "134014088",
    "170221170",
    "191123090",
    "143225248",
    "155168185",
    "211151162",
    "071156233",
    "138192124",
    "142066142",
    "173110107",
    "220149167",
    "128144125",
    "060026160",
    "086202193",
    "157238124",
    "122218126",
    "128100131",
    "109110123",
    "053188039",
    "213250109",
    "229179097",
    "057144041",
    "166075073",
    "061060136",
    "128218107",
    "230220186",
    "115063087",
    "194207086",
    "174038110",
    "073058251",
    "184175158",
    "234048152",
    "048141088",
    "039013008",
    "216027240",
    "021047185",
    "195017020",
    "149204148",
    "146118058",
    "075116208",
    "142143197",
    "186121099",
    "108201080",
    "240153120",
    "078021046",
    "255185120",
    "077196117",
    "240023188",
    "156240190",
    "184099074",
    "064167101",
    "122231072",
    "211169151",
    "250232134",
    "041178173",
    "077003097",
    "233076016",
    "200160227",
    "059100072",
    "051015215",
    "139174082",
    "103094247",
    "220203141",
    "184173021",
    "096199008",
    "038218241",
    "059183144",
    "074106220",
    "227007115",
    "031020047",
    "069084038",
    "047157031",
    "034007005",
    "234015193",
    "005054063",
    "046115198",
    "239002046",
    "044055200",
    "198058204",
    "026171184",
    "189204119",
    "141117074",
    "095011069",
    "245088225",
    "068132097",
    "056247119",
    "182222249",
    "090246193",
    "066096057",
    "146118184",
    "012047170",
    "056011188",
    "157104164",
    "223099064",
    "040191016",
    "115101207",
    "135130192",
    "252007239",
    "064170017",
    "243132050",
    "145220217",
    "201014133",
    "085152015",
    "055219184",
    "093116122",
    "208008106",
    "236185107",
    "116210250",
    "050199112",
    "081079090",
    "115195067",
    "125160098",
    "013229252",
    "125078077",
    "096053225",
    "156082155",
    "242243109",
    "211054188",
    "179179087",
    "139025017",
    "169158156",
    "187209175",
    "120037219",
    "095034019",
    "064072084",
    "243133023",
    "230205120",
    "216038230",
    "153091033",
    "058136041",
    "146157253",
    "061099061",
    "127003173",
    "135082229",
    "195242079",
    "191187205",
    "144112123",
    "200004019",
    "108221045",
    "008183047",
    "006221140",
    "105146170",
    "198222174",
    "231042203",
    "035065238",
    "115229038",
    "137096210",
    "087223151",
    "054186131",
    "219125052",
    "173226135",
    "148076228",
    "103165087",
    "054035212",
    "145251160",
    "126051077",
    "255133204",
    "208043209",
    "040045168",
    "248024148",
    "162237020",
    "139198053",
    "036174005",
    "120060079",
    "099112183",
    "213144143",
    "091243199",
    "096098128",
    "118172050",
    "168113210",
    "203071173",
    "070213000",
    "085133010",
    "047094185",
    "005130123",
    "098009084",
    "198231024",
    "139058062",
    "117168148",
    "118119230",
    "232220144",
    "151141186",
    "173206140",
    "060235232",
    "078041243",
    "152074182",
    "214136040",
    "212244224",
    "057138135",
    "165123238",
    "195226147",
    "114083021",
    "147192166",
    "009241152",
    "127248192",
    "110091067",
    "131142042",
    "232173142",
    "075150091",
    "069045103",
    "114050005",
    "010176209",
    "164147046",
    "162128059",
    "065144137",
    "083142050",
    "121027192",
    "079100034",
    "013220165",
    "035037105",
    "005202136",
    "159252191",
    "033214057",
    "122188024",
    "068186169",
    "244003121",
    "162054038",
    "156081094",
    "134248202",
    "146155017",
    "223015142",
    "216227054",
    "208203199",
    "019097191",
    "213212033",
    "206055171",
    "178137026",
    "207247122",
  ];

  let answer;
  let outputAnswer;
  // sets number of rows and columns
  const rows = 6;
  let checkpoint = 0;
  let gameState = window.localStorage.getItem('gameState');
  // window.localStorage.setItem('gameState', gameState);
  let guesses = [];
  let currentSquareNo = 1;
  
  const guessedRGB = [[]];
  let guessCount = 0;    
  let kbDis = false;
  let guessCountArr = JSON.parse(window.localStorage.getItem('guessCountArray')) || [];
  let gameDurationArr = JSON.parse(window.localStorage.getItem('gameDurationArray')) || [];
  let boardArr = [];
  let sharePic;
  let startTime;
  let finishTime;
  let gameDuration;
  let numCount = {};
  
  
  clearLocalStorage();
  buildGrid(rows,3);
  setSwatch();
  updateStats();
  countdown();
  checkPlayedToday();
  
  const keys = document.querySelectorAll('.keyboard-row button');
  const statsShare = document.querySelector('.scores-share i');
  const shareDialog = document.querySelector('.share-dialog');

  function refreshStats() {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', './chart.js');
    document.head.appendChild(script);
  }



 
  statsShare.addEventListener('click', () => {

    let moves = gameState === 'LOST' ? 'X' : `${guesses.length}`;
    let link = `colourdle.co.uk`;
    let date = new Date();
    let launchDate = new Date(2023, 2, 13);
    let dayCount = Math.floor((date.getTime() - launchDate.getTime()) / 86400000) + 1;
    // console.log(dayCount);
        
    if (navigator.share) {
      navigator.share({
        title: 'Colourdle!',
        text: `Colourdle! #${dayCount}: ${moves}/6\n\n${link}\n\n${sharePic}`,
      })
        /* .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error)); */
    } else {
      (async () => {
        try {
          await navigator.clipboard.writeText(/* location.href */
            `Colourdle! #${dayCount}: ${moves}/6\n\n${link}\n\n${sharePic}`
          );
          
          window.alert('Copied to clipboard');
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
      })();
      
    }
  });

  function createShareGrid(arr) {
    let output = [];
    
    // amended this function as boardArr is now an array of arrays, each containing an single guess, rather than one big array of all individual numnbers input
    arr.forEach(subArr => {
      subArr.forEach(item => {
        if (item === 'correct') {
          // console.log('correct');
          output.push('🟩');
        } else if (item === 'valid') {
          // console.log('valid');
          output.push('🟨');
        } else if (item === 'invalid') {
          // console.log('invalid');
          output.push('⬛');
        }
      })
    })
    
    for (let i = 9; i < output.length; i += 10) {
      output.splice(i,0,`\n`);
    }

    for (let i = 3; i < output.length; i += 4) {
      if (output[i] !== '\n') {
        output.splice(i,0,'  ');
      }
      
      
    }

    // console.log(output);

    sharePic = output.join('');
  }


  function clearLocalStorage() {
    let localStorageReset = window.localStorage.getItem('resetFlag') || 0;
    // console.log('lsr: ' + localStorageReset);
    if (!localStorageReset) {
      // console.log('this would reset stuff');
      window.localStorage.clear();
      window.localStorage.setItem('resetFlag', 1);
    }
  }


  // COUNTDOWN TO NEXT COLOURDLE
  function countdown() {
    let clock = document.querySelector('.countdownClock');
    setInterval(() => {
      let future = new Date();
      future.setDate(future.getDate() + 2);
      future.setHours(0,0,0,0)
      let now = new Date();
      let diff = new Date(future - now);
      let hours = String(diff.getHours() - 1).padStart(2,'0');
      let minutes = String(diff.getMinutes()).padStart(2,'0');
      let seconds = String(diff.getSeconds()).padStart(2,'0');
      
      clock.innerHTML = `${hours}:${minutes}:${seconds}`;
    }, 1000)
    
  }
  
  function setSwatch() {
      let today = new Date();
      let yearBegin = new Date(2023, 2, 13); //also changed this value to match date above.  was 2022,0,15
      let msPassed = today - yearBegin;
      let millisecsInDay = 1000 * 60 * 60 * 24;
      let daysPassed = Math.floor(msPassed / millisecsInDay);

      answer = masterColorArray[daysPassed];

      let swatchColour = `rgb(${answer[0]}${answer[1]}${answer[2]},${answer[3]}${answer[4]}${answer[5]},${answer[6]}${answer[7]}${answer[8]})`;
      outputAnswer = swatchColour;

      const swatch = document.querySelector('.colour.target');
      swatch.style.backgroundColor = swatchColour;
      currentColour = answer;
      window.localStorage.setItem('currentColour', currentColour);

      
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
    let lastPlayedDate = window.localStorage.getItem('lastPlayedDate') || 0;
    // console.log(lastPlayedDate);
    // console.log(today === lastPlayedDate);
    let status = window.localStorage.getItem('gameState');
    // console.log(window.localStorage.getItem('gameState') === 'IN PROGRESS');
    if (today === lastPlayedDate && (status === 'WON' || status === 'LOST')) {
      loadBoardState();
      createShareGrid(boardArr);
      setTimeout(() => {
        toggleStats();
      },400 * 9)

      kbDis = true;
    } else if (today === lastPlayedDate && status === 'IN PROGRESS') {
      loadBoardState();
      startTime = Date.parse(window.localStorage.getItem('startTime'));
      // console.log(typeof startTime);
    } else if (today !== lastPlayedDate) {
      window.localStorage.setItem('gameState','IN PROGRESS');
      window.localStorage.setItem('boardEval',[]);
      startTime = new Date();
      window.localStorage.setItem('startTime',startTime);
    }
  }

  function loadBoardState() {
    
    let boardState = window.localStorage.getItem('boardEval');
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
          
          n++
        }
        handleSubmitGuess();
      }
    }
    currentSquareNo = n;
  }
  
  // getCurrentGuessArray
  function getCurrentGuessArr() { //the answer to the problem of prefilling squares an submitting lies in here somehwere
    const numbersofGuesses = guessedRGB.length;
    return guessedRGB[numbersofGuesses - 1];
  }

  // updateGuesses
  function updateGuesses(digit) {
    const currentGuessArr = getCurrentGuessArr();

    if(currentGuessArr && currentGuessArr.length < 9) {
        currentGuessArr.push(digit);

        const availableSpaceEl = document.getElementById(String(currentSquareNo));
        currentSquareNo += 1;

        availableSpaceEl.textContent = digit;
    }
  }

  // getTileColour
  function getTileColour(value) {

    if (value === 'correct') {
      return "rgb(83, 141, 78)";
    } else if (value === 'valid') {
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

    if(!isCorrectDigit) {
      return 'invalid';
    }

    const digitInThatPosition = Number(answer.charAt(index));
    const isCorrectPosition = digit === digitInThatPosition;

    if(isCorrectPosition) {
      numCount[digit] -= 1;
      return 'correct';
    }

    numCount[digit] -= 1;
    return 'valid';
  }

  // update key colours
  function updateKeyColours(digit, bgcolor, fontcolor) {
    const key = document.querySelector(`[data-key = "${digit}"]`);
    key.style.backgroundColor = bgcolor;
    key.style.color = fontcolor;
  }
  
  // update guess swatch
  function updateGuessSwatch(input) {
    const swatch = document.querySelector('.guess-colour')
    let ColorVal = `rgb(${input[0]}${input[1]}${input[2]},${input[3]}${input[4]}${input[5]},${input[6]}${input[7]}${input[8]})`
    swatch.style.backgroundColor = ColorVal;
  }

  function checkInputs(arr) {
    let r = (arr[0] * 100) + (arr[1] * 10) + arr[2];
    let g = (arr[3] * 100) + (arr[4] * 10) + arr[5];
    let b = (arr[6] * 100) + (arr[7] * 10) + arr[8];
    
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
      window.alert('Guess must be 9 digits long!');
      return;
    }
    
    // add check here for valid RGB valus
    if(!checkInputs(currentGuessArr)) {
      // console.log('Error');
      window.alert('Each seperate RGB value must be between 0 and 255. Have another go!');
      return;
    } /* else {
      console.log('fine');
    }  */

    updateGuessSwatch(currentGuessArr);

    const currentGuess = currentGuessArr.join('');
    
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

    currentGuessArr.forEach((digit,index) => {
        const tileCorrect = isTileCorrect(digit, index);
        // console.log(tileCorrect);
        if (tileCorrect === 'invalid') {
          updateKeyColours(digit,'rgb(50, 50, 50)', 'black');
        }




        evalArr.push(tileCorrect);     
        // boardArr.push(tileCorrect); //Got rid of board pushing here, as it was doing it tile by tile. Moved to line 409
    })

    getKeyColour();

    // console.log(evalArr);
    // console.log(boardArr);
    // console.log(numCount);

    Object.keys(numCount).forEach(key => {
      // console.log(key, numCount[key]);
      if (numCount[key] < 0) {
        /* console.log */('rectify here');
        
        let x = numCount[key];
        
        // for loop, starting at value of numCount[key] (assigned to new variable as numCount key won't change)
        for (let i = 8; i > -1; i--) {
          // console.log(currentGuessArr[i]);
          
          if ((evalArr[i] === 'valid') && (x < 0) && (currentGuessArr[i] === Number(key))) {
            // console.log('update' + i);
            x++;
            evalArr[i] = 'invalid';
            // console.log('gc: ' & (guessCount + 1) * i);
            
          }
          // look for key and get index
          // check corresponsing index in eval arr
          // if value = valid, then change to invalid and +1 to loop iterator
          
        }
        // +1 each time, run whilst less than 0


      }
    })


    boardArr.push(evalArr); //moved board push here so that it's only done once the above corrections starting line 380 have been made

    // console.log(evalArr);

    // console.log(boardArr);


    evalArr.forEach((value,index) => {
      setTimeout(() => {
        const tileColour = getTileColour(value);
        
        const digitId = firstDigitId + index;
        const digitEl = document.getElementById(digitId);
        
        digitEl.classList.add('animate__flipInX');  
                
        digitEl.style = `background-color:${tileColour};`;
       
      }, interval * index);
    })
   
    
    guesses.push(currentGuess)
    window.localStorage.setItem('boardEval',JSON.stringify(guesses));
   
    guessCount += 1;
    checkpoint += 9;    
    
    if (currentGuess === answer) {
      let today = new Date().toLocaleDateString();
      let lastPlayedDate = window.localStorage.getItem('lastPlayedDate') || 0;
      let status = window.localStorage.getItem('gameState') || 0;

      if ((today !== lastPlayedDate) || ((today === lastPlayedDate) && status !== 'WON')) {
        // ADD MAX STREAK
        finishTime = new Date();
        gameDuration = (finishTime - startTime) / 1000;
        gameDurationArr.push(gameDuration);
        window.localStorage.setItem('gameDurationArray', JSON.stringify(gameDurationArr));
        // console.log(gameDuration);

        setTimeout(() => {
          window.alert('Congratulations!');
          toggleStats();
          createShareGrid(boardArr);
        },interval * 9)
        // console.log('guessCount: ' + guessCount);
        guessCountArr.push(guessCount);
        window.localStorage.setItem('guessCountArray', JSON.stringify(guessCountArr));
        
        const totalWins = window.localStorage.getItem('totalWins') || 0;
        window.localStorage.setItem('totalWins', Number(totalWins) + 1);
        const currentStreak = window.localStorage.getItem('currentStreak') || 0;
        window.localStorage.setItem('currentStreak', Number(currentStreak) + 1);
        gameState = 'WON';
        window.localStorage.setItem('gameState',gameState);
        updateTotalGames();
        updateLastPlayedDate();
        updateStats();
        refreshStats();
        
        return;
      } else {
        // toggleStats();
        return
      }

    }

    if (guessedRGB.length === rows) {
      let today = new Date().toLocaleDateString();
      let status = window.localStorage.getItem('gameState') || 0;

      if ((today !== lastPlayedDate) || ((today === lastPlayedDate) && status !== 'LOST')) {
        finishTime = new Date();
        gameDuration = (finishTime - startTime) / 1000;
        gameDurationArr.push(gameDuration);
        window.localStorage.setItem('gameDurationArray', JSON.stringify(gameDurationArr));
        // console.log(gameDuration);

        setTimeout(() => {
          window.alert(`Sorry, you have no more guesses! The answer is ${outputAnswer}`);
          toggleStats();
          createShareGrid(boardArr);
        },interval * 9)
        document.getElementById('test').textContent = outputAnswer;
        window.localStorage.setItem('currentStreak', Number(0));

        const totalLosses = window.localStorage.getItem('totalLosses') || 0;
        window.localStorage.setItem('totalLosses', Number(totalLosses) + 1);
        gameState = 'LOST';
        window.localStorage.setItem('gameState',gameState);

        updateTotalGames()
        updateLastPlayedDate();
        updateStats();
        // refreshStats();

        return
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
    const totalGames = window.localStorage.getItem('totalGames') || 0;
    window.localStorage.setItem('totalGames', Number(totalGames) + 1);
  }

  function updateLastPlayedDate() {
    lastPlayedDate = window.localStorage.getItem('lastPlayedDate') || 0;
    window.localStorage.setItem('lastPlayedDate', new Date().toLocaleDateString());
  }

  // handleDeleteDigit
  function handleDeleteDigit() {
    const currentGuessArr = getCurrentGuessArr();
    const removedDigit = currentGuessArr.pop();

    guessedRGB[guessedRGB.length - 1] = currentGuessArr;

    let lastDigitEl = document.getElementById(Number(currentSquareNo - 1));

    if(lastDigitEl.id != checkpoint) {
      lastDigitEl.textContent = '';
      currentSquareNo = currentSquareNo - 1;
    }
  }


  // BUILD GAME GRID
  function buildGrid(rows,cols) {
    for (let i = 0; i < rows; i++) {

      if (i === 0) {
        let title = document.createElement('div');
        let boardOne = document.querySelector('.board-1');
        // boardOne.style.gridTemplateColumns = `repeat(1, 1fr)`;
        title.classList.add('gridTitle');
        title.style.gridColumn = "1 / 4";
        title.innerHTML = `Red`;
        // title.style.backgroundColor = 'red';
        boardOne.appendChild(title);

      }
      
        for (let j = 0; j < cols; j++) {

            let square = document.createElement('div');
            let boardOne = document.querySelector('.board-1');
            boardOne.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

            let n = (i * (cols * 3)) + (j + ((0 * cols) + 1));
            square.classList.add(`sq${n}`,'square','container','animate__animated');
            square.id = String(n);
            boardOne.appendChild(square);

        }
    }

    for (let i = 0; i < rows; i++) {
      
      if (i === 0) {
        let title = document.createElement('div');
        let boardTwo = document.querySelector('.board-2');
        // boardOne.style.gridTemplateColumns = `repeat(1, 1fr)`;
        title.classList.add('gridTitle');
        title.style.gridColumn = "1 / 4";
        title.innerHTML = 'Green';
        boardTwo.appendChild(title);

      }

        for (let j = 0; j < cols; j++) {

            let square = document.createElement('div');
            let boardTwo = document.querySelector('.board-2');
            boardTwo.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

            let n = (i * (cols * 3)) + (j + ((1 * cols) + 1));
            square.classList.add(`sq${n}`,'square','container','animate__animated');
            square.id = String(n);
            boardTwo.appendChild(square);

        }
    }

    for (let i = 0; i < rows; i++) {

      if (i === 0) {
        let title = document.createElement('div');
        let boardThree = document.querySelector('.board-3');
        // boardOne.style.gridTemplateColumns = `repeat(1, 1fr)`;
        title.classList.add('gridTitle');
        title.style.gridColumn = "1 / 4";
        title.innerHTML = 'Blue';
        boardThree.appendChild(title);

      }

        for (let j = 0; j < cols; j++) {

            let square = document.createElement('div');
            let boardThree = document.querySelector('.board-3');
            boardThree.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

            let n = (i * (cols * 3)) + (j + ((2 * cols) + 1));
            square.classList.add(`sq${n}`,'square','container','animate__animated');
            square.id = String(n);
            boardThree.appendChild(square);

        }
    }
}

  // TOGGLE INFO
  function toggleInfo() {
    let intro = document.querySelector('.intro');
    intro.classList.toggle('show');
  }

  function toggleHelp() {
    let help = document.querySelector('.helpdiv');
    help.classList.toggle('show');
  }

  function toggleStats() {
    let stats = document.querySelector('.score-modal');
    refreshStats();
    
    let status = window.localStorage.getItem('gameState');
    let share = document.querySelector('.scores-share');
    if (status === 'IN PROGRESS') {
      share.style.display = 'none';
    } else {
      share.style.display = '';
    }


    stats.classList.toggle('show');
    if (stats.classList.contains('show')) {
      window.localStorage.setItem('modalView', 'true')
    } else {
      window.localStorage.setItem('modalView', 'false')
    }
  }

  // UPDATE STATS SECTION

  function updateStats() {
    const played = document.querySelector('.played-number');
    const winPercentage = document.querySelector('.win-percent');
    const currentStreak = document.querySelector('.current-streak');
    const maxStreak = document.querySelector('.max-streak');

    winPercentage.textContent = Math.floor(Number(window.localStorage.getItem('totalWins')) / Number(window.localStorage.getItem('totalGames')) * 100) || 0;
    
    let currentStreakLS = Number(window.localStorage.getItem('currentStreak') || 0);
    let maxStreakLS = Number(window.localStorage.getItem('maxStreak') || 0);
    
    let maxStreakVar = (currentStreakLS > maxStreakLS) ? currentStreakLS : maxStreakLS;
    
    maxStreak.textContent = maxStreakVar;
    window.localStorage.setItem('maxStreak', maxStreakVar);

    played.textContent = window.localStorage.getItem('totalGames') || 0;
    currentStreak.textContent = window.localStorage.getItem('currentStreak') || 0;
  }
  
  // SHOW STUFF
  let showInfo = document.querySelector('#info');
  showInfo.addEventListener('click', toggleInfo);

  let showHelp = document.querySelector('#help');
  showHelp.addEventListener('click', toggleHelp);
  
  let showStats = document.querySelector('#stats');
  showStats.addEventListener('click', toggleStats);

  // HIDE STUFF
  let closeInfo = document.querySelector('.intro-close');
  closeInfo.addEventListener('click', toggleInfo);

  let closeHelp = document.querySelector('.help-close');
  closeHelp.addEventListener('click', toggleHelp);
  
  let closeStats = document.querySelector('.stats-close');
  closeStats.addEventListener('click',toggleStats);


  // KEYBOARD INPUT NUMBERS INTO GRID
  if (!kbDis) {
    window.addEventListener("keyup", key => {
      const input = key.key;
  
      if (input === 'Enter') {
        handleSubmitGuess();
        return;
      }
      
      if (input === 'Delete' || input === 'Backspace') {
        handleDeleteDigit();
        return;
      }
  
      if (!Number.isInteger(Number(input))) {
        // console.log('You must enter numbers, not alphabetical characters!');
        return;
      }
  
      updateGuesses(Number(input));
    })
  }

  // MOUSE INPUT NUMBERS INTO GRID
  if (!kbDis) {
    keys.forEach(key => {
      key.onclick = ({target}) => {
          const number = target.getAttribute('data-key');
                      
          if (number === 'enter') {
              handleSubmitGuess();
              return;
          }
          
          if (number === 'delete') {
              handleDeleteDigit();
              return;
          }
  
          updateGuesses(Number(number));
          
      }
    })
  }


})