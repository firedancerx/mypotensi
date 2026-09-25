const slides = [
  {
    title:"Guru Berpengalaman",
    points:["Tenaga pengajar mahir dan berpengalaman.","Faham keperluan serta gaya belajar pelajar.","Bimbingan lebih berkesan dan tepat."],
    visual:"Gambar guru sedang mengajar.",
    key:"“Belajar dengan guru yang benar-benar faham.”"
  },
  {
    title:"Kelas Bersaiz Kecil",
    points:["Bilangan pelajar terhad dalam setiap kelas.","Perhatian lebih fokus kepada setiap pelajar.","Pelajar lebih mudah bertanya dan dibimbing."],
    visual:"Kelas kecil dengan pelajar fokus.",
    key:"“Lebih fokus, lebih mudah faham.”"
  },
  {
    title:"Modul Pembelajaran Berkualiti",
    points:["Modul disusun mengikut silibus terkini.","Kandungan padat dan mudah difahami.","Membantu pelajar belajar secara sistematik."],
    visual:"Gambar modul / buku nota Potensi.",
    key:"“Modul berkualiti, pembelajaran lebih terarah.”"
  },
  {
    title:"Pendekatan Personal",
    points:["Kaedah mengajar disesuaikan dengan tahap pelajar.","Pelajar lemah dibimbing, pelajar cemerlang dicabar.","Pembelajaran lebih mudah difahami."],
    visual:"Guru membimbing seorang pelajar.",
    key:"“Setiap pelajar unik, setiap bimbingan tersendiri.”"
  },
  {
    title:"Jadual Fleksibel",
    points:["Pilihan jadual sesuai untuk pelajar sekolah.","Mesra ibu bapa yang sibuk.","Pelajar boleh belajar pada waktu yang sesuai."],
    visual:"Kalendar / jadual waktu.",
    key:"“Belajar ikut masa anda.”"
  },
  {
    title:"Pilihan Kelas Fizikal dan Online",
    points:["Kelas bersemuka di pusat tuisyen.","Kelas online untuk kemudahan dari rumah.","Lebih fleksibel dan mesra masa."],
    visual:"Ikon kelas fizikal dan laptop.",
    key:"“Di mana-mana pun boleh belajar.”"
  },
  {
    title:"Harga Berpatutan",
    points:["Kualiti pembelajaran pada kos mampu milik.","Pakej kelas mengikut keperluan pelajar.","Berbaloi dengan hasil yang diperoleh."],
    visual:"Ikon harga / pakej.",
    key:"“Kualiti tinggi, kos berpatutan.”"
  },
  {
    title:"Teknik Menjawab Soalan",
    points:["Pelajar diajar teknik menjawab yang betul.","Fokus kepada kata kunci dan format jawapan.","Membantu pelajar skor dalam peperiksaan."],
    visual:"Contoh soalan dan teknik menjawab.",
    key:"“Bukan sekadar tahu, tetapi tahu cara menjawab.”"
  },
  {
    title:"Fokus Peperiksaan",
    points:["Persediaan khusus untuk UPSR, PT3, SPM dan lain-lain.","Latihan berformat peperiksaan sebenar.","Pelajar lebih yakin menghadapi ujian."],
    visual:"Gambar pelajar membuat latihan peperiksaan.",
    key:"“Sedia lebih awal, hadapi peperiksaan dengan yakin.”"
  },
  {
    title:"Ujian dan Penilaian Berkala",
    points:["Ujian diadakan dari semasa ke semasa.","Memantau kemajuan pelajar dengan jelas.","Guru dapat mengenal pasti kelemahan pelajar."],
    visual:"Kertas ujian / graf prestasi.",
    key:"“Ukur kemajuan, perbaiki kelemahan.”"
  },
  {
    title:"Laporan Prestasi",
    points:["Ibu bapa dapat melihat perkembangan anak.","Laporan jelas dan mudah difahami.","Kerjasama antara pusat, pelajar dan ibu bapa."],
    visual:"Contoh laporan prestasi.",
    key:"“Ibu bapa sentiasa tahu perkembangan anak.”"
  },
  {
    title:"Nota Ringkas dan Mudah Faham",
    points:["Nota padat dan tepat.","Mempercepatkan proses ulang kaji.","Mudah diingati sebelum peperiksaan."],
    visual:"Contoh nota ringkas berwarna.",
    key:"“Nota ringkas, ulang kaji lebih pantas.”"
  },
  {
    title:"Latihan Intensif",
    points:["Banyak latihan berpandu dan soalan berformat peperiksaan.","Pelajar lebih biasa dengan jenis soalan.","Meningkatkan keyakinan dan ketepatan menjawab."],
    visual:"Buku latihan / pelajar membuat latihan.",
    key:"“Latihan banyak, keyakinan bertambah.”"
  },
  {
    title:"Suasana Kondusif",
    points:["Persekitaran belajar yang tenang dan selesa.","Mengurangkan gangguan semasa belajar.","Pelajar lebih mudah memberi tumpuan."],
    visual:"Gambar bilik kelas yang selesa.",
    key:"“Suasana selesa, tumpuan lebih baik.”"
  },
  {
    title:"Lokasi Strategik",
    points:["Mudah diakses oleh pelajar dan ibu bapa.","Berdekatan kawasan sekolah atau perumahan.","Menjimatkan masa perjalanan."],
    visual:"Peta lokasi pusat tuisyen.",
    key:"“Dekat dan mudah, belajar lebih lancar.”"
  },
  {
    title:"Bimbingan Motivasi",
    points:["Membina keyakinan pelajar.","Menanam semangat belajar yang positif.","Pelajar lebih bersedia menghadapi cabaran."],
    visual:"Guru memberi semangat kepada pelajar.",
    key:"“Motivasi membina kejayaan.”"
  },
  {
    title:"Program Intensif dan Seminar",
    points:["Pendedahan tambahan sebelum peperiksaan besar.","Teknik belajar dan tips menjawab soalan.","Pelajar mendapat persediaan lebih menyeluruh."],
    visual:"Gambar seminar / program intensif.",
    key:"“Persediaan tambahan, peluang kejayaan lebih tinggi.”"
  },
  {
    title:"Komunikasi Baik dengan Ibu Bapa",
    points:["Hubungan baik antara pusat, pelajar dan keluarga.","Ibu bapa boleh berbincang tentang prestasi anak.","Sokongan bersama membantu kejayaan pelajar."],
    visual:"Ibu bapa berbincang dengan guru.",
    key:"“Kerjasama ibu bapa, kejayaan anak.”"
  },
  {
    title:"Aktiviti Pembelajaran Interaktif",
    points:["Belajar tidak membosankan.","Pelajar lebih aktif dan terlibat.","Pembelajaran lebih berkesan dan menyeronokkan."],
    visual:"Aktiviti kumpulan / kuiz dalam kelas.",
    key:"“Belajar seronok, ingatan lebih kekal.”"
  },
  {
    title:"Rekod Kejayaan dan Reputasi",
    points:["Bukti kejayaan pelajar dari semasa ke semasa.","Reputasi baik sebagai pusat tuisyen pilihan.","Mampu membantu pelajar mencapai potensi terbaik."],
    visual:"Gambar pelajar cemerlang / testimoni.",
    key:"“Pilih Potensi, capai potensi terbaik anda.”"
  }
];

