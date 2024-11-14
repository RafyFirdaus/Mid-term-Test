document.getElementById('dropdownButton').addEventListener('click', function() {
    // Tambahkan logika untuk toggle tampil atau sembunyikan dropdown
    var dropdownMenu = document.getElementById('dropdownMenu');
    if (dropdownMenu.classList.contains('show')) {
        dropdownMenu.classList.remove('show');
    } else {
        dropdownMenu.classList.add('show');
    }
});
