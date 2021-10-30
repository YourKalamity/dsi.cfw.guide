"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2138],{7291:(e,a,l)=>{l.r(a),l.d(a,{data:()=>t});const t={key:"v-5eb53a36",path:"/hu_HU/restoring-nand.html",title:"A NAND biztonsági másolat visszaállítása",lang:"hu-HU",frontmatter:{},excerpt:"",headers:[{level:2,title:"Követelmények",slug:"kovetelmenyek",children:[]},{level:2,title:"A BIOS dumpolása a no$gba-ban történő használathoz",slug:"a-bios-dumpolasa-a-no-gba-ban-torteno-hasznalathoz",children:[]},{level:2,title:"A NAND mentésed tesztelése",slug:"a-nand-mentesed-tesztelese",children:[]},{level:2,title:"Az Unlaunch eltávolítása a NAND mentésedből (opcionális)",slug:"az-unlaunch-eltavolitasa-a-nand-mentesedbol-opcionalis",children:[]},{level:2,title:"A NAND mentés flashelése (szoftver)",slug:"a-nand-mentes-flashelese-szoftver",children:[]},{level:2,title:"NAND mentés flashelése (Hardmod)",slug:"nand-mentes-flashelese-hardmod",children:[]}],filePathRelative:"hu_HU/restoring-nand.md",git:{updatedTime:1635626937e3,contributors:[{name:"Pk11",email:"epicpkmn11@outlook.com",commits:1}]}}},9813:(e,a,l)=>{l.r(a),l.d(a,{default:()=>q});var t=l(6252);const n=(0,t.uE)('<h1 id="a-nand-biztonsagi-masolat-visszaallitasa" tabindex="-1"><a class="header-anchor" href="#a-nand-biztonsagi-masolat-visszaallitasa" aria-hidden="true">#</a> A NAND biztonsági másolat visszaállítása</h1><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>FIGYELEM! Ez <em><strong>veszélyes</strong></em>. Még ha követed is pontosan a lépéseket, meg van a lehetősége annak, hogy brick-eled a DSi-t - mert a NAND nagyon alacsony minőségű - főleg akkor, ha többször flashelsz! Ezt az utolsó lehetőségként szabad csak használni!</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Ne ugorj át <em>semmit</em> ezen az oldalon, bármi hiba erősen növeli a DSi-d brick-elésének esélyeit.</p></div><p>Először, pár biztonságos alternatíva, hogy miért érdemes ezt tenni:</p>',4),o=(0,t._)("li",null,"DSiWare-ek telepítése történhet a hiyaCFW vagy a TWiLight Menu++ alkalmazással",-1),s=(0,t.Uk)("A képek helyreállítása elvégezhető a "),i={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},d=(0,t.Uk)("ninfs"),r=(0,t.Uk)(" segítségével, kombinálva a a hiyaCFW vagy a TWiLight Menu++ alkalmazással, ha szeretnéd őket a konzolon. A HiyaCFW Helper legutolsó verziója lehetővé teszi, hogy kimásold a fotóid a NAND-ról az SDNAND-odra a telepítés során"),h=(0,t._)("li",null,[(0,t.Uk)("Az Unlaunch gomb konfiguráció helyreállítás megtörténhet az Unlaunch menüből, ami a bekapcsoláskor nyomva tartott "),(0,t._)("kbd",{class:"face"},"A"),(0,t.Uk)(" + "),(0,t._)("kbd",{class:"face"},"B"),(0,t.Uk)(" gombokkal érhető el")],-1),m=(0,t._)("li",null,"Az Unlaunch-ba bootolás hibát adott? Vedd ki az SD kártyád és próbáld újra indítani a rendszered. Ha működik, akkor a hiba az SD kártyáddal van és a NAND mentés helyreállítása nem fogja javítani azt",-1),k=(0,t.Uk)('Az "An error has occurred..." üzenet bootoláskor valószínűleg egy hiyaCFW hiba és nem kapcsolódik a NAND-hoz, lásd a '),c={href:"https://wiki.ds-homebrew.com/hiyacfw/faq",target:"_blank",rel:"noopener noreferrer"},b=(0,t.Uk)("hiyaCFW GYIK & hibaelhárítás"),z=(0,t.Uk)(" oldalt a DS-Homebrew Wiki-n további információkért"),u=(0,t.Uk)("Bármi hiba a TWiLight Menu++-ben nem kapcsolódik, meg kell próbálnod újra telepíteni a TWiLight Menu++-t vagy kérj segítséget a "),g={href:"https://ds-homebrew.com/discord",target:"_blank",rel:"noopener noreferrer"},p=(0,t.Uk)("Discord szerveren"),v=(0,t._)("li",null,'Az Unlaunch eltávolítása, akár a NAND flashelésével vagy az uninstallerrel, kerülendő, amíg kifejezetten nem szükséges; beállíthatod az autoboot gombokat "Launcher"-re és a DSi-d olyan lesz mint a gyári',-1),f=(0,t._)("p",null,"Az egyetlen dolog, amit a NAND-oddal kell tenned az az Unlaunch telepítése. Használd az alternatívakat egyébként.",-1),N=(0,t._)("h2",{id:"kovetelmenyek",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#kovetelmenyek","aria-hidden":"true"},"#"),(0,t.Uk)(" Követelmények")],-1),y=(0,t._)("li",null,[(0,t.Uk)("A NAND mentésed "),(0,t._)("strong",null,"ugyanarról a DSi-ről")],-1),A=(0,t.Uk)("A "),D={href:"https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds",target:"_blank",rel:"noopener noreferrer"},U=(0,t.Uk)("SafeNANDManager"),S=(0,t.Uk)(" legutolsó kiadása"),_=(0,t._)("li",null,"Egy mód arra, hogy homebrew-ot futtass NAND hozzáféréssel, mint az Unlaunch vagy a Memory Pit",-1),E={href:"https://problemkaputt.de/gba.htm",target:"_blank",rel:"noopener noreferrer"},M=(0,t.Uk)("no$gba"),W=(0,t.Uk)(", a NAND mentésed ellenőrzéséhez (Töltsd le a 'Windows gaming version'-t) "),j=(0,t.Uk)("macOS és Linux felhasználók használhatják a "),H={href:"https://winehq.org",target:"_blank",rel:"noopener noreferrer"},w=(0,t.Uk)("WINE"),I=(0,t.Uk)("-t a no$gba futtatásához"),B={href:"http://melonds.kuribo64.net/downloads/dsibiosdumper.7z",target:"_blank",rel:"noopener noreferrer"},O=(0,t.Uk)("dsibiosdumper"),C=(0,t.uE)('<h2 id="a-bios-dumpolasa-a-no-gba-ban-torteno-hasznalathoz" tabindex="-1"><a class="header-anchor" href="#a-bios-dumpolasa-a-no-gba-ban-torteno-hasznalathoz" aria-hidden="true">#</a> A BIOS dumpolása a no$gba-ban történő használathoz</h2><ol><li>Csomagold ki az <code>dsibiosdumper.nds</code>-t az <code>dsibiosdumper.zip</code> archívból és rakd valahova az SD kártyádon</li><li>Kapcsold be a konzolod, miközben nyomva tartod az <kbd class="face">A</kbd> és <kbd class="face">B</kbd> gombokat <ul><li>Ez el kell indítsa az Unlaunch Filemenu-t</li></ul></li><li>Indítsd el dsibiosdumper-t az Unlaunch Filemenu-ből</li><li>Nyomj <kbd class="face">A</kbd> gombot a BIOS SD kártyára dumpolásához</li><li>Nyomj <kbd>START</kbd> gombot a dsibiosdumper-ből kilépéshez</li></ol><h2 id="a-nand-mentesed-tesztelese" tabindex="-1"><a class="header-anchor" href="#a-nand-mentesed-tesztelese" aria-hidden="true">#</a> A NAND mentésed tesztelése</h2><p>Nagyon fontos, hogy teszteld a NAND mentésedet, hogy működik, mielőtt helyreállítod a konzolodra; ha brick hibát mutat a no$gba-ban, akkor jó eséllyel brick-eli a konzolodat is.</p><ol><li>Csomagold ki a <code>NO$GBA.EXE</code>-t az <code>no$gba-w.zip</code> archívból és rakd egy mappába a számítógépeden</li><li>Másold a NAND mentésedet abba a mappába, ahova a <code>NO$GBA.EXE</code>-t raktad és nevezd át <code>DSI-1.MMC</code>-re</li><li>Másold a <code>bios7i.bin</code> és a <code>bios9i.bin</code> fájlokat a mappába, ahova a <code>NO$GBA.EXE</code>-t raktad, nevezd őket <code>BIOSDSI7.ROM</code> és <code>BIOSDSI9.ROM</code> nevekre.</li><li>Futtasd a <code>NO$GBA.EXE</code> fájlt</li><li>Kattints az <code>Options</code> &gt; <code>Emulation Setup</code> opciókra, hogy megnyisd az Emulation Setup ablakot</li><li>Módosítsd a <code>Reset/Startup Entrypoint</code>-ot <code>GBA/NDS BIOS (Nintendo logo)</code>-ra</li><li>Módosítsd az <code>NDS Mode/Colors</code>-t <code>DSi (retail/16MB)</code>-ra</li><li>Kattints a <code>Save Now</code>-ra</li><li>Indítsd el egy tetszőleges Nintendo DS ROM-ot (<code>.nds</code> fájl)</li></ol><p>Ha a no$gba betölti a DSi menüt (vagy az Unlaunch Filemenu-t), folytasd a következő résszel. Ha bármilyen hibát ad <em><strong>ne flasheld a mentést</strong></em>!</p><h2 id="az-unlaunch-eltavolitasa-a-nand-mentesedbol-opcionalis" tabindex="-1"><a class="header-anchor" href="#az-unlaunch-eltavolitasa-a-nand-mentesedbol-opcionalis" aria-hidden="true">#</a> Az Unlaunch eltávolítása a NAND mentésedből (opcionális)</h2><p>Kövesd ezt, ha a NAND mentésed az után készítetted, hogy telepítetted az Unlaunch-öt és el szeretnéd távolítani az Unlaunch-öt a rendszeredről. Ha nem akard eltávolítani az Unlaunch-öt, <strong>nem</strong> kell végrehajtanod ezt a részt.</p>',8),T=(0,t.Uk)("Töltsd le az "),L={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},$=(0,t.Uk)("Unlaunch"),F=(0,t.Uk)(" legfrissebb kiadását"),G=(0,t.uE)("<li>Csomagold ki az <code>UNLAUNCH.DSI</code>-t az <code>unlaunch.zip</code> fájlból</li><li>Töltsd be az <code>UNLAUNCH.DSI</code>-t a no$gba-ban és indítsd el a Game Card slot-ból <ul><li>Ez el kell indítsa az Unlaunch telepítőt, ami hasonlóan néz ki, mint az Unlaunch Filemenu</li></ul></li><li>Válaszd az <code>Uninstall</code>-t</li><li>Ha befejezte, válaszd a <code>Power down</code>-t</li><li>Tölts be bármilyen Nintendo DS ROM-ot újra és ellenőrizd, hogy a DSi menüd betölts és megfelelően működik</li>",5),R=(0,t.uE)('<h2 id="a-nand-mentes-flashelese-szoftver" tabindex="-1"><a class="header-anchor" href="#a-nand-mentes-flashelese-szoftver" aria-hidden="true">#</a> A NAND mentés flashelése (szoftver)</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Legyél biztos abban, hogy elolvastad az előző lépéseket, mert itt válik a folyamat veszélyessé. Ha közvetlenül ide lettél linkelve, az előbbiek követése nélkül, menj vissza az oldal tetejére és olvasd el az egész oldalt.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Legyél biztos abban, hogy Nintendo DSi rendszered rendesen fel van töltve, mielőtt elkezdenéd ezt a részt.</p></div><ol><li>Behelyezett SD kártyával kapcsold be a konzolod, miközben nyomva tartod az <kbd class="face">A</kbd> és <kbd class="face">B</kbd> gombokat</li><li>Indítsd el a SafeNANDManager-t</li><li>Nyomd meg a gombot, hogy <code>elkezd a NAND visszaállítást</code></li><li>Ha a visszaállítás végzett, nyomd meg a <kbd>START</kbd> gombot a DSi-d kikapcsolásáshoz</li></ol><p>A NAND-od most már helyreállított kell legyen.</p><h2 id="nand-mentes-flashelese-hardmod" tabindex="-1"><a class="header-anchor" href="#nand-mentes-flashelese-hardmod" aria-hidden="true">#</a> NAND mentés flashelése (Hardmod)</h2>',6),x=(0,t.Uk)("Ha nem tudsz bebootolni a Nintendo DSi-dbe, csak a hardmod megoldás a NAND visszaállítására mentésből. A legjobb úmtutató erre a "),K={href:"https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi",target:"_blank",rel:"noopener noreferrer"},P=(0,t.Uk)("Nintendo DSi hardmod útmutató a DS-Homebrew Wiki"),X=(0,t.Uk)("-ben."),Y={},q=(0,l(3744).Z)(Y,[["render",function(e,a){const l=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[n,(0,t._)("ul",null,[o,(0,t._)("li",null,[s,(0,t._)("a",i,[d,(0,t.Wm)(l)]),r]),h,m,(0,t._)("li",null,[k,(0,t._)("a",c,[b,(0,t.Wm)(l)]),z]),(0,t._)("li",null,[u,(0,t._)("a",g,[p,(0,t.Wm)(l)])]),v]),f,N,(0,t._)("ul",null,[y,(0,t._)("li",null,[A,(0,t._)("a",D,[U,(0,t.Wm)(l)]),S]),_,(0,t._)("li",null,[(0,t._)("a",E,[M,(0,t.Wm)(l)]),W,(0,t._)("ul",null,[(0,t._)("li",null,[j,(0,t._)("a",H,[w,(0,t.Wm)(l)]),I])])]),(0,t._)("li",null,[(0,t._)("a",B,[O,(0,t.Wm)(l)])])]),C,(0,t._)("ol",null,[(0,t._)("li",null,[T,(0,t._)("a",L,[$,(0,t.Wm)(l)]),F]),G]),R,(0,t._)("p",null,[x,(0,t._)("a",K,[P,(0,t.Wm)(l)]),X])],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{for(const[l,t]of a)e[l]=t;return e}}}]);