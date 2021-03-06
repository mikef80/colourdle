// THIS MAKES THE GAME LOAD ON PAGE LOAD
document.addEventListener('DOMContentLoaded', () => {

  let masterColorArray = ["206141169","241071195","141225064","175210025","097051139","043076032","050216098","052112235","030212230","065243161","198201232","023169127","156011195","124013078","138211215","073192053","071016066","084068107","006060033","169064056","247162054","203181194","040041120","037243148","136008189","066112108","007223132","129006056","002161126","067045233","024217096","230224191","223169190","134139164","153130012","077235093","096125053","150047191","163089023","000042051","205004132","243215120","219042141","142089096","223244132","174077208","011160075","033238192","021115226","004187008","040024121","105211103","211082200","182194032","235164092","215201161","015166081","055144152","045059212","161100176","174048017","193066144","225058114","196043016","046203147","061130121","023097162","218094130","055090136","173161072","047102179","061239149","056146072","113048187","067060005","156068012","099062028","116190127","212176240","186248026","103111150","219022221","015237245","020057216","123097210","233244142","113169034","084249054","141110006","229047025","195225220","111201214","039021221","105199217","097177242","029146008","206211159","109171020","138235048","128220118","011255158","221008139","041149080","109178025","099084134","191089237","091255063","054078111","070160186","012049228","038006005","119107105","028057036","053099151","065050196","251214069","097172060","036132081","036173022","199038078","068056066","185219047","225042105","055170187","148108177","238121088","102072050","079250079","096154059","057221147","173239124","130031045","087212018","125110180","055225012","211126025","045040202","077194167","129201126","078202232","139059191","131060089","008159140","223190025","244036041","184201011","044035105","128015095","071014174","081194248","206076249","044073221","109037135","081126104","170186197","081099026","058159118","068022119","018160227","188054162","239163228","114032092","203199240","178208002","222170138","000070019","053132111","118190233","007129057","159172130","133247204","231198220","014092014","181207049","002105048","015253029","229027147","186051202","194179120","108204064","169057073","113064150","215016082","215071161","164005088","160142010","218068112","223139226","025189046","129200208","143065185","215212003","153029202","065232135","047182245","036073116","026247160","077216155","231197190","171081168","024024153","105177190","035235207","195071098","212128086","191192240","239129126","229063113","194242149","249192205","038172208","092156209","004025157","004170105","060046208","179223071","150083108","116234245","070195231","054009240","194233007","248099144","078005059","153133167","020086163","198029223","127248133","232009225","221030080","234080143","089069237","243211091","074241142","218044217","025181158","094135174","145186008","036078201","157025178","121090124","015118158","015235075","040219058","185051071","115127248","104006090","039067156","033160145","055179018","215077016","204118158","007228133","036066244","196124246","060003159","205083255","120044023","038195209","154070079","208252040","162050034","098130230","088249183","192113229","198115135","022119200","180164220","177019025","083027071","223049240","244106243","011193072","043076160","062224190","149039216","178032170","003249109","088029070","208123114","232084251","166040040","002030206","192230097","240036176","229221037","100203126","124024233","184085056","109240020","041172230","188018023","077240091","100119193","207191021","154166163","056081161","239164084","166125179","219138084","194049097","175180063","221020139","073250118","196121031","190159195","120049218","127034059","141168166","126215091","219153118","117094196","086057214","091220051","249003137","218154098","124076083","222160135","078085016","104244015","199204123","190159031","055156086","248095009","085183069","224247211","129202096","001089205","134034085","090053088","028217156","079216214","099035062","101251075","222009192","225159241","156139230","180075195","190087197","002174208","021050066","082193140","255013227","095171028","237235220","087065051","003248203","089162251","157163233","245065207","035100009","223126004","017055200","180102079","214196114","183113034","072243253","034148102","060172126","019093094","106078125","168176134","096024082","211250215","203078049","198163083"];

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
    let launchDate = new Date(2022, 2, 13);
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
          output.push('????');
        } else if (item === 'valid') {
          // console.log('valid');
          output.push('????');
        } else if (item === 'invalid') {
          // console.log('invalid');
          output.push('???');
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
      let yearBegin = new Date(2022, 2, 13); //also changed this value to match date above.  was 2022,0,15
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