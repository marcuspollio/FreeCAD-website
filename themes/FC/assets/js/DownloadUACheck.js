/* Script to detect User Agent and provide corresponding download options. */

document.addEventListener("DOMContentLoaded", function () {
  var userAgent = window.navigator.userAgent.toLowerCase();
  var windowsDiv = document.getElementById('windows');
  var macDiv = document.getElementById('mac');
  var linuxDiv = document.getElementById('linux');
  var elseDiv = document.getElementById('else');
  var showAllButtons = document.querySelectorAll('.show-all-button');

  function showDiv(div) {
    div.style.display = 'block';
    var button = div.querySelector('.show-all-button');
    button.style.display = 'block';
    button.addEventListener('click', function () {
      windowsDiv.style.display = 'block';
      macDiv.style.display = 'block';
      linuxDiv.style.display = 'block';
      button.style.display = 'none';
    });
  }

  if (userAgent.includes('win')) {
    showDiv(windowsDiv);
  } else if (userAgent.includes('mac')) {
    showDiv(macDiv);
  } else if (userAgent.includes('lin')) {
    showDiv(linuxDiv);
  } else {
    let value = userAgent;
    document.getElementById("ua").innerHTML = value;
    showDiv(elseDiv);
  }
});