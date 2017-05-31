var Observable = require("data/observable").Observable;

function createViewModel() {
    var viewModel = new Observable();
    
    /*
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);
    */

    viewModel.onTap = function() {
        
        
        var dialogs = require("ui/dialogs");
        dialogs.alert({
            title: "Enrolamiento",
            message: "tap",
            okButtonText: "Aceptar"
        }).then(function () {
            console.log("Dialog closed!");
            // To import the "ui/frame" module:
            //var frames = require("ui/frame");
            // Navigate to page called “my-page”
            //frames.topmost().navigate("index");
        });
        
        
    }
    
    return viewModel;
}

exports.createViewModel = createViewModel;