const app = Vue.createApp({
    data() {
      return { 
        enteredGoalValue: '',
        goals: [] 
       };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredGoalValue);
        },
        removeGoal(idx) {
            this.goals.splice(idx,1);
        }
    }
  });
  
  app.mount('#user-goals');
  



  // v-if = v-show
  //..v-else...v-else-if...sibling elements!
  //@click.stop 
