
 // 地図を初期化
 const map = L.map('map').setView([33.67074368477472, 130.44459982368008], 15); 

 // 地図タイルを設定
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '&copy; OpenStreetMap contributors'
 }).addTo(map);

 // マーカー作成
 const markers = [
    {
      coords: [33.670327, 130.449761], 
      image: 'images/IMG_0005.jpg',
      link: 'graffiti01.html',
      
    },
    {
      coords: [33.671284, 130.449649], 
      image: 'images/img003.png',
      link: 'graffiti01.html',
    },
    {
      coords: [33.669870, 130.449767], 
      image: 'images/img004.png'
    },
    {
      coords: [33.663406, 130.444630], 
      image: 'images/img005.png'
    },
    {
      coords: [33.663445, 130.444235],
      image: 'images/img006.png',
      link: 'graffiti01.html',
    },
    {
      coords: [33.663460, 130.444477], 
      image: 'images/img007.png'
    },
    {
      coords: [33.667460, 130.443007], 
      image: 'images/img008.png'
    },
    {
      coords: [33.669465, 130.442998],
      image: 'images/img009.png'
    },
    {
      coords: [33.673477, 130.441488],
      image: 'images/img010.png'
    },

  ];

  // 各マーカーを追加
  markers.forEach((item) => {
    const marker = L.marker(item.coords).addTo(map);
    const popupContent = `
      <div>
        <p></p>
         <a href="${item.link}" target="_blank">
           <img src="${item.image}" alt="Location Image" class="popup-img">
         </a>  
      </div>
    `;
    marker.bindPopup(popupContent);
  });

  //nav humberger
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
  
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  });

//slide mv
  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.mv-slider .slide');
    let idx = 0;
    const num = slides.length;
    slides[idx].classList.add('active');
  
    setInterval(() => {
      slides[idx].classList.remove('active');
      idx = (idx + 1) % num;
      slides[idx].classList.add('active');
    }, 5000); // 5秒おき切替
  });
  
