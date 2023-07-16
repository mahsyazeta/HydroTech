$(document).ready(function() {
    // Menangani submit form
    $('#dosing-form').submit(function(event) {
      event.preventDefault();
      // Mengambil nilai-nilai input dari form
      var mode = $('#modeSwitch').is(':checked') ? 'Auto' : 'Manual';
      var thresholdMin = $('#thresholdMin').val();
      var thresholdMax = $('#thresholdMax').val();
      var ecPumpStatus = $('#ecPumpSwitch').is(':checked') ? 'Aktif' : 'Nonaktif';
      var phPumpStatus = $('#phPumpSwitch').is(':checked') ? 'Aktif' : 'Nonaktif';
  
      // Melakukan aksi sesuai dengan data yang diambil
  
      // Menampilkan pesan sukses
      alert('Pengaturan Dosing berhasil disimpan!');
    });
  });
  