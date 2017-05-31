 var frames = require("ui/frame");

function onNavigatingTo(args) {
    var page = args.object;
    
    page.bindingContext = createViewModel();
}

function onTap(eventData) {
    // To import the "ui/frame" module:
    //var frames = require("ui/frame");
    // Navigate to page called “my-page”
    frames.topmost().navigate("notificacion/notificacion");
}
exports.onTap = onTap;

exports.onNavigatingTo = onNavigatingTo;