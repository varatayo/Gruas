var createViewModel = require("./index-view-model").createViewModel;

 var frames = require("ui/frame");

function onNavigatingTo(args) {
    var page = args.object;
    
    page.bindingContext = createViewModel();
}
function onServicios(eventData) {
    frames.topmost().navigate("servicios/servicios");
    
    /*
    var dialogs = require("ui/dialogs");
    dialogs.alert({
                      title: "Servicios",
                      message: "onServicios",
                      okButtonText: "Aceptar"
                  }).then(function () {
                      console.log("Dialog closed!");
                      // To import the "ui/frame" module:
                      //var frames = require("ui/frame");
                      // Navigate to page called “my-page”
                      //frames.topmost().navigate("index");
                  });
    */
}
exports.onServicios = onServicios;

function onOperadores(eventData) {
    // To import the "ui/frame" module:
    //var frames = require("ui/frame");
    // Navigate to page called “my-page”
    frames.topmost().navigate("login");
}
exports.onOperadores = onOperadores;

function onlogistica(eventData) {
    var dialogs = require("ui/dialogs");
    dialogs.alert({
                      title: "Logistica",
                      message: "onlogistica",
                      okButtonText: "Aceptar"
                  }).then(function () {
                      console.log("Dialog closed!");
                      // To import the "ui/frame" module:
                      //var frames = require("ui/frame");
                      // Navigate to page called “my-page”
                      //frames.topmost().navigate("index");
                  });
}
exports.onlogistica = onlogistica;

function onMontaje(eventData) {
    var dialogs = require("ui/dialogs");
    dialogs.alert({
                      title: "Montaje",
                      message: "onlogistica",
                      okButtonText: "Aceptar"
                  }).then(function () {
                      console.log("Dialog closed!");
                      // To import the "ui/frame" module:
                      //var frames = require("ui/frame");
                      // Navigate to page called “my-page”
                      //frames.topmost().navigate("index");
                  });
}
exports.onMontaje = onMontaje;

exports.onNavigatingTo = onNavigatingTo;