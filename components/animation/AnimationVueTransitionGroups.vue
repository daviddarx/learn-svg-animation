<template>
  <div class="gsap-pathes">
    <h2>Vue transition groups</h2>
    <br />
    <div class="container">
      <button class="btn" @click="insert">insert at random index</button>
      <button class="btn" @click="reset">reset</button>
      <button class="btn" @click="shuffle">shuffle</button>

      <TransitionGroup tag="div" name="fade" class="items-container">
        <div
          v-for="item in items"
          :key="item"
          class="item"
          @click="remove(item)"
        >
          {{ item }}
          <button>x</button>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script>
const getInitialItems = () => [1, 2, 3, 4, 5]
let id = getInitialItems().length + 1

export default {
  name: 'AnimationVueTransitionGroups',
  data() {
    return {
      items: getInitialItems(),
    }
  },
  methods: {
    insert() {
      const i = Math.round(Math.random() * this.items.length)
      this.items.splice(i, 0, id++)
    },
    reset() {
      this.items = getInitialItems()
    },
    shuffle() {
      console.log(this.items)
      const shuffled = this.shuffleArray(this.items)
      this.items = [] // reset to force changing
      this.items = shuffled
    },
    shuffleArray(array) {
      let currentIndex = array.length
      let randomIndex

      // While there remain elements to shuffle.
      while (currentIndex !== 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // And swap it with the current element.
        ;[array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ]
      }

      return array
    },
    remove(item) {
      const i = this.items.indexOf(item)
      if (i > -1) {
        this.items.splice(i, 1)
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.items-container {
  @apply relative mt-10;
}

.btn {
  @apply inline-block px-4 py-2 bg-black text-white;
}

.item {
  @apply w-full h-10 bg-gray-200 mb-2 px-2 py-1;
  box-sizing: border-box;
}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>
