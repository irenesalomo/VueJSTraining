// Vue.component('the-breakfast', {
//     template: '<div class="thepulse-breakfast--icon" \
//                 ><img v-bind:src="name + \'.png\'"> \
//                 <div class="thepulse-breakfast--icon--name" v-on:click="$emit(\'click-breakfast-item\')"> \
//                 {{ name }}</div> \
//                 </div>',
//     props: ['name'],
//     methods: {
//         selectBreakfastItem: function(){
//           console.log("test");
//           console.log(this.key);
//         }
//       }                  
//   })
var vmBreakfast = new Vue({
    el: '#component-breakfast', 
    data() {
        return {
            breakfastItems: [
                {
                    id: 1,
                    name: 'Cereal',
                },
                {
                    id: 2,
                    name: 'Oats',
                },
                {
                    id: 3,
                    name: 'Fruits',
                },
                {
                    id: 4,
                    name: 'Toast',
                },
                {
                    id: 5,
                    name: 'Bacon',
                },
                {
                    id: 6,
                    name: 'Smoothies',
                },
            ],
            myBreakfastName : "Your favourite breakfast item:",
        }
    },
    methods: {
    }
});

var vmDynamicColor = new Vue({
    el: '#dynamic-bg-color-area',
    data() {
        return {
            x: 0,
            counter : 1,
        }
    },
    methods: {
        xCoordinate(e) {
            this.x = e.clientX;
        }, 
        incrementNumber() {
            this.counter++;
        }
    }
});

// var target1 = document.querySelector('.thepulse-breakfast--icon:nth-of-type(1) .thepulse-breakfast--icon--name');
//     console.log(target1);
//     Velocity(target1, 
//       { translateY: '70%'},
//       { easing: [1000, 20], 
//         duration: 2000 
//       }
//     );