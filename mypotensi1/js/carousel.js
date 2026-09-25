const slides = [
  {
    title:"Slide 1 — Sebab 1: Guru Berpengalaman",
    points:["Tenaga pengajar mahir dan berpengalaman.","Faham keperluan serta gaya belajar pelajar.","Bimbingan lebih berkesan dan tepat."],
    visual:"Gambar guru sedang mengajar.",
    key:"“Belajar dengan guru yang benar-benar faham.”"
  },
  {
    title:"Slide 2 — Sebab 2: Kelas Bersaiz Kecil",
    points:["Bilangan pelajar terhad dalam setiap kelas.","Perhatian lebih fokus kepada setiap pelajar.","Pelajar lebih mudah bertanya dan dibimbing."],
    visual:"Kelas kecil dengan pelajar fokus.",
    key:"“Lebih fokus, lebih mudah faham.”"
  },
  {
    title:"Slide 3 — Sebab 3: Modul Pembelajaran Berkualiti",
    points:["Modul disusun mengikut silibus terkini.","Kandungan padat dan mudah difahami.","Membantu pelajar belajar secara sistematik."],
    visual:"Gambar modul / buku nota Potensi.",
    key:"“Modul berkualiti, pembelajaran lebih terarah.”"
  },
  {
    title:"Slide 4 — Sebab 4: Pendekatan Personal",
    points:["Kaedah mengajar disesuaikan dengan tahap pelajar.","Pelajar lemah dibimbing, pelajar cemerlang dicabar.","Pembelajaran lebih mudah difahami."],
    visual:"Guru membimbing seorang pelajar.",
    key:"“Setiap pelajar unik, setiap bimbingan tersendiri.”"
  },
  {
    title:"Slide 5 — Sebab 5: Jadual Fleksibel",
    points:["Pilihan jadual sesuai untuk pelajar sekolah.","Mesra ibu bapa yang sibuk.","Pelajar boleh belajar pada waktu yang sesuai."],
    visual:"Kalendar / jadual waktu.",
    key:"“Belajar ikut masa anda.”"
  },
  {
    title:"Slide 6 — Sebab 6: Pilihan Kelas Fizikal dan Online",
    points:["Kelas bersemuka di pusat tuisyen.","Kelas online untuk kemudahan dari rumah.","Lebih fleksibel dan mesra masa."],
    visual:"Ikon kelas fizikal dan laptop.",
    key:"“Di mana-mana pun boleh belajar.”"
  },
  {
    title:"Slide 7 — Sebab 7: Harga Berpatutan",
    points:["Kualiti pembelajaran pada kos mampu milik.","Pakej kelas mengikut keperluan pelajar.","Berbaloi dengan hasil yang diperoleh."],
    visual:"Ikon harga / pakej.",
    key:"“Kualiti tinggi, kos berpatutan.”"
  },
  {
    title:"Slide 8 — Sebab 8: Teknik Menjawab Soalan",
    points:["Pelajar diajar teknik menjawab yang betul.","Fokus kepada kata kunci dan format jawapan.","Membantu pelajar skor dalam peperiksaan."],
    visual:"Contoh soalan dan teknik menjawab.",
    key:"“Bukan sekadar tahu, tetapi tahu cara menjawab.”"
  },
  {
    title:"Slide 9 — Sebab 9: Fokus Peperiksaan",
    points:["Persediaan khusus untuk UPSR, PT3, SPM dan lain-lain.","Latihan berformat peperiksaan sebenar.","Pelajar lebih yakin menghadapi ujian."],
    visual:"Gambar pelajar membuat latihan peperiksaan.",
    key:"“Sedia lebih awal, hadapi peperiksaan dengan yakin.”"
  },
  {
    title:"Slide 10 — Sebab 10: Ujian dan Penilaian Berkala",
    points:["Ujian diadakan dari semasa ke semasa.","Memantau kemajuan pelajar dengan jelas.","Guru dapat mengenal pasti kelemahan pelajar."],
    visual:"Kertas ujian / graf prestasi.",
    key:"“Ukur kemajuan, perbaiki kelemahan.”"
  },
  {
    title:"Slide 11 — Sebab 11: Laporan Prestasi",
    points:["Ibu bapa dapat melihat perkembangan anak.","Laporan jelas dan mudah difahami.","Kerjasama antara pusat, pelajar dan ibu bapa."],
    visual:"Contoh laporan prestasi.",
    key:"“Ibu bapa sentiasa tahu perkembangan anak.”"
  },
  {
    title:"Slide 12 — Sebab 12: Nota Ringkas dan Mudah Faham",
    points:["Nota padat dan tepat.","Mempercepatkan proses ulang kaji.","Mudah diingati sebelum peperiksaan."],
    visual:"Contoh nota ringkas berwarna.",
    key:"“Nota ringkas, ulang kaji lebih pantas.”"
  },
  {
    title:"Slide 13 — Sebab 13: Latihan Intensif",
    points:["Banyak latihan berpandu dan soalan berformat peperiksaan.","Pelajar lebih biasa dengan jenis soalan.","Meningkatkan keyakinan dan ketepatan menjawab."],
    visual:"Buku latihan / pelajar membuat latihan.",
    key:"“Latihan banyak, keyakinan bertambah.”"
  },
  {
    title:"Slide 14 — Sebab 14: Suasana Kondusif",
    points:["Persekitaran belajar yang tenang dan selesa.","Mengurangkan gangguan semasa belajar.","Pelajar lebih mudah memberi tumpuan."],
    visual:"Gambar bilik kelas yang selesa.",
    key:"“Suasana selesa, tumpuan lebih baik.”"
  },
  {
    title:"Slide 15 — Sebab 15: Lokasi Strategik",
    points:["Mudah diakses oleh pelajar dan ibu bapa.","Berdekatan kawasan sekolah atau perumahan.","Menjimatkan masa perjalanan."],
    visual:"Peta lokasi pusat tuisyen.",
    key:"“Dekat dan mudah, belajar lebih lancar.”"
  },
  {
    title:"Slide 16 — Sebab 16: Bimbingan Motivasi",
    points:["Membina keyakinan pelajar.","Menanam semangat belajar yang positif.","Pelajar lebih bersedia menghadapi cabaran."],
    visual:"Guru memberi semangat kepada pelajar.",
    key:"“Motivasi membina kejayaan.”"
  },
  {
    title:"Slide 17 — Sebab 17: Program Intensif dan Seminar",
    points:["Pendedahan tambahan sebelum peperiksaan besar.","Teknik belajar dan tips menjawab soalan.","Pelajar mendapat persediaan lebih menyeluruh."],
    visual:"Gambar seminar / program intensif.",
    key:"“Persediaan tambahan, peluang kejayaan lebih tinggi.”"
  },
  {
    title:"Slide 18 — Sebab 18: Komunikasi Baik dengan Ibu Bapa",
    points:["Hubungan baik antara pusat, pelajar dan keluarga.","Ibu bapa boleh berbincang tentang prestasi anak.","Sokongan bersama membantu kejayaan pelajar."],
    visual:"Ibu bapa berbincang dengan guru.",
    key:"“Kerjasama ibu bapa, kejayaan anak.”"
  },
  {
    title:"Slide 19 — Sebab 19: Aktiviti Pembelajaran Interaktif",
    points:["Belajar tidak membosankan.","Pelajar lebih aktif dan terlibat.","Pembelajaran lebih berkesan dan menyeronokkan."],
    visual:"Aktiviti kumpulan / kuiz dalam kelas.",
    key:"“Belajar seronok, ingatan lebih kekal.”"
  },
  {
    title:"Slide 20 — Sebab 20: Rekod Kejayaan dan Reputasi",
    points:["Bukti kejayaan pelajar dari semasa ke semasa.","Reputasi baik sebagai pusat tuisyen pilihan.","Mampu membantu pelajar mencapai potensi terbaik."],
    visual:"Gambar pelajar cemerlang / testimoni.",
    key:"“Pilih Potensi, capai potensi terbaik anda.”"
  }
];

const slider = document.getElementById("slider");
const current = document.getElementById("current");
let active = 0;
let touchStartX = null;

function splitTitle(fullTitle){
  const parts = fullTitle.split(": ");
  return {
    kicker: parts[0],
    heading: parts.slice(1).join(": ")
  };
}

slides.forEach((s,i)=>{
  const t = splitTitle(s.title);
  const article = document.createElement("article");
  article.className = "slide" + (i===0 ? " active" : "");
  article.id = "slide-" + (i+1);
  article.setAttribute("aria-label", s.title);
  article.innerHTML = `
    <div class="scene scene-${i+1}" aria-hidden="true"></div>
    <div class="content">
      <div class="kicker">${t.kicker}</div>
      <h1 class="title">${t.heading}</h1>
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
