"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9585],{9392:(e,a,l)=>{l.r(a),l.d(a,{data:()=>i});const i={key:"v-4fe298b2",path:"/hu_HU/dsiware-backups.html",title:"DSiWare mentések",lang:"hu-HU",frontmatter:{},excerpt:"",headers:[{level:2,title:"Követelmények",slug:"kovetelmenyek",children:[]},{level:2,title:"Nintendo DSi - Lépések",slug:"nintendo-dsi-lepesek",children:[{level:3,title:"I. rész - A szükséges DSiWare azonosítása",slug:"i-resz-a-szukseges-dsiware-azonositasa",children:[]},{level:3,title:"II. rész - A DSiWare kiszedése",slug:"ii-resz-a-dsiware-kiszedese",children:[]},{level:3,title:"II. rész - A mentés fájl kiszedése (opionális)",slug:"ii-resz-a-mentes-fajl-kiszedese-opionalis",children:[]}]}],filePathRelative:"hu_HU/dsiware-backups.md",git:{updatedTime:1635626937e3,contributors:[{name:"Pk11",email:"epicpkmn11@outlook.com",commits:1}]}}},2783:(e,a,l)=>{l.r(a),l.d(a,{default:()=>z});var i=l(6252);const t=(0,i._)("h1",{id:"dsiware-mentesek",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#dsiware-mentesek","aria-hidden":"true"},"#"),(0,i.Uk)(" DSiWare mentések")],-1),s=(0,i._)("h2",{id:"kovetelmenyek",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#kovetelmenyek","aria-hidden":"true"},"#"),(0,i.Uk)(" Követelmények")],-1),d=(0,i.Uk)("A "),n={href:"https://github.com/RocketRobz/godmode9i/releases",target:"_blank",rel:"noopener noreferrer"},o=(0,i.Uk)("GodMode9i"),r=(0,i.Uk)(" legfrissebb kiadása "),c=(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Uk)("Töltsd le az archívot, csomagold ki a tartalmát és helyezd a"),(0,i._)("code",null,"GodMode9i.nds"),(0,i.Uk)("-t bárhova az SD kártyára")])],-1),k=(0,i.uE)('<h2 id="nintendo-dsi-lepesek" tabindex="-1"><a class="header-anchor" href="#nintendo-dsi-lepesek" aria-hidden="true">#</a> Nintendo DSi - Lépések</h2><h3 id="i-resz-a-szukseges-dsiware-azonositasa" tabindex="-1"><a class="header-anchor" href="#i-resz-a-szukseges-dsiware-azonositasa" aria-hidden="true">#</a> I. rész - A szükséges DSiWare azonosítása</h3><ol><li>Indítsd el a GodMode9i és válaszd a <code>[nand:] SYSNAND</code> opciót</li><li>Navigálj a <code>title</code> mappába</li><li>Válaszd ki a megfelelő mappát a kategóriához, amit keresel <ul><li><code>00030004</code>: Standard DSiWare</li><li><code>00030005</code>: Előre telepített Fun Tools</li><li><code>0003000f</code>: Rendszer adat (nem-DSiWare fájlok, nem futtathatók)</li><li><code>00030015</code>: Rendszer alap eszközök</li><li><code>00030017</code>: Indító (Launcher)</li></ul></li><li>Ha kiválasztottad milyen típusú DSiWare-t szeretnél kiszedni, lépj be az almappába, majd utána a <code>content</code>-be</li><li>Ott egy <code>.app</code> fájl kell látható legyen. Válaszd ki a fájlt, majd a <code>Show NDS file info</code> opciót. Ez megmondja neked, hogy ez-e az a DSiWare, amit keresel <ul><li>Ha ez nem az a DSiWare, ait keresel, folytasd a keresést a többi mappában, amíg meg nem találod</li><li>A <code>0003000f</code> mappában található fájloknak nem megtekinthető az NDS infója, mert azok nem futtatható DSiWare-k és nem tartalmaznak érvényes fejlécet</li></ul></li></ol><h3 id="ii-resz-a-dsiware-kiszedese" tabindex="-1"><a class="header-anchor" href="#ii-resz-a-dsiware-kiszedese" aria-hidden="true">#</a> II. rész - A DSiWare kiszedése</h3><ol><li>Jelöld ki az <code>.app</code> fájlt, majd nyomj <kbd class="face">Y</kbd>-t, hogy a vágólaphoz add</li><li>Navigálj az SD kártyán abba a könyvtárba, ahová a dumpolt DSiWare címet szeretnéd rakni</li><li>Nyomj <kbd class="face">Y</kbd>-t ismét a DSiWare cím beillesztéséhez abba a könyvtárba, ahova navigáltál <ul><li>Módosíthatod a fájlnevet beillesztése után az <kbd class="face">X</kbd> megnyomásával, az <kbd class="R">R</kbd> nyomva tartása mellett</li><li>Ismételd meg ezt minden fájllal, amit ugyanabba a könyvtárba másolnál</li></ul></li></ol><p>Most már látnod kell egy DSiWare címet a TWiLight Menu++-ban vagy az Unlaunch Filemenu-ben.</p><h3 id="ii-resz-a-mentes-fajl-kiszedese-opionalis" tabindex="-1"><a class="header-anchor" href="#ii-resz-a-mentes-fajl-kiszedese-opionalis" aria-hidden="true">#</a> II. rész - A mentés fájl kiszedése (opionális)</h3><ol><li>Abban a mappában, ahol a <code>content</code> van a kiválaszott DSiWare-hez található egy mappa <code>data</code> néven</li><li>A <code>data</code> mappában található a mentés fájl. Másold ezt a fájl az SD kártyára, úgy, ahogy a DSiWare címmel is csináltad <ul><li>Az Unlaunch és az nds-bootstrap <code>.pub</code> és <code>.prv</code> fájl kiterjesztéseket használ a DSiWare mentés fájlokhoz. Ha a DSiWare mentés fájlod neve eredetileg <code>public.sav</code>, használd a <code>.pub</code> kiterjesztést, ha pedig <code>private.sav</code>, használd a <code>.prv</code> kiterjesztést</li><li>Ha szeretnéd használni a DSiWare mentés fájlt a TWiLight Menu++-szal, biztosítsd, hogy a <code>saves</code> mappába kerüljön ott, ahol a ROM található</li></ul></li></ol>',8),h={},z=(0,l(3744).Z)(h,[["render",function(e,a){const l=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[t,s,(0,i._)("ul",null,[(0,i._)("li",null,[d,(0,i._)("a",n,[o,(0,i.Wm)(l)]),r,c])]),k],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{for(const[l,i]of a)e[l]=i;return e}}}]);