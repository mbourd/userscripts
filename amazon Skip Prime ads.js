// ==UserScript==
// @name        Amazon prime - skip ads
// @version     3.4.2
// @author      maxime.bourdin.tic@gmail.com
// @description Automatically skips Amazon prime ads.
// @match       https://www.primevideo.com/*
// @icon        https://www.google.com/s2/favicons?domain=primevideo.com
// @license     MIT
// @grant       none
// ==/UserScript==

/* The script has been written with unnecessary codes, totally normal which then I use an obfuscator tool to make the code unreable for human (check the last line of the file to see the obfuscated code) */

(() => {
  const __String = () => atob('U3RyaW5n');
  const __map = () => atob('bWFw');
  const __match = () => atob('bWF0Y2g=');
  const __parseInt = () => atob('cGFyc2VJbnQ=');
  const __join = () => atob('am9pbg==');
  const __reduce = () => atob('cmVkdWNl');
  const __charCodeAt = () => atob('Y2hhckNvZGVBdA==');
  const __fromCharCode = () => atob('ZnJvbUNoYXJDb2Rl');
  const __split = () => atob('c3BsaXQ=');
  const __RegExp = () => atob('UmVnRXhw');
  const __Str1 = () => atob('LnsxLDJ9'); // .{1,2}
  const __Str2 = () => atob('Zw=='); // g

  const decipher = salt => {
    return encoded => encoded[__match()](new window[__RegExp()](__Str1(), __Str2()))
    [__map()](v => window[__parseInt()](v, window[__parseInt()](atob("MTY="))))
    [__map()](/*applySaltToChar*/code => (/*textToChars*/text => text[__split()]('')[__map()](c => c[__charCodeAt()](0)))(salt)[__reduce()]((a, b) => a ^ b, code))
    [__map()](charCode => window[__String()][__fromCharCode()](charCode))
    [__join()]('');
  }
  const saltKey = window[(() => atob('ZG9jdW1lbnQ='))()][(() => atob('cXVlcnlTZWxlY3Rvcg=='))()](
    (() => atob('bGFiZWxbZm9yXj0iaW5wdXQtbmF2LXByb2ZpbGUtYW16bjEuYWN0b3IucGVyc29uLm9pZCJdID4gbGk='))()
  )[(() => atob('aW5uZXJUZXh0'))()]; // label[for^="input-nav-profile-amzn1.actor.person.oid"] > li -> Maxime
  const myDeciph = decipher(saltKey);

  const _strSelector001 = () => myDeciph("595c6e5c516b081754431850451850455c465a515046181768"); // li[id^="av-ep-episodes-"]
  const _strSelector002 = () => myDeciph("515c431b5441434250574559544c504746515e185c5b535a57544718565a5b41545c5b504715515c430f5b415d18565d5c59511d041c15515c430f5b415d18565d5c59511d061c15515c430f5b415d18565d5c59511d071c"); // div.atvwebplayersdk-infobar-container div:nth-child(1) div:nth-child(3) div:nth-child(2) -> Skip *
  const _strSelector003 = () => myDeciph("1b5441434250574559544c504746515e185b504d4140455654475118574041415a5b"); // .atvwebplayersdk-nextupcard-button
  const _strSelector004 = () => myDeciph("1b5441434250574559544c504746515e184559544c455440465018574041415a5b"); // .atvwebplayersdk-playpause-button
  const _strSelector005 = () => myDeciph("1b5441434250574559544c504746515e184559544c504756595a465018574041415a5b"); // .atvwebplayersdk-playerclose-button
  const _strSelector006 = () => myDeciph("1b5143185b5a5150185145185456415c5a5b18575a4d151b5143185145185b5a5150184559544c5754565e1554"); // .dv-node-dp-action-box .dv-dp-node-playback a
  const _strSelector007 = () => myDeciph("1b5441434250574559544c504746515e18465e5c4550595058505b4118574041415a5b"); // .atvwebplayersdk-skipelement-button
  const _strSelector008 = () => myDeciph("1b5441434250574559544c504746515e18415c58505c5b515c5654415a471841504d41"); // .atvwebplayersdk-timeindicator-text
  const _strSelector009 = () => myDeciph("1b5441434250574559544c504746515e185c5b535a57544718565a5b41545c5b5047150b15515c43150b15515c430f5b415d18565d5c59511d061c150b15515c43"); // .atvwebplayersdk-infobar-container > div > div:nth-child(3) > div -> Skip **

  const string001 = () => myDeciph("6b665e5c4511"); // ^Skip$
  const string002 = () => myDeciph("6b7b504d411570455c465a515011"); // ^Next Episode$
  const string003 = () => myDeciph("52"); // g
  const string011 = () => myDeciph("435c51505a"); // video
  const string012 = () => myDeciph("04050510"); // 100%
  const string013 = myDeciph("5447475c435c5b52"); // arriving
  const string014 = myDeciph("42545c415c5b52155b504d411b1b1b"); // waiting next...
  const string015 = myDeciph("465e5c4515464140455c5115545146"); // skip stupid ads
  const string016 = ()=>myDeciph("5440515c5a1915435c51505a"); // audio, video
  const string017 = myDeciph("0510"); // 0%
  const string018 = myDeciph("425441565d5c5b52"); // watching
  const string019 = ()=>myDeciph("46415a4515425441565d5c5b52"); // stop watching
  const string020 = ()=>myDeciph("5b504d41"); // next
  const string021 = ()=>myDeciph("465e5c45154750565445"); // skip recap

  const _click = () => myDeciph("56595c565e"); // click

  const _addEventListener = () => myDeciph("5451517043505b41795c4641505b5047"); // addEventListener
  const _querySelector = () => myDeciph("444050474c6650595056415a47"); // querySelector
  const _call = () => myDeciph("56545959"); // call
  const _forEach = () => myDeciph("535a477054565d"); // forEach
  const _querySelectorAll = () => myDeciph("444050474c6650595056415a47745959"); // querySelectorAll
  const _match = myDeciph("585441565d"); // match
  const _random = myDeciph("47545b515a58"); // random
  const _parse = () => myDeciph("4554474650"); // parse
  const _log = myDeciph("595a52"); // log

  const _duration = () => myDeciph("51404754415c5a5b"); // duration
  const _currentTime = () => myDeciph("56404747505b41615c5850"); // currentTime
  const _readyState = () => myDeciph("475054514c6641544150"); // readyState
  const _innerText = () => myDeciph("5c5b5b504761504d41"); // innerText
  const _muted = () => myDeciph("5840415051"); // muted
  const _style = myDeciph("46414c5950"); // style
  const _height = myDeciph("5d505c525d41"); // height
  const _width = myDeciph("425c51415d"); // width
  const _document = () => myDeciph("515a564058505b41"); // document
  const _opacity = myDeciph("5a4554565c414c"); // opacity
  const _console = myDeciph("565a5b465a5950"); // console

  const _Promise = () => myDeciph("65475a585c4650"); // Promise
  const _RegExp = () => myDeciph("675052704d45"); // RegExp
  const _Math = myDeciph("7854415d"); // Math
  const _JSON = () => myDeciph("7f667a7b"); // JSON

  const _clearInterval = () => myDeciph("56595054477c5b415047435459"); // clearInterval
  const _setTimeout = () => myDeciph("465041615c58505a4041"); // setTimeout
  const _parseInt = () => myDeciph("45544746507c5b41"); // parseInt
  const _setInterval = () => myDeciph("4650417c5b415047435459"); // setInterval

  const _number0 = window[_parseInt()](myDeciph("05")); // 0
  const _number23 = window[_parseInt()](myDeciph("0706")); // 23
  const _number30 = window[_parseInt()](myDeciph("0605")); // 30
  const _number777 = window[_parseInt()](myDeciph("020202")); // 777
  const _number1987 = window[_parseInt()](myDeciph("040c0d02")); // 1987
  const _number323 = window[_parseInt()](myDeciph("060706")); // 323
  const _number123 = window[_parseInt()](myDeciph("040706")); // 123
  const _number187 = window[_parseInt()](myDeciph("040d02")); // 187
  const _number14750 = window[_parseInt()](myDeciph("0401020005")); // 14750
  const _number15250 = window[_parseInt()](myDeciph("0400070005")); // 15250
  const _number3 = window[_parseInt()](myDeciph("06")); // 3
  const _number1 = window[_parseInt()](myDeciph("04")); // 1
  const _number233 = window[_parseInt()](myDeciph("070606")); // 233
  const _number287 = window[_parseInt()](myDeciph("070d02")); // 287
  const _number888 = window[_parseInt()](myDeciph("0d0d0d")); // 888

  const _true = () => window[_JSON()][_parse()](myDeciph("41474050")); // true
  const _false = () => window[_JSON()][_parse()](myDeciph("5354594650")); // false
  const _null = () => window[_JSON()][_parse()](myDeciph("5b405959")); // null

  window[_console][_log](string013);
  // window[_console][_log]("a");

  const regExpSkip = () => new window[_RegExp()](string001(), string003());
  const regExpNextEpisode = () => new window[_RegExp()](string002(), string003());

  let clickedNext = _false();
  let isResumingEpisode = _false();

  let isTvShow = _false();
  let interval = _null();
  let isWatching = _false();
  let isWaitingNext = _false();
  let closeHasClickEvt = _false();
  const addEventClick = async () => {
    muteVideos(); hideVideos();
    window[_clearInterval()](interval);
    await sleep(_number1987);
    interval = _null();
    isResumingEpisode = _true();
    clickedNext = _false();
    isWatching = _true();
    window[_console][_log](string018);
    executeIntervalCheck();
    await sleep(_number1987);

    if (!closeHasClickEvt) {
      closeHasClickEvt = _true();
      window[_document()][_querySelector()](_strSelector005())[_addEventListener()](_click(), () => {
        muteVideos(); hideVideos();
        isResumingEpisode = _false();
        isWatching = _false();
        isWaitingNext = _false();
        window[_clearInterval()](interval);
        interval = _null();
        window[_console][_log](string019());
      });
    }
  }

  window[_document()][_querySelector()](_strSelector006())[_addEventListener()](_click(), () => {
    addEventClick();
  });

  [][_forEach()][_call()](window[_document()][_querySelectorAll()](_strSelector001()), (e, i) => {
    isTvShow = _true();
    e[_addEventListener()](_click(), () => {
      addEventClick();
    });
  });

  // window[_document()][_querySelector()](_strSelector004())[_addEventListener()](_click(), async () => {
  //     console[_log]('pause');
  // });

  function sleep(ms = "") {
    if (ms === "") { ms = _number1; }
    return new window[_Promise()](resolve => window[_setTimeout()](resolve, ms));
  }

  function getRandomArbitrary(min, max) {
    return window[_parseInt()](window[_Math][_random]() * (max - min) + min);
  }

  function muteVideos(mute = "") {
    if (mute === "") { mute = _true(); }
    window[_document()][_querySelectorAll()](string016())[_forEach()](item => {
      item[_muted()] = mute;
    });
  }

  function hideVideos(s = "") {
    if (s === "") { s = string017; }
    window[_document()][_querySelectorAll()](string011())[_forEach()](item => {
      item[_style][_opacity] = s;
    });
  }

  function executeIntervalCheck() {
    interval = window[_setInterval()](async () => {
      if (isWatching) {
        let skipNext = window[_document()][_querySelector()](_strSelector002()) || window[_document()][_querySelector()](_strSelector009());
        // let skipRecap = ()=>window[_document()][_querySelector()](_strSelector007());
        let next = ()=>window[_document()][_querySelector()](_strSelector003());
        let playPause = () => window[_document()][_querySelector()](_strSelector004());
        let video = () => window[_document()][_querySelectorAll()](string011())[_number0];
        let timeIndicator = () => window[_document()][_querySelector()](_strSelector008());

        if (video()[_readyState()] <= _number3 || !timeIndicator()) {
          muteVideos(); hideVideos();
        }

        if (timeIndicator()) {
          muteVideos(false); hideVideos("100%");
        }

        if (next() && !isWaitingNext) {
          window[_clearInterval()](interval);
          isWaitingNext = _true();
          clickedNext = _false();
          isResumingEpisode = _false();
          window[_console][_log](string014);
          // playPause()[_click()]();
          executeIntervalCheck();
          return;
        }

        if (next() && isWaitingNext && !clickedNext) {
          if (video()[_duration()] - video()[_currentTime()] <= _number23) {
            // window[_clearInterval()](interval);
            // playPause()[_click()]();
            await sleep(_number777 + getRandomArbitrary(_number0, _number30));
            muteVideos(); hideVideos();
            next()[_click()]();
            window[_console][_log](string020());
            clickedNext = _true();
            await sleep(_number1987);
            // executeIntervalCheck();
          }
          return;
        }

        if ((isWaitingNext || isResumingEpisode) && skipNext[_innerText()][_match](regExpSkip()) && !next()) {
          // console.log(skipNext)
          // window[_clearInterval()](interval);
          muteVideos(); hideVideos();
          isWaitingNext = _false();
          isResumingEpisode = _false();
          await sleep(_number1987 + getRandomArbitrary(_number323, 387));
          // playPause()[_click()]();
          // await sleep(_number777 + getRandomArbitrary(_number1, _number30));
          skipNext[_click()]();
          window[_console][_log](string015);
          await sleep(_number777 + getRandomArbitrary(_number1, _number30));
          // playPause()[_click()]();
          // executeIntervalCheck();
          return;
        }

        if (!isWaitingNext && !isResumingEpisode && !next()) {
          isResumingEpisode = _false();
          isWaitingNext = _false();
          window[_clearInterval()](interval);
          executeIntervalCheck();
        }
      }
    }, (() => {
      // let t = isWaitingNext || isResumingEpisode
      //   // ? getRandomArbitrary(_number123, _number187)
      //   ? getRandomArbitrary(_number777, _number888)
      //   : getRandomArbitrary(_number14750, _number15250)
      //   ;
      let t = getRandomArbitrary(_number233, _number323);
      // window[_console][_log]('start interval check : ' + t);
      return t;
    })());
  }
})();
