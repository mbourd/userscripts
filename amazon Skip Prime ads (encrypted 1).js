// ====
// @name        Amazon prime video - skip ads (encrypted 1)
// @version     6.6.6
// @author      maxime.bourdin.tic@gmail.com
// @description Automatically skips Amazon prime ads.
// @match       https://www.primevideo.com/*
// @icon        https://www.google.com/s2/favicons?domain=primevideo.com
// @license     MIT
// @grant       none
// ==/==

/*
!! NOTE: !!
The script has been "voluntarily" written with unnecessary codes.
The code structure is not intended to look beautiful or optimized.
Then I use an obfuscator tool to make the code unreadable and hard to understand for human (optional)
More code more efficient is the obfuscation
(check the last line of the file to see the obfuscated code)

!! WARNING !!
This script is not usable on your side, because on line 136 all strings are now encrypted
With homemade cipher, function not implemented here because encrypted strings are hard coded
And protected with a salt key, if you wish to know more contact me at my email address
*/

//Develop here then obfuscate
(async () => {
  const ___atob = () => ['atob'][0];

  const decipher = async (salt, pin = 0) => {
    return async (encoded) => {
      // TODO: new emplementation
    }
  }
  const saltKey = () => window[(() => window[___atob()]('ZG9jdW1lbnQ='))()][(() => window[___atob()]('cXVlcnlTZWxlY3Rvcg=='))()](
    (() => window[___atob()]('bGFiZWxbZm9yXj0iaW5wdXQtbmF2LXByb2ZpbGUtYW16bjEuYWN0b3IucGVyc29uLm9pZCJdID4gbGk='))()
  )[(() => window[___atob()](['aW5uZXJUZXh0'][0]))()];
  const pin = () => window[(() => window[___atob()]('ZG9jdW1lbnQ='))()][(() => window[___atob()]('cXVlcnlTZWxlY3RvckFsbA=='))()](
    (() => window[___atob()]('bGFiZWxbZm9yXj0iaW5wdXQtbmF2LXByb2ZpbGUtYW16bjEuYWN0b3IucGVyc29uLm9pZCJdID4gbGk='))()
  )[window[window[___atob()]('cGFyc2VJbnQ=')]((() => 1)())][(() => window[___atob()](['aW5uZXJUZXh0'][0]))()];

  const encryptedStrings = {
    "_atob": "°!_!ç!ù!à!%!f{£7!¥!f{6$ù~f{G5~A$£3@,!ü!ïä;ä",
    "_strSelector001": "°!b¸¤£2!b¸$f,f?¸4!}£<§£<!¥~!%!b¸7!§£<}£:!¥,!f$?¸2!bCf<.£;.f?{Cf;;f?{!f;,f?{4£;}f?{5£;b¸?{6£;~f?{¸f;§f?{0£;:f?{1£;$f?{2£;bC?{3£,.£,bCf,;£,f$f,à!à:!à}£,§£,¥!,%!ç.!f{3£<b¸f;%!$£}%!}f{£{f}f({2~%,§f{5%§%~%~%;;¥,;%~bC1<~%;;ç§%~§ù-G2<:ç;b¸2,:à<~f{/$f$f$£+£$f$f$f$f$f$f$£+£+£+£+f?<Cç1Ë£117!¥204£120#B21£15È£045¸fí0£601!©5¸àa5{fE,!~bð?ð2!$eðfî,äeØ2!îäü|äeÃ2äb{2äÅ,äEëäEäeØÑðf~!êeðfî|ä",
    "_strSelector002": ".£;_~!;£;:¥!,£;:}f?{f;_,!¥!;_;!~£;:.£§!;ùb¤£4!;ù-f$£;§_!b¤£2§§£;.!ç§~£;;£;§¥!;,£;§f{f;f{f;ù,!ç<!ç§;£;~£;§°!;ù!;%b¤£2:!ç~$£;$£;~_!;f¤f;%§!à.!ç~~£,;£;~¥!,à!;%b{£è{£2~,£,b¸f;~;£,~£;~.£,§£;<bCf,:£;<$£,$£;<:£,bCf;<§f?{3£;<~f?{2£;<b¸?{1£;<}f?{0£;<,f?{¸f;<;f?{6£;<.f?{5£;b{C?{4£;b{!?{!f;b{@?{Cf;b{5£<.£;b{6£<;£;b{¸f<,£;b{0£<}£;b{1£<b¸f;b{2£<~£;b{3£<§£;,bCf<:£;,$£<$£;,:£<bCf;,§£~.£;,~£~;£;,b¸f~,£;,}£~}£;,,£~b¸f;,;£~~£;,.£~§£;;bCf~:£;;$£~$£;;:£~bCf;;§£§.£;;~£§;£;;b¸f§,£;;}£§}£;;,£§b¸f;;;£§~£;;.£§§£;.bCf§:£;.$£§$£;.:£§bCf;.§£:.£;.~£:;£;.b¸f:,£;.}£:}£;.,£:b¸f;.;£:~£;..£:§f?¤¤£4:!B-f:f$?C4!:bC?¤5£-3!f¤6!?;!bC7!$à!b¤0£-]?¤1!?<!f¤2!$%!bC3!-5£-Cf-4!f+£6.!;_!:_!-2£;~%!<§£§~£:.!f({]?¤2!ç.f{f<}£;ù-f~ç!à-f;°~£;;}£;_.!bC{£{3!;ç~£;§:f?¸3!§b¸f;f{7!:£~,ç~§%;~~%b¤{¸6,~~%b¤G¤{6~à;§§ù;}%~,¥~,f¤2~ç~b¸1,;%~;ù;~~ù,~%~;%b{6~f{{2ù~<:ù;¥.§~ù§~§ù§~%~bC6;~¥§<~%§~ù~,~ù~b¤2%~~~ç§,~à<~?§;~f{2~ç;}f{6;%;§,ç§:fè{5%~b{5ù~~%b{5f$¤6~%;:ù§~f&{0%<~ç§ù~;%~~%~;ùÄ+£+f$£+$£+!f+$£-f$f$f+£+£+!f+!f+$£+f$f+f$f$f+f$f-£+$£+f$f+£+£+f$f$f+£+!f+!f+f$f$£+£+f$f+f$f$f+£+£+f$f$f$f+£+£+!f$f$f$f+£+$£+£+!f+$£+$£+!f-f$£+$£02¹20£122ç5fBÈG43©222B¸52û?CÔÈfB520£;È2[B0622£§:£32%52!f¾²£¹{2£432!fÈ120£1²0£7ßa2£.71ç2ç25¸2[>f¤fã£5150çCÉ¥122£42¹fìù2©{0£2»»£1243£5a612£û512£4214û£7#³áç#ß10£2§í2£24171£3220û£02»f,fÀ2!àa»£7²6#B1:ç0£420125£7û¸62°22@{£»H0£5³22äüeÃÑð4äbØ{f~!ï<!:-fêî!}ïäeØ3;!ü}ä|eð?¤5|äü;ä~eØ?ð4|ä,e{f§îäeÃ4!îü|!ï;äEê|ä|î|äe$ð2äeð2|äeÃðf|:|!EëäbØØfEïäeð3|ä||;!îäbð1|äï~!üü;äeð1äeØ5äïî|!ëî!ëeÃfD;!,~!~e$fîe$f<}ä|ë|!eØ{2!E,äEeð2äE|;äeØ1|äî,äüï",
    "_strSelector003": ".£§:£;!ù§!à!§%!}£§b¸f<!ùb{£6!§à!§£§;£:!ù.!f$f~f¤?Cf~$£;.£~:£;;£~§£;,£~~£;}£~b¸f;b¸f~}£;~£~,£;§£~;£;:£~.£;$£<bCf;bCf<$£,.£<:£,;£<§£,,£<~£,}£<b¸f,b¸f<}£,~£<,£,§£<;£,:£<.£,$f?{Cf,bC?{!?{^?{@?{#?{5£}à!}%!f{{£{¸f~,£,à!;f$£7<!ç}£;;f?¸{f,f{£2,!ç~£,b¸f:§%~~ù§}ù}%~}f{6§ù<}¥,~_~,ç~,ù~§%~,?§;ù§,ç~§ù;~f{C5b¤5à;~%b{5%§ù~§%~~°;bC/+£-£$f$f$f$f$f$f$f$f$f$£+£+£+£-£+£+£-£$f$f$£4È£É5£1],f¹fáù0à¸24£000CfÈH£3á2£5}£íÉ£0È5£0aÈ£1436£7@³fB116?{5!§ïäD,!ëäE}äïe{fîbðf~!E|äbð6äïüäê|!~eð?Ø6ä§|ä.e{fE,!-6äe{6ä$eð?Øf.ïäbØ2ä|,",
    "_strSelector004": ".£§~£;£§b¸f,!ùb{£{f§à!b¸f§;£~!ù.!ù!~f¤f:£~$£-£6:!f¤f~ù!;°!~%!;ç!~¥!;à!~f{f;f{f~à!;¥!~ç!;%!~°!;ù!b¸¤f;_!b¸$f;f$?¸4!;f¤?¸5!,°!b¸6!,ç!b¸7!,à!b¸{f,f{?¸1!,¥!b¸2!,%!b¸3!,ù!}f¤f,_!}f$f,f$f}_!,f¤f}ù!}°!}%!f{2!f{¸?{1£}f{f;f{£7;!%.£<bCf}f{f;à!¥§!%}£~bC?¸f,;£~~ùb{G2,§?§~%~;à~§_~à,b¸¤5;%~§ùb{G2:%§%~,ù§}%§;¥§}ù:§f{5§%§,à.§%~~ù~;f¤/$f$f$f$f$f$f$£-£-£+£+£+£+£+£-£$£+£+£+f!21à5fáà0à[¤£4G10£À54£È³fB02!%1»£76¹£ß_2ç1£í5£0»6£¶01£0422!üëäÅbðf,~!~eðfî}äD,ä§;!$ïä§îä:îäüä;äï}ä$eðÑð{f.|!e¤ÑØ{fëü!ïü!eð6äÅ;äE<",
    "_strSelector005": "°!§f¤f;£§$£,!ù:!f{f§ù!¥!§%!~£§b¸f§!ùb{£4!§à!$£§;f?¤£5.!ç.!%b¤£2;!%-£2,!%:!f({£6§!ç<!%~!ç~!%<!ç§!%b{£2:!%,!ç-£6;!f(¤£6.!à.!fÆ¤£1;!¥-£1,!¥:!fè{£7§!à<!¥~!à~!¥<!à§!fÆ{£1:!¥,!à-£7;!fè¤£7.!f{3!f{¤£{2!f{$£{1!f{4!f{]?{5£}¥!}%!f{3!ç.f?{Cf§ù!,¥!ç!}ù!f{6!f{0£;~£,%!,_<;~fèC6;§%§,?~à§~ç§.ùb{G6~;f{2ù,§ç~}ù~~f{6$_~~%§b¸è{G5~,ù~¥§§%~~ù§:à~bC5~§%,Ê+£-£+£$f$f$f$f$f$f$£+£+£+£+£+£-£+£$f$f$f$f!125¸¥ß6£4#áf¤à¸ù765f?H!B06@?û4£0ß¸©á£04~£1a11£50¸_052£§%1©5©¤5äeð2ä}|!:eðf|;!ê<!bØÑÃ2äê~äbð0äêî!,eðfü|!}îäî§äî!,ïäe¤2ä,|äêüä.!;§äeððf§!|î!",
    "_strSelector006": ".£<}£;!¥,£,!¥;£}£<.£<!f{¤£6!}f$f§f?{4£:!f{5!f$f}%!bC?{¸f;.f?{0£;;f?{1£;,f?{2£;}f?{3£;b¸f,bCf;~£,$£;§£,:£;:£,§£;f$f,%!f(¤£è¸f,.£,f{f,ç!à,!¥;£,,£.£:!fèCf~!ç:f?{¸f~§à::ù~~%~b¸6;;f{2§f&C6~~f({G{2;?~~ù§,%;}ç~§%b¤5çÄ$£+£-£$£+£$f$f$f$f$f$f$f$f$f?,fH£0652£7010£»b¸à052£0¸21ç2£12çCfÀ11£4,äe{ð?Ø2!eØ0äü;äëî!î|!|}äïëä<!êe{fïîä$ëäê|ä:b{f-1",
    "_strSelector007": ".£§bCf;!ù-£1!ù:!f{f§ù!b¸f§~£~!ùb¸f§!ùb{£4!§à!$£§;f?¤£5.!ç.!%b¤£2;!%-£2,!%:!f({£6§!ç<!%~!ç~!%<!ç§!%b{£2:!%,!ç-£6;!f(¤£6.!à.!fÆ¤£1;!¥-£1,!¥:!fè{£7§!à<!¥~!à~!¥<!à§!fÆ{£1:!¥,!à-£7;!fè¤£7.!f{3!f{¤£{2!f{$£{1!f{4!f{]?{5£}¥!}%!fÆ¤£(¸?¤£2~£§§£§°!}¥!¥;!f{£Æ{£èCf,}£,§%~}f{6~ç;§%~$f¤6bC6§§¥~~ù~§%,~f{1~à,ùb{4ù~~à,b¸6~;%~;%§f{5;à§;f¤3§ç:§%§~f{5~f{/$f$£-£+£+£+£+£+£+£+£+£+£-£-£-£$f$f$f$f!Á15£61É£1!Ï£4G¤©6£~52£421!à6í£51û£§74£3200£1105£6251£6002£~©5£¹û!||äëëäE~äD,!:|!eØ2!|äeð1ä|îä<bð?{5ä:ëäÅ!e¤{fê;ä.bðfEÅ!~eð?ð5!bð6äêîäîÅ!§eðfü}",
    "_strSelector008": ".£§f¤f;£§f$f,£§:f?{£5§!¥!§%!~£§b¸f§!ùb{£4!§à!$£§;f?¤£5.!ç.!%b¤£2;!%-£2,!%:!f({£6§!ç<!%~!ç~!%<!ç§!%b{£2:!%,!ç-£6;!f(¤£6.!à.!fÆ¤£1;!¥-£1,!¥:!fè{£7§!à<!¥~!à~!¥<!à§!fÆ{£1:!¥,!à-£7;!fè¤£7.!f{3!f{¤£{2!f{$£{1!f{4!f{]?{5£}¥!}%!ù:!f{!f§b¸f}f{?¸{£7~!à;£~}£;_!,£~ç!bCf§~f{¤2%§§ù~,f{7§ù§~f({¸({0ù;?~bC6§~à~~f{6§ù§§%.§à§,%~~ù;~_~~%§%b{1%;%~;%}%~~A+£+£+£+£+£$f$f$£+£+£+£-£+£+£+£+£-f?<1£~°G5#{àG$fûù¸05ùCífB062£1616£6011£>0£0³£321¸ç124£H72£10ß£3HCeØ5äbðfê;äïäE~ä|äüe{fï;äeð6!$ü!E}äêÅ!:<!ü|!üîä}î!ëä,üä§bðfëüäD<!;eðÑØ2äî;!Å,",
    "_strSelector009": ".!ç,b¤£2!;,f$f,£;,_!}£;,ù!b¸f;,%!~£;,¥!ù!;,f{f:£;,,£-£2,;f?Cf;,°!;.£;;f¤f;ç!;ç-£2,!ç;:£;}£;;ù!;¥!;ç~!ç~!ç;b¸f;§£;;f{f;_!;ç,!ç-£2;;£;bCf;;°!,°!;fé¤£1;!ç.$£,,£;._!,f{f;°§!à<!ç.~£,~£;.¥!,ù!;fé{£1:!ç.,£,$£;.ç!,f¤f;°.!f{3!f¤¤£{2!B-£{1!f¤4!f{{£¤5!f{7!f¤6!f{6!f¤7!f{5!f¤{£{4!f¤1!f{$£¤2!f{¤£¤3!¥.!f$¤£7;!f+£7,!?:!b¸{f$ù!<b¸f-6£<~!?<!¥§!$f{?¸4!-1£<$£-2!fÆ¤f?.!~°!:f¤f~;£:$£~,!_:!%b{f:ù!~¥!:~£~~£:<!%§!f&{f~_!:à!~$£:;£~b¤£4.!ù.!§f¤f§ç!§$£§,£§:!ùb{£5§!§¥!§%!b¤4£;,à!;$£$£§-£5:£;,b¸?¸5!;,_!%!b¤2£,f$f:bCf}f$f,bCf$_!-3£,f{f;.°!ç.-£5§ç:~%~~%;§ù;,ù~-5f{2-G6~§ç;§§ùb{G2,§}f¤6~ù;§f{2.ç~§;%~b¤¸6,~%b¤G2}f¤6~ç<b{0%~~§%b¤1ù:,%;,_§~ç~}%§~bC6~}_;:%~:§f¤è¸2;~%,~%<bC6~,ç;§_~b¸5~~%~~ù,~A+£$f$f+f$f$f$f$f+£+£$f$f$£+£+£+$£+£$f+£+f$f+£+£+!f+!f+!f+£+f$f$f$f$f$£$f$f$f$f$£+f$f+£+£+£+£+!f+©%@,fÈ2!fã65£701¸à17[B6222£2³62£»5£ûû£á!fÀ5£6436£072#ûf¶_[À°720£52;_C37»£01:£Þ102£2,;£10Þ2£íB¸72ç221©G1¸ûB0°4£0À4£51%[Èù2àß!_11Cç012a2£2È£1H@~ëäü|äeØØf::!ï§!§Eäb{4äïÅ!eØ0ä,|!ü;|äbð$f}eØf§î;ä~|äîe{f:|äe¤ðfê;äEê;ä$||!üî!bØÑ¤ÃÑØ5ä-1|äüê|ä;E!e$¤Ñð¤f<.;ä|$äïê|!ë|ä.;|!ï;|äîeÃf~EäeØ2äE}äü",
    "_strSelector010": "°!_!ç!ù!à!%!f{£7!ç!ù§:ùb¸¤5%~A$£7Gêäb{f:ä,ä",
    "_strSelector011": "°!$%!;£-¸f,!f${£{f$à!b¸f-2£~!?.£§!f&Cf:!_-£$f:_!bCf:§£;.£:~£;;£:b¸f;,£:}£;}£:,£;b¸f:;£;~£:.£;§£§bCf;:£§$£;$£§:£;bCf§§£,.£§~£,;£§b¸f,,£§}£,}£§,£,b¸f§;£,~£§.£,§£~bCf,:£~$£,$£~:£,bCf~§f?{3£~~f?{2£~b¸?{1£~}f?{0£~,f?{¸f~;f?{6£~.f?{5£<bC?{4£<$f?{!f<:f?{Cf<§£<.£<~£<;£<b¸f<,f?¸{f:¥!fè{£2~£.!ç§f?¤£6}£§~£$f{f§°!?<!%:£;bCf~f¤f~%~<bC{2~à~~%;_~;ç-0%b{0ç~ù§~%;~%§bC6~§%~bC{5~_§;%;ù,~ç~;¥~~f({G{2,%;§%;~ç$%:~ùb¤2ùb{!(C4§$%§ç;Ê+£+£+£+£+£+£+£+£+£+£+£+£+£-£+£+£+£+£$f$f$f!4414£511£4522£}22£170¸ù176£4[»ç4%5©2©G74©0©#Hà5©0¥0°!ßfÉù0¥1ç@Ìà¸ãf²à!51?C5¸:eðf}ä~e{f§ä<~äü:!E,ä$äîîäD:äbØ0äe¤1äîe$fêïäeð5ä|äêe$f||!;eðfE§ä~$äEëäeÃ0ä~ä;~ä;:ä;e$Ñðfîï!eð1!.bðf",
    "_strSelector012": "°!:f{f;£:,£,£:;f?{£4.£<!ùb¤£6!§f$f§£§:£:!ù§!f$f§%!bCf§b¸f;.£§}£;;£§,£;,£§;£;}£§.£;b¸f~bCf;~£~$£;§£~:£;:£~§£;$£~~£;bCf~b¸f,.£~}£,;£~,£,,£~;£,}£~.£,b¸f<bCf,~£<$£,§£<:£,:£<§£,$£<~£,bCf<b¸?{3£<}f?{2£<,f?{1£<;f?{0£<.f?{¸?{C?{6£}f$f}ù!f{4!ù}£~}£,f{f;f{£7,!_;£<!à§£<}£,£,:£§ç!~ç~b{G5§¥~§%bC{{G5~%b{G6§~ù;§ù:}f{6~%§%§.à<~%-2%b{5%§~%,§ù;;%b{G6§~à~~ç,§f{6,ù;~ç§bC/+£+£+£-£+£$f$f$f$f$f$£+£+£+£+£-£+£+£+£+°¥G1C00ç2¥1àG¶B¸52£§7CùÈ2£H04£12È£À5£25a2£043¸f²à]¹àCù461£3ß4£452[.|äeððf:e{ÑÃ2äD,!ëëäe{4äï§!î}äe¤1äÅ~äï~äïb{f;îäêäD}ä~;ä$üäü§äê,!ïäê:!§äeØ6!eÃfD~ä",
    "_strSelector013": ".£,f{f;£,à!à!à;!f{f,°!b¸f;bCf~!ç$£§!ç:£:!ç§£-£2~f?¤£(¸f;.£;f{f;ç!ç,!_!à!b¸f,à!bCf~~ç,§ù$à~$f{1~f{5~%~~_~;ç~A-£-£+£-£-£0#¤fû£21»£22_0ç5ÑÃfê|!ëîäü|!î;!~|ä.!|,!eð2",
    "string001": ".£;ç!;£;°!à!f¤£{£$£7!_!%!§£;°!.£;%b¸¤0¥:ùb¸6}%Ê$f$£24#B0äeÃfüä<!~!îä|",
    "string002": ".!à:!ç!,ù!,£,~f?{£1<!¥!,f{f~£,,£§!à;!_!,°!$£;f¤?Cf;f$f;°!ç:!ç;£;§£;à!;%!f({£(¸f;:£;f¤f;à!à~!ç~%}fè¸b~~ùb¤[{&¸5:,f{5§f({C6§f{2%Ê-£$£+£-£$f$f$f:1£2151£52àCfì25£ì£0#{äï!|äbð2äeð1!b{1äD;!;;äêî!:!eðfï",
    "string003": ".£;£.%Ä3ä;",
    "string011": ".f?Cf;£$£,£:£}£§f?¸f~f?¸f,£§%$%~f{1%~çÊ$_fB2!êä~!üä$äë",
    "string012": "°!_!ç!ù!à!%!f{£7!ç!f{4:à,à,ç§A$£6[§äêäÅ!:!",
    "string013": ".!ç~£;£;¥!à!ç}£}£;,f?¸f;;£~£;.£§f?¤£4!f$f.f?¸f-£2~%~f¤6~ù~ç.~ù§%§%Ê-£-f?;°¸25fB2%0ä:äïäî;!îä;|!|!ë",
    "string014": ".£,bCf;£,$£,!à:!f{f,ù!b¸f,~£~!à<!ù!,f{f:£,,£-£1;!f¤f,°!ç.!f(Cf;;£;f$f;à!ç:!ç}£;§£;¥!;%!à;!ç;£;$£}£,:f?{G¤G6,;f¤4ù~;ç~§ç~§°~~ùb¤G3§§f¤]¤/$£$f$£+£-£-£$f$f!1602£Ìç5£41¥4ç2¥2£1a1£¾1!-ÑÃ1!e¤2äî|!üîä.îäü|ä~!ï,äî!e{2",
    "string015": ".£,bCf;!à$£,!à:!f{f,ù!b¸f,~£~!à<!ù!,f{f:£,,£-£1;!f¤f,°!ç.!f(Cf;;£;f$f;à!ç:!ç}£;§£;¥!;%!ç,!fèC?¤£2§£;:£§ç~ù:§ù:§f{G7:}f{{5à~~%b¸7§%;%§%:Ê+£+£$£+£+£+f!12¥0ç#Þà1à6£1¸1#»à1ç{1äEäeðfê!;äï|!e¤2!ï,!ü!E,ä-2äeÃfë",
    "string017": "°!f{£2!à!à;,_,A.f|!}ä",
    "string018": ".£;%!ç!;¥!à!ç}£}£;,f?¸f;;£~£;.£§f?¤£4!f$f;f{£2!§£~%b¸¤5~f{3.ù~~ù~%§A$f$£$f?;%@?¸ç0#~äêäî|ä<;!ê|!bØfî",
    "string019": ".£,%!;£,¥!à!,f{f}£,,£<!à;!%!,°!§£;bCf:£;$£$£;:f?Cf;§£;°!;%!ç;!f(¸f;,£;f{f,¥!_!;£;à!,£.._-¸7}%~;%~_§~ù§§ù~ùb¤G{5%Ä$f$f$f$f$£-£+£!74ç1°Cû£652£1û2£È52äb{fD;äeÃfîîäë|!eØf|îä.!b{1!.;",
    "string020": "°!_!ç!ù!à!%!f{£7!%!°§}fèC5~%§A$£25fEäëä,!bðf",
    "string021": ".!f(¤£2!ç-£1!;_!f{f;ù!¥!;%!%!;¥!ù!;f{£4!;à!f$f;ç!f¤f;°!ç<!f{£2§!ç}%b¸5~:%~~¥§%;_:ù~§à§Ê$f$£-£$f$£3;fBG2[B52£72|!E;ä;!Eä.!eÃ2ä}|ä~äî",
    "string022": "°!f{2!ç!}°!à!,f¤f}£,$£<!à:!%!,ù!§£,~£:!à<!f$f,f{?Cf,,£;.£,;£;ç!,°!ç,!f(Cf;}£;f$f;¥!ç:!ç~£;§£,f$f}ç!ç!,¥!f{3!à~<§f¤5à§;¥;ù§:f{{5¥~à~:%~:%~f{6~%,§A+£-£$£$f$f$f$f$f$f$?;£1622£1202£»72£´£7C16£6115fîîäë|äeØf.îä:î!e$fî|!b¤2äE!ü|!ü!E;ä",
    "string023": "°!;f¤f;£;f$£1!;_!f{f;ù!¥!;%!%!;¥!ù!;f{£4!;à!f$f;ç!f¤f;°!%!bCf;%!;ç~<:%:_}¥;§ù~~ù<§%§%,Ê$f$£$f$£-£02¥2£ÈCf´2£41;äüäü;!eÃ2äê|äî!$ä:;ä",
    "string024": "°!,ç!ç!à.£,£;bC?{£2-£7!ç:!%!ç§!ù!ç~!_!ç<!f$£({£¤£2,!ç.£;;£$f?{£7!f¤f;%~,}ù§§f{6~ù~§ç:~¥,%b{4%;Ê$f$£$£+£$f!21¸à22Cf»£û2£4Ã2ä;,ä§!E;äü|ä.î!}|ä.;ä",
    "_click": ".f?Cf;£$£,£:£}£§f?¸f~£:f?¸?¸6~%,%b¸6}%Ê$f!°2äüä,äeØfëä~",
    "_addEventListener": "°!}ç!ç!}°!,£,bCf}£,$£<!à:!%!,ù!§£,~£:!à<!f$f,f{?Cf,,£;.£,;£;ç!,°!ç,!f(Cf;}£;f$f;¥!ç:!ç~£;§f?Cf,.£,f¤f;%!¥!,f&{1,%~ù§%b{0ç,§%~ù~~ù§}%<~f{6}f¤1~f¤1Ê$f$f$f$f$f$£$£-£+f?,fËç#³f´£10£û0£25,£2È2£44;!D,!eØ2!e{1äî|ä;îäüäî,!~,ä|!eÃÑ{2!",
    "_querySelector": ".!à~!ç!à<!à!,f{f}£,,£<!à;!%!,°!§£;bCf:£;$£$£;:f?Cf;§£;°!;%!ç;!f(¸f;,£;f{f;ù!ç<!f{£2,!à~ù,¥~~à,ù<§f{1~%~,¥§?~%§~ù§Ê-£+£$f$£+£$ù£3G11¥4£171£2122£22%Ø2!E|ä-fî!.îäD;!ë|ä~!ê;!eØfë",
    "_call": "°!_!ç!ù!à!%!f{£7!¥!f{1~à~ù~¥~A$£4^|!ü!îäïä",
    "_forEach": ".£;f{£2!ç,£,£;ç!f{£2.£<!f¤£6!$£§£:!°!à!:£;¥$ù§~%~~%~f{5àÊ+£$ùfB0ç2°$f|äeðf||!î|!b{f~",
    "_querySelectorAll": "°!f{2!ç!}°!,£,bCf}£,$£<!à:!%!,ù!§£,~£:!à<!f$f,f{?Cf,,£;.£,;£;ç!,°!ç,!f(Cf;}£;f$f;¥!ç:!ç~£;§f?Cf,$£;ù!;ç!f{3!ç,~%§§à~§ù,§%~§%}à,b¸5$%~b¸{6§à~¥,%Ä$f$f$f$£+£+£$f$f$f?;B6£0422£00à1_G21B¸ç571£í22!:äê!î|!.î!§ä,î!îäeð1äë|!eÃ2!~îäeÃf",
    "_match": ".f?Cf;£$£,£:£}£§f?¸f~£§£:f?¸6§ù~%}%;ùÊ$°£12äeÃ?ðÑ¤fïä}",
    "_random": "°!ç;£;£;°!à!f¤£{£$£7!_!%!§£:f?{£3~~ù~f¤6§?~ç~}A$£$£61£25f;|äÅ!ê|!e¤f$ä",
    "_parse": ".f?Cf;£$£,£:£}£§f?¸f~£$£,£~ù,_~ù§ù~¥Ê$_£¹!}äe¤fê!;äÅ",
    "_log": ".£~£;f?¸f,£}£}£.%$%,%Ê!36ä|äbðf,",
    "_duration": ".£;~£;£;¥!à!ç}£}£;,f?¸f;;£~£;.£§f?¤£4!f$f$f?¸f;,£~~%§~%b¤1ù$%§f{5f{6Ê$£$£$f<2£2[B5£32|!E!ëä~!.;äï|äe{2",
    "_currentTime": ".£,;£;£,.£,£;bC?{£2-£7!ç:!%!ç§!ù!ç~!_!ç<!f$£({£¤£2,!ç.£;;£;£;$£,£;.£}f¤G2~~à,ù~~ù~~%}ù<~à§¥Ä$f$£+£-£-ùfÈ£0#>ç2%4£2012äe¤f|;ä~!êîä|îä.!bð2äe$f§",
    "_readyState": "°!;f¤£2!ç-£1!;_!f{f;ù!¥!;%!%!;¥!ù!;f{£4!;à!f$f;ç!f¤f;°!ç<!ù!¥!;_~}ù~ù}ù,~ù§}%<~¥~%,ùÊ+£-£$f$f,2£205£6#~ç2°4!,äê!||!}|äe¤2!;äeØf$ä",
    "_innerText": ".£;:£;£;§£,£;%!}£;¥!b¸f;f{f~£;à!§£;ç!:£;°!$f?Cf;.£~£;}f?{1ù~à§ù§%}%~fÆ¤G¤G6Ä$£$f$f$f$©£2¹2£244£252äî!Å;ä|!bØÑðfê!eÃf,;",
    "_muted": ".f?Cf;£$£,£:£}£§f?¸f~£~£}£}à~ù}ù~%,çÊ$fCà4ä.äeðf$äü!;",
    "_style": ".f?Cf;£$£,£:£}£§f?¸f~£}£;£}ùb¸6§%§à,%Ê$à£ÏäE!üäeÃ?ðf=",
    "_height": ".£;;£;£;°!à!f¤£{£$£7!_!%!§£$£;.£~%~%§fé{5%,%§A$£$£H£4C|ä.ä|;!îäëäï",
    "_width": ".f?Cf;£$£,£:£}£§f?¸f~£,£~£§%§%~ù}f{3%Ê$fC_3ä-f;äüäeðfë",
    "_document": ".!ç~£;£;¥!à!ç}£}£;,f?¸f;;£~£;.£§f?¤£4!f$?Cf,£~!ç}%<}à;à~§%$%§~f¤6A-£$£$f~2£.£0¸25fE!ê|ä;ä||!Å!b{2ä,",
    "_opacity": ".£;}£;!ç,£,£;ç!f{£2.£<!f¤£6!$£§£:!ç,£;;£~ù~%$%§%§}_§¥~A$£$f$f!ça0£2]Å!:!.|äïä.äüäî",
    "_console": ".£;f{£2!ç,£,£;ç!f{£2.£<!f¤£6!$£§£:!f$£{f.£~~à§%~?~b¸è¸6$BÊ$f$f$fCf»22£21!bðf§ä,|!ïäE!ë|",
    "_Promise": "°!;f{£2!ç,£,£;ç!f{£2.£<!f¤£6!$£§£:!f$£6!;°~~§ù~%~à;b¸b<~_Ê$£$£!»£50£71!;;!î|!eØfEäë|ä",
    "_RegExp": ".£;ç!;£;°!à!f¤£{£$£7!_!%!§£;°!$£§à§à~_~ù}¥.%Ê$f$£û2£í!§äeØfÅ!e{fE!|",
    "_Math": "°!_!ç!ù!à!%!f{£7!ù!f{{0%§ç§ù~A$£1@ê!eðfïä;ä",
    "_JSON": "°!_!ç!ù!à!%!f{£7!à!fÆ¤!{]{¸Æ¸/$£4Gëä.äüä;!",
    "_clearInterval": ".£,~£;!à<!à!,f{f}£,,£<!à;!%!,°!§£;bCf:£;$£$£;:f?Cf;§£;°!;%!ç;!f(¸f;,£;f{f,%!ç§!f(¸f;.f?¤G1,~%~%~ç,ùb{5%§%§~ù§b¸{1~%Ä$£$f$£-£$£+f?;1£,22£0¸_#ã£2~£0ìä:;!bð1!||äüä.îäî!|äï!ë|!î,",
    "_setTimeout": ".£;f¤£2!ç-£1!;_!f{f;ù!¥!;%!%!;¥!ù!;f{£4!;à!f$f;ç!f¤f;°!f({£6!f{f;£§~%;f{G6,f{7§%~$ù,à<§f{Â+£$f$f$f$£4a2£25a2£Ìç#<!eð2!§ä,|ä|;!,äE!eÃfï|",
    "_parseInt": ".£;%!;£;¥!à!ç}£}£;,f?¸f;;£~£;.£§f?¤£4!f$?¸f;f{f§£§§%§§_~ùb{1%b¸6~bC{Â$f$£$£~£>£Ë2£01!~|ä;!,|äe$fê|ä|;",
    "_setInterval": ".!à;!ç!à.£,£;bC?{£2-£7!ç:!%!ç§!ù!ç~!_!ç<!f$£({£¤£2,!ç.£;;£;£§!f¤£2.!ç§f{G6;,%§ùbC7~}à§§à~~%b{5A$f$£$f$f$f$f$f¸ç022£2=2£~£14#E;äeð2!êîäî|!b{fêä~;!î!ü",
    "_number0": ".£;£:àÄ3ä;",
    "_number1": ".£;£§àÄ3ä;",
    "_number2": ".£;£~àÄ3ä;",
    "_number3": ".£;£,¥Ä2!ê",
    "_number4": ".£;£}àÄ3ä;",
    "_number5": ".£;£,àÄ2!ê",
    "_number6": ".£;£;àÄ3ä;",
    "_number7": ".£;£.àÄ3ä;",
    "_number8": ".£;£,ùÄ2äê",
    "_number9": ".£;£~àÄ3ä|",
    "_number10": "°!f{£2!à!ç,§à:A}f.ä,ä",
    "_number23": "°!f{£2!à!f{6,fè¸/;f.äî!",
    "_number30": "°!f{£2!à!à:,¥,A.Ñ{f|!",
    "_number123": ".£~£;f?¸f,£}£}£§à~¥,àÊ!ìäÅ!~ä;",
    "_number187": ".£~£;f?¸f,£}£.£,°,ù,ùÊ!62äe{fî!Å",
    "_number233": ".£~£;f?¸f,£}f?¸f,fè¸6b¸1Ê!Àä~!,ä|",
    "_number287": ".£~£;f?¸f,£}£~£§à,à~°Ê!í!;äeðfë",
    "_number323": ".£~£;f?¸f,£}£;f?¸6,à,¥Ê!Ë!ëäï!,",
    "_number387": ".£~£;f?¸f,£}£;£.ù,à,¥Ê!76!ëäêä,",
    "_number666": ".£~£;f?¸f,£}£}£,ç;à,çÊ!Ë!ïä;!î",
    "_number777": ".£~£;f?¸f,£}£;£,°,°,°Ê!´!ï!î!Å",
    "_number888": ".£~£;f?¸f,£}£,£,à§ù§àÊ!3ðfïäëä|",
    "_number1987": "°!_!ç!ù!à!%!f{£7!à!ù.§à,à~à§A$£46Ñðf|äëä.!",
    "_number14750": ".f?Cf;£$£,£:£}£§f?¸f~£.£~£,f{1à,_,ù,°Ê$f¸©4!î!-füäe¤f|",
    "_number15250": ".f?Cf;£$£,£:£}£§f?¸f~£:£~£,à~à,ù:à,àÊ$ù£¤!Å!;!êä}äî",
    "_true": "°!_!ç!ù!à!%!f{£7!°!f({5à§à§%~A$£6[§äE!e{fÅ!",
    "_false": ".f?Cf;£$£,£:£}£§f?¸f~£;f?Cf~à~à~%;¥§ùÊ$©£64!ü!bðfî!eÃfê",
    "_null": "°!_!ç!ù!à!%!f{£7!_!%,~%bC6,à§A$£1¸|äëä.äü!"
  };

  const myDeciph = await decipher(saltKey(), pin());

  window[window[___atob()]('Y29uc29sZQ==')][window[___atob()]('bG9n')](window[___atob()]('ZGVjcnlwdGluZy4uLg=='));

  const _atob = await myDeciph([encryptedStrings._atob][0]);
  const _parseInt = await myDeciph([encryptedStrings._parseInt][0]);
  const _number0 = window[_parseInt](await myDeciph([encryptedStrings._number0][0]));

  console.log('phase 1 : ok');

  const _clearInterval = await myDeciph([encryptedStrings._clearInterval][_number0]);
  const _setTimeout = await myDeciph([encryptedStrings._setTimeout][_number0]);
  const _setInterval = await myDeciph([encryptedStrings._setInterval][_number0]);

  console.log('phase 2 : ok');

  const _number1 = window[_parseInt](await myDeciph([encryptedStrings._number1][_number0]));
  const _number2 = window[_parseInt](await myDeciph([encryptedStrings._number2][_number0]));
  const _number3 = window[_parseInt](await myDeciph([encryptedStrings._number3][_number0]));
  const _number23 = window[_parseInt](await myDeciph([encryptedStrings._number23][_number0]));
  const _number30 = window[_parseInt](await myDeciph([encryptedStrings._number30][_number0]));
  const _number123 = window[_parseInt](await myDeciph([encryptedStrings._number123][_number0]));
  const _number187 = window[_parseInt](await myDeciph([encryptedStrings._number187][_number0]));
  const _number233 = window[_parseInt](await myDeciph([encryptedStrings._number233][_number0]));
  const _number287 = window[_parseInt](await myDeciph([encryptedStrings._number287][_number0]));
  const _number323 = window[_parseInt](await myDeciph([encryptedStrings._number323][_number0]));
  const _number387 = window[_parseInt](await myDeciph([encryptedStrings._number387][_number0]));
  const _number666 = window[_parseInt](await myDeciph([encryptedStrings._number666][_number0]));
  const _number777 = window[_parseInt](await myDeciph([encryptedStrings._number777][_number0]));
  const _number888 = window[_parseInt](await myDeciph([encryptedStrings._number888][_number0]));
  const _number1987 = window[_parseInt](await myDeciph([encryptedStrings._number1987][_number0]));
  const _number14750 = window[_parseInt](await myDeciph([encryptedStrings._number14750][_number0]));
  const _number15250 = window[_parseInt](await myDeciph([encryptedStrings._number15250][_number0]));

  console.log('phase 3 : ok');

  const _Promise = await myDeciph([encryptedStrings._Promise][_number0]);
  const _RegExp = await myDeciph([encryptedStrings._RegExp][_number0]);
  const _Math = await myDeciph([encryptedStrings._Math][_number0]);
  const _JSON = await myDeciph([encryptedStrings._JSON][_number0]);

  console.log('phase 4 : ok');

  const _strSelector001 = await myDeciph([encryptedStrings._strSelector001][_number0]);
  const _strSelector002 = await myDeciph([encryptedStrings._strSelector002][_number0]);
  const _strSelector003 = await myDeciph([encryptedStrings._strSelector003][_number0]);
  const _strSelector004 = await myDeciph([encryptedStrings._strSelector004][_number0]);
  const _strSelector005 = await myDeciph([encryptedStrings._strSelector005][_number0]);
  const _strSelector006 = await myDeciph([encryptedStrings._strSelector006][_number0]);
  const _strSelector007 = await myDeciph([encryptedStrings._strSelector007][_number0]);
  const _strSelector008 = await myDeciph([encryptedStrings._strSelector008][_number0]);
  const _strSelector009 = await myDeciph([encryptedStrings._strSelector009][_number0]);
  const _strSelector010 = await myDeciph([encryptedStrings._strSelector010][_number0]);
  const _strSelector011 = await myDeciph([encryptedStrings._strSelector011][_number0]);
  const _strSelector012 = await myDeciph([encryptedStrings._strSelector012][_number0]);
  const _strSelector013 = await myDeciph([encryptedStrings._strSelector013][_number0]);
  // const _strSelector014 = await myDeciph([encryptedStrings._strSelector014][_number0]);

  console.log('phase 5 : ok');

  const string001 = await myDeciph([encryptedStrings.string001][_number0]);
  const string002 = await myDeciph([encryptedStrings.string002][_number0]);
  const string003 = await myDeciph([encryptedStrings.string003][_number0]);
  const string011 = await myDeciph([encryptedStrings.string011][_number0]);
  const string012 = await myDeciph([encryptedStrings.string012][_number0]);
  const string013 = await myDeciph([encryptedStrings.string013][_number0]);
  const string014 = await myDeciph([encryptedStrings.string014][_number0]);
  const string015 = await myDeciph([encryptedStrings.string015][_number0]);
  // const string016 = await myDeciph([encryptedStrings.string016][_number0]);
  const string017 = await myDeciph([encryptedStrings.string017][_number0]);
  const string018 = await myDeciph([encryptedStrings.string018][_number0]);
  const string019 = await myDeciph([encryptedStrings.string019][_number0]);
  const string020 = await myDeciph([encryptedStrings.string020][_number0]);
  const string021 = await myDeciph([encryptedStrings.string021][_number0]);
  const string022 = await myDeciph([encryptedStrings.string022][_number0]);
  const string023 = await myDeciph([encryptedStrings.string023][_number0]);
  const string024 = await myDeciph([encryptedStrings.string024][_number0]);

  console.log('phase 6 : ok');

  const _click = await myDeciph([encryptedStrings._click][_number0]);

  console.log('phase 7 : ok');

  const _addEventListener = await myDeciph([encryptedStrings._addEventListener][_number0]);
  const _querySelector = await myDeciph([encryptedStrings._querySelector][_number0]);
  const _call = await myDeciph([encryptedStrings._call][_number0]);
  const _forEach = await myDeciph([encryptedStrings._forEach][_number0]);
  const _querySelectorAll = await myDeciph([encryptedStrings._querySelectorAll][_number0]);
  const _match = await myDeciph([encryptedStrings._match][_number0]);
  const _random = await myDeciph([encryptedStrings._random][_number0]);
  const _parse = await myDeciph([encryptedStrings._parse][_number0]);
  const _log = await myDeciph([encryptedStrings._log][_number0]);

  console.log('phase 8 : ok');

  const _duration = await myDeciph([encryptedStrings._duration][_number0]);
  const _currentTime = await myDeciph([encryptedStrings._currentTime][_number0]);
  const _readyState = await myDeciph([encryptedStrings._readyState][_number0]);
  const _innerText = await myDeciph([encryptedStrings._innerText][_number0]);
  const _muted = await myDeciph([encryptedStrings._muted][_number0]);
  const _style = await myDeciph([encryptedStrings._style][_number0]);
  const _height = await myDeciph([encryptedStrings._height][_number0]);
  const _width = await myDeciph([encryptedStrings._width][_number0]);
  const _document = await myDeciph([encryptedStrings._document][_number0]);
  const _opacity = await myDeciph([encryptedStrings._opacity][_number0]);
  const _console = await myDeciph([encryptedStrings._console][_number0]);

  console.log('phase 9 : ok');

  const _null = window[_JSON][_parse](await myDeciph([encryptedStrings._null][_number0]));
  const _true = window[_JSON][_parse](await myDeciph([encryptedStrings._true][_number0]));
  const _false = window[_JSON][_parse](await myDeciph([encryptedStrings._false][_number0]));

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

  const evtC = async () => {
    mV(); hV();
    window[_console][_log](string018);
    window[_clearInterval](interval);
    await zzZZzZ(_number1987);
    interval = _null;
    isResumingEpisode = _true;
    clickedNext = _false;
    isWatching = _true;
    check();
    await zzZZzZ(_number1987);

    if (!closeHasClickEvt) {
      closeHasClickEvt = _true;
      window[_document][_querySelector](_strSelector005)[_addEventListener](_click, () => {
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
    evtC();
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
      evtC();
    });
  });

  // window[_document][_querySelector](_strSelector004)[_addEventListener](_click, async () => {
  //     console[_log]('pause');
  // });

  function zzZZzZ(ms = "") {
    if (ms === "") { ms = _number1; }
    return new window[_Promise](resolve => window[_setTimeout](resolve, ms));
  }

  function numNum(min, max) {
    return window[_parseInt](window[_Math][_random]() * (max - min) + min);
  }

  function mV(mute = "") {
    if (mute === "") { mute = _true; }
    window[_document][_querySelectorAll](_strSelector013)[_forEach](item => {
      item[_muted] = mute;
    });
  }

  function hV(s = "") {
    if (s === "") { s = string017; }
    window[_document][_querySelectorAll](string011)[_forEach](item => {
      item[_style][_opacity] = s;
    });
  }

  function check() {
    interval = window[_setInterval](async () => {
      if (isWatching) {
        const sNx = () => window[_document][_querySelector](_strSelector002) || window[_document][_querySelector](_strSelector009);
        // const sRp = ()=>window[_document][_querySelector](_strSelector007);
        const nx = () => window[_document][_querySelector](_strSelector003);
        const pP = () => window[_document][_querySelector](_strSelector004);
        const vi = () => window[_document][_querySelectorAll](string011)[_number0];
        const tI = () => window[_document][_querySelector](_strSelector008);
        const adTI = () => window[_document][_querySelector](_strSelector012);

        if (vi()[_readyState] <= _number3 || !tI()) {
          mV(); hV();
        }

        if (tI()) {
          mV(_false); hV(string012);
        }

        if (!nx() && vi()[_currentTime] >= _number123) {
          window[_clearInterval](interval);
          isWaitingNext = _false; isResumingEpisode = _false; clickedNext = _false;
          check();
          return;
        }

        if (!nx() && vi()[_duration] - vi()[_currentTime] <= 16) {
          window[_clearInterval](interval);
          return;
        }

        if (nx() && !isWaitingNext && !clickedNext) {
          window[_clearInterval](interval);
          window[_console][_log](string014);
          // window[_console][_log](nx());
          isWaitingNext = _true; clickedNext = _false; isResumingEpisode = _false;
          tmpCounter = _number0;
          window[_console][_log]('Next : ' + nx()[_innerText]);
          check();
          return;
        }

        if (nx() && isWaitingNext && !clickedNext) {
          if (vi()[_duration] - vi()[_currentTime] <= _number23 && !clickedNext) {
            window[_clearInterval](interval);
            window[_console][_log](string022);
            await zzZZzZ(_number777 + numNum(_number0, _number30) - _number23);
            mV(); hV();
            nx().focus();
            await zzZZzZ(_number23);
            nx()[_click]();
            window[_console][_log](`${string020} ${nx()[_innerText]}`);
            clickedNext = _true;
            await zzZZzZ(_number387);
            // window[_console][_log]("isWaitingNext:", isWaitingNext);
            // window[_console][_log]("clickedNext:", clickedNext);
            // window[_console][_log]("isResumingEpisode:", isResumingEpisode);
            check();
            return;
          } else {
            let c = window[_parseInt](vi()[_duration] - vi()[_currentTime]);
            if (c < tmpCounter || tmpCounter === _number0) {
              tmpCounter = c;
              window[_console][_log](`remaining : ${c} seconds`);
            }
            return;
          }
        }

        if ((isWaitingNext || isResumingEpisode || clickedNext)
          && sNx()[_innerText][_match](regExpSkip)
          && !nx()) {
          window[_clearInterval](interval);
          window[_console][_log](string023);
          // window[_console][_log](sNx);
          mV(); hV();
          isWaitingNext = _false; isResumingEpisode = _false; clickedNext = _false;
          await zzZZzZ(_number666);
          sNx().focus();
          await zzZZzZ(_number1);
          sNx()[_click]();
          window[_console][_log](string015);
          mV(_false); hV(string012);
          await zzZZzZ(_number1987 * _number3 + numNum(_number323, _number387));
          await zzZZzZ(_number1987 * _number3 + numNum(_number323, _number387));
          await zzZZzZ(_number1987 * _number3 + numNum(_number323, _number387));
          // window[_console][_log]("isWaitingNext:", isWaitingNext);
          // window[_console][_log]("clickedNext:", clickedNext);
          // window[_console][_log]("isResumingEpisode:", isResumingEpisode);
          check();
          return;
        }
      }
    }, (() => {
      const vi = () => window[_document][_querySelectorAll](string011)[_number0];
      let t = !isWaitingNext && !isResumingEpisode && !clickedNext
        ? numNum(_number14750, _number15250)
        : numNum(_number123, _number187)
        ;
      // let t = numNum(_number233, _number323);
      window[_console][_log]({ t, c: "c:" + vi()[_currentTime], r: "r:" + (vi()[_duration] - vi()[_currentTime]) });
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