const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particles = [];
let mouse = {
    x: null,
    y: null
};

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

window.addEventListener("mousemove", (e)=>{
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

class Particle{

    constructor(){
        this.reset();
    }

    reset(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - .5) * .6;
        this.speedY = (Math.random() - .5) * .6;
    }

    update(){

        this.x += this.speedX;
        this.y += this.speedY;

        if(
            this.x < 0 ||
            this.x > canvas.width ||
            this.y < 0 ||
            this.y > canvas.height
        ){
            this.reset();
        }

        if(mouse.x && mouse.y){

            let dx = this.x - mouse.x;
            let dy = this.y - mouse.y;

            let distance =
                Math.sqrt(dx * dx + dy * dy);

            if(distance < 120){
                this.x += dx / 30;
                this.y += dy / 30;
            }
        }
    }

    draw(){

        ctx.beginPath();
        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "rgba(0,212,255,.7)";

        ctx.fill();
    }
}

function init(){

    particles = [];

    for(let i=0;i<80;i++){
        particles.push(
            new Particle()
        );
    }
}

function connect(){

    for(let a=0;a<particles.length;a++){

        for(let b=a;b<particles.length;b++){

            let dx =
                particles[a].x -
                particles[b].x;

            let dy =
                particles[a].y -
                particles[b].y;

            let distance =
                dx * dx + dy * dy;

            if(distance < 12000){

                ctx.beginPath();

                ctx.strokeStyle =
                    "rgba(109,93,252,.12)";

                ctx.lineWidth = 1;

                ctx.moveTo(
                    particles[a].x,
                    particles[a].y
                );

                ctx.lineTo(
                    particles[b].x,
                    particles[b].y
                );

                ctx.stroke();
            }
        }
    }
}

function animate(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(p=>{
        p.update();
        p.draw();
    });

    connect();

    requestAnimationFrame(animate);
}

init();
animate();
