function yes() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    confetti({
        angle: 120,
        spread: 55,
        particleCount: 100,
        origin: { y: 0.6 }
    });

    setTimeout(function() {
        location.href = "https://youtu.be/Zp29FiVyjGY?si=Bnof_iF5CTlzLa3P";
    }, 1000); 
}

function no(btn) {
    btn.style.position = 'absolute';
    btn.style.bottom = newButtonPosition(50, 90);
    btn.style.left = newButtonPosition(20, 90);
}

function newButtonPosition(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}