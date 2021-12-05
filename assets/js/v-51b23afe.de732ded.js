"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[762],{4511:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n={key:"v-51b23afe",path:"/launching-the-exploit.html",title:"Launching the Exploit",lang:"en-US",frontmatter:{title:"Launching the Exploit"},excerpt:"",headers:[{level:2,title:"Requirements",slug:"requirements",children:[]},{level:2,title:"Section I - SD card setup",slug:"section-i-sd-card-setup",children:[{level:3,title:"Memory Pit",slug:"memory-pit",children:[]},{level:3,title:"TWiLight Menu++",slug:"twilight-menu",children:[]}]},{level:2,title:"Section II - Launching the exploit",slug:"section-ii-launching-the-exploit",children:[]},{level:2,title:"Section III - Configuring TWiLight Menu++",slug:"section-iii-configuring-twilight-menu",children:[]}],filePathRelative:"launching-the-exploit.md",git:{updatedTime:163872129e4,contributors:[{name:"emiyl",email:"me@emiyl.com",commits:1}]}}},690:(e,t,i)=>{i.r(t),i.d(t,{default:()=>fe});var n=i(6252);const o=(0,n._)("p",null,'We\'ll start by first setting up your SD card to launch our exploit. For most users, we recommend using an exploit called "Memory Pit" which takes advantage of a flaw in how the Nintendo DSi Camera application handles image metadata.',-1),l=(0,n._)("p",null,"Launching the exploit will boot you into TWiLight Menu++, a homebrew application that acts as a replacement to the DSi Menu.",-1),a=(0,n._)("h2",{id:"requirements",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),(0,n.Uk)(" Requirements")],-1),r=(0,n._)("li",null,"A way to copy downloaded files to your SD card",-1),s=(0,n.Uk)("An application that can extract archives, such as "),u={href:"https://www.7-zip.org/",target:"_blank",rel:"noopener noreferrer"},c=(0,n.Uk)("7-Zip"),d=(0,n.Uk)(" (Windows) or "),h={href:"https://apps.apple.com/us/app/the-unarchiver/id425424353",target:"_blank",rel:"noopener noreferrer"},p=(0,n.Uk)("The Unarchiver"),m=(0,n.Uk)(" (macOS)"),g=(0,n._)("h2",{id:"section-i-sd-card-setup",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#section-i-sd-card-setup","aria-hidden":"true"},"#"),(0,n.Uk)(" Section I - SD card setup")],-1),f={class:"custom-container warning"},_=(0,n._)("p",{class:"custom-container-title"},"WARNING",-1),y=(0,n.Uk)("Ensure your SD card is "),k=(0,n.Uk)("formatted correctly"),w=(0,n.Uk)("."),S={class:"custom-container tip"},U=(0,n._)("p",{class:"custom-container-title"},"TIP",-1),b=(0,n.Uk)("Using a Windows, Linux or macOS device? Use "),D=(0,n.Uk)("Lazy DSi Downloader"),v=(0,n.Uk)(" to automatically setup your SD card."),W=(0,n._)("h3",{id:"memory-pit",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#memory-pit","aria-hidden":"true"},"#"),(0,n.Uk)(" Memory Pit")],-1),x=(0,n.Uk)("Ensure that the Nintendo DSi Camera application does not show the tutorial after launch "),T=(0,n.Uk)("If it does show, go through it until you're done "),I=(0,n.Uk)("If the tutorial crashes as you try to complete it, your Nintendo DSi camera hardware is likely broken in some way. Please use an "),M=(0,n.Uk)("alternate exploit"),L=(0,n.uE)('<li>Download the Memory Pit binary for the version and region of your Nintendo DSi system <ul><li>For versions <a href="/assets/files/memory_pit/256/pit.bin">1.0 - 1.3 (USA, EUR, AUS, JPN)</a></li><li>For versions <a href="/assets/files/memory_pit/768_1024/pit.bin">1.4 - 1.4.5 (USA, EUR, AUS, JPN)</a></li><li>All versions <a href="/assets/files/memory_pit/256/pit.bin">(KOR, CHN)</a></li></ul></li><li>Make sure the following path exists on your SD card: <code>sd:/private/ds/app/484E494A/</code><ul><li>You will already have this directory if you have previously copied photos to your SD card via the Nintendo DSi Camera application. If so, you do not need to delete it and recreate it</li><li>If it does not exist, please create the individual folders</li></ul></li><li>If there is already a <code>pit.bin</code> file in that path, create a backup of that file</li><li>Place the Memory Pit <code>pit.bin</code> file in this folder</li>',4),N={class:"custom-container tip"},P=(0,n._)("p",{class:"custom-container-title"},"TIP",-1),A=(0,n.Uk)("For an understanding on why we're doing this, please see the "),E=(0,n.Uk)("FAQ"),C=(0,n.Uk)("."),O=(0,n._)("h3",{id:"twilight-menu",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#twilight-menu","aria-hidden":"true"},"#"),(0,n.Uk)(" TWiLight Menu++")],-1),R=(0,n.Uk)("Download the latest release of "),q={href:"https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z",target:"_blank",rel:"noopener noreferrer"},z=(0,n.Uk)("TWiLight Menu++"),F=(0,n._)("li",null,[(0,n.Uk)("Extract the "),(0,n._)("code",null,"_nds"),(0,n.Uk)(" folder from "),(0,n._)("code",null,"TWiLightMenu-DSi.7z"),(0,n.Uk)(" to the root of your SD card")],-1),Y=(0,n._)("li",null,[(0,n.Uk)("Extract the "),(0,n._)("code",null,"BOOT.NDS"),(0,n.Uk)(" file from "),(0,n._)("code",null,"TWiLightMenu-DSi.7z"),(0,n.Uk)(" to the root of your SD card")],-1),B={class:"custom-container tip"},G=(0,n._)("p",{class:"custom-container-title"},"TIP",-1),H=(0,n.Uk)('Unsure what the SD "root" is? '),Z={href:"https://media.discordapp.net/attachments/489307733074640926/756947922804932739/wherestheroot.png",target:"_blank",rel:"noopener noreferrer"},J=(0,n.Uk)("See this image"),K=(0,n.Uk)("."),Q=(0,n._)("h2",{id:"section-ii-launching-the-exploit",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#section-ii-launching-the-exploit","aria-hidden":"true"},"#"),(0,n.Uk)(" Section II - Launching the exploit")],-1),X=(0,n._)("li",null,"Ensure your SD card is inserted into your Nintendo DSi",-1),j=(0,n._)("li",null,"Boot your Nintendo DSi and launch the Nintendo DSi Camera application",-1),V=(0,n.Uk)("Select the SD Card icon in the top-right "),$=(0,n._)("li",null,"If you receive a message saying your SD card isn't inserted, please use another SD card",-1),ee=(0,n.Uk)("If you receive a message saying that your SD card cannot be used, ensure your SD card is "),te=(0,n.Uk)("formatted correctly"),ie=(0,n._)("li",null,[(0,n.Uk)("Open the album using the large button on the right "),(0,n._)("ul",null,[(0,n._)("li",null,"The screen should flash magenta if Memory Pit was copied correctly")])],-1),ne={class:"custom-container warning"},oe=(0,n._)("p",{class:"custom-container-title"},"WARNING",-1),le=(0,n.Uk)("If the top screen turns green, you do not have TWiLight Menu++'s "),ae=(0,n._)("code",null,"BOOT.NDS",-1),re=(0,n.Uk)(" on the root of your SD card. Follow the "),se=(0,n.Uk)("TWiLight Menu++ setup guide"),ue=(0,n.Uk)(" again."),ce=(0,n.uE)('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If you enter the SD card camera album and nothing unusual happens, ensure that you downloaded the correct version of Memory Pit for your version and region, and placed it into the correct folder on your SD card.</p></div><p>You should now see the TWiLight Menu++ language selection.</p><h2 id="section-iii-configuring-twilight-menu" tabindex="-1"><a class="header-anchor" href="#section-iii-configuring-twilight-menu" aria-hidden="true">#</a> Section III - Configuring TWiLight Menu++</h2><ol><li>When prompted, set your preferred language and region <ul><li>The default region setting, Game-specific, is generally recommended</li></ul></li><li>Once you&#39;re in TWiLight Menu++, press SELECT to switch to the DS Classic Menu</li><li>Tap the DS icon in the bottom middle to open settings</li><li>Use the <kbd class="l">L</kbd> / <kbd class="r">R</kbd> or <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> buttons to switch over to the &quot;Misc. settings&quot; page</li><li>Switch the &quot;SysNAND Region&quot; entry to your console&#39;s region</li><li>Press <kbd class="face">B</kbd> to save and exit TWiLight Menu++ settings</li></ol><p>You are now able to use TWiLight Menu++, however it&#39;s recommended to continue on and make a NAND backup. This can potentially be used to save your console if anything bad happens in the future.</p>',5),de={class:"custom-container tip"},he=(0,n._)("p",{class:"custom-container-title"},"TIP",-1),pe=(0,n.Uk)("Continue to "),me=(0,n.Uk)("Dumping NAND"),ge={},fe=(0,i(3744).Z)(ge,[["render",function(e,t){const i=(0,n.up)("OutboundLink"),ge=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,l,a,(0,n._)("ul",null,[r,(0,n._)("li",null,[s,(0,n._)("a",u,[c,(0,n.Wm)(i)]),d,(0,n._)("a",h,[p,(0,n.Wm)(i)]),m])]),g,(0,n._)("div",f,[_,(0,n._)("p",null,[y,(0,n.Wm)(ge,{to:"sd-card-setup"},{default:(0,n.w5)((()=>[k])),_:1}),w])]),(0,n._)("div",S,[U,(0,n._)("p",null,[b,(0,n.Wm)(ge,{to:"lazy-dsi-downloader"},{default:(0,n.w5)((()=>[D])),_:1}),v])]),W,(0,n._)("ol",null,[(0,n._)("li",null,[x,(0,n._)("ul",null,[(0,n._)("li",null,[T,(0,n._)("ul",null,[(0,n._)("li",null,[I,(0,n.Wm)(ge,{to:"alternate-exploits"},{default:(0,n.w5)((()=>[M])),_:1})])])])])]),L]),(0,n._)("div",N,[P,(0,n._)("p",null,[A,(0,n.Wm)(ge,{to:"faq.html#what-functionality-will-i-lose-by-modding-my-system"},{default:(0,n.w5)((()=>[E])),_:1}),C])]),O,(0,n._)("ol",null,[(0,n._)("li",null,[R,(0,n._)("a",q,[z,(0,n.Wm)(i)])]),F,Y]),(0,n._)("div",B,[G,(0,n._)("p",null,[H,(0,n._)("a",Z,[J,(0,n.Wm)(i)]),K])]),Q,(0,n._)("ol",null,[X,j,(0,n._)("li",null,[V,(0,n._)("ul",null,[$,(0,n._)("li",null,[ee,(0,n.Wm)(ge,{to:"sd-card-setup"},{default:(0,n.w5)((()=>[te])),_:1})])])]),ie]),(0,n._)("div",ne,[oe,(0,n._)("p",null,[le,ae,re,(0,n.Wm)(ge,{to:"launching-the-exploit.html#twilight-menu"},{default:(0,n.w5)((()=>[se])),_:1}),ue])]),ce,(0,n._)("div",de,[he,(0,n._)("p",null,[pe,(0,n.Wm)(ge,{to:"dumping-nand"},{default:(0,n.w5)((()=>[me])),_:1})])])],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{const i=e.__vccOpts||e;for(const[e,n]of t)i[e]=n;return i}}}]);