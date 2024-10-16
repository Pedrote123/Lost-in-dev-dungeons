var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mc = {
    x: 100,
    y: canvas.height - 90,
    dx: 15,
    dy: 25,
    sw: 50,
    sh: 90,
    vy: 0,
    isGrounded: true
}

let keys = {
    'ArrowLeft': false,
    'ArrowRight': false
}


function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    gravity();

    mcMovement();

    ctx.fillRect(mc.x, mc.y, mc.sw, mc.sh);

    requestAnimationFrame(update)
}


function gravity(){
    if(!mc.isGrounded){
        mc.y -= mc.vy;

        mc.vy -= 1.2;

        if(mc.y >= canvas.height - mc.sh){
            mc.isGrounded = true
            mc.vy = 0;
            mc.y = canvas.height - mc.sh
        }
    }
}


document.addEventListener('keydown', ()=>{
    keys[event.key] = true;
});

document.addEventListener('keyup', ()=>{
    keys[event.key] = false;
});

function mcMovement(){
    if(keys['ArrowLeft'] && mc.x > 0){
        mc.x -= mc.dx;
    }
    if(keys['ArrowRight'] && mc.x < canvas.width - mc.sw){
        mc.x += mc.dx;
    }
    if(keys['ArrowUp'] && mc.isGrounded){
        mc.vy += mc.dy;
        mc.isGrounded = false
    }
}

update()

