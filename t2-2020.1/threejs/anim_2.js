function JumpAnimation() {}

Object.assign( WaveAnimation.prototype, {

    init: function() {


        

    },
    animate: function(time) {
        window.requestAnimationFrame(this.animate.bind(this));
        TWEEN.update(time);
    },
    run: function() {
        this.init();
        this.animate(0);
    }




});