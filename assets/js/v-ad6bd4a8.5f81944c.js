"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2252],{4896:(e,n,i)=>{i.r(n),i.d(n,{data:()=>a});const a={key:"v-ad6bd4a8",path:"/fr_FR/faq.html",title:"FAQ",lang:"fr-FR",frontmatter:{},excerpt:"",headers:[{level:2,title:"Quelles fonctionnalités vais-je perdre en moddant mon système ?",slug:"quelles-fonctionnalites-vais-je-perdre-en-moddant-mon-systeme",children:[]},{level:2,title:"How do I play Nintendo DS Game Card dumps?",slug:"how-do-i-play-nintendo-ds-game-card-dumps",children:[]},{level:2,title:"Comment puis-je mettre à jour mon homebrew?",slug:"comment-puis-je-mettre-a-jour-mon-homebrew",children:[]},{level:2,title:"Je suis nouveau ou je voudrais refaire mon installation. Par où commencer ?",slug:"je-suis-nouveau-ou-je-voudrais-refaire-mon-installation-par-ou-commencer",children:[]},{level:2,title:"Comment puis-je supprimer le contrôle parental ?",slug:"comment-puis-je-supprimer-le-controle-parental",children:[]},{level:2,title:"Puis-je changer la région de ma Nintendo DSI ?",slug:"puis-je-changer-la-region-de-ma-nintendo-dsi",children:[]},{level:2,title:"What happened to the hiyaCFW installation guide?",slug:"what-happened-to-the-hiyacfw-installation-guide",children:[]}],filePathRelative:"fr_FR/faq.md",git:{updatedTime:1635626937e3,contributors:[{name:"Pk11",email:"epicpkmn11@outlook.com",commits:1}]}}},3903:(e,n,i)=>{i.r(n),i.d(n,{default:()=>K});var a=i(6252);const t=(0,a.uE)('<h1 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h1><h2 id="quelles-fonctionnalites-vais-je-perdre-en-moddant-mon-systeme" tabindex="-1"><a class="header-anchor" href="#quelles-fonctionnalites-vais-je-perdre-en-moddant-mon-systeme" aria-hidden="true">#</a> Quelles fonctionnalités vais-je perdre en moddant mon système ?</h2><ul><li>Si vous décidez d&#39;installer Unlaunch, vous ne perdrez aucune fonctionnalité du système</li><li>If you go with a Memory Pit-only setup, you will be unable to save photos to the SD card via the Nintendo DSi Camera application while the exploit is installed. Either follow <a href="alternate-exploits">Alternate Exploits</a> instead, or follow <a href="installing-unlaunch">Installing Unlaunch</a><ul><li>This is because the metadata file (<code>pit.bin</code>) is overwritten with the Memory Pit exploit</li></ul></li></ul><h2 id="how-do-i-play-nintendo-ds-game-card-dumps" tabindex="-1"><a class="header-anchor" href="#how-do-i-play-nintendo-ds-game-card-dumps" aria-hidden="true">#</a> How do I play Nintendo DS Game Card dumps?</h2><p>Playing Game Card dumps on the console requires the use of a flashcard or nds-bootstrap, a program which enables games to be played from the internal SD card by redirecting Slot-1 reads and writes to it.</p>',5),r=(0,a._)("li",null,"Avec TWiLight Menu++, vous pouvez naviguer sur votre carte SD pour trouver des fichiers ROM et y jouer avec nds-bootstrap. TWiLight Menu++ permet d'avoir un menu de triche, des paramètres par jeu et d'éviter les restrictions que les transitaires imposent. En d'autres termes, vous pouvez déposer vos fichiers ROM directement et jouer sans aucune installation. Il n'y a pas de limite de titre 39, ni hiyaCFW ni Unlaunch sont requis et il n'y a aucune restriction sur l'espace libre de la carte SD que vous pouvez avoir",-1),o=(0,a.Uk)("hiyaCFW users can create forwarders using the instructions on the "),l={href:"https://wiki.ds-homebrew.com/ds-index/forwarders?tab=tab-dsi-sd-card",target:"_blank",rel:"noopener noreferrer"},s=(0,a.Uk)("DS-Homebrew Wiki"),u=(0,a.Uk)(" for the SDNAND's DSi Menu, but it has some limitations. There is a hard limit of 39 titles, and they are less convenient to make than using TWiLight Menu++ "),d=(0,a.Uk)("If you do not have hiyaCFW and would like to use forwarders, you can follow the "),h={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("hiyaCFW installation guide"),m=(0,a.Uk)(" on the DS-Homebrew Wiki"),p=(0,a._)("h2",{id:"comment-puis-je-mettre-a-jour-mon-homebrew",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#comment-puis-je-mettre-a-jour-mon-homebrew","aria-hidden":"true"},"#"),(0,a.Uk)(" Comment puis-je mettre à jour mon homebrew?")],-1),g=(0,a._)("li",null,[(0,a._)("strong",null,"Unlaunch"),(0,a.Uk)(" — Suivez les instructions sur la page "),(0,a._)("a",{href:"installing-unlaunch"},"Installation de Unlaunch"),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("You do "),(0,a._)("strong",null,"not"),(0,a.Uk)(" need to uninstall Unlaunch before doing this")])])],-1),f=(0,a._)("strong",null,"hiyaCFW",-1),v=(0,a.Uk)(" — Remplacez "),b=(0,a._)("code",null,"hiya.dsi",-1),k=(0,a.Uk)(" à la racine de la carte SD de la "),w={href:"https://github.com/RocketRobz/hiyaCFW/releases",target:"_blank",rel:"noopener noreferrer"},y=(0,a.Uk)("version mise à jour"),_=(0,a._)("strong",null,"TWiLight Menu++",-1),j=(0,a.Uk)(" — Suivez les instructions sur le "),U={href:"https://wiki.ds-homebrew.com/twilightmenu/updating-dsi",target:"_blank",rel:"noopener noreferrer"},W=(0,a.Uk)("DS-Homebrew Wiki"),S=(0,a.uE)("<li><strong>nds-bootstrap</strong> — Copiez <code>nds-bootstrap-hb-release.nds</code> &amp; <code>nds-bootstrap-release.nds</code> dans le dossier <code>_nds</code> à la racine de votre carte SD <ul><li>Si vous utilisez TWiLight Menu++, il y a beaucoup de chance que le dernier nds-bootstrap soit inclus avec celui-ci</li></ul></li><li><strong>GodMode9i, dumpTool, Forwarder3-DS, etc</strong> - Follow the instructions used to download them</li>",2),D=(0,a.uE)('<p>D&#39;autres homebrews pourraient utiliser d&#39;autres méthodes de mise à jour.</p><h2 id="je-suis-nouveau-ou-je-voudrais-refaire-mon-installation-par-ou-commencer" tabindex="-1"><a class="header-anchor" href="#je-suis-nouveau-ou-je-voudrais-refaire-mon-installation-par-ou-commencer" aria-hidden="true">#</a> Je suis nouveau ou je voudrais refaire mon installation. Par où commencer ?</h2><ul><li>Si vous n&#39;avez pas déjà modifié votre console ou que vous cherchez à mettre à jour Unlaunch sur votre système, nous vous recommandons de commencer à partir du début du guide et de suivre à travers les pages. N&#39;oubliez pas de lire toute la page d&#39;accueil</li><li>Si vous avez la dernière version de Unlaunch, suivez la Section 1b de <a href="launching-the-exploit#twilight-menu">Lancement de l&#39;exploit</a> pour configurer TWiLight Menu++ sur votre système</li></ul><h2 id="comment-puis-je-supprimer-le-controle-parental" tabindex="-1"><a class="header-anchor" href="#comment-puis-je-supprimer-le-controle-parental" aria-hidden="true">#</a> Comment puis-je supprimer le contrôle parental ?</h2>',4),z=(0,a.Uk)("Le "),C={href:"https://mkey.salthax.org",target:"_blank",rel:"noopener noreferrer"},q=(0,a.Uk)("générateur mkey"),x=(0,a.Uk)(" peut générer le code requis pour supprimer le contrôle parental."),F=(0,a._)("h2",{id:"puis-je-changer-la-region-de-ma-nintendo-dsi",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#puis-je-changer-la-region-de-ma-nintendo-dsi","aria-hidden":"true"},"#"),(0,a.Uk)(" Puis-je changer la région de ma Nintendo DSI ?")],-1),M=(0,a._)("p",null,"Oui, il y a quelques méthodes différentes selon ce que vous souhaitez changer :",-1),L=(0,a._)("li",null,"La méthode la plus sûre et la plus simple est d'installer TWiLight Menu++, il peut utiliser n'importe quelle langue officielle et plus encore sans avoir besoin de modifications de la NAND",-1),N=(0,a.Uk)("Si vous voulez réellement changer la région du système et que vous utilisez hiyaCFW, vous pouvez utiliser le "),P={href:"https://github.com/Yoti/cli_hiyalang/releases",target:"_blank",rel:"noopener noreferrer"},T=(0,a.Uk)("hiyalang"),I=(0,a.Uk)(" de Yoti"),R=(0,a.Uk)("Enfin, si vous voulez changer de région sur la NAND du système actuel, vous pouvez utiliser "),A={href:"https://gbatemp.net/threads/release-dsi-language-patcher.582836/",target:"_blank",rel:"noopener noreferrer"},E=(0,a.Uk)("DSi Language Patcher"),H=(0,a.Uk)(" de Mighty Max."),G=(0,a._)("h2",{id:"what-happened-to-the-hiyacfw-installation-guide",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#what-happened-to-the-hiyacfw-installation-guide","aria-hidden":"true"},"#"),(0,a.Uk)(" What happened to the hiyaCFW installation guide?")],-1),O=(0,a.Uk)("Because hiyaCFW does not serve much functional purpose and was a problematic and confusing part of the guide for many users, it was moved to the "),Q={href:"https://wiki.ds-homebrew.com/hiyacfw/installing",target:"_blank",rel:"noopener noreferrer"},Y=(0,a.Uk)("DS-Homebrew Wiki"),J=(0,a.Uk)("."),Z=(0,a._)("ul",null,[(0,a._)("li",null,"If you were linked to the page in question from another guide, the instructions you were following were most likely outdated. Please use this guide instead, as it is maintained constantly by the developers of these projects")],-1),B={},K=(0,i(3744).Z)(B,[["render",function(e,n){const i=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[t,(0,a._)("ul",null,[r,(0,a._)("li",null,[o,(0,a._)("a",l,[s,(0,a.Wm)(i)]),u,(0,a._)("ul",null,[(0,a._)("li",null,[d,(0,a._)("a",h,[c,(0,a.Wm)(i)]),m])])])]),p,(0,a._)("ul",null,[g,(0,a._)("li",null,[f,v,b,k,(0,a._)("a",w,[y,(0,a.Wm)(i)])]),(0,a._)("li",null,[_,j,(0,a._)("a",U,[W,(0,a.Wm)(i)])]),S]),D,(0,a._)("ul",null,[(0,a._)("li",null,[z,(0,a._)("a",C,[q,(0,a.Wm)(i)]),x])]),F,M,(0,a._)("ul",null,[L,(0,a._)("li",null,[N,(0,a._)("a",P,[T,(0,a.Wm)(i)]),I]),(0,a._)("li",null,[R,(0,a._)("a",A,[E,(0,a.Wm)(i)]),H])]),G,(0,a._)("p",null,[O,(0,a._)("a",Q,[Y,(0,a.Wm)(i)]),J]),Z],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{for(const[i,a]of n)e[i]=a;return e}}}]);