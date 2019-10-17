<template>
  <div>
    <span>{{ tweeningValue }}</span>
  </div>
</template>

<<script>
import TWEEN from '@tweenjs/tween.js';
export default {
  name: 'animated-integer',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data: function () {
    return {

      tweeningValue: 0
    };
  },
 
  watch: {
    value: function (newValue, oldValue) {
        
        function animate() {
        if (TWEEN.update()) {
          requestAnimationFrame(animate);
        }
      }

      new TWEEN.Tween({tweeningValue:oldValue})
      .to({tweeningValue:newValue}, 1000)
      .onUpdate(object => {
      // console.log(object, "OBJECT", this.tweeningValue)
      this.tweeningValue = object.tweeningValue.toFixed(2)
    }).start()
      animate()
    }
  },
 
};
</script>

<style scoped>
</style>