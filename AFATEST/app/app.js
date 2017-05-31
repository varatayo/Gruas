
// START_CUSTOM_CODE_nativeScriptApp
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

require("./bundle-config");
var application = require("application");

// END_CUSTOM_CODE_nativeScriptApp
application.start({ moduleName: "index" });