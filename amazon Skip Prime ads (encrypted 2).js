// ==UserScript==
// @name        Amazon prime - skip ads (encrypted 2)
// @version     0.0.0_dev
// @author      maxime.bourdin.tic@gmail.com
// @description Automatically skips Amazon prime ads.
// @match       https://www.primevideo.com/*
// @icon        https://www.google.com/s2/favicons?domain=primevideo.com
// @license     MIT
// @grant       none
// ==/UserScript==

/*
!! NOTE: !!
The script has been voluntarily written with unnecessary codes.
The code structure is not intended to look beautiful or optimized.
Then I use an obfuscator tool to make the code unreadable and hard to understand for human
More code more efficient is the obfuscation
(check the last line of the file to see the obfuscated code)
Use only obfuscated code

!! WARNING !!
This script is not usable on your side, because at line 82 all strings are now encrypted with AES-GCM
And protected with a salt key, if you wish to know more contact me at my email address
*/


//Develop here then obfuscate
(() => {
  const ___atob = () => 'atob';

  async function decipher(myPassword, _encrypted) {
    const encoder = new window[window[___atob()]('VGV4dEVuY29kZXI=')]();
    const decoder = new window[window[___atob()]('VGV4dERlY29kZXI=')]();

    const fromBase64 = buffer =>
      window[window[___atob()]('VWludDhBcnJheQ==')][window[___atob()]('ZnJvbQ==')](window[___atob()](buffer), c => c[window[___atob()]('Y2hhckNvZGVBdA==')](0));

    const PBKDF2 = async (password, salt, iterations,length, hash, algorithm = window[___atob()]('QUVTLUNCQw==')) => {
      const keyMaterial = await window[window[___atob()]('Y3J5cHRv')][window[___atob()]('c3VidGxl')][window[___atob()]('aW1wb3J0S2V5')](
        'raw',
        encoder[window[___atob()]('ZW5jb2Rl')](password),
        { name: window[___atob()]('UEJLREYy') },
        false,
        ['deriveKey']
      );
      return await window[window[___atob()]('Y3J5cHRv')][window[___atob()]('c3VidGxl')][window[___atob()]('ZGVyaXZlS2V5')](
        {
          name: window[___atob()]('UEJLREYy'),
          salt: encoder[window[___atob()]('ZW5jb2Rl')](salt),
          iterations,
          hash
        },
        keyMaterial,
        { name: algorithm, length },
        false,
        [window[___atob()]('ZW5jcnlwdA=='), window[___atob()]('ZGVjcnlwdA==')]
      );
    };


    const salt_len = iv_len = 16;

    const encrypted = fromBase64(_encrypted);

    const salt = encrypted[window[___atob()]('c2xpY2U=')](0, salt_len);
    const iv = encrypted[window[___atob()]('c2xpY2U=')](0 + salt_len, salt_len + iv_len);
    const key = await PBKDF2(myPassword, salt, 100000, 256, window[___atob()]('U0hBLTI1Ng=='), window[___atob()]('QUVTLUdDTQ=='));

    const decrypted = await window[window[___atob()]('Y3J5cHRv')][window[___atob()]('c3VidGxl')][window[___atob()]('ZGVjcnlwdA==')](
      { name: window[___atob()]('QUVTLUdDTQ=='), iv },
      key,
      encrypted[window[___atob()]('c2xpY2U=')](salt_len + iv_len)
    );

    return decoder[window[___atob()]('ZGVjb2Rl')](decrypted);
  }

  const saltKey = () => window[(() => window[___atob()]('ZG9jdW1lbnQ='))()][(() => window[___atob()]('cXVlcnlTZWxlY3Rvcg=='))()](
    (() => window[___atob()]('bGFiZWxbZm9yXj0iaW5wdXQtbmF2LXByb2ZpbGUtYW16bjEuYWN0b3IucGVyc29uLm9pZCJdID4gbGk='))()
  )[(() => window[___atob()]('aW5uZXJUZXh0'))()];

  const _atob = () => await decipher(saltKey, "");

  const _strSelector001 = () => await decipher(saltKey, "");
  const _strSelector002 = () => await decipher(saltKey, "");
  const _strSelector003 = () => await decipher(saltKey, "");
  const _strSelector004 = () => await decipher(saltKey, "");
  const _strSelector005 = () => await decipher(saltKey, "");
  const _strSelector006 = () => await decipher(saltKey, "");
  const _strSelector007 = () => await decipher(saltKey, "");
  const _strSelector008 = () => await decipher(saltKey, "");
  const _strSelector009 = () => await decipher(saltKey, "");
  const _strSelector010 = () => await decipher(saltKey, "");
  const _strSelector011 = () => await decipher(saltKey, "");
  const _strSelector012 = () => await decipher(saltKey, "");
  const _strSelector013 = () => await decipher(saltKey, "");

  const string001 = () => await decipher(saltKey, "");
  const string002 = () => await decipher(saltKey, "");
  const string003 = () => await decipher(saltKey, "");
  const string011 = () => await decipher(saltKey, "");
  const string012 = () => await decipher(saltKey, "");
  const string013 = await decipher(saltKey, "");
  const string014 = await decipher(saltKey, "");
  const string015 = await decipher(saltKey, "");
  // const string016 = () => await decipher(saltKey, "");
  const string017 = await decipher(saltKey, "");
  const string018 = await decipher(saltKey, "");
  const string019 = () => await decipher(saltKey, "");
  const string020 = () => await decipher(saltKey, "");
  const string021 = () => await decipher(saltKey, "");
  const string022 = () => await decipher(saltKey, "");
  const string023 = () => await decipher(saltKey, "");

  const _click = () => await decipher(saltKey, "");

  const _addEventListener = () => await decipher(saltKey, "");
  const _querySelector = () => await decipher(saltKey, "");
  const _call = () => await decipher(saltKey, "");
  const _forEach = () => await decipher(saltKey, "");
  const _querySelectorAll = () => await decipher(saltKey, "");
  const _match = await decipher(saltKey, "");
  const _random = () => await decipher(saltKey, "");
  const _parse = () => await decipher(saltKey, "");
  const _log = await decipher(saltKey, "");

  const _duration = () => await decipher(saltKey, "");
  const _currentTime = () => await decipher(saltKey, "");
  const _readyState = () => await decipher(saltKey, "");
  const _innerText = () => await decipher(saltKey, "");
  const _muted = () => await decipher(saltKey, "");
  const _style = await decipher(saltKey, "");
  const _height = await decipher(saltKey, "");
  const _width = await decipher(saltKey, "");
  const _document = () => await decipher(saltKey, "");
  const _opacity = await decipher(saltKey, "");
  const _console = await decipher(saltKey, "");

  const _Promise = () => await decipher(saltKey, "");
  const _RegExp = () => await decipher(saltKey, "");
  const _Math = () => await decipher(saltKey, "");
  const _JSON = () => await decipher(saltKey, "");

  const _clearInterval = () => await decipher(saltKey, "");
  const _setTimeout = () => await decipher(saltKey, "");
  const _parseInt = () => await decipher(saltKey, "");
  const _setInterval = () => await decipher(saltKey, "");

  const _number0 = window[_parseInt()](await decipher(saltKey, ""));
  const _number1 = window[_parseInt()](await decipher(saltKey, ""));
  const _number2 = window[_parseInt()](await decipher(saltKey, ""));
  const _number3 = window[_parseInt()](await decipher(saltKey, ""));
  const _number23 = window[_parseInt()](await decipher(saltKey, ""));
  const _number30 = window[_parseInt()](await decipher(saltKey, ""));
  const _number123 = window[_parseInt()](await decipher(saltKey, ""));
  const _number187 = window[_parseInt()](await decipher(saltKey, ""));
  const _number233 = window[_parseInt()](await decipher(saltKey, ""));
  const _number287 = window[_parseInt()](await decipher(saltKey, ""));
  const _number323 = window[_parseInt()](await decipher(saltKey, ""));
  const _number387 = window[_parseInt()](await decipher(saltKey, ""));
  const _number777 = window[_parseInt()](await decipher(saltKey, ""));
  const _number888 = window[_parseInt()](await decipher(saltKey, ""));
  const _number1987 = window[_parseInt()](await decipher(saltKey, ""));
  const _number14750 = window[_parseInt()](await decipher(saltKey, ""));
  const _number15250 = window[_parseInt()](await decipher(saltKey, ""));

  const _null = () => window[_JSON()][_parse()](await decipher(saltKey, ""));
  const _true = () => window[_JSON()][_parse()](await decipher(saltKey, ""));
  const _false = () => window[_JSON()][_parse()](await decipher(saltKey, ""));

  window[_console][_log](string013);
  // window[_console][_log]("a");

  const regExpSkip = () => new window[_RegExp()](string001(), string003());
  const regExpNextEpisode = () => new window[_RegExp()](string002(), string003());

  let interval = _null();
  // let interval1 = _null();
  // let interval2 = _null();
  // let interval3 = _null();
  // let interval4 = _null();

  let clickedNext = _false();
  let isResumingEpisode = _false();
  let isTvShow = _false();
  let isWatching = _false();
  let isWaitingNext = _false();
  let closeHasClickEvt = _false();

  let tmpCounter = _number0;

  const addEventClick = async () => {
    muteVideos(); hideVideos();
    window[_console][_log](string018);
    window[_clearInterval()](interval);
    // window[_clearInterval()](interval2);
    // window[_clearInterval()](interval3);
    await sleep(_number1987);
    interval = _null();
    isResumingEpisode = _true();
    clickedNext = _false();
    isWatching = _true();
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
        // window[_clearInterval()](interval2);
        // window[_clearInterval()](interval3);
        interval = _null();
        window[_console][_log](string019());
      });
    }
  }

  window[_document()][_querySelector()](_strSelector006())[_addEventListener()](_click(), function () {
    addEventClick();
    window[_console][_log](
      window[_document()]
      [_querySelector()](_strSelector011())
      [_querySelectorAll()](_strSelector010())
      [_number1][_innerText()]
    );
  });

  [][_forEach()][_call()](window[_document()][_querySelectorAll()](_strSelector001()), (e, i) => {
    isTvShow = _true();
    e[_addEventListener()](_click(), function () {
      // window[_console][_log](
      //   e[_querySelector()](
      //     myDeciph('6e51544154185440415a5854415c5a5b185c516b0817504518415c4159501850455c465a5150461768')
      //   )[_innerText()]
      // );
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
    return window[_parseInt()](window[_Math()][_random()]() * (max - min) + min);
  }

  function muteVideos(mute = "") {
    if (mute === "") { mute = _true(); }
    window[_document()][_querySelectorAll()](_strSelector013())[_forEach()](item => {
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
        let next = () => window[_document()][_querySelector()](_strSelector003());
        let playPause = () => window[_document()][_querySelector()](_strSelector004());
        let video = () => window[_document()][_querySelectorAll()](string011())[_number0];
        let timeIndicator = () => window[_document()][_querySelector()](_strSelector008());
        let adTimeIndicator = () => window[_document()][_querySelector()](_strSelector012());

        if (video()[_readyState()] <= _number3 || !timeIndicator()) {
          muteVideos(); hideVideos();
        }

        if (timeIndicator()) {
          muteVideos(_false()); hideVideos(string012());
        }

        if (next() && !isWaitingNext && !clickedNext) {
          window[_clearInterval()](interval);
          window[_console][_log](string014);
          // window[_console][_log](next());
          isWaitingNext = _true(); clickedNext = _false(); isResumingEpisode = _false();
          window[_console][_log]('Next : ' + next()[_innerText()]);
          await sleep(_number1987);
          executeIntervalCheck();
          // executeIntervalCheck2();
          return;
        }

        if (next() && isWaitingNext && !clickedNext) {
          if (video()[_duration()] - video()[_currentTime()] <= _number23 && !clickedNext) {
            window[_clearInterval()](interval);
            window[_console][_log](string022());
            await sleep(_number777 + getRandomArbitrary(_number0, _number30));
            muteVideos(); hideVideos();
            next()[_click()]();
            window[_console][_log](`${string020()} ${next()[_innerText()]}`);
            clickedNext = _true();
            await sleep(_number1987 + getRandomArbitrary(_number233, _number323));
            // window[_console][_log]("isWaitingNext:", isWaitingNext);
            // window[_console][_log]("clickedNext:", clickedNext);
            // window[_console][_log]("isResumingEpisode:", isResumingEpisode);
            executeIntervalCheck();
            return;
          } else {
            let c = window[_parseInt()](video()[_duration()] - video()[_currentTime()]);
            if (c < tmpCounter || tmpCounter === 0) {
              tmpCounter = c;
              window[_console][_log](`remaining : ${c} seconds`);
            }
            return;
          }
        }

        if ((isWaitingNext || isResumingEpisode || clickedNext) && skipNext[_innerText()][_match](regExpSkip()) && !next()) {
          window[_clearInterval()](interval);
          window[_console][_log](string023());
          // window[_console][_log](skipNext);
          muteVideos(); hideVideos();
          isWaitingNext = _false(); isResumingEpisode = _false(); clickedNext = _false();
          // await sleep(_number1987 + getRandomArbitrary(_number323, _number387));
          await sleep(_number777 + getRandomArbitrary(_number323, _number387));
          skipNext[_click()]();
          window[_console][_log](string015);
          muteVideos(_false()); hideVideos(string012());
          await sleep(_number1987 * _number3 + getRandomArbitrary(_number323, _number387));
          await sleep(_number1987 * _number3 + getRandomArbitrary(_number323, _number387));
          await sleep(_number1987 * _number3 + getRandomArbitrary(_number323, _number387));
          // window[_console][_log]("isWaitingNext:", isWaitingNext);
          // window[_console][_log]("clickedNext:", clickedNext);
          // window[_console][_log]("isResumingEpisode:", isResumingEpisode);
          executeIntervalCheck();
          return;
        }
      }
    }, (() => {
      let t = !isWaitingNext && !isResumingEpisode && !clickedNext
        // ? getRandomArbitrary(_number123, _number187)
        // ? getRandomArbitrary(_number777, _number888)
        ? getRandomArbitrary(_number14750, _number15250)
        : getRandomArbitrary(_number233, _number323)
        ;
      // let t = getRandomArbitrary(_number233, _number323);
      window[_console][_log]({ t });
      return t;
    })());
  }

  // function executeIntervalCheck1() {

  // }

  // function executeIntervalCheck2() {
  //   tmpCounter = _number0;
  //   interval2 = window[_setInterval()](async () => {
  //     if (isWatching) {
  //       let next = () => window[_document()][_querySelector()](_strSelector003());
  //       let video = () => window[_document()][_querySelectorAll()](string011())[_number0];

  //       if (next() && isWaitingNext && !clickedNext) {
  //         if (video()[_duration()] - video()[_currentTime()] <= _number23) {
  //           window[_clearInterval()](interval2);
  //           window[_console][_log](string022);
  //           await sleep(_number777 + getRandomArbitrary(_number0, _number30));
  //           muteVideos(); hideVideos();
  //           next()[_click()]();
  //           window[_console][_log](`${string020()} ${next()[_innerText()]}`);
  //           clickedNext = _true();
  //           await sleep(_number1987 + getRandomArbitrary(_number23, _number30));
  //           // window[_console][_log]("isWaitingNext:", isWaitingNext);
  //           // window[_console][_log]("clickedNext:", clickedNext);
  //           // window[_console][_log]("isResumingEpisode:", isResumingEpisode);
  //           executeIntervalCheck3();
  //         } else {
  //           let c = window[_parseInt()](video()[_duration()] - video()[_currentTime()]);
  //           if (c < tmpCounter || tmpCounter === 0) {
  //             tmpCounter = c;
  //             window[_console][_log](`remaining : ${c} seconds`);
  //           }
  //         }
  //       }
  //     }
  //   }, (() => { return 233; })());
  // }

  // function executeIntervalCheck3() {
  //   interval3 = window[_setInterval()](async () => {
  //     if (isWatching) {
  //       let skipNext = window[_document()][_querySelector()](_strSelector002())
  //         || window[_document()][_querySelector()](_strSelector009());
  //       let next = () => window[_document()][_querySelector()](_strSelector003());

  //       if ((isWaitingNext || isResumingEpisode || clickedNext) && skipNext[_innerText()][_match](regExpSkip()) && !next()) {
  //         window[_clearInterval()](interval3);
  //         window[_console][_log](string023);
  //         window[_console][_log](skipNext);
  //         muteVideos(); hideVideos();
  //         isWaitingNext = _false(); isResumingEpisode = _false(); clickedNext = _false();
  //         await sleep(_number1987 + getRandomArbitrary(_number323, _number387));
  //         await sleep(_number777 + getRandomArbitrary(_number323, _number387));
  //         skipNext[_click()]();
  //         window[_console][_log](string015);
  //         muteVideos(_false()); hideVideos(string012());
  //         await sleep(_number1987 + getRandomArbitrary(_number323, _number387));
  //         // window[_console][_log]("isWaitingNext:", isWaitingNext);
  //         // window[_console][_log]("clickedNext:", clickedNext);
  //         // window[_console][_log]("isResumingEpisode:", isResumingEpisode);
  //         executeIntervalCheck();
  //         return;
  //       }
  //     }
  //   }, (() => { return 233; })());
  // }
})();

//Obfuscated
//Use only obfuscated code in production
// NOT YET READY...