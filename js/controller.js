window.onload = function () {
    var canvas = document.getElementById("canvas");

    const model = new Model(canvas);
    const view = new View(canvas);
    requestAnimationFrame(mainLoop);

    function mainLoop() {
        updateModel();
        updateView(model);
        requestAnimationFrame(mainLoop);
    }

    function updateModel() {
        model.updatePositions();
    }

    function updateView(model) {
        view.render(model);
    }
}