const slider = document.getElementById("slider");
const current = document.getElementById("current");
let active = 0;
let touchStartX = null;

slides.forEach((s,i)=>{
  const article = document.createElement("article");
  article.className = "slide" + (i===0 ? " active" : "");
  article.id = "slide-" + (i+1);
  article.setAttribute("aria-label", s.title);
  article.innerHTML = `
    <div class="scene scene-${i+1}" aria-hidden="true"></div>
    <div class="content">
      <h1 class="title">${s.title}</h1>
      <div class="key-wrap"><div class="key">${s.key}</div></div>
      <ul class="points">${s.points.map(p=>`<li>${p}</li>`).join("")}</ul>
      <div class="visual-note">Visual: ${s.visual}</div>
    </div>
  `;
  slider.appendChild(article);
});

const slideEls = [...document.querySelectorAll(".slide")];

function goTo(index, updateHash=true){
  active = (index + slideEls.length) % slideEls.length;
  slideEls.forEach((el,i)=>el.classList.toggle("active", i===active));
  current.textContent = String(active+1).padStart(2,"0");
  if(updateHash){
    history.replaceState(null,"","#slide-"+(active+1));
  }
}

document.querySelector(".next").addEventListener("click",()=>goTo(active+1));
document.querySelector(".prev").addEventListener("click",()=>goTo(active-1));

document.addEventListener("keydown",e=>{
  if(e.key==="ArrowRight" || e.key==="PageDown") goTo(active+1);
  if(e.key==="ArrowLeft" || e.key==="PageUp") goTo(active-1);
});

slider.addEventListener("touchstart",e=>{touchStartX=e.changedTouches[0].clientX},{passive:true});
slider.addEventListener("touchend",e=>{
  if(touchStartX===null) return;
  const dx=e.changedTouches[0].clientX-touchStartX;
  if(Math.abs(dx)>45) goTo(dx<0?active+1:active-1);
  touchStartX=null;
},{passive:true});

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuClose = document.querySelector(".menu-close");
function setMenu(open){
  menu.classList.toggle("open",open);
  menu.setAttribute("aria-hidden",String(!open));
  menuBtn.setAttribute("aria-expanded",String(open));
}
menuBtn.addEventListener("click",()=>setMenu(true));
menuClose.addEventListener("click",()=>setMenu(false));
menu.addEventListener("click",e=>{
  const a=e.target.closest("a[href^='#slide-']");
  if(!a) return;
  e.preventDefault();
  const n=Number(a.getAttribute("href").replace("#slide-",""));
  if(Number.isFinite(n)) goTo(n-1);
  setMenu(false);
});

const hashMatch = location.hash.match(/^#slide-(\d+)$/);
if(hashMatch){
  const n=Number(hashMatch[1]);
  if(n>=1 && n<=20) goTo(n-1,false);
}
