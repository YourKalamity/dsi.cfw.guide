"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2980],{7483:(e,n,a)=>{a.r(n),a.d(n,{data:()=>i});const i={key:"v-1c7bb168",path:"/pl_PL/troubleshooting.html",title:"Rozwiązywanie problemów",lang:"pl-PL",frontmatter:{title:"Rozwiązywanie problemów"},excerpt:"",headers:[{level:2,title:"Unlaunch",slug:"unlaunch",children:[{level:3,title:"Czy Unlaunch zamraża się na MISMATCH IN FAT COPIES",slug:"czy-unlaunch-zamraza-sie-na-mismatch-in-fat-copies",children:[]},{level:3,title:'Nie ma dźwięku lub boot splashu podczas uruchamiania "LAUNCHER" za pomocą Unlaunch',slug:"nie-ma-dzwieku-lub-boot-splashu-podczas-uruchamiania-launcher-za-pomoca-unlaunch",children:[]},{level:3,title:"Powering on only shows a black screen after installing Unlaunch",slug:"powering-on-only-shows-a-black-screen-after-installing-unlaunch",children:[]},{level:3,title:"After installing Unlaunch, I'm stuck booting into an application",slug:"after-installing-unlaunch-i-m-stuck-booting-into-an-application",children:[]},{level:3,title:"Other Unlaunch problems",slug:"other-unlaunch-problems",children:[]}]},{level:2,title:"TWiLight Menu++  troubleshooting",slug:"twilight-menu-troubleshooting",children:[]},{level:2,title:"Further assistance",slug:"further-assistance",children:[]}],filePathRelative:"pl_PL/troubleshooting.md",git:{updatedTime:163872129e4,contributors:[{name:"emiyl",email:"me@emiyl.com",commits:1}]}}},815:(e,n,a)=>{a.r(n),a.d(n,{default:()=>E});var i=a(6252);const o=(0,i.uE)('<h2 id="unlaunch" tabindex="-1"><a class="header-anchor" href="#unlaunch" aria-hidden="true">#</a> Unlaunch</h2><h3 id="czy-unlaunch-zamraza-sie-na-mismatch-in-fat-copies" tabindex="-1"><a class="header-anchor" href="#czy-unlaunch-zamraza-sie-na-mismatch-in-fat-copies" aria-hidden="true">#</a> Czy Unlaunch zamraża się na <code>MISMATCH IN FAT COPIES</code></h3><p>twlnf ma krytyczny błąd, w którym nie aktualizuje poprawnie całego NAND po jego modyfikacji, który powoduje, że niektóre homebrew (takie jak Unlaunch installer) wyrzucą błąd.</p><p>O ile jest to naprawialne, metoda w dużej mierze różni się w zależności od systemów. Jedną z metod jest usunięcie dowolnego DSiWare zainstalowanego przez twlnf, ale zgłoszono również, że przeniesienie <em>wszystkich</em> DSiWare na kartę SD i powrót do systemu może również okazać się pomocne.</p><p>If you have downgraded the system in the past, updating back to v1.4.5 (or v1.4.6 if your DSi region is Chinese or Korean) can help fix this bug as well.</p><p>If the issue persists, try this:</p>',6),t=(0,i.Uk)("Mount your NAND backup with "),l={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},r=(0,i.Uk)("ninfs"),s=(0,i.Uk)(", and enable the "),h=(0,i._)("code",null,"Allow writing",-1),u=(0,i.Uk)(" option"),c=(0,i.Uk)("Once your NAND backup is mounted, mount "),d=(0,i._)("code",null,"twl_main.img",-1),p=(0,i.Uk)(". If you are using Windows, you can use "),m={href:"https://www.osforensics.com/tools/mount-disk-images.html",target:"_blank",rel:"noopener noreferrer"},g=(0,i.Uk)("OSFMount"),k=(0,i.Uk)(" to mount the image"),w=(0,i._)("li",null,[(0,i.Uk)("Unmount "),(0,i._)("code",null,"twl_main.img"),(0,i.Uk)(", then unmount the NAND backup in ninfs If the NAND was saved, follow "),(0,i._)("a",{href:"restoring-nand"},"Restoring NAND"),(0,i.Uk)(" and continue with "),(0,i._)("a",{href:"installing-unlaunch"},"Installing Unlaunch"),(0,i.Uk)(".")],-1),b=(0,i._)("h3",{id:"nie-ma-dzwieku-lub-boot-splashu-podczas-uruchamiania-launcher-za-pomoca-unlaunch",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#nie-ma-dzwieku-lub-boot-splashu-podczas-uruchamiania-launcher-za-pomoca-unlaunch","aria-hidden":"true"},"#"),(0,i.Uk)(' Nie ma dźwięku lub boot splashu podczas uruchamiania "LAUNCHER" za pomocą Unlaunch')],-1),f=(0,i.Uk)("Twórca Unlaunch (nocash) celowo załatał domyślnie dźwięk w tle i boot-splash. You can regain these effects by "),y=(0,i._)("a",{href:"installing-unlaunch"},"reinstalling Unlaunch",-1),U=(0,i.Uk)(" using TWiLight Menu++, or by using "),z={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},_=(0,i.Uk)("hiyaCFW"),N=(0,i.Uk)("."),v=(0,i._)("h3",{id:"powering-on-only-shows-a-black-screen-after-installing-unlaunch",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#powering-on-only-shows-a-black-screen-after-installing-unlaunch","aria-hidden":"true"},"#"),(0,i.Uk)(" Powering on only shows a black screen after installing Unlaunch")],-1),D=(0,i.Uk)("Try ejecting the SD card and powering the console on again. If it still only shows a black screen, you may need to flash your NAND via a "),A={href:"https://wiki.ds-homebrew.com/ds-index/hardmod",target:"_blank",rel:"noopener noreferrer"},T=(0,i.Uk)("hardmod"),I=(0,i.Uk)("."),S=(0,i.uE)('<h3 id="after-installing-unlaunch-i-m-stuck-booting-into-an-application" tabindex="-1"><a class="header-anchor" href="#after-installing-unlaunch-i-m-stuck-booting-into-an-application" aria-hidden="true">#</a> After installing Unlaunch, I&#39;m stuck booting into an application</h3><p>This was likely caused by choosing the wrong app for the <code>NO BUTTON</code> option in Unlaunch. Hold <kbd class="face">A</kbd> + <kbd class="face">B</kbd> while starting the console, go to <code>OPTIONS</code>, and set <code>NO BUTTON</code> to whatever your preference is.</p><h3 id="other-unlaunch-problems" tabindex="-1"><a class="header-anchor" href="#other-unlaunch-problems" aria-hidden="true">#</a> Other Unlaunch problems</h3><p>If Unlaunch displays <code>Clusters too large</code>, <code>Bad VBR</code>, <code>Bad MBR</code>, or doesn&#39;t display any applications while the SD card is inserted, your SD card likely wasn&#39;t formatted correctly. Re-follow <a href="sd-card-setup">SD Card Setup</a>.</p><h2 id="twilight-menu-troubleshooting" tabindex="-1"><a class="header-anchor" href="#twilight-menu-troubleshooting" aria-hidden="true">#</a> TWiLight Menu++ troubleshooting</h2>',5),O=(0,i.Uk)("For general TWiLight Menu++ troubleshooting, see its "),W={href:"https://wiki.ds-homebrew.com/twilightmenu/faq",target:"_blank",rel:"noopener noreferrer"},C=(0,i.Uk)("FAQ & Troubleshooting"),M=(0,i.Uk)(" page on the DS-Homebrew Wiki."),x=(0,i._)("h2",{id:"further-assistance",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#further-assistance","aria-hidden":"true"},"#"),(0,i.Uk)(" Further assistance")],-1),j=(0,i.Uk)("If you have encountered an issue that is not solved here, or one that persists despite the given solutions, ask for assistance in the "),L={href:"https://discord.gg/yD3spjv",target:"_blank",rel:"noopener noreferrer"},P=(0,i.Uk)("DS"),R=(0,i._)("sup",null,"(i)",-1),F=(0,i.Uk)(" Mode Hacking!"),H=(0,i.Uk)(" Discord server."),B={},E=(0,a(3744).Z)(B,[["render",function(e,n){const a=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[o,(0,i._)("ol",null,[(0,i._)("li",null,[t,(0,i._)("a",l,[r,(0,i.Wm)(a)]),s,h,u]),(0,i._)("li",null,[c,d,p,(0,i._)("a",m,[g,(0,i.Wm)(a)]),k]),w]),b,(0,i._)("p",null,[f,y,U,(0,i._)("a",z,[_,(0,i.Wm)(a)]),N]),v,(0,i._)("p",null,[D,(0,i._)("a",A,[T,(0,i.Wm)(a)]),I]),S,(0,i._)("p",null,[O,(0,i._)("a",W,[C,(0,i.Wm)(a)]),M]),x,(0,i._)("p",null,[j,(0,i._)("a",L,[P,R,F,(0,i.Wm)(a)]),H])],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,i]of n)a[e]=i;return a}}}]);