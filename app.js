function attackVal(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = attackVal(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = attackVal(8, 15);
      this.playerHealth -= attackValue;
    },
  },
  computed: {
    monsterBarStlye() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },
  },
});
app.mount("#game");
