var bg = [
      '360_F_619083067_zCaYYQbXttsJ3ZKrlrnWs4ZE6MIlO9zk.jpg',
      '398f6d1e7c8891e89543d327b3687fbe (1).gif'
    ];
          document.querySelector("#bg1").addEventListener("click", function () {
          document.querySelector("#background_image img").src = bg[0];
    });
          document.querySelector("#bg2").addEventListener("click", function () {
          document.querySelector("#background_image img").src = bg[1];
    });
    
    var audioSources = [
      'Em-Bang-Long-Lam-Mot-Nguoi-Binh-Thuong-O-Ben-Canh-Anh-Vuong-That-That.mp3',
      'Ring-Ring-Ring-Bat-Thi-Hoa-Hoa-Nha.mp3',
    ];
          document.querySelector("#nhac1").addEventListener("click", function () {
          document.querySelector("#audio source").src = audioSources[0];
          document.querySelector("#audio").load();
          document.querySelector("#audio").play();
    });
          document.querySelector("#nhac2").addEventListener("click", function () {
          document.querySelector("#audio source").src = audioSources[1];
          document.querySelector("#audio").load(); 
          document.querySelector("#audio").play();
    });
    
    
  