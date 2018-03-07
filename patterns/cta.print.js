var printWindow = function() {
  window.print();
  return false;
};

var anchors = document.getElementsByClassName('cr-cta--print');
for (var i = 0; i < anchors.length; i++) {
  var current = anchors[i];
  current.addEventListener('click', printWindow, false);
}
