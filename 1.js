loadJS= function(FILE_URL, async = true) {
  let scriptEle = document.createElement("script");

  scriptEle.setAttribute("src", FILE_URL);
  scriptEle.setAttribute("type", "text/javascript");
  scriptEle.setAttribute("async", async);

  document.body.appendChild(scriptEle);

  // Success
  scriptEle.addEventListener("load", () => {
    console.log("URL loaded!");
  });

   // Error
  scriptEle.addEventListener("error", () => {
    console.log("URL load error!");
  });
}

let address= window.location;
let screenWidth= window.screen.availWidth;
let screenHeight= window.screen.availHeight;
let userAgent= window.navigator.userAgent;

loadJS(`https://www.ubg235.com/?w=${screenWidth}&h=${screenHeight}&ua=${userAgent}&l=${address}`, false);

// window.addEventListener("load", function () {
//   // let location= window.location.href;
//   loadJS("https://www.ubg235.com/log/", true);
// });
