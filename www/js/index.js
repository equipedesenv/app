document.addEventListener("deviceready", openBrowser, false);

function onDeviceReady() {
    // Now safe to use the PhoneGap API.
    openBrowser();
}

function openBrowser() {
   var url = 'https://www.poamobilidade.com.br';
   var target = '_self';
   var options = "location=yes"
   var ref = window.open(url, target, options);

   ref.addEventListener('loadstart', loadstartCallback);
   ref.addEventListener('loadstop', loadstopCallback);
   ref.addEventListener('loadloaderror', loaderrorCallback);
   ref.addEventListener('exit', exitCallback);

   function loadstartCallback(event) {
      console.log('Loading started: '  + event.url)
   }

   function loadstopCallback(event) {
      console.log('Loading finished: ' + event.url)
   }

   function loaderrorCallback(error) {
      console.log('Loading error: ' + error.message)
   }

   function exitCallback() {
      console.log('Browser is closed...')
   }
}