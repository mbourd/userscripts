// ==UserScript==
// @name        Amazon prime video - skip ads (encrypted 2)
// @version     1.0.0
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
Then I use an obfuscator tool to make the code unreadable and hard to understand for human (optional)
More code more efficient is the obfuscation
(check the last line of the file to see the obfuscated code)

!! WARNING !!
This script is not usable on your side, because at line 199 all strings are now encrypted with AES-GCM.
The cipher is not implemented because, the encrypted strings are hard coded.
The decipher is partialy implemented but not usable on your side, because you need to know the methods.
The strings are protected with a salt key, if you wish to know more contact me at my email address.
*/

if (!localStorage.getItem('userscript')) {
  localStorage.setItem('userscript', JSON.stringify(
    /*
    U2FsdGVkX1/ZlTTqBUmOb4DUilkhfroCCxiC7IeKYugo4ruD128ARTGPRsD/uR36CQOF08i8wX5bZo3zyR5BqtHd1y2mmU/E/k3JYQ6VFcpl7028Cp1oQQnrQdXxFbfsJ4r7Ax4Mq17K694UvYB4RQ==
    */
    {}
  ));
}
if (!localStorage.getItem('cryptoWebApi')) {
  localStorage.setItem('cryptoWebApi', JSON.stringify(
    /*
    U2FsdGVkX1+xzjTa/EQakTM0MomZd/omGWKieOuzXob79FJUau8ny6uNYni+Eu0EsjNJ7xqhHvM1htnO3jhIzjlftDiurMNZsO+dgeNljM54U5GSvKj64kVU/f4uNOBLnb0l3aSTiur6TrqTftc/WcNx557Op+TnLAmMGnE53FswK9NfiPD4JIJYYoXMD/MyQTmc8rmPsnLlrC6dj7Y15MXzF9yuiV7sh49Ma+z/s485V2sHJKrG03OfZnNSpwTYnN59v0FoKp4C9XmpzEhueglwz2hInZcPulaXYRUF1ydcK2y5H96FGx14mFGnT9SKAeH1HKpfDvQRXUWOSPLP8hxmWxb0vkwFMkAHhKiQU+sonoRiRdWKBcM5X+HAul99jPXWjsVIHJ6198rg/wTmdRhOeAHGdt9HGvs3W2o0uVgg59pb1/V6I8smRQIMQmIv004nALpyS5Jnusfeb5eAUUp3gHMvfuJIA/PrPrqPsMwFcX+dAzLwfP1qmrCQquNPUuu2cefzLPrxxIJJQ9gJYg+w+Rh2yinn9yf4V6CgGRJCIL6fIuWKWX+O09rXGCJ6JPaC6YWSomwmP5fss7qa3/D7e9HWWArTUwXg8V/OWs45qPvLqrf17sCUo09pDaqdbMftfB4npMUNOKbrSxzcNdvQkDoqYbNzDvhdePUThyWm+5P+HXyMVQHkC5f8T1RHgwgY60hedG+t4eUhw+a/v4l3Ers+FzYI6mnWHxKVRf95vufdDjr3I8ELVW4XkkNh9p9YDTyM80vbU4nFt99KtEsVp8+flmnG2J3aupc9442c/JaKdHI2UaobvdggvdsBP2Xevmmm86h65p2pYUULzE4AE/ZB7TtXEn2JXTegIfmRo8rSDa0eHq7Bu0wMSwhn6eZ3P+HXPrWsblsbshEdaMSP6qifnncfmxmQhEYuRBfHlNK9lpv6tqV8oq3fWncxXUHWfuLRnI8prNuwnwZ9CPbTlKH8FIxNzs+1IEtvc1FDESWHk6o+PwxZzHKu4brfLGTGBNgOngyyhp2/ldEYFl163XU8FnKUrxYVXrZsmkVOi11ko+zcFZ2FFWlx6JA8
    */
    {}
  ));
}

const webCryptoApi_ = JSON.parse(localStorage.getItem('cryptoWebApi'));
const cryptoAPI015 = webCryptoApi_[(() => 'cryptoAPI015')()]; const cryptoAPI006 = webCryptoApi_[(() => 'cryptoAPI006')()];
const cryptoAPI007 = webCryptoApi_[(() => 'cryptoAPI007')()]; const cryptoAPI017 = webCryptoApi_[(() => 'cryptoAPI017')()];
const cryptoAPI018 = webCryptoApi_[(() => 'cryptoAPI018')()]; const cryptoAPI019 = webCryptoApi_[(() => 'cryptoAPI019')()];
const cryptoAPI020 = webCryptoApi_[(() => 'cryptoAPI020')()]; const cryptoAPI021 = webCryptoApi_[(() => 'cryptoAPI021')()];
const cryptoAPI022 = webCryptoApi_[(() => 'cryptoAPI022')()]; const cryptoAPI029 = webCryptoApi_[(() => 'cryptoAPI029')()];
const cryptoAPI001 = webCryptoApi_[(() => 'cryptoAPI001')()]; const cryptoAPI002 = webCryptoApi_[(() => 'cryptoAPI002')()];
const cryptoAPI025 = webCryptoApi_[(() => 'cryptoAPI025')()]; const cryptoAPI003 = webCryptoApi_[(() => 'cryptoAPI003')()];
const cryptoAPI027 = webCryptoApi_[(() => 'cryptoAPI027')()]; const cryptoAPI013 = webCryptoApi_[(() => 'cryptoAPI013')()];
const cryptoAPI010 = webCryptoApi_[(() => 'cryptoAPI010')()]; const cryptoAPI012 = webCryptoApi_[(() => 'cryptoAPI012')()];
const cryptoAPI004 = webCryptoApi_[(() => 'cryptoAPI004')()]; const cryptoAPI005 = webCryptoApi_[(() => 'cryptoAPI005')()];
const cryptoAPI011 = webCryptoApi_[(() => 'cryptoAPI011')()]; const cryptoAPI014 = webCryptoApi_[(() => 'cryptoAPI014')()];
const cryptoAPI028 = webCryptoApi_[(() => 'cryptoAPI028')()]; const cryptoAPI026 = webCryptoApi_[(() => 'cryptoAPI026')()];
const cryptoAPI008 = webCryptoApi_[(() => 'cryptoAPI008')()]; const cryptoAPI023 = webCryptoApi_[(() => 'cryptoAPI023')()];
const cryptoAPI024 = webCryptoApi_[(() => 'cryptoAPI024')()]; const cryptoAPI016 = webCryptoApi_[(() => 'cryptoAPI016')()];

