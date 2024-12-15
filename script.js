document.addEventListener("DOMContentLoaded", function () {
  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  document.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  

  // Slider Swiper Initialization
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "slide",
  });

  // Loan Calculator
  const loanAmount = document.getElementById("loanAmount");
  const loanAmountValue = document.getElementById("loanAmountValue");
  const tenure = document.getElementById("tenure");
  const tenureValue = document.getElementById("tenureValue");
  const calculateBtn = document.getElementById("calculateBtn");
  const monthlyInstallment = document.getElementById("monthlyInstallment");

  // Format number to Rupiah
  const formatRupiah = (number) => "Rp " + number.toLocaleString("id-ID");

  // Update slider values in real time
  loanAmount.addEventListener("input", () => {
    loanAmountValue.textContent = formatRupiah(parseInt(loanAmount.value));
  });

  tenure.addEventListener("input", () => {
    tenureValue.textContent = `${tenure.value} Tahun`;
  });

  // Calculate monthly installment
  calculateBtn.addEventListener("click", () => {
    const principal = parseInt(loanAmount.value);
    const years = parseInt(tenure.value);
    const interestRate = 0.05 / 12; // 5% annual interest rate to monthly
    const months = years * 12;

    // Formula for monthly installment (Annuity)
    const monthlyPayment =
      (principal * interestRate) / (1 - Math.pow(1 + interestRate, -months));

    // Update result
    monthlyInstallment.textContent = `Cicilan Bulanan: ${formatRupiah(
      Math.round(monthlyPayment)
    )}`;
  });

  // Currency Converter
  const kursValasButton = document.getElementById("kursValasButton");
  const kursConverterButton = document.getElementById("kursConverterButton");
  const kursConverter = document.getElementById("kursConverter");
  const kursValasContent = document.querySelector(".kurs-valas table");

  // Toggle between Kurs Valas and Kurs Converter
  kursValasButton.addEventListener("click", () => {
    kursValasContent.style.display = "block";
    kursConverter.style.display = "none";
  });

  kursConverterButton.addEventListener("click", () => {
    kursValasContent.style.display = "none";
    kursConverter.style.display = "block";
  });

  // Currency Conversion Calculation
  const currencyAmountInput = document.querySelector(
    ".kurs-converter input[type='number']"
  );
  const resultField = document.querySelector(
    ".kurs-converter input[type='text']"
  );
  const convertButton = document.querySelector(".kurs-converter button");

  // Exchange rates for different currencies
  const exchangeRates = {
    USD: {
      buy: 15799.00,
      sell: 15889.00,
    },
    SGD: {
      buy: 11761.33,
      sell: 11860.46,
    },
    EUR: {
      buy: 16668.10,
      sell: 16808.03,
    },
    AUD: {
      buy: 10078.18,
      sell: 10173.96,
    },
    GBP: {
      buy: 20102.65,
      sell: 20284.13,
    },
    JPY: {
      buy: 105.28,
      sell: 106.26,
    },
  };

  // Perform conversion
  convertButton.addEventListener("click", () => {
    const amount = parseFloat(currencyAmountInput.value);
    if (isNaN(amount) || amount <= 0) {
      resultField.value = "Masukkan jumlah yang valid!";
      return;
    }

    const selectedCurrency = document.querySelector(
      ".kurs-converter select:first-child"
    ).value;
    const type = document.querySelector("input[name='type']:checked").value;

    // Get the appropriate exchange rate
    let result = 0;

    if (type === "beli") {
      // "Beli" means converting foreign currency to IDR
      result = amount * exchangeRates[selectedCurrency].buy;
    } else if (type === "jual") {
      // "Jual" means converting IDR to foreign currency
      result = amount / exchangeRates[selectedCurrency].sell;
    }

    // Update result field
    if (type === "jual") {
      resultField.value = `${result.toFixed(2)} ${selectedCurrency}`;
    } else {
      resultField.value = formatRupiah(Math.round(result));
    }
  });


    const btnDireksi = document.getElementById('Direksi');
    const btnKomisaris = document.getElementById('Komisaris');
    const sectionDireksi = document.querySelector('#Direksi.row');
    const sectionKomisaris = document.querySelector('#Komisaris.row');
  
    btnDireksi.addEventListener('click', function () {
      sectionDireksi.style.display = 'flex';
      sectionKomisaris.style.display = 'none';
      btnDireksi.classList.add('btn-primary');
      btnDireksi.classList.remove('btn-secondary');
      btnKomisaris.classList.add('btn-secondary');
      btnKomisaris.classList.remove('btn-primary');
    });
  
    btnKomisaris.addEventListener('click', function () {
      sectionKomisaris.style.display = 'flex';
      sectionDireksi.style.display = 'none';
      btnKomisaris.classList.add('btn-primary');
      btnKomisaris.classList.remove('btn-secondary');
      btnDireksi.classList.add('btn-secondary');
      btnDireksi.classList.remove('btn-primary');
    });
  
    // Default behavior
    sectionDireksi.style.display = 'flex';
    sectionKomisaris.style.display = 'none';
  });
  document.addEventListener('DOMContentLoaded', function () {
    const btnDireksi = document.getElementById('btnDireksi');
    const btnKomisaris = document.getElementById('btnKomisaris');
    const sectionDireksi = document.getElementById('sectionDireksi');
    const sectionKomisaris = document.getElementById('sectionKomisaris');
  
    btnDireksi.addEventListener('click', function () {
      sectionDireksi.style.display = 'flex';
      sectionKomisaris.style.display = 'none';
      btnDireksi.classList.add('btn-primary');
      btnDireksi.classList.remove('btn-secondary');
      btnKomisaris.classList.add('btn-secondary');
      btnKomisaris.classList.remove('btn-primary');
    });
  
    btnKomisaris.addEventListener('click', function () {
      sectionKomisaris.style.display = 'flex';
      sectionDireksi.style.display = 'none';
      btnKomisaris.classList.add('btn-primary');
      btnKomisaris.classList.remove('btn-secondary');
      btnDireksi.classList.add('btn-secondary');
      btnDireksi.classList.remove('btn-primary');
    });
  
    // Default behavior
    sectionDireksi.style.display = 'flex';
    sectionKomisaris.style.display = 'none';
  });
  
    document.addEventListener('DOMContentLoaded', function () {
      // Show all items initially
    $(".container").show();
      const btnDireksi = document.getElementById('btnDireksi');
      const btnKomisaris = document.getElementById('btnKomisaris');
      const sectionDireksi = document.getElementById('sectionDireksi');
      const sectionKomisaris = document.getElementById('sectionKomisaris');
  
      // Fungsi untuk menampilkan section yang aktif
      function toggleSection(activeSection, inactiveSection, activeBtn, inactiveBtn) {
          activeSection.classList.add('active');
          inactiveSection.classList.remove('active');
          activeBtn.classList.add('btn-primary');
          activeBtn.classList.remove('btn-secondary');
          inactiveBtn.classList.add('btn-secondary');
          inactiveBtn.classList.remove('btn-primary');
      }
  
      btnDireksi.addEventListener('click', function () {
          toggleSection(sectionDireksi, sectionKomisaris, btnDireksi, btnKomisaris);
      });
  
      btnKomisaris.addEventListener('click', function () {
          toggleSection(sectionKomisaris, sectionDireksi, btnKomisaris, btnDireksi);
      });
  
      // Default behavior (Direksi aktif, Komisaris disembunyikan)
      sectionDireksi.classList.add('active');
      sectionKomisaris.classList.remove('active');

      function toggleList(sectionId) {
        const list = document.getElementById(sectionId);
        if (list.classList.contains('hidden')) {
            list.classList.remove('hidden');
        } else {
            list.classList.add('hidden');
        }
    }
  });
  
  function toggleList(sectionId) {
    const list = document.getElementById(sectionId);
    if (list.classList.contains('hidden')) {
        list.classList.remove('hidden');
    } else {
        list.classList.add('hidden');
    }
}
let next = document.querySelector('.next');
        let prev = document.querySelector('.prev');

        // Function to update the active image opacity
        function updateActiveSlide() {
          let items = document.querySelectorAll('.item');
          let slide = document.querySelector('.slide');

          // Reset active state for all items
          items.forEach(item => {
            item.classList.remove('active');
            item.style.opacity = 0.5;  // Non-active images have lower opacity
            item.style.transform = 'scale(1)'; // Reset transform
            item.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)'; // Reset box-shadow
          });

          // Identify the center item, which is the active one
          let centerIndex = Math.floor(items.length / 2);  // Get the middle item
          let activeItem = items[centerIndex];

          // Make the active item stand out
          activeItem.classList.add('active');
          activeItem.style.opacity = 1;  // Full opacity for active image
          activeItem.style.transform = 'scale(1.1)'; // Slight zoom for active image
          activeItem.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)'; // Accent shadow for active item
        }

        // Navigate to next image
        next.addEventListener('click', function() {
          let items = document.querySelectorAll('.item');
          let slide = document.querySelector('.slide');

          // Move the first image to the end (so the active image remains in the center)
          slide.appendChild(items[0]);
          updateActiveSlide(); // Update the active image
        });

        // Navigate to previous image
        prev.addEventListener('click', function() {
          let items = document.querySelectorAll('.item');
          let slide = document.querySelector('.slide');

          // Move the last image to the beginning (so the active image remains in the center)
          slide.prepend(items[items.length - 1]);
          updateActiveSlide(); // Update the active image
        });

        // Auto-slide functionality
        setInterval(function() {
          let items = document.querySelectorAll('.item');
          let slide = document.querySelector('.slide');
          slide.appendChild(items[0]);
          updateActiveSlide();
        }, 3000); // Auto-slide every 3 seconds

        // Initialize active slide
        updateActiveSlide();
   
        // JavaScript for toggling submenu on click
 // Sticky Navbar Scroll Effect
// Sticky Navbar Scroll Effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
  } else {
      navbar.classList.remove("scrolled");
  }
});


document.querySelector('.hamburger').addEventListener('click', function() {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
  console.log('Hamburger clicked');  // Cek apakah event listener dipicu
});