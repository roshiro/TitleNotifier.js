(function() {
  var addButton = document.getElementById('add_btn'),
      subButton = document.getElementById('sub_btn'),
      resButton = document.getElementById('res_btn');

  addButton.onclick = function() {
    titlenotifier.add();
  };

  subButton.onclick = function() {
    titlenotifier.sub();
  };

  resButton.onclick = function() {
    titlenotifier.reset();
  };
})();
