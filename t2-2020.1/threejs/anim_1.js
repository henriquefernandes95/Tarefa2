function WaveAnimation() {}

Object.assign( WaveAnimation.prototype, {

    init: function() {
        let rightUpperArmTween = new TWEEN.Tween( {theta:0} )
            .to( {theta:Math.PI * 0.5}, 500)
            .onUpdate(function(){
                // This is an example of rotation of the right_upper_arm 
                // Notice that the transform is M = T * R 
                let right_upper_arm =  robot.getObjectByName("right_upper_arm");
                right_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(right_upper_arm.position.x+1, right_upper_arm.position.y+2, 0 ) );
                


                // Updating final world matrix (with parent transforms) - mandatory
                right_upper_arm.updateMatrixWorld(true);
                // Updating screen
                stats.update();
                renderer.render(scene, camera);    
            })
        // Here you may include animations for other parts 

        //right arm movement
        let rightLowerArmTween = new TWEEN.Tween( {theta:0} )
            .to( {theta:Math.PI/2 }, 500)
            .onUpdate(function(){
                let right_lower_arm =  robot.getObjectByName("right_lower_arm");
                right_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(2.5, -1.8  , 0 ) );
                


                // Updating final world matrix (with parent transforms) - mandatory
                right_lower_arm.updateMatrixWorld(true);
                // Updating screen
                stats.update();
                renderer.render(scene, camera);    
            })
           
            
        let rightHandTween = new TWEEN.Tween( {theta:0} )
            .to( {theta:Math.PI/10 *-1 }, 1100)
            .onUpdate(function(){
                let right_hand =  robot.getObjectByName("right_hand");
                right_hand.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(right_hand.position.x, right_hand.position.y-0.4  , 0 ) );
                


                // Updating final world matrix (with parent transforms) - mandatory
                right_hand.updateMatrixWorld(true);
                // Updating screen
                stats.update();
                renderer.render(scene, camera);    
            })    

        //head moves slightly and tilts
        
        let headTween = new TWEEN.Tween( {theta:0} )
            .to( {theta:Math.PI/10 }, 500)
            .onUpdate(function(){
                let head =  robot.getObjectByName("head");
                head.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(head.position.x-0.3, head.position.y  , 0 ) );
                


                // Updating final world matrix (with parent transforms) - mandatory
                head.updateMatrixWorld(true);
                // Updating screen
                stats.update();
                renderer.render(scene, camera);    
            })    


        //left arm movement

        let leftLowerArmTween = new TWEEN.Tween( {theta:0} )
        .to( {theta:Math.PI/10 * -1}, 500)
        .onUpdate(function(){
            let left_lower_arm =  robot.getObjectByName("left_lower_arm");
            left_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(left_lower_arm.position.x-0.5, left_lower_arm.position.y , 0 ) );
            


            // Updating final world matrix (with parent transforms) - mandatory
            left_lower_arm.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);    
        })
       
        
        let leftHandTween = new TWEEN.Tween( {theta:0} )
        .to( {theta:Math.PI/10 *-1 }, 1100)
        .onUpdate(function(){
            let left_hand =  robot.getObjectByName("left_hand");
            left_hand.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(left_hand.position.x * -1, left_hand.position.y-0.4  , 0 ) );
            


            // Updating final world matrix (with parent transforms) - mandatory
            left_hand.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);    
        })    


        
        //  upperArmTween.chain( ... ); this allows other related Tween animations occur at the same time
        headTween.start()
        rightLowerArmTween.chain(rightHandTween.start());
        rightUpperArmTween.chain(rightLowerArmTween.start());
        rightUpperArmTween.start();
        leftLowerArmTween.chain(leftHandTween.start());
        leftLowerArmTween.start();
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




