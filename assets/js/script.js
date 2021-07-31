document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

document.addEventListener('DOMContentLoaded', function() {
    var closer = document.querySelectorAll('.sidenav-close');
    var instances = M.Dropdown.init(closer, close);
  });