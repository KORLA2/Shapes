/** @type{HTMLCanvasElement} */

let can = document.getElementsByClassName('can')[0];
let ctx = can.getContext('2d');
can.width = window.innerWidth;
can.height = window.innerHeight;
// ctx.beginPath()
// ctx.save();
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;
ctx.shadowBlur = 5;
ctx.shadowColor = "rgba(0,0,0,0.3)"

    let h=Math.random()*360;
window.addEventListener('mousemove', (e) => {
h+=20;
    ctx.save()
    ctx.beginPath()
    ctx.translate(e.x, e.y)
    for (let i = 0; i < 6; ++i) {

        ctx.rotate(Math.PI / 6)
        ctx.lineTo(0, -50);
        ctx.rotate(Math.PI / 6)
        ctx.lineTo(0, -100)

    }
    // ctx.rotate(Math.PI / 6)
    // ctx.lineTo(0, -100)
    ctx.closePath()
    ctx.fillStyle = `hsl(${h},100%,50%)`
    ctx.fill()
    ctx.restore()
    ctx.lineWidth = 2;

    ctx.stroke()
})