// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

function loadContent(page) {
    let content = document.getElementById('content');
    if (page === 'page1') {
      content.innerHTML = `
        <p>Tôi học lớp 6,7,8 ở trường THCS Lương Thế Vinh (Đăk Tô, Kon Tum) và lớp 9 ở trường THPT Chuyên Nguyễn Tất Thành (TP Kon Tum, Kon Tum)</p>
        <div class="container">
        <div class="row text-center">
            <div class="col-md-4">
            <img src="image/thcsltv.jpg" class="img-fluid w3-round" alt="THCS Lương Thế Vinh">
            </div>
            <div class="col-md-4">
            <img src="image/thptchuyenntt.jpg" class="img-fluid w3-round" alt="THPT Chuyên Nguyễn Tất Thành">
            </div>
        </div>
        </div>

      `;
    } else if (page === 'page2') {
      content.innerHTML = `
        <!-- Slider-->
  <div class="carousel-container">
    <button class="prev" onclick="changeSlide(-1,4)">&#10094;</button>
    <div class="carousel-slide">
        <img src="image/tinhthcs.jpg" class="carousel-image" alt="Image 1">
        <img src="image/huyen.jpg" class="carousel-image" alt="Image 2">
        <img src="image/2211235_MinhChung8.jpg" class="carousel-image" alt="Image 3">
        <img src="image/covua7.jpg" class="carousel-image" alt="Image 4">
        <!-- Thêm nhiều ảnh nếu cần -->
    </div>
    <button class="next" onclick="changeSlide(1,4)">&#10095;</button>
</div>
      `;
    } else if (page === 'page3') {
      content.innerHTML = `
        <p>Tôi học chuyên Toán khóa 19-22 ở trường THPT Chuyên Quốc Học Huế, tỉnh Thừa Thiên - Huế</p>
        <div class="container">
        <div class="row text-center">
            <div class="col-md-4">
            <img src="image/qhh.jpg" class="img-fluid w3-round" alt="THPT Chuyên Quốc Học-Huế">
            </div>
            <div class="col-md-4">
            <img src="image/qhh2.jpg" class="img-fluid w3-round" alt="THPT Chuyên Quốc Học-Huế">
            </div>
        </div>
        </div>
      `;
    } else if (page === 'page4') {
        content.innerHTML = `
          <!-- Slider-->
        <div class="carousel-container">
            <button class="prev" onclick="changeSlide(-1,10)">&#10094;</button>
            <div class="carousel-slide">
                <img src="image/2211235_MinhChung1.jpg" class="carousel-image" alt="Image 1">
                <img src="image/2211235_MinhChung2.jpg" class="carousel-image" alt="Image 2">
                <img src="image/2211235_MinhChung3.jpg" class="carousel-image" alt="Image 3">
                <img src="image/2211235_MinhChung4.jpg" class="carousel-image" alt="Image 4">
                <img src="image/2211235_MinhChung5.jpg" class="carousel-image" alt="Image 5">
                <img src="image/2211235_MinhChung6.jpg" class="carousel-image" alt="Image 6">
                <img src="image/nqd.jpg" class="carousel-image" alt="Image 8">
                <img src="image/odon-vallet.jpg" class="carousel-image" alt="Image 9">
                <img src="image/olpggth.jpg" class="carousel-image" alt="Image 10">
                <img src="image/thtt-1.jpg" class="carousel-image" alt="Image 11">
                <!-- Thêm nhiều ảnh nếu cần -->
            </div>
            <button class="next" onclick="changeSlide(1,10)">&#10095;</button>
        </div>
        `;
    } else if (page === 'page5'){
        content.innerHTML = `
        <p>Tôi hiện đang là sinh viên K22 chương trình Cử nhân Tài năng ngành Khoa học máy tính thuộc khoa Khoa học và Kỹ thuật Máy tính của trường Đại học Bách Khoa - ĐHQG HCM</p>
        <div class="container">
        <div class="row text-center">
            <div class="col-md-4">
            <img src="image/hcmut.jpg" class="img-fluid w3-round" alt="THPT Chuyên Quốc Học-Huế">
            </div>
            <div class="col-md-4">
            <img src="image/cse.jpg" class="img-fluid w3-round" alt="THPT Chuyên Nguyễn Tất Thành">
            </div>
        </div>
        </div>
      `;
    }else if (page === 'page6'){
        content.innerHTML = `
        <div class="container">
        <p>GPA: <b>3.6/4.0</b></p>
        <ul class="list-group">
            <li class="list-group-item">Học bổng 100% của trung tâm ngoại ngữ BKEnglish</li>
            <li class="list-group-item">Trúng tuyển vào hệ Cử nhân tài năng ngành Khoa học máy tính</li>
            <li class="list-group-item">Học bổng khuyến khích học tập học kỳ 222</li>
        </div>
      `;
    }else if (page === 'page7'){
        content.innerHTML = `
        <div class="container">
        <div class="row text-center">
            <div class="col-md-4">
            <img id="toeic" src="image/toeic.jpg" class="img-fluid w3-round" alt="TOEIC certificate">
            </div>
            <p>Chứng chỉ TOEIC </p>
        </div>
        </div>
      `;
    }
    else if (page === 'page8'){
        content.innerHTML = `
        <div class="container3">
    <div class="row text-center">
        <div class="col-md-4">
            <img id="nqdvolunteer" src="image/2211235_MinhChung9.jpg" class="img-fluid2 w3-round" alt="NQD Volunteer">
            <p>Thành viên ban Chuyên môn NQD III</p>
        </div>
        <div class="col-md-4">
            <img id="camtinhdang" src="image/2211235_MinhChung10.jpg" class="img-fluid2 w3-round" alt="Cam tinh Dang">
            <p>Tham gia lớp Cảm tình Đảng</p>
        </div>
        <div class="col-md-4">
            <img id="blood-donor" src="image/blood donor.jpg" class="img-fluid2 w3-round" alt="Blood donor">
            <p>Tham gia hiến máu 3 lần</p>
        </div>
    </div>
</div>

      `;
          
    }
  }
  let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

let currentSlideIndex = 0;
const slides = document.querySelectorAll('.carousel-image');
//const totalSlides = 10;
const visibleSlides = 3;

function changeSlide(direction, totalSlides) {
    currentSlideIndex += direction;

    // Handle slide boundaries
    if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - visibleSlides;
    } else if (currentSlideIndex > totalSlides - visibleSlides) {
        currentSlideIndex = 0;
    }

    // Move the slide container
    const slideWidth = slides[0].clientWidth;
    const slideContainer = document.querySelector('.carousel-slide');
    slideContainer.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
}

function showSection0() {
    // Ẩn tất cả các phần tử với các id cụ thể
    w3_close();
    const idsToHide = ['cubing']
    idsToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('hidden');
        }
    });

    // Hiển thị phần tử có id tương ứng
    const idsToShow = ['about','portfolio']
   idsToShow.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.remove('hidden');
        }
    });
}

function showSection() {
    // Ẩn tất cả các phần tử với các id cụ thể
    w3_close();
    const idsToHide = ['about', 'portfolio', 'content']
    idsToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('hidden');
        }
    });

    // Hiển thị phần tử có id tương ứng
    const section = document.getElementById('cubing');
    if (section) {
        section.classList.remove('hidden');
    }
}