PIXI.utils.sayHello();

// let app = new PIXI.Application({width: 256, height: 256});
// document.getElementById('cat').appendChild(app.view);

var renderer = new PIXI.autoDetectRenderer(512, 512, {
    transparent: true,
    backgroundColor: 0xDEFAFE,
    resolution: 1,
});

document.getElementById('cat').appendChild(renderer.view);

var stage = new PIXI.Container();

const loader = new PIXI.Loader();
// const loader = PIXI.Loader.shared;
// var loader = PIXI.loader;

  loader
    .add('cat', 'images/cat.png')
    .load(setup);

var cat;

function setup() {
    // let resources = PIXI.loader.resources;

    cat = new PIXI.Sprite(
      loader.resources["cat"].texture
    );

    stage.addChild(cat);
    animationLoop();
}

function animationLoop() {
    requestAnimationFrame(animationLoop);

    cat.scale.set(0.5, 0.5);
    cat.x = renderer.width / 2;
    cat.y = renderer.height / 2;
    cat.anchor.set(0.5, 0.5);

    cat.rotation += 0.01;

    renderer.render(stage);
}
