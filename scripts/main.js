/*

var canv = document.getElementById("hyperidcanvas");
var ctx = canv.getContext("2d");

canv.width = window.innerWidth;
canv.height = window.innerHeight;
ctx.fillStyle = "#0d0f12";
ctx.fillRect(0, 0, canv.width, canv.height);

var particles = [
    [
        window.innerWidth / 2,
        window.innerHeight / 2,
        Math.random() * 6.28319,
        Math.random() * 2 + 1
    ]
];

function r() {
    ctx.fillStyle = "#0d0f12d4";
    ctx.globalAlpha = 1;
    ctx.fillRect(0, 0, canv.width, canv.height);
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#54575c";
    for (let i = 0; i < particles.length; i++) {
        var p = particles[i];

        let x = p[3] * Math.cos(p[2]);
        let y = p[3] * Math.sin(p[2]);
        p[0] += x;
        p[1] += y;
        ctx.beginPath();
        ctx.arc(p[0], p[1], 1.5, 0, 2 * Math.PI);
        ctx.fill();
    }
    if (Math.random() > 0.75) {
        particles.push([
            window.innerWidth / 2,
            window.innerHeight / 2,
            Math.random() * 6.28319,
            Math.random() * 2 + 1
        ]);
    }
    requestAnimationFrame(r);
}

r();*/