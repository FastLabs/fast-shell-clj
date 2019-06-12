(function () {

    function addListener(appEventHandler) {
        window.addEventListener("message", appEventHandler, true);
    }

    var re = /ifr-(.*?)\$/;
    if (frameElement.id === undefined) {
        console.log("Frame element id is not preset");
    }
    var instanceId = frameElement.id.split(re);
    if (instanceId.length !== 3) {
        console.log("Most probably iframe identifier is not correct");
        console.log("Will not be able to communicate with the container");
    } else {

        window.parent.postMessage(JSON.stringify({appId: instanceId[1], instId: instanceId[2], status: "loaded"}), "*");
    }
    window.container = {
        addContainerMessageListener: addListener
    }
})();
