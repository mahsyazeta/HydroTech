$(document).ready(function() {
    // Mengatur status elemen berdasarkan mode yang dipilih
    function setModeStatus() {
      var modeSwitch = $('#modeSwitch');
      var timePicker = $('#timePicker');
      var manualSwitch = $('#manualSwitch');
  
      if (modeSwitch.is(':checked')) {
        timePicker.prop('disabled', false);
        manualSwitch.prop('disabled', true);
      } else {
        timePicker.prop('disabled', true);
        manualSwitch.prop('disabled', false);
      }
    }
  
    // Menangani submit form
    $('#growlight-form').submit(function(event) {
      event.preventDefault();
      // Mengambil nilai-nilai input dari form
      var mode = $('#modeSwitch').is(':checked') ? 'Auto' : 'Manual';
      var time = $('#timePicker').val();
      var manual = $('#manualSwitch').is(':checked') ? 'Ya' : 'Tidak';
  
      // Melakukan aksi sesuai dengan data yang diambil
      // Misalnya, mengirim data ke server atau melakukan manipulasi lainnya
  
      // Menampilkan pesan sukses
      alert('Pengaturan Growlight berhasil disimpan!');
    });
  
    // Mengatur status elemen saat halaman dimuat
    setModeStatus();
  
    // Mengatur event listener untuk perubahan mode
    $('#modeSwitch').change(function() {
      setModeStatus();
    });
  });
  