//Develop here then obfuscate
(async function () {
  const ___atob = () => 'atob';
  const _propNameSalt = () => 'salt'; const _propNameIV = () => 'iv';
  const _propNameIterations = () => 'iterations'; const _propNameHash = () => 'hash';
  const _propNameName = () => 'name'; const _propNameLength = () => 'length';

  async function decipher(myPassword, iterations = cryptoAPI015, hash = cryptoAPI006, algo = cryptoAPI007) {
    return async (_encrypted) => {
      const encoder = new window[cryptoAPI017]();
      const decoder = new window[cryptoAPI018]();

      const fromBase64 = buffer =>
        window[cryptoAPI019][cryptoAPI020](window[cryptoAPI021](buffer), c => c[cryptoAPI022](cryptoAPI029));

      const PBKDF2 = async (
        password, salt, iterations, length, hash = cryptoAPI001, algorithm = cryptoAPI002
      ) => {
        const keyMaterial = await window[cryptoAPI023][cryptoAPI024][cryptoAPI025](
          cryptoAPI003,
          encoder[cryptoAPI027](password),
          cryptoAPI013,
          cryptoAPI010,
          cryptoAPI012
        );
        return await window[cryptoAPI023][cryptoAPI024][cryptoAPI004](
          {
            [(() => _propNameName())()]: cryptoAPI005,
            [(() => _propNameSalt())()]: encoder[cryptoAPI027](salt),
            [(() => _propNameIterations())()]: iterations,
            [(() => _propNameHash())()]: hash
          },
          keyMaterial,
          { [(() => _propNameName())()]: algorithm, [(() => _propNameLength())()]: length },
          cryptoAPI010,
          cryptoAPI011
        );
      };

      const salt_len = cryptoAPI014;
      const iv_len = cryptoAPI014;
      const encrypted = fromBase64(_encrypted);
      const salt = encrypted[cryptoAPI028](cryptoAPI029, salt_len);
      const iv = encrypted[cryptoAPI028](cryptoAPI029 + salt_len, salt_len + iv_len);
      const key = await PBKDF2(myPassword, salt, iterations, cryptoAPI016, hash, algo);

      const decrypted = await window[cryptoAPI023][cryptoAPI024][cryptoAPI026](
        { [(() => _propNameName())()]: cryptoAPI007, [(() => _propNameIV())()]: iv },
        key,
        encrypted[cryptoAPI028](salt_len + iv_len)
      );
      return decoder[cryptoAPI008](decrypted);
    }
  }

  const saltKey = () => window[(() => window[___atob()]('ZG9jdW1lbnQ='))()][(() => window[___atob()]('cXVlcnlTZWxlY3Rvcg=='))()](
    (() => JSON.parse(localStorage.getItem('userscript'))[(() => 'saltKeySelector')()])()
  )[(() => window[___atob()]('aW5uZXJUZXh0'))()];

  const encryptedStrings = {
    "_atob": "UGlOZHRCcnptMFBsc29tRmZHd3pKRzdQV3ZkbnVJaXdiNVFVOFBvYTNFcFMva2VJeXZqdStSRHkrcjNvcEt5MC80cFBndz09",
    "_strSelector001": "SUNGK2F5TkFuNVdiTE5LdEpCWC9wOVQzenJtWTBWb2lOL2VzaXhMSWdlSW5ZY1dzRW8vYzMvZXB1SEZKM2piRjFxbGpDbGMrQm9Uc2pSMlBrbThlaGV0Sm0raXRRcGh5aWc9PQ==",
    "_strSelector002": "NjZiZkozajJrNERWSFJjQTdmZWNhaVpPR3NxUVg1Ykk2TUlqRXhWeHZTOUIyQWlNekFRTmR4UkU2OEd6Uys4YmxLZnFmRkZGZDN4Q2NPNVN2aVRNRUFNd0c1M2E4WkM4SkpGelljdDJaYS9xZVpTT1J6S0tsTnpYV1Q4UEJKQ2ZLZkRZK3A1V0cvUk51UHdqbUJWakp2TGJBV0hMNG51U0pNMVdvRVFPOW00ZjFKRS8yczd1UlE9PQ==",
    "_strSelector003": "eThuaUpVVXRkb0dEZWhGYUcwNXpxejAyN2gvVWp4eWNMZ3hGRlhDNU9Dd3VYcVN5R3l1V3JQZWsyakhaNXdqQ0VrMk9Lbm80QkFNTzdCNmtxenpXS010aGF6Z1M5Qk9abGpWbWg5NFBWYktmSFE9PQ==",
    "_strSelector004": "a3Nmc2p4Q1MzZmxHTTlSTmlkTlViVG1QajhEcHRlaEJQMkJjZUVBbitnd1FWOEF2QWtwTXczMTVxWk0remxlV1FJMXQxSjhiajh3c1dlL1BGN1NGbzU5bURFam0vYWUvYkZQaTJDYWxGalFR",
    "_strSelector005": "dGI4L0pqbnhweHNlUVoxdFpyMnFzVU96YlpDVGZKdFRVVkU3QWlXN2plN21DUmZvRnhBTjNWMitFYnRtUGtjanA2blhaTU4xQTRHMURKYWxUOHRxUmhYa2dCL1BRMXpFWWI5dlpsYzZseUs0TTQ4PQ==",
    "_strSelector006": "MFQ1N3JONkNHVXZVeVNieGE1dVVxUFpWUGJyZFBTbHM1Vis1eTdBMUVsZ2ZBa1NjbERXcTdQaXQzQWoxd3grNU9SNm8zY0w4ckNCVUdRVXVsc2RrUUtaeXdpYVcvc3lyQVdvM05aV3JMMm5iM1lKc3dSM20vd3plTkdvOQ==",
    "_strSelector007": "MTdnSzdOZmRuaU9LazF1WjJaZUJKN3hpNjFIWExmNEpGRTI5R0IwOVl5RGpFaEo2VTl3N2greWJuczV1SDdXdkZSRFVQSXB6cE1mT2Q1bGFlakhtRERRSjJrOGJhcVhMNGVxTmlTWFBWKy9iREFvPQ==",
    "_strSelector008": "WTNoTW0rWmJmbWtRb0gvRWZDQVpYSHFOMVhJOFBBc0dPQUhjTTRGMUh2M3ZqOVVsdkR2TjlQYVJESUhlZkV6Qi9PNGprZlFKVnR0RVZ3Si9udjhPSDhnVytRMlF5M1FXZUQrR1VtZXRMM0dQWm5JPQ==",
    "_strSelector009": "T08rdXR3aXpTMXpkOVFLODgvWUVXNWcwWkJVRVVYNUJGL1dxeW9heVVZR3F0K0ZzS0tpNWtVSnFVdldJVEV4VWdGS0JQNlA5cVhnemVJUU5pYy9GMmltcW9mVUZsOVVxY2EzaG00bTArWUNCSk5tWGtPU0NLdkRLNkJtNVpVQkZHUEZWbGhYdXZzcTRTdnZVQU1kbTRTST0=",
    "_strSelector010": "KzhKWWFNa1pyRC9jNDhnaU1YNCtWeDY2bm1jNDJ1dklzV1kveWdJZzNWZjMrZ3lkMmg1UDNMSEg1U2FhWDV5cHptNUFBUT09",
    "_strSelector011": "Q1NUOUZEWGdudG5xT0hRL0t1WEJXY0RiQTVFVVNPbEU3WjZkNTkzSjFZVjZkT25uaUkvbGR0anRoWG8vdHc2K2l4ZFprSTllQWNiaVBwaWVnU294UStlTm9UYVE0R3hoZm5FSkIwZ3hMeXQwWUdwUUE3Ykt2Y0p2ZkE9PQ==",
    "_strSelector012": "SHpJNFVtcVdHeUtkdVkwcGFlbjNldURmK2ppTDNBc3ZiWnRWcUZDbXRXbEdDNm9xdGNVajNVbVh6RlVJWjlKMC81MmxaNGRCRitzYWtvR1BNanhub3Rrb3dzYWVCb0xYbXFYTjVOeEp4TXplZ2RqbXl3PT0=",
    "_strSelector013": "cmY2U1h4TEhIZ2ZBV1NMeWcvZzdoaGR3N05yck9Jenp6d1EzcE80WDROY0Y0MkNoUjhiNytOU1RyM2Qvcks5cWZHdEF1OUtBR2hQaWpvTTk=",
    "string001": "aExlbFZSU0o5dWJBWkRvSHpDTTBTd0sxcldqVXpFajNIZmltMXpHMSsxUTZPSWR6WUE1MFlpRS9iQ1pWb0prZHowZXc5S2lv",
    "string002": "alhhYzc5Nm02MzAzTmZhK1BxOXhsdFRBT3ptOStSQ3I5enpYeTliTHA4Z2FOcmliWVhZSFhKOXhrSFV3ODZoazhqNEJheVlqRWZBZE42K2pwK1k9",
    "string003": "Mzg3UFAyUVRZcXdmQW14c0pONzRJYTRzL2dXMHdmU1QrYllCVFBJQlZxdUZSb3hqak92M2k2TTNxdGlHb2tMZE93PT0=",
    "string011": "V1EyZjBvNjhVYlFIUzNJTmxDNmlkUnJzTmptbk0rYi9MUVpaMDViU0tJdDBXTGgrTXltd3JGbG41bHdRU3RHaGl2aW9aSGc9",
    "string012": "K2tLN25YT2VHRW5aUlFzWHFFUGZGUlBWdFhnR1lrWDRBR1lEaXArZWlaSncwdk1FVUsrZDFRZ2ZlaFJtRHVaZGpBeGkzZz09",
    "string013": "MUQwSllCMkJtUEt4NkVOWk80S3J1YjIxZEZhZVZyUk1vNlZJbWU3QnZsb3V1bWIzMVRGUlN6QTA1ZXhLRnpMSTVpV0d2SUpRa1ZFPQ==",
    "string014": "bDlsOWlJY0VybzVWZndIL1J0aVZacDNNak56Z2J5QndROW4zOFVqdTRCN2tnWWZ2V3BCdHk2d2xpL2JxMTZKY0s4elI3aENiaGlSdWlTamJBSklE",
    "string015": "dHlTKzVHVVlabWE0dkVyWkJHQjhRWGkzcVVQSVdsZXpuZmlmam9JbGR1bllyWWNxK01lU3IwamVqTWVEdVlxN1BpdElRSEVWREt2azgvSzFsRmNZ",
    "string017": "MzdtM1BvZGNnb2dHQnhvNGF4L1RGS2wvU2xXTDUrS3hYQlBNNVNuUVR2YUovNDZoeGU3akVwL0xVajc3Z0VTR0N0UT0=",
    "string018": "KzNTTWtGYmgwQ1QzaUJjOWY0Z1BVK0FGU29KNk1EQWR4T3BTMyttZHRldkl3SkFIREJoNldGUktsSjkrUHg2VDJya2tnaldUQTdZPQ==",
    "string019": "Rm1yUlk1VlhhUTZIRUFvWi80NHJhYnZueG93cFMwTFQ0cHU1QlVBYlB6QmJ0WmVPQ0tXUXNrRkY3aU9FWU9oc0FPdkJOd2tOUU5DNEhzTVNBZz09",
    "string020": "THdyVmRjZ0JIbjNPNVF5UmxCV09tb1JZTzVYczFzOXJkdmhDZVFKUXlZVE9PRS9ra01Xa2prUGl6QVFuRmhIZ0h2cVhhQT09",
    "string021": "dFFqYW9IOE1Pc2h1anFjWlF5MVhRTi9EUFlEZFFwSmZQTUdMZnBoZlNheUtTKzJuN0NNaUtNS2NQYnNMdU1VSmoxZ1A2YlY4NFVta3d3PT0=",
    "string022": "c2tGaGgybE1oUHZabGZqd2QxZmZLU3VpSHhFMGF6cHRKK0Y2WnpYd3BtTlJjK2xXcTBpQzcvb0dqZ2pIM0k0czJmWGJZbjJMcVdMNGIzQnNpU1FzWWc9PQ==",
    "string023": "U2pqYzJmYitYa1ZYZC92Z1kzNlFudnZvZ1RsN0ZZTWV3eDJIaFl5RUR5WTFoK1pIc0Q2elJWMFZtMHA0c3cwOWxEcUpuSFhYK08zMjJ3PT0=",
    "string024": "MFFWemVnRlRjd3JDUnpSUEoxcmV3M0ZyNUx1dnc0ektWdWU0YkFhenJ0RElscVA0Vk9uV3dTUys5VTRjdHFHUWhDWTUreklBM3hKV01jZz0=",
    "_click": "RnNMNVNpSys0ZjdNaXVKQllhNVkxUkI5dm0yNGhBMmFxUnRoc1BBUmF6aFZSRGdXZXllc2Fzai8rM2FBTVdydEVVOU91b0E9",
    "_addEventListener": "VVJjcUhhZzV1OE5yNE9jSU1DZTVqZ3Rxb1ZtNmNzanVMdFdSZFJSbzA1MVpvMjN0Ynh5MFVYd0N5OUZ1dEVRRE5CT0p3aW5kUXVlWmhqUHRrU1RhTmc9PQ==",
    "_querySelector": "Q0xpc0lNbU04YnRSSm9ra0JyOUF0akdFM3lLb0Z2YjRGRXlLVGxrdmlKUFBTbXdRQTIyY1pXR0kyc0Zid1BkT3ZEcWN0VkppaVVEdUxzSE5zQT09",
    "_call": "NytlZXpUUjJzWWs4My9Od0s4VHRDWVp5NGp6LzlCSXU2RVhPYzkyN3JQUDQyZFdTTEp2SDZoSzNFVURNdml2dzR1aHFDQT09",
    "_forEach": "NFVOTlRBQmI5SlBqSmNJOTVsd29oMndIaGgwOFNiQmlsakZjRDdva1VMWDFhNHIvOVBqcnV0dXpHZGJlR2pWczg1blBrR1VERUE9PQ==",
    "_querySelectorAll": "bm1LOFQrOGMzOHhNN0FQbE5jVDJoSWxhc002eVRQREMxb1VFM1BwdndMNzNzbDJlZXM3cm8xUGhqd2FMTG1Qd1BkWHdTb2JxVnNQdnVNQXBpZWkxMFE9PQ==",
    "_match": "NWdmRWV6SnlRZlBMc01LSksweCtKTGJ6MkNpVldqazIwd0t4VTVtdlZJbmw1NmtKZy9TcXorUENnTHZ0RTIzb3UwNmthMzQ9",
    "_random": "VHQ5UC83aDF6NTNMKytaM01RMG41RENEVWUwMTV3cjQzTVg3eGgzdTlHajdSTjhKdnRkeXVDenpjeldpeE1LcXp2bGRNYStq",
    "_parse": "bEd1elk0UzhkeURlbXg1c0RFbUtwaXBua1NmWXRCRWovTE55QU9SOEVwdFNsZFhyRDRuWjJic2FPWHNTMHNHK0tBSkJFMHM9",
    "_log": "Vzl6dnRCTDVRZ1Bpb3JNRnZHcEcrQXBsZHpyckh0Sk9WMzZuWERzb2Y1NGpQcGp1eTQ0bk1QQnFucTkwZEtlS1NlNkQ=",
    "_duration": "TS9FL3pJWjRSM0N4b25WcmU4UThldTU2SWJyZnUyZXY3anZDL3Qrak1ZdkxzdTZXQ3RGZjFDTzFsek04VEs2VTZIRlE1WnNTZzU0PQ==",
    "_currentTime": "OVAwQmtZcEZ5TnhqVlRyT1V0TGNvTVBleVduNnYyQ2tUanc2YzliS2p0RUE5K081NmY2cGZQUnphekZ3WnRvRVBxVksvQ0VHRHQrYlRxbz0=",
    "_readyState": "L3NaOVNQU21MSzdWVENWNDBCVi8wNTVkOGJxN0x3RGMzM3g3UzFKZ1VvVjdqdmd4eXlsZERiRVRGaWJqZ2s3UTRqenJCR1o1V0VySWVnPT0=",
    "_innerText": "MDBGTmFuZm4veXpSa3k1QnhRM0FrWVVQbzcwaE5IdjBKd3lMUXRmRFVRMFZlQ00ySnI1Ukd3cnhHb2V1K2RYQXZ0M1dXU05ZUlhudQ==",
    "_muted": "RlZJY2s3enMvbDhmZWE3WU56dis0OVc4RXIyNWFqMWxWT0hWWHZkVWdYZmlzUHMxRGt6Q25ZNjFxbFowcmdqSDJSTzRXWGs9",
    "_style": "TFFXOEtQWXB5OVZ6Y0VGQXdCd2V5dG9lWHFQRlQ2bys2QmtOL3diTTVrdDhLRmlnVUVtdTNZbmtrUGVabEp4M2xkN2dldXc9",
    "_height": "OEhVUnZaT0F4Y2dtV1ptSnpBNm1GMHFTbHEvc2RnejJ5N3NlV3NONjM5aEpKeEpxcW9VVmhoT3BBLytuRjNlNzdRWi9aSlpV",
    "_width": "RXoxSWo5bWlxS0ZjRVg2OHpzeGM1NkRrbHpLRitLNXJFQjBnTytLbTJjUmFVK0x1YmREaVd0UE9lWkxLUjNnK2JXZnVJdlk9",
    "_document": "bVp6TXlJZUJ2b2d3a0cxU2hIWlJ5RzVUN1NPTm1nVFJMSE1HRTVwc01oSE9EVHdxNVBJOVYvcUZoWGhZaFRMMTQ5VW1qRlVaN1NnPQ==",
    "_opacity": "eENCYm1yWmpZdThYT3hjbGxLdGJsK1BzeWNSc1FMczJRV1lzNHp5T28vQkt1MERodkxoZjVGRzhINnkvSUpMOEEwaS8xU1dSelE9PQ==",
    "_console": "RGZSZTlWSjZ0Q2F0TGRiVHhUR3dPMWs0K2pyQ3VTZmxKNHpXUUVEbkliSzBlNmVlUEF6RExBV1Jkb0t5bE02cGNhdE1peDkzU2c9PQ==",
    "_Promise": "UjB6NVJxb0FRWDlTRWw4bjFreEVYT2dHaU5jUk5IbzJyZUduNkRmVzliQ3dBelNJc3VtaUJoK21iNlVhWXRJZE1KVkFuKzNZWGc9PQ==",
    "_RegExp": "VzNvWjVPMDRrMEZ5N0UrcldNenJodUZWUG9TNU95QVpKWWlIaFFIU291Sll1VmpEeU5iYUhVQk9TNXhoMnROTThRcVY2eHlF",
    "_Math": "bzBwc1BGY2ZCZFdMcU80UmlBV0V6V2ZQcGJEWmhNekNncnBXWFFWNUFwaTZkdlBFdzNMczE5TDVoZXM2WFgwcnA2SUFnUT09",
    "_JSON": "ZnJzUzlGQkkyWXQzeHRsY1oyM3l3TCtNUEpwcTlkSTdEOHZ0d2J0ZFhXbDVMazEvL1FJOXorMzk1WG9wM2pjUFRZNUFDdz09",
    "_clearInterval": "WjlyZnVaZ2hrWnRhWGREQlhJOGM2L0pTL25vZ2JSRDFFK1padVlEN25FQTFOYUVPUkdpWEZyVHhHdlJhWHI4VnNRNWlZSXBEMGFSM2xwWlo5Zz09",
    "_setTimeout": "ZHZjVng5VTF0YWNYZ0IzY0EzRU1qbEdaREsxSGhWYllWVUFDaWl3SjZnZG9FMll2N0Y5ZTZQdVlCUExaQXJ4a0xpa0tGUHlLajNMRUxBPT0=",
    "_parseInt": "SXJCVUxwQjkyS0wzZnp4ZXVIVGZuVFpPRldSV1RVSUxvZER6aU9TWTJhcHZKR3I1K3ZLL2JJaDFXRVlrOHFZMit0YTErbVBOSE5RPQ==",
    "_setInterval": "VGpvTys5Nko0dGx6aVhzOTZoVjNYSzZGN3dReVNDcEdLUzVWV1ZSdENadkpUVE1WODEvRlloTkg4TEZRK2xQQlFWcGFLbTlqU292L3lUcz0=",
    "_number0": "bkI3NUMvVDB1TlF6L2EyczdTTkw4OW94cWZBWFJmRFZ3VElucmdmVm5JVTRHclJ4bE1RdnNVbW52VHhKbUNVU2RnPT0=",
    "_number1": "MHlqcXFtWDU1WDdEV1FRam5JMXQzaVpDNmtickNNN0NyTjRLWHl3K2FOVnR3L0J4d1o2Rk13OEJJQWptSXdDYjlBPT0=",
    "_number2": "SnpSTnZuTVhtYXA0N0R4c3NmbUxpeWgxZ3dEblFUcjk3S3BLZ2ZrbmtSYWpuT2lOcFFvMERNa2hiR1huU2dKKzdRPT0=",
    "_number3": "ekRta25xRWU1RnJVNlY3eGVoMGNWVC9RUWJybVMzZ3RxK1BLUS9kQXZsM3pMK1VXVUJuT21scTVIenpxMnV4NXV3PT0=",
    "_number4": "UENSS3BNT1JYc0xNWHR0RHJ0SDVOSmlQQmhLOVVJUkMvL01SeVpOV0JEUGhRbFBWdnVjd2t5NTZOSFFpSXg4cnhnPT0=",
    "_number5": "VWltakhCeTYzYnhDK3VKWHJodDRsRm5nT0Vld3g2MlVWRDEyeFkzeGtOcllaY3ZxMThkWVU3VitwSzlJbE5UMU1RPT0=",
    "_number6": "MlpLZFpsQXc5bHVWM3lOR2FPdWpKK3hmeHRrOG1hYmJTNktjZmp0KzFBdVJxb2ZWNVI2Sy96S0RtSUQvc3hGVVZBPT0=",
    "_number7": "b3pXbXRKejhSMUZtZk9tSlJicUkwVnZibHp3REp5eVRyVnlQWXhxVEJ4RU9WOG10YURlZDdWVEFKSlV2b3V0SXF3PT0=",
    "_number8": "RThBdm95NzYvRE1odGdjaE4zYUE0d1IyM3pKWkc4SWFlak00Z1draEswbEVicVBLenVCK3M1Mk1KZWhPRzdpWE53PT0=",
    "_number9": "KzFocHByaEhNblg5T3VXTjZKaUdkL2U3cGYzbHdSNzBiRVJpOVM5K1RGK0tHbS95Q2dKVVBHRXY1M1ZzaDZDWGFnPT0=",
    "_number10": "ZjU4Uk9neDZvQm9UeGFCU2tkNkFhaytjN3E4RHdvb1BNSm55VGx6MFRmYUl0ZStpUkVmVENadmhNc2M5Q1pUT01iYz0=",
    "_number23": "SUJIMTZlQXFMQmdFc1plOUM1MnluTFpDZXpMR3VJMVBBYnFLVHVSYnptRFo3MlErK0QvbW10WVd4VXYxcUZiaDFkVT0=",
    "_number30": "cFp2bWRkOFdaRjBCU2lmZWpUcHFBZlVDblFKMTBMbFhVWGMwL1B1cGNGTDJlYktwam5XeU9KY3lhNnpjOXNnTm1POD0=",
    "_number123": "WkpLSldPVHo1RndaWTQ2OThQSDhCVlpDVTJYbUxVdEFYc3RjaitjQkdaWUUxS0pCNzFtNHJaTzJqL21pb2VQY3FVeWc=",
    "_number187": "aWF6RW9yMktFM2xUUEovN2lyQ0IzMnRENjRZL1hya1JMOUx0M1BtVzZxcUZYYy9ZVTVheTJiWnE1OXA0eUZZT1BuOEo=",
    "_number233": "SHRFNS9pcDMwVTJ3a2RzcUhqZEJaK1oyOHY4cXl3UGRUaHE3UlF1TktoaWJvK1hDS3B2dmhDdGVadG5RTUtmck1BU2o=",
    "_number287": "TmdhVnZTUlM2d3lEODVtSlk0aTZxb210MkNxNUlCSWdTejVCWVBLM0VFb0NuTU5KMEdsT080OXlrSlNCYzFwWG9lc2c=",
    "_number323": "RkdDcWYvb3VqKy9ubzd3RlBURDZVUlByK3JwUUZRemZsMXkxWlZQZHRFTFNmRDhzMGU2Y20rb1VZWjRJRzh1TElGcTk=",
    "_number387": "Wm5SbjI4OWJ0YldHRXJtOWlvYnZrTWFtT2xDeUpSVG13QjY0MG9jczZBWWZGZHZDUDdCYW4wTVFueGE2ZTlhNUF1VG0=",
    "_number666": 'RXBsbmpNM05hRndqaXVqbW02cHlVNWgwSCtyTE10bDRtYnBDb3pSbDIxQ2dZVysyRHZsK2piem9jRnkwaWhmbUF0VUs=',
    "_number777": "ak45dWxEend1dHdqUVJzTmE0dUpqOUx5S0VxMGV0b3dJQld6R3I0Y2J4cjJFTGNRTWMxSk84VXM3QU1NWVNQYUhBQ3g=",
    "_number888": "SGp2M3l3eEllc3lIUElhMUNmM1NiUjJNUXY1WWl6R2ZhRmNTNGtacFloakUzNjRXZy84eUdwVE5DZm1IdXozdUNHV1I=",
    "_number1987": "UVNVa2MzdmpPUHJhekcwWng0U3g5d2ZLSS9QVXJEL1FZTTYxVlBlTEVlQkt0K0lZWHg4ME13RUR6eEl3MEtyWjZXOXI0QT09",
    "_number14750": "Wk9tajVZcHJoUXBlWUducHoyT0tza2psSVVKUmIwRkpFUUhZdTc4MzhvYVB6eE9YSE1HbXVYRlBXRDAvMDB4OEs3L1N2VlE9",
    "_number15250": "M1E1Ylo3U2RnU0hSOXN1bXJxN0dqdS9QUVhmbXEyR0J4Wkg5YzdzY2ZmeVA2anNETjNRY09IaStwa2l1RVZ1aS8wQjBwMkE9",
    "_true": "YWpPYXlQR3E4bkFrbkpVN1M3MkdUd2xuZEJrTXFNOVlZWWp4SHBCdlhtdmxJL2R3am96KzVUOEsyK1ZXY2pWQnRnN1MxQT09",
    "_false": "RW5nd1BKaUFzNlZra3BwSFcvTmcra0ExMzZqRG5uSXpORjdsV2FwV2F1K2pEMmNjaXQxV2w1cHZIajBRMlVUTlFqakpGR2s9",
    "_null": "aGxMRElmazI2Sk9ja1MySTlvMG9nYTFsT3NobEFWdEdNSUlCN3ByUnhnRHRQdzE0dUpORFFlNGhMQU9sYlVmemo2R2RDQT09"
  };

  const myDeciph = await decipher(saltKey());

  window[window[___atob()]('Y29uc29sZQ==')][window[___atob()]('bG9n')](window[___atob()]('ZGVjcnlwdGluZy4uLg=='));

  const _atob = await myDeciph(window[___atob()]([encryptedStrings._atob][0]));
  const _parseInt = await myDeciph(window[_atob]([encryptedStrings._parseInt][0]));
  const _number0 = window[_parseInt](await myDeciph(window[_atob]([encryptedStrings._number0][0])));

  const _clearInterval = await myDeciph(window[_atob]([encryptedStrings._clearInterval][_number0]));
  const _setTimeout = await myDeciph(window[_atob]([encryptedStrings._setTimeout][_number0]));
  const _setInterval = await myDeciph(window[_atob]([encryptedStrings._setInterval][_number0]));

  const _number1 = window[_parseInt](await myDeciph(window[_atob]([encryptedStrings._number1][_number0])));
  const _number2 = window[_parseInt](await myDeciph(window[_atob]([encryptedStrings._number2][_number0])));
  const _number3 = window[_parseInt](await myDeciph(window[_atob]([encryptedStrings._number3][_number0])));
  const _number23 = window[_parseInt](await myDeciph(window[_atob]([encryptedStrings._number23][_number0])));
  const _number30 = window[_parseInt](await myDeciph(window[_atob]([encryptedStrings._number30][_number0])));
  const _number123 = window[_parseInt](await myDeciph(window[_atob]([encryptedStrings._number123][_number0])));
  const _number187 = window[_parseInt](await myDeciph(window[_atob]([encryptedStrings._number187][_number0])));
  const _number233 = window[_parseInt](await myDeciph(window[_atob]([encryptedStrings._number233][_number0])));
  const _number287 = window[_parseInt](await myDeciph(window[_atob]([encryptedStrings._number287][_number0])));
  const _number323 = window[_parseInt](await myDeciph(window[_atob]([encryptedStrings._number323][_number0])));
  const _number387 = window[_parseInt](await myDeciph(window[_atob]([encryptedStrings._number387][_number0])));
  const _number666 = window[_parseInt](await myDeciph(window[_atob]([encryptedStrings._number666][_number0])));
  const _number777 = window[_parseInt](await myDeciph(window[_atob]([encryptedStrings._number777][_number0])));
  const _number888 = window[_parseInt](await myDeciph(window[_atob]([encryptedStrings._number888][_number0])));
  const _number1987 = window[_parseInt](await myDeciph(window[_atob]([encryptedStrings._number1987][_number0])));
  const _number14750 = window[_parseInt](await myDeciph(window[_atob]([encryptedStrings._number14750][_number0])));
  const _number15250 = window[_parseInt](await myDeciph(window[_atob]([encryptedStrings._number15250][_number0])));

  const _Promise = await myDeciph(window[_atob]([encryptedStrings._Promise][_number0]));
  const _RegExp = await myDeciph(window[_atob]([encryptedStrings._RegExp][_number0]));
  const _Math = await myDeciph(window[_atob]([encryptedStrings._Math][_number0]));
  const _JSON = await myDeciph(window[_atob]([encryptedStrings._JSON][_number0]));

  const _strSelector001 = await myDeciph(window[_atob]([encryptedStrings._strSelector001][_number0]));
  const _strSelector002 = await myDeciph(window[_atob]([encryptedStrings._strSelector002][_number0]));
  const _strSelector003 = await myDeciph(window[_atob]([encryptedStrings._strSelector003][_number0]));
  const _strSelector004 = await myDeciph(window[_atob]([encryptedStrings._strSelector004][_number0]));
  const _strSelector005 = await myDeciph(window[_atob]([encryptedStrings._strSelector005][_number0]));
  const _strSelector006 = await myDeciph(window[_atob]([encryptedStrings._strSelector006][_number0]));
  const _strSelector007 = await myDeciph(window[_atob]([encryptedStrings._strSelector007][_number0]));
  const _strSelector008 = await myDeciph(window[_atob]([encryptedStrings._strSelector008][_number0]));
  const _strSelector009 = await myDeciph(window[_atob]([encryptedStrings._strSelector009][_number0]));
  const _strSelector010 = await myDeciph(window[_atob]([encryptedStrings._strSelector010][_number0]));
  const _strSelector011 = await myDeciph(window[_atob]([encryptedStrings._strSelector011][_number0]));
  const _strSelector012 = await myDeciph(window[_atob]([encryptedStrings._strSelector012][_number0]));
  const _strSelector013 = await myDeciph(window[_atob]([encryptedStrings._strSelector013][_number0]));

  const string001 = await myDeciph(window[_atob]([encryptedStrings.string001][_number0]));
  const string002 = await myDeciph(window[_atob]([encryptedStrings.string002][_number0]));
  const string003 = await myDeciph(window[_atob]([encryptedStrings.string003][_number0]));
  const string011 = await myDeciph(window[_atob]([encryptedStrings.string011][_number0]));
  const string012 = await myDeciph(window[_atob]([encryptedStrings.string012][_number0]));
  const string013 = await myDeciph(window[_atob]([encryptedStrings.string013][_number0]));
  const string014 = await myDeciph(window[_atob]([encryptedStrings.string014][_number0]));
  const string015 = await myDeciph(window[_atob]([encryptedStrings.string015][_number0]));
  // const string016 = await myDeciph(window[_atob]([encryptedStrings.string016][_number0]));
  const string017 = await myDeciph(window[_atob]([encryptedStrings.string017][_number0]));
  const string018 = await myDeciph(window[_atob]([encryptedStrings.string018][_number0]));
  const string019 = await myDeciph(window[_atob]([encryptedStrings.string019][_number0]));
  const string020 = await myDeciph(window[_atob]([encryptedStrings.string020][_number0]));
  const string021 = await myDeciph(window[_atob]([encryptedStrings.string021][_number0]));
  const string022 = await myDeciph(window[_atob]([encryptedStrings.string022][_number0]));
  const string023 = await myDeciph(window[_atob]([encryptedStrings.string023][_number0]));
  const string024 = await myDeciph(window[_atob]([encryptedStrings.string024][_number0]));

  const _click = await myDeciph(window[_atob]([encryptedStrings._click][_number0]));

  const _addEventListener = await myDeciph(window[_atob]([encryptedStrings._addEventListener][_number0]));
  const _querySelector = await myDeciph(window[_atob]([encryptedStrings._querySelector][_number0]));
  const _call = await myDeciph(window[_atob]([encryptedStrings._call][_number0]));
  const _forEach = await myDeciph(window[_atob]([encryptedStrings._forEach][_number0]));
  const _querySelectorAll = await myDeciph(window[_atob]([encryptedStrings._querySelectorAll][_number0]));
  const _match = await myDeciph(window[_atob]([encryptedStrings._match][_number0]));
  const _random = await myDeciph(window[_atob]([encryptedStrings._random][_number0]));
  const _parse = await myDeciph(window[_atob]([encryptedStrings._parse][_number0]));
  const _log = await myDeciph(window[_atob]([encryptedStrings._log][_number0]));

  const _duration = await myDeciph(window[_atob]([encryptedStrings._duration][_number0]));
  const _currentTime = await myDeciph(window[_atob]([encryptedStrings._currentTime][_number0]));
  const _readyState = await myDeciph(window[_atob]([encryptedStrings._readyState][_number0]));
  const _innerText = await myDeciph(window[_atob]([encryptedStrings._innerText][_number0]));
  const _muted = await myDeciph(window[_atob]([encryptedStrings._muted][_number0]));
  const _style = await myDeciph(window[_atob]([encryptedStrings._style][_number0]));
  const _height = await myDeciph(window[_atob]([encryptedStrings._height][_number0]));
  const _width = await myDeciph(window[_atob]([encryptedStrings._width][_number0]));
  const _document = await myDeciph(window[_atob]([encryptedStrings._document][_number0]));
  const _opacity = await myDeciph(window[_atob]([encryptedStrings._opacity][_number0]));
  const _console = await myDeciph(window[_atob]([encryptedStrings._console][_number0]));

  const _null = window[_JSON][_parse](await myDeciph(window[_atob]([encryptedStrings._null][_number0])));
  const _true = window[_JSON][_parse](await myDeciph(window[_atob]([encryptedStrings._true][_number0])));
  const _false = window[_JSON][_parse](await myDeciph(window[_atob]([encryptedStrings._false][_number0])));

  window[_console][_log](string024);

  const regExpSkip = new window[_RegExp](string001, string003);
  const regExpNextEpisode = new window[_RegExp](string002, string003);

  let interval = _null;

  let clickedNext = _false;
  let isResumingEpisode = _false;
  let isTvShow = _false;
  let isWatching = _false;
  let isWaitingNext = _false;
  let closeHasClickEvt = _false;

  let tmpCounter = _number0;

  const addEventClick = async () => {
    muteVideos(); hideVideos();
    window[_console][_log](string018);
    window[_clearInterval](interval);
    await sleep(_number1987);
    interval = _null;
    isResumingEpisode = _true;
    clickedNext = _false;
    isWatching = _true;
    executeIntervalCheck();
    await sleep(_number1987);

    if (!closeHasClickEvt) {
      closeHasClickEvt = _true;
      window[_document][_querySelector](_strSelector005)[_addEventListener](_click, () => {
        muteVideos(); hideVideos();
        isResumingEpisode = _false;
        isWatching = _false;
        isWaitingNext = _false;
        window[_clearInterval](interval);
        interval = _null;
        window[_console][_log](string019);
      });
    }
  }

  window[_document][_querySelector](_strSelector006)[_addEventListener](_click, function () {
    addEventClick();
    window[_console][_log](
      window[_document]
      [_querySelector](_strSelector011)
      [_querySelectorAll](_strSelector010)
      [_number1][_innerText]
    );
  });

  [][_forEach][_call](window[_document][_querySelectorAll](_strSelector001), (e, i) => {
    isTvShow = _true;
    e[_addEventListener](_click, function () {
      // window[_console][_log](
      //   e[_querySelector()](
      //     myDeciph('6e51544154185440415a5854415c5a5b185c516b0817504518415c4159501850455c465a5150461768')
      //   )[_innerText()]
      // );
      addEventClick();
    });
  });

  // window[_document][_querySelector](_strSelector004)[_addEventListener](_click, async () => {
  //     console[_log]('pause');
  // });

  function sleep(ms = "") {
    if (ms === "") { ms = _number1; }
    return new window[_Promise](resolve => window[_setTimeout](resolve, ms));
  }

  function getRandomArbitrary(min, max) {
    return window[_parseInt](window[_Math][_random]() * (max - min) + min);
  }

  function muteVideos(mute = "") {
    if (mute === "") { mute = _true; }
    window[_document][_querySelectorAll](_strSelector013)[_forEach](item => {
      item[_muted] = mute;
    });
  }

  function hideVideos(s = "") {
    if (s === "") { s = string017; }
    window[_document][_querySelectorAll](string011)[_forEach](item => {
      item[_style][_opacity] = s;
    });
  }

  function executeIntervalCheck() {
    interval = window[_setInterval](async () => {
      if (isWatching) {
        let skipNext = window[_document][_querySelector](_strSelector002) || window[_document][_querySelector](_strSelector009);
        // let skipRecap = ()=>window[_document][_querySelector](_strSelector007);
        let next = () => window[_document][_querySelector](_strSelector003);
        let playPause = () => window[_document][_querySelector](_strSelector004);
        let video = () => window[_document][_querySelectorAll](string011)[_number0];
        let timeIndicator = () => window[_document][_querySelector](_strSelector008);
        let adTimeIndicator = () => window[_document][_querySelector](_strSelector012);

        if (video()[_readyState] <= _number3 || !timeIndicator()) {
          muteVideos(); hideVideos();
        }

        if (timeIndicator()) {
          muteVideos(_false); hideVideos(string012);
        }

        if (!next() && video()[_currentTime] >= _number123) {
          window[_clearInterval](interval);
          isWaitingNext = _false; isResumingEpisode = _false; clickedNext = _false;
          executeIntervalCheck();
          return;
        }

        if (!next() && video()[_duration] - video()[_currentTime] <= 16) {
          window[_clearInterval](interval);
          return;
        }

        if (next() && !isWaitingNext && !clickedNext) {
          window[_clearInterval](interval);
          window[_console][_log](string014);
          // window[_console][_log](next());
          isWaitingNext = _true; clickedNext = _false; isResumingEpisode = _false;
          tmpCounter = _number0;
          window[_console][_log]('Next : ' + next()[_innerText]);
          await sleep(_number1987);
          executeIntervalCheck();
          return;
        }

        if (next() && isWaitingNext && !clickedNext) {
          if (video()[_duration] - video()[_currentTime] <= _number23 && !clickedNext) {
            window[_clearInterval](interval);
            window[_console][_log](string022);
            await sleep(_number777 + getRandomArbitrary(_number0, _number30) - _number23);
            muteVideos(); hideVideos();
            next().focus();
            await sleep(_number23);
            next()[_click]();
            window[_console][_log](`${string020} ${next()[_innerText]}`);
            clickedNext = _true;
            await sleep(_number1987 + getRandomArbitrary(_number233, _number323));
            await sleep(_number387);
            // window[_console][_log]("isWaitingNext:", isWaitingNext);
            // window[_console][_log]("clickedNext:", clickedNext);
            // window[_console][_log]("isResumingEpisode:", isResumingEpisode);
            executeIntervalCheck();
            return;
          } else {
            let c = window[_parseInt](video()[_duration] - video()[_currentTime]);
            if (c < tmpCounter || tmpCounter === _number0) {
              tmpCounter = c;
              window[_console][_log](`remaining : ${c} seconds`);
            }
            return;
          }
        }

        if ((isWaitingNext || isResumingEpisode || clickedNext) && skipNext[_innerText][_match](regExpSkip) && !next()) {
          window[_clearInterval](interval);
          window[_console][_log](string023);
          // window[_console][_log](skipNext);
          muteVideos(); hideVideos();
          isWaitingNext = _false; isResumingEpisode = _false; clickedNext = _false;
          await sleep(_number1987 + getRandomArbitrary(_number323, _number387));
          // await sleep(_number777);
          await sleep(_number777 + getRandomArbitrary(_number187, _number387) - _number23);
          skipNext.focus();
          await sleep(_number23);
          skipNext[_click]();
          window[_console][_log](string015);
          muteVideos(_false); hideVideos(string012);
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
})();

/*
//Obfuscated
//Use only obfuscated code in production
function _0x36e8(_0x4038b2,_0x2219e5){const _0x2dc186=_0xa36d();return _0x36e8=function(_0x1e4f8a,_0x22b524){_0x1e4f8a=_0x1e4f8a-(-0x6b*0x27+-0x9fa*-0x2+-0x279*0x1);let _0x37ed2c=_0x2dc186[_0x1e4f8a];if(_0x36e8['fHbNSE']===undefined){var _0x35f5be=function(_0x2a7d1c){const _0x5c6d69='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x24db57='',_0x41ecf5='',_0x337a04=_0x24db57+_0x35f5be;for(let _0x4ae1d7=0x1*-0x29a+0x1bfc+-0x1962,_0x1d7b68,_0x5b244b,_0x1e2a40=-0x7d7+0x5ba+0x21d*0x1;_0x5b244b=_0x2a7d1c['charAt'](_0x1e2a40++);~_0x5b244b&&(_0x1d7b68=_0x4ae1d7%(-0x10*0xc5+-0x581*0x1+0x11d5)?_0x1d7b68*(-0x1f8b+-0x1867+-0x2*-0x1c19)+_0x5b244b:_0x5b244b,_0x4ae1d7++%(-0x3e7*0x2+0xc7a+0x4*-0x12a))?_0x24db57+=_0x337a04['charCodeAt'](_0x1e2a40+(0x56*0xc+-0x23c5+0x1fc7))-(0x634+0xf11+-0x153b)!==0x24d5+0x4a3*-0x8+-0x43*-0x1?String['fromCharCode'](0x6fa+-0x2*-0x46c+-0xed3&_0x1d7b68>>(-(-0x1*0x16e5+0x205d+0xad*-0xe)*_0x4ae1d7&-0x1695+-0x22f8+0x121*0x33)):_0x4ae1d7:-0x1*-0x13fc+-0x1bfc+0x800){_0x5b244b=_0x5c6d69['indexOf'](_0x5b244b);}for(let _0x28c150=0x44b+-0x18ac+0x1461,_0x37cfde=_0x24db57['length'];_0x28c150<_0x37cfde;_0x28c150++){_0x41ecf5+='%'+('00'+_0x24db57['charCodeAt'](_0x28c150)['toString'](-0xfea+0xff*-0xd+0x1ced*0x1))['slice'](-(-0x2281+-0x18b+-0x240e*-0x1));}return decodeURIComponent(_0x41ecf5);};const _0x4cec52=function(_0x4c2d9a,_0x443ffa){let _0x501855=[],_0x45e295=-0x20da+-0x1a59*0x1+0x3b33,_0x3c3273,_0x461fe1='';_0x4c2d9a=_0x35f5be(_0x4c2d9a);let _0x5ab9d7;for(_0x5ab9d7=0xb*-0x38a+0x426+0x22c8;_0x5ab9d7<0x605+0x1*-0x11b9+0xcb4;_0x5ab9d7++){_0x501855[_0x5ab9d7]=_0x5ab9d7;}for(_0x5ab9d7=-0x1638+-0x251d+0x3b55;_0x5ab9d7<-0x1*0x151+0x214d+0xa54*-0x3;_0x5ab9d7++){_0x45e295=(_0x45e295+_0x501855[_0x5ab9d7]+_0x443ffa['charCodeAt'](_0x5ab9d7%_0x443ffa['length']))%(-0x2453+0x2b7+0x6ec*0x5),_0x3c3273=_0x501855[_0x5ab9d7],_0x501855[_0x5ab9d7]=_0x501855[_0x45e295],_0x501855[_0x45e295]=_0x3c3273;}_0x5ab9d7=0xa6*0x3+-0x8c4+0x6d2,_0x45e295=0x16f*0x17+0x4a9*-0x5+-0x9ac;for(let _0x5f4fb7=-0x16cc+-0x3*0x147+0x1aa1;_0x5f4fb7<_0x4c2d9a['length'];_0x5f4fb7++){_0x5ab9d7=(_0x5ab9d7+(-0x1354+0x16*-0x147+0x2f6f*0x1))%(-0x2e4*0xd+0x155d+-0x27*-0x71),_0x45e295=(_0x45e295+_0x501855[_0x5ab9d7])%(0x1a4d+-0x76*0xb+-0x143b),_0x3c3273=_0x501855[_0x5ab9d7],_0x501855[_0x5ab9d7]=_0x501855[_0x45e295],_0x501855[_0x45e295]=_0x3c3273,_0x461fe1+=String['fromCharCode'](_0x4c2d9a['charCodeAt'](_0x5f4fb7)^_0x501855[(_0x501855[_0x5ab9d7]+_0x501855[_0x45e295])%(0x13*0x1ee+-0x1*-0x2a1+-0x264b)]);}return _0x461fe1;};_0x36e8['wCjjlw']=_0x4cec52,_0x4038b2=arguments,_0x36e8['fHbNSE']=!![];}const _0x254699=_0x2dc186[0x25b+0x9*0xd9+-0x9fc],_0x3402f7=_0x1e4f8a+_0x254699,_0x71d4ad=_0x4038b2[_0x3402f7];if(!_0x71d4ad){if(_0x36e8['hNgzCB']===undefined){const _0x5ab536=function(_0x460a2b){this['VVXycV']=_0x460a2b,this['JVsjdq']=[-0x1c0b+0x2140+-0x534,-0x2355+-0x2d4*-0x4+0x1805,0x23ca+0x907+-0x2cd1],this['IlbStj']=function(){return'newState';},this['ERxKme']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['ZQFDeA']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x5ab536['prototype']['cVycYk']=function(){const _0x458ffd=new RegExp(this['ERxKme']+this['ZQFDeA']),_0x4082d6=_0x458ffd['test'](this['IlbStj']['toString']())?--this['JVsjdq'][0x26a7+0x2a2+-0x1*0x2948]:--this['JVsjdq'][0x21c3+0x56*0x11+-0x2779];return this['FEPXeB'](_0x4082d6);},_0x5ab536['prototype']['FEPXeB']=function(_0x4990b5){if(!Boolean(~_0x4990b5))return _0x4990b5;return this['ENzPCI'](this['VVXycV']);},_0x5ab536['prototype']['ENzPCI']=function(_0x128693){for(let _0x36f9bc=0x1*0x838+0x9f+-0x8d7,_0x339e0f=this['JVsjdq']['length'];_0x36f9bc<_0x339e0f;_0x36f9bc++){this['JVsjdq']['push'](Math['round'](Math['random']())),_0x339e0f=this['JVsjdq']['length'];}return _0x128693(this['JVsjdq'][0x1*-0x673+0x121f*-0x1+0xc49*0x2]);},new _0x5ab536(_0x36e8)['cVycYk'](),_0x36e8['hNgzCB']=!![];}_0x37ed2c=_0x36e8['wCjjlw'](_0x37ed2c,_0x22b524),_0x4038b2[_0x3402f7]=_0x37ed2c;}else _0x37ed2c=_0x71d4ad;return _0x37ed2c;},_0x36e8(_0x4038b2,_0x2219e5);}function _0x108799(_0x190e9b,_0x4ec428){const _0x2420a9={_0x396ea0:0xa1};return _0x36e8(_0x4ec428- -_0x2420a9._0x396ea0,_0x190e9b);}(function(_0x45f509,_0x38bc4b){const _0x3a86ff={_0x4076fe:0x6f0,_0x2ea1a7:0xd7,_0x29a1c3:'DD7(',_0x274a87:'Blz2',_0x4371ef:0x5d9,_0x1e6810:'])Dy',_0x4974ff:']]y@',_0x35b93f:0x6a6,_0x1f13cc:'Pdos',_0x113aa6:0xa22},_0x4088d8={_0x358f22:0x110};function _0xca2283(_0x4c7c91,_0x42659a){return _0x36e8(_0x42659a- -_0x4088d8._0x358f22,_0x4c7c91);}const _0x598b7f=_0x45f509();while(!![]){try{const _0x5bd26b=-parseInt(_0xca2283('Es)Y',_0x3a86ff._0x4076fe))/(0xa62+-0xdd2+0x371)+parseInt(_0xca2283('ezeI',_0x3a86ff._0x2ea1a7))/(-0x4f*-0x5+-0x1*0x89+-0x100)+-parseInt(_0xca2283(_0x3a86ff._0x29a1c3,0x49))/(0x258a+-0xc53+0x1*-0x1934)+-parseInt(_0xca2283(_0x3a86ff._0x274a87,_0x3a86ff._0x4371ef))/(0x3*0x4de+-0x1e88+0xff2)+parseInt(_0xca2283(_0x3a86ff._0x1e6810,0xc41))/(0xbb*0x1f+0x4*-0x5d9+0x31*0x4)+parseInt(_0xca2283(_0x3a86ff._0x4974ff,_0x3a86ff._0x35b93f))/(0x142b+-0x2*-0x9a9+-0x2777)+parseInt(_0xca2283(_0x3a86ff._0x1f13cc,_0x3a86ff._0x113aa6))/(-0x67e*0x4+-0x16be+-0x30bd*-0x1);if(_0x5bd26b===_0x38bc4b)break;else _0x598b7f['push'](_0x598b7f['shift']());}catch(_0x12d4e6){_0x598b7f['push'](_0x598b7f['shift']());}}}(_0xa36d,0x1929a+0x6b247+-0x1*0xeef2));function _0xa36d(){const _0x2ae083=['WQdcLCoe','WQO3kW','jCo5W4G','WONcPCkQ','aSofnq','W50GdW','W7bAWOa','W5iuWQ0','rCowuG','s8oEsq','W7HNWPG','uJRcGG','ytf4','jSkMBq','W787WRq','j03dPa','W5iVDW','WPu9W6q','W6nfqa','vdiO','W48gxa','F8kCnq','WPK7W5G','e8kIAW','hfS7','W7pdQ2S','WPNdSmoL','WRbKW5BdU8oQx03dUSopbmoLo3y','nSoMW4i','W7qMWOa','t8kyva','q8k8Cq','W6jeAG','WQ9AWRq','W7q6ha','BJFcGW','wdqv','WP1yW4m','WOVcMSkH','WRlcJfK','cmoBW7e','W6BdLM8','W43cKcC','WOJcSxe','FSkWmG','ESkJhq','W78kkq','gCokyW','xX8h','WPtcOCo3','WRj4wa','WPtdV8ki','nmoLW64','W61KWOa','DSo6xa','WPT3W74','W6anza','WP3dSmo9','wvRcTW','wHed','W4xdM04','oWNdOq','WRWxWOC','W4hdMx0','vWpdVa','p30K','W7iOva','W7uruq','uSk7WQO','x8kQha','WRRcR34','tfq4','W5ntga','WP0IW7C','p3FcRq','WQOzpG','WR9tFG','DuFdVq','FZFdQG','f8oeAq','WR5uWR0','WOPMWP4','WPrGW4W','W6uXW40','mYBdOa','WPfHWRW','uSorfq','W7NcSWS','vHhcMW','p0BcJG','eCooW4O','WR42W60','W69ZWO4','bSkdma','WQyxW78','o8onqW','mmkEva','uCksWPa','DZW5','WQmapq','W68blW','yIpdMa','luKx','m2lcIa','W4tdKCkS','W7RcQJ0','W41NWPW','W43cQbK','wGfq','WP0WjW','obrh','W5aJWO4','WQrCWQy','W4i+W5i','W5ldVLe','W7mrpW','WP9tWP8','W6xcKva','gmkzqa','WOfMWQi','vLvT','xI3cJG','edRdIa','WP1KxG','Cb3dQW','zSkzgG','f3/cPq','WP5iqG','W5fTWRa','Dfay','WPWZsq','W5e7WRy','WO4FWQ0','khFdUW','zCkdWOC','W4igsG','W6ukWPO','bCkyAG','WOfCW7q','bhddMG','W7TBW7K','lgVcTW','eCoLW4m',


[clipped...]


(0x1be, _0xc8f537._0x261bbf) + 'ZZ'](_0x4689e1, _0x49254a, _0x1dffb7))); continue;case '3': _0x3615ea['eWk' + 'VO'](_0x5ec4b7); continue;case '4': return;case '5': _0x3615ea[_0x41e774(_0xc8f537._0x10a5e3, _0xc8f537._0x2758af) + 'Ol'](_0x5951ae)['foc' + 'us'](); continue;case '6': _0x266e59 = _0x55f69d; continue;case '7': await _0x3615ea[_0x41e774(_0xc8f537._0xf5811b, _0xc8f537._0x53dac0) + 'oC'](_0x46d677, _0x4d5604); continue;case '8': window[_0xfbbcb9](_0x5f0c2a); continue;case '9': window[_0x117959][_0x3caeee](_0x4f0576); continue;case '10': _0x3615ea[_0x41e774(_0xc8f537._0x1d1b40, _0xc8f537._0x14c90b) + 'VO'](_0x5951ae)[_0x178760](); continue;case '11': await _0x3615ea[_0x41e774(_0xc8f537._0xb2d6dc, _0xc8f537._0x12fb90) + 'Ua'](_0x46d677, _0x3615ea[_0x41e774(_0xc8f537._0x15ec18, _0xc8f537._0x254e1e) + 'Mr'](_0x3615ea[_0x41e774(_0xc8f537._0x5e9dd8, _0xc8f537._0x1ff36c) + 'rD'](_0x289468, _0x3615ea['Srd' + 'dg'](_0x4689e1, _0x29fe57, _0xc9f8f0)), _0x4d5604)); continue;case '12': _0x3615ea[_0x41e774(_0xc8f537._0x142237, 'AoF@') + 'MA'](_0x11c806); continue;case '13': window[_0x117959][_0x3caeee](_0xc3b083 + '\x20' + _0x3615ea['CbS' + 'Kr'](_0x5951ae)[_0x37fe13]); continue;}break;}}else { let _0x57a5f6 = window[_0x448cd5](_0x3615ea[_0x41e774(0x97a, _0xc8f537._0x4e2bc1) + 'XQ'](_0x3615ea[_0x41e774(_0xc8f537._0x244b8a, _0xc8f537._0x12fb90) + 'pk'](_0x40fad3)[_0x4c2b28], _0x3615ea[_0x41e774(_0xc8f537._0x43f916, '*r]L') + 'VG'](_0x40fad3)[_0x256fc0])); (_0x3615ea['PFW' + 'cn'](_0x57a5f6, _0x3488e8) || _0x3615ea[_0x41e774(_0xc8f537._0x300c1f, _0xc8f537._0x873c00) + 'fm'](_0x3488e8, _0x29fe57)) && (_0x3488e8 = _0x57a5f6, window[_0x117959][_0x3caeee]('rem' + _0x41e774(0xc90, _0xc8f537._0x3920e4) + _0x41e774(_0xc8f537._0x101c07, _0xc8f537._0x6c99b8) + _0x41e774(_0xc8f537._0x1a8385, _0xc8f537._0x16ccdd) + _0x57a5f6 + (_0x41e774(_0xc8f537._0xaa5992, _0xc8f537._0x40e234) + _0x41e774(_0xc8f537._0x22daa5, _0xc8f537._0x312976) + 'ds'))); return; }}if ((_0x3615ea[_0x41e774(_0xc8f537._0x1d94d8, _0xc8f537._0x2f4e2b) + 'bp'](_0x2520e0, _0x1dd1a0) || _0x266e59) && _0x1cf3ea[_0x37fe13][_0x15ef12](_0x37dfba) && !_0x3615ea[_0x41e774(_0xc8f537._0x1f2c87, _0xc8f537._0xd78fc5) + 'rY'](_0x5951ae)) { const _0x5c502d = _0x3615ea['RJV' + 'Hq'][_0x41e774(_0xc8f537._0x3c12e3, _0xc8f537._0x5d2c69) + 'it']('|'); let _0x525bce = 0x2025 + 0x166f + -0x1c * 0x1f3; while (!![]) { switch (_0x5c502d[_0x525bce++]) { case '0': await _0x3615ea['aUy' + 'SQ'](_0x46d677, _0x3615ea[_0x41e774(_0xc8f537._0x463fc2, _0xc8f537._0x54d8b9) + 'yS'](_0x3615ea[_0x41e774(_0xc8f537._0x5d36ef, _0xc8f537._0x5ecb07) + 'rP'](_0x289468, _0x3615ea[_0x41e774(_0xc8f537._0x2b7ff6, _0xc8f537._0x397383) + 'ZZ'](_0x4689e1, _0x25c0ff, _0x20356a)), _0x4d5604)); continue; case '1': return; case '2': await _0x3615ea[_0x41e774(_0xc8f537._0x2694c9, _0xc8f537._0x12dcf6) + 'SQ'](_0x46d677, _0x3615ea['hJc' + 'wL'](_0x3e3553, _0x3615ea[_0x41e774(_0xc8f537._0x53567a, 'AHX!') + 'dg'](_0x4689e1, _0x1dffb7, _0x20356a))); continue; case '3': _0x3615ea['kYZ' + 'WK'](_0x7bbb2f, _0x346cc9); continue; case '4': window[_0x117959][_0x3caeee](_0x67d10); continue; case '5': window[_0x117959][_0x3caeee](_0xd73d22); continue; case '6': _0x1cf3ea[_0x178760](); continue; case '7': _0x3615ea['fhN' + 'uI'](_0x5ec4b7); continue; case '8': _0x2520e0 = _0x346cc9; continue; case '9': window[_0xfbbcb9](_0x5f0c2a); continue; case '10': _0x3615ea[_0x41e774(_0xc8f537._0xcaa632, _0xc8f537._0x162d92) + 'ey'](_0x7bbb2f); continue; case '11': _0x1dd1a0 = _0x346cc9; continue; case '12': await _0x3615ea['gZS' + 'Wv'](_0x46d677, _0x3615ea[_0x41e774(0xd8e, _0xc8f537._0x3e95e0) + 'cS'](_0x3e3553, _0x382622) + _0x3615ea[_0x41e774(_0xc8f537._0x3d0913, _0xc8f537._0x5829d3) + 'ZZ'](_0x4689e1, _0x1dffb7, _0x20356a)); continue; case '13': _0x1cf3ea[_0x41e774(_0xc8f537._0x33f0b6, _0xc8f537._0x5829d3) + 'us'](); continue; case '14': _0x3615ea[_0x41e774(0xbca, _0xc8f537._0x873c00) + 'SB'](_0x11c806, _0x51cf88); continue; case '15': await _0x3615ea[_0x41e774(_0xc8f537._0x431c30, _0xc8f537._0x5b4c46) + 'WK'](_0x46d677, _0x3615ea[_0x41e774(_0xc8f537._0x1600cf, _0xc8f537._0x54d8b9) + 'KR'](_0x3615ea[_0x41e774(_0xc8f537._0x191e44, _0xc8f537._0x43a23c) + 'cS'](_0x3e3553, _0x382622), _0x3615ea[_0x41e774(_0xc8f537._0x1420fe, _0xc8f537._0x49536d) + 'dg'](_0x4689e1, _0x1dffb7, _0x20356a))); continue; case '16': await _0x3615ea['YZO' + 'SS'](_0x46d677, _0x4d5604); continue; case '17': _0x3615ea[_0x41e774(_0xc8f537._0x590796, _0xc8f537._0x578514) + 'VG'](_0x11c806); continue; case '18': _0x266e59 = _0x346cc9; continue; case '19': await _0x3615ea[_0x41e774(_0xc8f537._0x6bcb48, _0xc8f537._0x38e70c) + 'AX'](_0x46d677, _0x3615ea[_0x41e774(_0xc8f537._0x2ac448, _0xc8f537._0xc6f742) + 'Nu'](_0x3615ea[_0x41e774(0x947, '])Dy') + 'cS'](_0x3e3553, _0x382622), _0x3615ea[_0x41e774(_0xc8f537._0x379edc, _0xc8f537._0x530aac) + 'Co'](_0x4689e1, _0x1dffb7, _0x20356a))); continue; }break; } }}}, ((() => { let _0xfa0ee4 = _0x5ef365[_0x2f5809(_0x4fbc5e._0x167ded, _0x4fbc5e._0x481c26) + 'bA'](!_0x2520e0, !_0x1dd1a0) && !_0x266e59 ? _0x5ef365[_0x2f5809(_0x4fbc5e._0x334ce2, _0x4fbc5e._0x490888) + 'ac'](_0x4689e1, _0x25b06f, _0x548eec) : _0x5ef365[_0x2f5809(_0x4fbc5e._0x10092d, 'm!61') + 'su'](_0x4689e1, _0x49254a, _0x1dffb7); const _0x183148 = {}; _0x183148[_0x2f5809(_0x4fbc5e._0xe5d7c0, _0x4fbc5e._0xa97e43) + '509' + 'cb0'] = _0xfa0ee4; function _0x2f5809(_0x3b6ac2, _0xcbfd3) { return _0x40fddc(_0x3b6ac2 - -_0x1897b6._0x404e5f, _0xcbfd3); } return window[_0x117959][_0x3caeee](_0x183148), _0xfa0ee4; })()));}}());




*/