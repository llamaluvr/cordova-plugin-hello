
cordova.commandProxy.add("Hello", {
    greet: function (successCallback, errorCallback, strInput) {
            successCallback("Hello " + strInput);
    }
});