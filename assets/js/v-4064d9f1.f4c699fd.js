"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3942],{8719:(e,a,i)=>{i.r(a),i.d(a,{data:()=>t});const t={key:"v-4064d9f1",path:"/es_ES/launching-the-exploit.html",title:"Lanzar el Exploit",lang:"es-ES",frontmatter:{title:"Lanzar el Exploit"},excerpt:"",headers:[{level:2,title:"Requisitos",slug:"requisitos",children:[]},{level:2,title:"Sección I - Preparar la terjeta SD",slug:"seccion-i-preparar-la-terjeta-sd",children:[{level:3,title:"Memory Pit",slug:"memory-pit",children:[]},{level:3,title:"TWiLight Menu++",slug:"twilight-menu",children:[]}]},{level:2,title:"Seccion II - Lanzar el exploit",slug:"seccion-ii-lanzar-el-exploit",children:[]},{level:2,title:"Sección III - Configurar TWiLight Menu++",slug:"seccion-iii-configurar-twilight-menu",children:[]}],filePathRelative:"es_ES/launching-the-exploit.md",git:{updatedTime:163872129e4,contributors:[{name:"emiyl",email:"me@emiyl.com",commits:1}]}}},7937:(e,a,i)=>{i.r(a),i.d(a,{default:()=>A});var t=i(6252);const r=(0,t._)("p",null,'Empezaremos primero preparando tu tarjeta SD para iniciar nuestro exploit. Para la mayoría de usuarios, recomendamos usar un exploit llamado "Memory Pit", que se aprovecha de un fallo en como la aplicaión Cámara Nintendo DSi maneja los metadatos de las imágenes.',-1),l=(0,t._)("p",null,"Lanzar el exploit hará que inicies TWiLight Menu++, una aplicación homebrew que actúa como un reemplazo del Menú DSi.",-1),n=(0,t._)("h2",{id:"requisitos",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#requisitos","aria-hidden":"true"},"#"),(0,t.Uk)(" Requisitos")],-1),o=(0,t._)("li",null,"Una forma de copiar archivos a tu tarjeta SD.",-1),s=(0,t.Uk)("Una aplicación que te permita extraer archivos, como "),c={href:"https://www.7-zip.org/",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Uk)("7-Zip"),d=(0,t.Uk)(" (Windows) o "),p={href:"https://apps.apple.com/us/app/the-unarchiver/id425424353",target:"_blank",rel:"noopener noreferrer"},m=(0,t.Uk)("The Unarchiver"),h=(0,t.Uk)(" (macOS)."),g=(0,t.uE)('<h2 id="seccion-i-preparar-la-terjeta-sd" tabindex="-1"><a class="header-anchor" href="#seccion-i-preparar-la-terjeta-sd" aria-hidden="true">#</a> Sección I - Preparar la terjeta SD</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Asegúrate de que tu tarjeta SD este <a href="sd-card-setup">formateada correctamente</a>.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>¿Utilizas Windows, Linux o macOS? Usa <a href="lazy-dsi-downloader">Lazy DSi Downloader</a> para configurar automáticamente tu tarjeta SD.</p></div><h3 id="memory-pit" tabindex="-1"><a class="header-anchor" href="#memory-pit" aria-hidden="true">#</a> Memory Pit</h3><ol><li>Asegúrate de que la aplicación Cámara Nintendo DSi no te muestra el tutorial después de inciar. <ul><li>Si sí te lo muestra, intenta terminarlo. <ul><li>Si el tutorial se cuelga antes de terminar, es probable que los componentes necesarios para usar la cámara de tu consola estén dañados. En este caso tendrás que usar un <a href="alternate-exploits">exploit alternativo</a>.</li></ul></li></ul></li><li>Desacarga el archivo de Memory Pit para la región y versión de firmware de tu consola. <ul><li>para las versiones de firmware desde la <a href="/assets/files/memory_pit/256/pit.bin">1.0 a la 1.3 (para las regiones USA, EUR, AUS y JPN)</a></li><li>para las versiones de firmware desde la <a href="/assets/files/memory_pit/768_1024/pit.bin">1.4 a la 1.4.5 (para las regiones USA, EUR, AUS y JPN)</a></li><li>para todas las versiones de firmware <a href="/assets/files/memory_pit/256/pit.bin">(para las regiones KOR y CHN)</a></li></ul></li><li>Asegúrate de que existe la siguiente ruta en tu tarjeta SD: <code>sd:/private/ds/app/484E494A/</code>. <ul><li>Si anteriormente has copiado fotos a tu tarjeta SD a través de la aplicación Cámara Nintendo DSi, este directorio ya debería existir. De ser el caso, no necesitas eliminarlo ni crearlo nuevamente.</li><li>Si este directorio no existe, por favor, crea las carpetas individuales.</li></ul></li><li>Si ya hay un archivo <code>pit.bin</code> en ese directorio, crea un respaldo del mismo.</li><li>Coloca el archivo <code>pit.bin</code> de Memory Pit en esta carpeta.</li></ol>',5),S={class:"custom-container tip"},f=(0,t._)("p",{class:"custom-container-title"},"TIP",-1),v=(0,t.Uk)("Para entender por qué hacemos esto, por favor revisa las "),b=(0,t.Uk)("preguntas frecuentes"),_=(0,t.Uk)("."),k=(0,t._)("h3",{id:"twilight-menu",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#twilight-menu","aria-hidden":"true"},"#"),(0,t.Uk)(" TWiLight Menu++")],-1),D=(0,t.Uk)("Descarga la version mas reciente de "),U={href:"https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z",target:"_blank",rel:"noopener noreferrer"},y=(0,t.Uk)("TWiLight Menu++"),w=(0,t._)("li",null,[(0,t.Uk)("Extrae la carpeta "),(0,t._)("code",null,"_nds"),(0,t.Uk)(" de "),(0,t._)("code",null,"TWiLightMenu-DSi.7z"),(0,t.Uk)(" a la carpeta raíz de tu tarjeta SD.")],-1),x=(0,t._)("li",null,[(0,t.Uk)("Extrae el archivo "),(0,t._)("code",null,"BOOT.NDS"),(0,t.Uk)(" de "),(0,t._)("code",null,"TWiLightMenu-DSi.7z"),(0,t.Uk)(" a la carpeta raíz de tu tarjeta SD.")],-1),j=(0,t.uE)('<h2 id="seccion-ii-lanzar-el-exploit" tabindex="-1"><a class="header-anchor" href="#seccion-ii-lanzar-el-exploit" aria-hidden="true">#</a> Seccion II - Lanzar el exploit</h2><ol><li>Asegúrate de que tu tarjeta SD está insertada en tu consola.</li><li>Enciende la consola e inicia la aplicación Cámara Nintendo DSi.</li><li>Selecciona el icono de tarjeta SD en la esquina superior derecha. <ul><li>Si recibes un mensaje diciendo que tu tarjeta SD no está insertada, por favor usa otra tarjeta SD.</li><li>Si recibes un mensaje diciendo que no se puede utilizar tu tarjeta SD, asegúrate de que tu tarjeta SD esté <a href="sd-card-setup">formateada correctamente</a>.</li></ul></li><li>Selecciona el álbum de la cámara en tu tarjeta SD. <ul><li>La pantalla debería parpadear en magenta si el exploit se lanza de forma exitosa.</li></ul></li></ol>',2),q={class:"custom-container warning"},L=(0,t._)("p",{class:"custom-container-title"},"WARNING",-1),z=(0,t.Uk)("Si la pantalla superior se torna verde, no tienes el archivo "),W=(0,t._)("code",null,"BOOT.NDS",-1),T=(0,t.Uk)(" de TWiLight Menu++ en la carpeta raíz de tu tarjeta SD. Sigue la "),M=(0,t.Uk)("guía de preparación de TWiLight Menu++"),E=(0,t.Uk)(" otra vez."),N=(0,t.uE)('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Si ingresas al álbum de la tarjeta SD y no pasa nada inusual, asegúrate de que descargaste la versión correcta de Memory Pit para la versión y región de tu consola, y la colocaste en la carpeta correcta en tu tarjeta SD.</p></div><p>Ahora debería estar en pantalla la selección de idioma de TWiLight Menu++.</p><h2 id="seccion-iii-configurar-twilight-menu" tabindex="-1"><a class="header-anchor" href="#seccion-iii-configurar-twilight-menu" aria-hidden="true">#</a> Sección III - Configurar TWiLight Menu++</h2><ol><li>Cuando se muestre la pantalla de selección de idioma, configura la idioma y región que quieras usar en la consola.</li><li>Una vez estés en TWiLight Menu++, presiona SELECT para cambiar al Menú DS Clásico.</li><li>Toca el icono en la parte inferior central de la pantalla táctil para abir la configuración.</li><li>Usa los botónes <kbd class="l">L</kbd>/<kbd class="r">R</kbd> o <kbd class="face">X</kbd>/<kbd class="face">Y</kbd> para moverte hacia la sección Otros Ajustes.</li><li>Cambia la opción &quot;Región SysNAND&quot; a la región de tu consola.</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Continua a <a href="dumping-nand">Hacer Respaldo de la NAND</a></p></div>',5),I={},A=(0,i(3744).Z)(I,[["render",function(e,a){const i=(0,t.up)("OutboundLink"),I=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[r,l,n,(0,t._)("ul",null,[o,(0,t._)("li",null,[s,(0,t._)("a",c,[u,(0,t.Wm)(i)]),d,(0,t._)("a",p,[m,(0,t.Wm)(i)]),h])]),g,(0,t._)("div",S,[f,(0,t._)("p",null,[v,(0,t.Wm)(I,{to:"/es_ES/faq.html#what-functionality-will-i-lose-by-modding-my-system"},{default:(0,t.w5)((()=>[b])),_:1}),_])]),k,(0,t._)("ol",null,[(0,t._)("li",null,[D,(0,t._)("a",U,[y,(0,t.Wm)(i)])]),w,x]),j,(0,t._)("div",q,[L,(0,t._)("p",null,[z,W,T,(0,t.Wm)(I,{to:"/es_ES/launching-the-exploit.html#twilight-menu"},{default:(0,t.w5)((()=>[M])),_:1}),E])]),N],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const i=e.__vccOpts||e;for(const[e,t]of a)i[e]=t;return i}}}]);