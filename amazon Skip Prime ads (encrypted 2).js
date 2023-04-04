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
Then I use an obfuscator tool to make the code unreadable and hard to understand for human
More code more efficient is the obfuscation
(check the last line of the file to see the obfuscated code)
Use only obfuscated code

!! WARNING !!
This script is not usable on your side, because at line 82 all strings are now encrypted with AES-GCM
The cipher is not implemented becauuse, the encrypted strings are hard coded
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
    const key = await PBKDF2(myPassword, salt, 100000, 256, window[___atob()]('U0hBLTM4NA=='), window[___atob()]('QUVTLUdDTQ=='));
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

  const _atob = () => await decipher(saltKey(), wndow[___atob()](["QWNzZUlIa296amNyb2xrTlpTdmI2TkJ3cFlVZ3VMaktMM3NvMTdXWHhPNlM3UWpNQkZMTlppQ0oyQy9wWlpIeUVZUVMzQT09"][0]));
  const _parseInt = () => await decipher(saltKey(), window[_atob()](["aDdCVDJ2QStYQzNoNENMWGgxcXU2L2QyelZNSGF6THFkTUpmaEtDZ21tTk1QeWpTSUFhbklZdkhTR3ZKRG5lZUhkZ09WU1JTRFVFPQ=="][0]));
  const _number0 = window[_parseInt()](await decipher(saltKey(), window[_atob()](["ZkxYM0g4WFo2SldXcEkvRGVXMy83dDlWaEYzenVXZkVhTGVtdEJYSThFQndSbUtoTHFEQTVmdWtoR1V6NEY2czFRPT0="][0])));

  const _strSelector001 = () => await decipher(saltKey(), window[_atob()](["Zncvd3NzREFJTFgvd2tDbSs3K1ZFQ3A0bnZqNDdpUFB5Z2VLbG92M0xzT21CSDFHMGd3UGN2MUVqaFl5NVNYR200UURmRXY2cnY1ZXVJL2crNzM5amEvM1Nja1Fqb0lBNkE9PQ=="][_number0]));
  const _strSelector002 = () => await decipher(saltKey(), window[_atob()](["UnVlR01yQ0VGNDZuaWdMQzdJVVdIWGtUZ2N4T2g4UnJLcy9idXJTT3RtMld1MHVmSkZYWXQvVkw2WkFJR3RWNVczdWpJdUt4ZjBxbnlabVhZMUo1R0E2SGVqN1dsQUZnMHUwSzkyRS9ueUwzQmdESnpmYnd1bVZPSnluUDhsTnI3U2lWdmZWWjZieE05WW05b1Z5bWMyaGFwL0lxdEsrTjFCNGhBclJCYmFKeVoxMnlITndic3c9PQ=="][_number0]));
  const _strSelector003 = () => await decipher(saltKey(), window[_atob()](["djhnTmkvQWRrWHc2K0pBWHM0SGZWRTlDMG05UGkwQnBhUnE0Y0hJVEFBaytHS1F2T3FoVyt2MGRDV0lqREJ0anNIbC96OUVvMmtXb25JYnR4WFRNbG5YVm5SRlpiUHBQUlQ1UitPTjNUaHhXOGc9PQ=="][_number0]));
  const _strSelector004 = () => await decipher(saltKey(), window[_atob()](["ejJxc0cwMU9GOTVZUVhLMmhReFByT2NHdFRhWmk3R3dYRkQwN0Qvd1FIcVR0Vis5UVJkODZnTnlidVFQUWJHSXQ2UHFPenFhcUpXMlNyb2N2eTJ5bmJ2ZGpWSUtPR21LWTNxcytmZk1pM0kz"][_number0]));
  const _strSelector005 = () => await decipher(saltKey(), window[_atob()](["TXY5MEF4Wm1wYjZINWVnR3BaMlpsZGxPcjEzcGFGMzR6N2JJcTlzU3I5Y1didWlrcmhxV09ac1U2aG9qVnYwbTlKSi92NDNGNUpndFY0TUVQcmdNN3NROXBwS0ZQL2pTSnU4VUJwczM2S0M2b3lzPQ=="][_number0]));
  const _strSelector006 = () => await decipher(saltKey(), window[_atob()](["OHgybkpSVFJtSzh2SDhFa3d0REtkSFpzR0Z5ZVVocjNjK2hGMHdxM3FERnd4TExWSDNkQnh0YWJ0bGtBdWxuK2NpOVpWcEh5UFlHVW9DYVhPcUF3MGZtN01OUFZ1L1VPOVB0UlJwSVJXR3BXSDkxRm9zS0YxUkUrVEhmQg=="][_number0]));
  const _strSelector007 = () => await decipher(saltKey(), window[_atob()](["VzUxM1grU1NwYmUzMjZSaGxRM0lGK2NFdFJGSE5QbHVxUzNwSjJWZ3VyblE1MG9oMnppdmNXQkV2OGo5TmlXN21STFk0N0ptRy9DNWJqYURJdm5HWGJiRXEvcnBLVHFiZi9WeVBNUld2cm9GVTFzPQ=="][_number0]));
  const _strSelector008 = () => await decipher(saltKey(), window[_atob()](["WERuSkZhekgzK3dWZHhKOFlodXN2NDcxWXdNQmVUV1p3NVAzYXBEK2pQcVFsRVQ4UWhRMWpUaDdsejdYTDdRMWh3bUNmRnJORmM2dXg3YXBYTC84K3cwVEJRdTVEdndibDN3bkpCSVJmWUZUZUlnPQ=="][_number0]));
  const _strSelector009 = () => await decipher(saltKey(), window[_atob()](["QXl4bU9zL2NiTk9TbXJPRjY4YTl6aDJyTGQybzluMGF5d0hoSkhrRkVDQnVkRi9KUzFwR1hPbjVNT0psRHBJZkxsTGxhSC8vblE3VXNLTXdFYXVXV1A1SUgyeEZiWmwxWE1vVng0LzliNmdtdnZhL1NVdURtRmdtd0wxa2YyZXI1YkFURVBpZXA2ejlWa1JsZmI4ZXByRT0="][_number0]));
  const _strSelector010 = () => await decipher(saltKey(), window[_atob()](["MjAwVE0zaWtjZ2tvM2hvcWk4Zi9FS1ZhWmx5Y3g2akVNd3dZK2RMdHBranlMWHVWbWl4Tm1qYUJvdVVUUks5b1JvR3JrZz09"][_number0]));
  const _strSelector011 = () => await decipher(saltKey(), window[_atob()](["MmcrdmZFTFFDTkM2ZVVCYlhLajhGMEZzNDRGYkJtWDF4K3hPSDNoSjhIeHR3OGRQbE53aHZmQlZPMzhaYVVkS3FqUE5UQWVuaVdzUHlJeEFZb0V3YURudVg2REJML1ZUVExUUXhPOFA1T05STU5RNVlLT2U3NUlkbnc9PQ=="][_number0]));
  const _strSelector012 = () => await decipher(saltKey(), window[_atob()](["c1pJTm5WR05kdHNEQXpSKy9rUTZKaHRqMjF6cWhVSVhKNEZiQTZuVEphQ0ZIMWo1SGNWcFRlK1Z3N01Md0E0Q1NiRDFKeVVqVTFRYnpMNnl0SDdWTDE2UEpvM2lTa3lIeW1VeFhVZ2szeU5ZZFk2ZXFRPT0="][_number0]));
  const _strSelector013 = () => await decipher(saltKey(), window[_atob()](["aUk3SGMvVjRIMlkyR2FPTTI5ZUhLNVAwRkxLL3JxMDErZzYyMFpsbkYvcTlHeDJBM2lHNFhlZUI0bXIxSnBBMFVIZ1hBK3o3aTZwQVRHS0Y="][_number0]));

  const string001 = () => await decipher(saltKey(), window[_atob()](["ZWZ4T2c0UmZ5Ry9hQWRsNHJZMnlmUDRjNGQzYy9QRWcyUklGMkp1b093aTFmYVNCVnR6V2JxQ1RiNzhQV3BGYUJSNGRxRzNm"][_number0]));
  const string002 = () => await decipher(saltKey(), window[_atob()](["MS84d1JKOUtvb0l4WUNLYS9sT2wzeTJjVjAva2JNMDNEekJYSXdoUWZCSmpuTWUyK0p5OEFCcnBEV1FzLzdWWGQ2UDAyQTRjVEN4YWFNU0NPaVk9"][_number0]));
  const string003 = () => await decipher(saltKey(), window[_atob()](["M3BJalQyWkpHcksrYmRhRjJDenVUS1JLK1VsNVFNRTlPNlZlOFFXOWxHRXRJNzV4VkhzeWxXNWdBNXRNR0t4QU1RPT0="][_number0]));
  const string011 = () => await decipher(saltKey(), window[_atob()](["cFlUU3hxZTl4bmhYa2ZzdWV2eGMyOTBHc25QZFAwQWFoSm00ZUhyM1MxOEdHZEJjcEluUnVzcjNrc1BXUXRXYU1QRDdBeUk9"][_number0]));
  const string012 = () => await decipher(saltKey(), window[_atob()](["elpOZnlSUFYweUt3V0g5cUl6dExQRGE3V1NUaVdIMkJ4cjlrSEgwTXgzWlNEbDNUZzN5Z0hxV2FHZHMxTlIxcVU4RklRQT09"][_number0]));
  const string013 = await decipher(saltKey(), window[_atob()](["eXFOMVFiY2xYRFFxdjhCRjY2cU1UN0F4MlFsdDJEM01ya3VKUWlpM25pRkRKc0dwazdMdHlVaEhLeDNHZWpJZk1vRUlqNktocGk4PQ=="][_number0]));
  const string014 = await decipher(saltKey(), window[_atob()](["Vlp0TXpNLzAyemhVSS9OUTVPWXRNb2VtTmNENmtRcGxHWVNrdWNpdm5YNDR3RENBUXhlRHU1UUd5dWQ4NkJ3aU9GV2gydlFQeTVpZy9SN1dQL1E2"][_number0]));
  const string015 = await decipher(saltKey(), window[_atob()](["UmhqdUNnWllZekMxN1hlQUhxYzZhQzRiRmJTVzZPclVIdXdPUkJORkszUWlUcWdKTEQ2RDR3eUhSbXJHZ0VLa0NGaXphYWhTeUVrM00zamRBL0Rt"][_number0]));
  // const string016 = () => await decipher(saltKey(), "");
  const string017 = await decipher(saltKey(), window[_atob()](["dTFQS240Q1V0S3ZiRWtPbWVod1F2bTU5Vy8wcEV6V3RCMWdnK2JPTG5WUkNOV21Vdjh0YlNvZkc2U0E2dE9lZHRWMD0="][_number0]));
  const string018 = await decipher(saltKey(), window[_atob()](["em5IaEdyWjJHMHd2cTdxQWNpOTJuMHNRNUVUUklXTzRTYitGV3B2NUNOaFN6MnI0WjV0bFBsc3ZtZzBMUTZKa3V6ZFpmN2ZhNEg4PQ=="][_number0]));
  const string019 = () => await decipher(saltKey(), window[_atob()](["OUVMRmN2N1NlU2NQM285UHVDZWEvOE5ESXVzQnM3WDFxdGFNZkFCb3RNQmVBNm9GZU1KZW9lSW83Y1piQ01mMVRSYkFKRFdYVlZMMWVYR0ZhUT09"][_number0]));
  const string020 = () => await decipher(saltKey(), window[_atob()](["S2tQbTZlZlRPanpxWTR0ci9iNWJtSVQrQXNGcXhzbFo2WkI1RFJrUzI3RWYwVXdlaHR6Z0RXZUZCbmY4azlwdzNnV1JOUT09"][_number0]));
  const string021 = () => await decipher(saltKey(), window[_atob()](["STdxQ0FSTXJDNTZSNENJMy9OQmtTV1lyYnRheHllWUlIbHpIUDNYYk1ydFlFbjdGa1BiMEVpdTVxTVczWkU4K29BUjRmd0lUR1ZacnpBPT0="][_number0]));
  const string022 = () => await decipher(saltKey(), window[_atob()](["VENFWGNFNCtJU1J4a3MyaElKc2ZiRFQvZkJBdUNZRWEveUhET016Q3FSTzRRTFhMK2drTEtLMFlrZmd3Y3RiRnh3ZVZ1YzdOMXdxY09oTVJCRzUwa1E9PQ=="][_number0]));
  const string023 = () => await decipher(saltKey(), window[_atob()](["cWFSbjNUbUYvdFdadEQ5eFhaRVc0K2QybHRCQk5MbzROaXJJQ0RsVGU5SkduTk1hTWZ3Nnh0YXEwRDlMWWxOQ0Y3aFlvRSthckJLdThBPT0="][_number0]));

  const _click = () => await decipher(saltKey(), ["UHRobTlTWnVqZEQ5OWgyV1p5cWFBbVJvOVpYRGxyT3RYS1N3bThRWWZydGE1RitSZGMyZ000T2RyWDFBcEVCSU9GaENhQ0k9"][_number0]);

  const _addEventListener = () => await decipher(saltKey(), window[_atob()](["VkpvZ2svUk9zT3YyWlgzMVlLaVhmUmhEVUpQZjhiR0F2M1cybFBNMW5Wd01lNW9FZUdPZ29rS0dRYzA4aVJCZTFQSkJmK0xidzRWbThRdDB6S04wWmc9PQ=="][_number0]));
  const _querySelector = () => await decipher(saltKey(), window[_atob()](["S0lkalNUTGVFS1NEYmJRdFpwMUp3OC9IWThrczlWMFRQcEw1MXpLUFpMRmVYVjJXR2dwL29Za1RYNWJHSWxlZXhHdis4Ynl1MUJBdmU3MTZFZz09"][_number0]));
  const _call = () => await decipher(saltKey(), window[_atob()](["M1IwK2hDK2tYZU91RDc2dUxoaUJmVzQ4bG9CejR1Qzd6NE0vMjVLV0JxNENSbWVoNHdacXFvWStIdmV5bjRwUzdkSlpRZz09"][_number0]));
  const _forEach = () => await decipher(saltKey(), window[_atob()](["T1dhOUFDTkJzR1M3ZjIwMGZJVFJqWGwyekNGN3p1Skx4U1hTY0JDcjdkQXlYeFJiaGVocWVZbkhlV3RWUXRGUU9yTU5JZVZ3enc9PQ=="][_number0]));
  const _querySelectorAll = () => await decipher(saltKey(), window[_atob()](["K1BNdmdjeDVEYmFvZ3F3ckRyY1lXeHpGaDIxYkNhNUd5TmJTbHZDd3cwNjlYbGcxUVE2U3YvNXVMTXE4Y1lrNGlvVlZ6eitVSzVOM3ZJZ09nS01yL0E9PQ=="][_number0]));
  const _match = await decipher(saltKey(), window[_atob()](["S3pzS3dieEFnT2xVSkxwQ3R3enIyOTF1ZFdka0RETDVqY3VpbGtpT1hNYkpHSE9KSFdIa3lIYmhHVWJBMWl3cDhxS3puZXM9"][_number0]));
  const _random = () => await decipher(saltKey(), window[_atob()](["MC9ZVGFrY3pYejhtTmFxbWdOUzBoWWpJWTBDYXhZVXFpbzlVK1pVSi81cnBhR2NOWTFDNXh0TGdWM2FwemYvZVVtenliOHNE"][_number0]));
  const _parse = () => await decipher(saltKey(), window[_atob()](["T1B5Q1gxbjRYRnRpWEZUbTRaTzhqcVAwTFN3a0xuRTBVbXUvOEljSWVJUlZzRllOS3BVZEd5TlVGOEdtRTY5cGNROEJrRWc9"][_number0]));
  const _log = await decipher(saltKey(), window[_atob()](["ZTNVanpQNTcxYjl4U3VnYU8vSU9lOVpyQndBSU5yS3N3Ny9MUHJHcXhwR0o4UkYzb3c5SFVtV1NSUU9mekVEd2dkWFM="][_number0]));

  const _duration = () => await decipher(saltKey(), window[_atob()](["OFYrUHhVZWdwczM4TVFZcCs5eU1CYm82aGtyZXRESlVpS1BYSExZUStCY2szaXJKaGZuYTA5ZXZqUXBEemNoLzVYcTR6WEpmVzU0PQ=="][_number0]));
  const _currentTime = () => await decipher(saltKey(), window[_atob()](["K2cvVGZwWktlSGhaKzE4OXZNM3FBWDhlU1FydG1XMkxIMUZZenpWM1dDTXFhVDl1dnkvSVhXclliemlmRlZadGdjS2pEQlo5RVVrU0I2az0="][_number0]));
  const _readyState = () => await decipher(saltKey(), window[_atob()](["Tlg0REcxY3NYSGVGTjlGOWpXNXJWYkVBN0dnNWQ5ZTB4YytJcHI0YWNEUWlsV1I0NTNvT3d5T2d5NHAyNGdSWnR4UXA1V21CR1o1S1Z3PT0="][_number0]));
  const _innerText = () => await decipher(saltKey(), window[_atob()](["L0FOL3RoL0dyWXpscUJVK292eVNUQkY5emZQR21henc5NWxQcisvSzFnWXFvanYybmtvdzRjZWkxcllVV005RHpiaUxZYlZoVVA0NQ=="][_number0]));
  const _muted = () => await decipher(saltKey(), window[_atob()](["WTJHaUdMSXJWL1FvZVhzVFFaVHRFR0txQTVQM2NlbUhpWitJYU54REt2ZHMxWUgwdjRuQXU1QW5OdDJEeHFKUTZzcTZLU1k9"][_number0]));
  const _style = await decipher(saltKey(), window[_atob()](["NnpueGJ3a0RXdFphQzRFMFYySEVBWU40OU1ZdnRPRVlpblo0MzRnVWs0bVJVTlpnVS9NTlltWkdhZFZZL2tPT2p4Z3VQOUE9"][_number0]));
  const _height = await decipher(saltKey(), window[_atob()](["YUpKV1J4dGduTlJndnpmVmdET05qSW5yR2xKN05DOTltdXNGU1lHZ1hmVjYwbHhBellINURVNUhkV1gvZTJLY1N5dXgzaVQv"][_number0]));
  const _width = await decipher(saltKey(), window[_atob()](["Q0s2a0cwNnhFOTZNYllvV0NFblVGK3Y2OXJGTTFrcXJDdldWM1NhR0kxYlNrRjVMUTlSOUJnWHp5QUJoSUVCeCs4M2xtNkU9"][_number0]));
  const _document = () => await decipher(saltKey(), window[_atob()](["KzdoRitKcXdrWHFDQXBNd1JtMHpBb3EwQ2lpME1Ya0RIWVk3Z2ZEV1Nrb1oybmF1NDhydUw3UGtsaE5nY0JabEswZFZnYURSc0drPQ=="][_number0]));
  const _opacity = await decipher(saltKey(), window[_atob()](["T2NBZEFMUzVZRTd3VithYXdhb0ZNOStDS3JDSXdyU2VSMnJKQUVtSnpMVm43TzVnbjlqekUxNkhvN0dHb0RBelRoUkRtMUVTbUE9PQ=="][_number0]));
  const _console = await decipher(saltKey(), window[_atob()](["UEFPcTZsZmwxdXdBOUg0M2JUeFQ2RUN3T1JwOVZScXgvMldUN2tVWEFCSmFGTGkrcmJRbzhiYUNvV2N2NVJzb2lYTStLd05QSGc9PQ=="][_number0]));

  const _Promise = () => await decipher(saltKey(), window[_atob()](["bTFwU0hyZHM4SU9JSlFyV3VpQkhCVGhrSDQ4eStPSFpmVStuVHl2YUdDU3JBeGtxVzJuWVo5U2ZKckh3ak90MjVRN3dkb3NMMmc9PQ=="][_number0]));
  const _RegExp = () => await decipher(saltKey(), window[_atob()](["M1lIRWg3OVlNRmVDRjBLTlNnQjM5dmFlOGFIbDVUaVBnbTdFb3NISStzaTRvM3luaVA0N3FQc284Nkh4N244bXdhcGk3a3I4"][_number0]));
  const _Math = () => await decipher(saltKey(), window[_atob()](["UDVQVXc0Mms3SFdSazY5TFd4bzhpWW95ZU93VzZ1bnQrODVHUXEvbG9TaWlJSUdxdVJuZzdJRXU3bThkMHkwQnRLRm92QT09"][_number0]));
  const _JSON = () => await decipher(saltKey(), window[_atob()](["SkZCRDVVV1U1bnBGVUdWK0dUaUdxVVRIemsyN1MyK1JQYzkzTlV1RmRpMnFBbUpWWVpBcDUwVnhZNThZY2VGZngxV09KQT09"][_number0]));

  const _clearInterval = () => await decipher(saltKey(), window[_atob()](["S1JjUjFqVkRVcGhON3E3MTdpZ2h4UVdhaVlCUGg4M0x0RnVESXEydHZjTG9HOUVQcVZQOEcyY2F2cjh3WnREVlFqR0M4YkIvakIyb3JMSGxWQT09"][_number0]));
  const _setTimeout = () => await decipher(saltKey(), window[_atob()](["RHpFeEtla1ZxUTEvOGluYjE3cHI3T3lNQkFJZHM5VHlKb01OUzZwbzVXM0pJNmdlcTJjbmNoMXdpSmpPRFVoRFVtem94RXo1L0JOQTd3PT0="][_number0]));
  const _setInterval = () => await decipher(saltKey(), window[_atob()](["UUR3Q2o0TSt6U3NSYWtvRkQyZkpoc2FqSC9iUTFGeTJuZ3Zvd2Z3WmxEdlJrZEZMQUZPU2JScUhWWjd2ZUMwUkxEbUlxRHZ1S0VGUjlBVT0="][_number0]));

  const _number1 = window[_parseInt()](await decipher(saltKey(), window[_atob()](["ZHFFMkxGSUlEcmxPNHhTWndEZkZJSmw5L2J3ekpCckZ0aldMTkNqRFVOSmZDazBSUHFEVmVRVnFoajF3cTNWVC9nPT0="][_number0])));
  const _number2 = window[_parseInt()](await decipher(saltKey(), window[_atob()](["VmdyUGlYNkdVUVAxM05rTDRMM3pDaVl6bjVEYzl4MHJYK05SRFlwRitYSHNnUjNxaklESk55RmVQWFZ3ejlWVUN3PT0="][_number0])));
  const _number3 = window[_parseInt()](await decipher(saltKey(), window[_atob()](["RGcwa1g4YmExa0dnUlFXcExTYkdDU0dhaE5JaGt1bjlDV29ha0VVSm8vc3BnZ1pNeDMxSmEzQVkwVnl4M0MwdWZnPT0="][_number0])));
  const _number23 = window[_parseInt()](await decipher(saltKey(), window[_atob()](["SndvMDFQdUpSdmdpd0hNdkVLYnh0U1JITkZTRjc3NWV5eFZvZTYwVDA5R1JXVFA3M2hVZEZTRjU3Y3ZBRUdSNlpGQT0="][_number0])));
  const _number30 = window[_parseInt()](await decipher(saltKey(), window[_atob()](["MTdQekhmbUFKZXRMVGh5NTBhM3UvR2JDUVUxOTNTWktlU2liNDQxYVdkNHFpVmRmMEVFTDR3aGliKzc2U3hhQjN3ST0="][_number0])));
  const _number123 = window[_parseInt()](await decipher(saltKey(), window[_atob()](["UE82RS9teEgwdTdJNkd2V2lFYUtaektqaUhrSjRJb1R0WCt0cyt3MlZqRkIyc3pzdlVsa2k1aUNHeHd1N3RqeDl3ZnE="][_number0])));
  const _number187 = window[_parseInt()](await decipher(saltKey(), window[_atob()](["QkJlMXlmMnFPdTQ3WG1acVJqVnNCczRrTElqZk5obERoa2E4WHN2ZEVsbTZORGgrb05USlB5VHVLd1BNeUpnS3pZVHk="][_number0])));
  const _number233 = window[_parseInt()](await decipher(saltKey(), window[_atob()](["MEdzTGFnc2phZm5zYlEwcjU3SU9OOEdGdVdhYmhuVWR1SzdqKzJhUG96dTVHWEdOUlB6RVVBa0ZVMCtrTVY2UFIrclE="][_number0])));
  const _number287 = window[_parseInt()](await decipher(saltKey(), window[_atob()](["ZVZtMXhNK1ZqWStrYU13OEhiU3NJbEFHQUZUVER3ZndCYzh5ZHRHbE9IQldwVkpiNjNtN1VjVXJjdWZ4NWlrRHF5SzU="][_number0])));
  const _number323 = window[_parseInt()](await decipher(saltKey(), window[_atob()](["NVdJMnEwb21ISGIzOWdoeGhwdVRSR01GY2QrY1Z5S0tuVW14Y3M0S2grSXhnYVhkcjBwTGd0YitYWC8xcjExSk9pTWc="][_number0])));
  const _number387 = window[_parseInt()](await decipher(saltKey(), window[_atob()](["OWRJN3FwMW8veE5TU1hjSlE4cDlDTWZjczFSdlJVanhlaWZkbElGSXdDcElIb2djQnBuMkpzOVB3MFcrVHBMblFjL08="][_number0])));
  const _number777 = window[_parseInt()](await decipher(saltKey(), window[_atob()](["djZEbzhvSVNweUVxN1NOMjJFeDAwWHpnc3EzQWs0OUowSEttY0xobHdYSkdNOXl2MFZYdXNScjdzTVZBUjV6ZFhYVmo="][_number0])));
  const _number888 = window[_parseInt()](await decipher(saltKey(), window[_atob()](["Z3NDNFF6aEViL1ZzRnV6d0Z3VEpwRVkxOGZRL0VYb3ZTT0VnZ1VKQXA0cU1KQU84Y3poVnVUMEYvS20wZFJZaFhpMnY="][_number0])));
  const _number1987 = window[_parseInt()](await decipher(saltKey(), window[_atob()](["bmRyOWJNMlJCY0g0OWRLOGJPZTFQU2YzY2xxUVR0bDFEblpuZHNtaWs4aG9iTVRRTzEyVzhaNGUyL0YwQkhkZVMrZVpTdz09"][_number0])));
  const _number14750 = window[_parseInt()](await decipher(saltKey(), window[_atob()](["ays0eFB0QnZFWGIvdU9qbmtOV1VYU05FOG5NWTNhYWFBK0tHZVkrMzhkTU9MajlYalVEeS9BUVRwS1VxZ3hiSDYvdVJ2OEE9"][_number0])));
  const _number15250 = window[_parseInt()](await decipher(saltKey(), window[_atob()](["UmxzVWJTQklhK2xFdzNOZEYxamRkN2Q1cmNhT2VkZjZmZDBERUlZSnEyU2hoSkNSMG1hajdncHhvT09kdnd2OGF0ZFRnUE09"][_number0])));

  const _null = () => window[_JSON()][_parse()](await decipher(saltKey(), window[_atob()](["UGx5ei9VeWlYRkdnRnVsbjZKQjEzWWRoelpiM0UyRnUremZQTSsyNkhZRENYL0xrR2tNcnE5MC9XQXFEb3p0RWhabXpuQT09"][_number0])));
  const _true = () => window[_JSON()][_parse()](await decipher(saltKey(), window[_atob()](["NTBvOWZ3anJLbkp0T1lhNkpJRCtpbmx1S1VyL1V1UWVCOFRXc2ZTbmpSQ1VDeWQ2NkFGMXNiYnd3SXRFNWtzdkhQenk3Zz09"][_number0])));
  const _false = () => window[_JSON()][_parse()](await decipher(saltKey(), window[_atob()](["a3Y1VURjR2tzVmxoUmVCaGZvVDRpQ29JK29XemFkbmxCRmluL3F4UVBFSHFpemNnVS9lK3U1R0Rwekh2elNPeEJGdUxsSmM9"][_number0])));

  window[_console][_log](string013);

  const regExpSkip = () => new window[_RegExp()](string001(), string003());
  const regExpNextEpisode = () => new window[_RegExp()](string002(), string003());

  let interval = _null();

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
})();

//Obfuscated
//Use only obfuscated code in production
// NOT YET READY...