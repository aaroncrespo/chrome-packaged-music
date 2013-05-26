window.onresize = doLayout;
var isLoading = false;

onload = function() {
  var player = document.getElementById("player");
  var loading = document.getElementById("loading");

  var loadstart = function() {
    resetExitedState();
    loading.innerText = "Loading....";
  }

  var loadstop = function() {
    loading.innerText = "";
  }

  player.addEventListener("loadstart", loadstart);
  player.addEventListener("loadstop", loadstop);
  player.addEventListener("exit", handleExit);
  doLayout();
};

window.onload = onload;

function doLayout() {
  var player = document.getElementById("player");
  var windowWidth = document.documentElement.clientWidth;
  var windowHeight = document.documentElement.clientHeight;
  var webviewWidth = windowWidth;
  var webviewHeight = windowHeight;

  player.style.width = webviewWidth + "px";
  player.style.height = webviewHeight + "px";

  var sadWebview = document.querySelector("#sad-webview");
  sadWebview.style.width = webviewWidth + "px";
  sadWebview.style.height = webviewHeight * 2/3 + "px";
  sadWebview.style.paddingTop = webviewHeight/3 + "px";
}

function handleExit(event) {
  document.body.classList.add("exited");
  if (event.type == "abnormal") {
    document.body.classList.add("crashed");
  } else if (event.type == "killed") {
    document.body.classList.add("killed");
  }
}

function resetExitedState() {
  document.body.classList.remove("exited");
  document.body.classList.remove("crashed");
  document.body.classList.remove("killed");
}

