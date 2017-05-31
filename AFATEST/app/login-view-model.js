var Observable = require("data/observable").Observable;

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps left";
    }
}

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
            message: "Enrolado Exitosamente",
            okButtonText: "Aceptar"
        }).then(function () {
            console.log("Dialog closed!");
            // To import the "ui/frame" module:
            var frames = require("ui/frame");
            // Navigate to page called “my-page”
            frames.topmost().navigate("index");
        });
        
        
    }
    
    return viewModel;
}

exports.createViewModel = createViewModel;