$(document).ready(function() {
    // Fungsi untuk menampilkan peringatan jika nilai sensing melebihi atau kurang dari threshold
    function showWarning(sensorId, value, thresholdMin, thresholdMax) {
      if (value < thresholdMin || value > thresholdMax) {
        $('#' + sensorId).addClass('sensor-warning');
        $('#' + sensorId).text('Peringatan: Nilai di luar batas normal!');
      } else {
        $('#' + sensorId).removeClass('sensor-warning');
        $('#' + sensorId).text('');
      }
    }
  
    // Mengambil data sensing dari server (contoh data statis)
    function fetchSensingData() {
      return {
        ec: 1000,
        ph: 7.2,
        do: 8.5,
        kwh: 25,
        temperature: 28
      };
    }
  
    // Mengupdate data sensing pada dashboard
    function updateSensingData() {
      var sensingData = fetchSensingData();
      showWarning('ec', sensingData.ec, 800, 1200);
      showWarning('ph', sensingData.ph, 6.5, 7.5);
      showWarning('do', sensingData.do, 7.0, 9.0);
      showWarning('kwh', sensingData.kwh, 0, 30);
      showWarning('temperature', sensingData.temperature, 25, 30);
      // Update nilai sensing pada elemen HTML
      $('#ec').text( sensingData.ec + ' ppm');
      $('#ph').text( sensingData.ph);
      $('#do').text( sensingData.do + ' mg/L');
      $('#kwh').text( sensingData.kwh);
      $('#temperature').text( + sensingData.temperature + '°C');
    }
  
    // Mengupdate lokasi, tanggal, dan waktu saat ini
    function updateLocationDateTime() {
      var location = 'Batu, Indonesia';
      var currentDate = new Date().toLocaleDateString();
      var currentTime = new Date().toLocaleTimeString();
      $('#location').text('Lokasi: ' + location);
      $('#datetime').text( currentDate + ' ' + currentTime);
    }
  
    // Fungsi untuk menampilkan alert
    function showAlert(message) {
      $('#alert-container').html('<div class="alert alert-danger" role="alert">' + message + '</div>');
    }
  
    // Fungsi untuk menghapus alert
    function removeAlert() {
      $('#alert-container').empty();
    }
  
    // Mengupdate data sensing dan lokasi secara berkala
    function updateDashboard() {
      updateSensingData();
      updateLocationDateTime();
    }
    
    $(document).ready(function() {
        // Mengambil elemen dengan ID date dan time
        var dateElement = document.getElementById('date');
        var timeElement = document.getElementById('time');
      
        // Mendapatkan tanggal dan waktu saat ini
        var currentDate = new Date();
        var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false };
        var formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);
        var formattedTime = currentDate.toLocaleTimeString('en-US', timeOptions);
      
        // Menampilkan tanggal dan waktu dengan ikon
        dateElement.innerHTML = '<i class="far fa-calendar-alt"></i>' + formattedDate;
        timeElement.innerHTML = '<i class="far fa-clock"></i>' + formattedTime;
      });
      
    // Memulai update dashboard setiap detik
    updateDashboard();
    setInterval(updateDashboard, 1000);
  
    // Menghandle klik tombol "Setting Growlight"
    $('#settings a[href="settings-growlight.html"]').on('click', function(e) {
      e.preventDefault();
      window.location.href = 'settings-growlight.html';
    });
  
    // Menghandle klik tombol "Setting Dosing"
    $('#settings a[href="settings-dosing.html"]').on('click', function(e) {
      e.preventDefault();
      window.location.href = 'settings-dosing.html';
    });
  });
  