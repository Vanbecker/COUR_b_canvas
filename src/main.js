let stage;
let radius = 30

export default function main(st) {
    stage = st;
    createBackground();
    createCircle();
    return stage;
}

function createCircle() {
    let gr = new createjs.Graphics();
    let circle = new createjs.Shape(gr);

    circle.pace = 1;
    circle.canMove = false
    circle.addEventListener('tick', onCircleTick)
    // circle.addEventListener('click', onCircleClick)

    gr.beginFill("green").drawCircle(0, 0, radius);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
}

function onCircleClick(e) {

}

function onCircleTick(e) {
    let tg = e.currentTarget;

    if (!tg.canMove) return

    tg.x += tg.pace
    if (tg.x > stage.width) {
        tg.pace *= -1
    }
}

function createBackground() {
    let gr = new createjs.Graphics()
    let bg = new createjs.Shape(gr)

    gr.beginFill('#ffffff')
    gr.drawRect(0, 0, stage.width, stage.height)

    stage.addChild(bg)
}