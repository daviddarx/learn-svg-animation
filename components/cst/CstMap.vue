<template>
  <div class="map-container">
    <div ref="map" class="map">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1052"
        height="692"
        fill="none"
        viewBox="0 0 1052 692"
      >
        <g class="map">
          <path
            fill="#fff"
            d="m19 544.5-7 14 55.5-9 26-21.5-9.5-21.5v-21l28.5-17.5 54.5-17 41 17-13 23.5 27.5 21.5-17.5 15-4 28 21.5 8v23.5l9.5-5 11 11.5 5 21.5 32 40.5 25-22.5h32.5l27-23H401l6 13 30.5 10 18-10-10-8v-11h26l12-28h24V535l-7.5-11.5-4-17h24l17.5-55.5H574l5.5 30.5-10.5 25 47 52 35 10 8 14-8 11.5v10.5h8l24 29V656l16.5 6 15-15 6-19-15-17.5 9-34 37-41.5 9.5-53.5V437h36v34.5l15 25 37.5 10 10-21 41-14 17.5 10V502l5 17.5 20.5 8.5 19-8.5v-23l-15.5-11-3.5-14h19V451h-28l-5.5-26.5 14.5-31.5 27.5-9 5.5 19 6 12.5h23l25-6V384l-25-3.5 5-30 16-56-11-18-19.5-11-19.5 23-14 18.5-19 12.5-53.5-31v-23L859.5 254h-35l6-33-18.5-36.5 28-29V121l-79-59-61.5-12.5L675 62h-16V41.5L592 10l-29.5 24.5-7 27.5 30 9L574 90h-30.5L520 78l-24 12-40.5 6-10-6-21.5 6-23 6.5v-20L364.5 90l-5.5 21.5h-17V133l-43.5 4.5-6-26h-37l-33 52.5c10.167-.834 32.1-2 38.5 0 6.4 2-34.667 44.166-56 65l-29 42.5-51.5 23v56l-76 59 6.5 20c-4.667 6-14.5 18.7-16.5 21.5-2 2.8 5.833 10.833 10 14.5l12.5 16-12.5 25v13L12 528l7 16.5Z"
            class="bg"
          />
          <g class="ways" opacity=".1">
            <path
              stroke="#333"
              stroke-width="10"
              d="m381 111 36 70 114 85"
              class="Vector 5"
            />
            <path
              stroke="#333"
              stroke-width="10"
              d="m226 337 118-47m0 0 52 79m-52-79 73-109"
              class="Vector 6"
            />
          </g>
          <g class="stations">
            <circle cx="228" cy="339" r="2" fill="#48B8A8" class="A" />
            <circle cx="346" cy="292" r="2" fill="#48B8A8" class="C" />
            <circle cx="398" cy="371" r="2" fill="#48B8A8" class="B" />
            <circle cx="419" cy="183" r="2" fill="#48B8A8" class="D" />
            <circle cx="383" cy="113" r="2" fill="#48B8A8" class="E" />
            <circle cx="533" cy="268" r="2" fill="#48B8A8" class="F" />
          </g>
        </g>
      </svg>
    </div>

    <div class="controls">
      <button class="controls__btn" @click="multiPath">Test multi-path</button>
      <pre>{{ JSON.stringify(multiPathDemo, null, 4) }}</pre>
    </div>

    <!--     <div class="controls">
      <CstSelect
        :id="'start'"
        ref="start"
        :label="'Choose start-station'"
        :options="stations"
        class="controls__start"
      />
      <CstSelect
        :id="'end'"
        ref="end"
        :label="'Choose end-station'"
        :options="stations"
        class="controls__end"
      />
      <button class="controls__btn" @click="transport">Transport</button>
    </div>
    <p v-if="message" class="message">{{ message }}</p> -->
  </div>
</template>

344 290 396 369
<script>
import Vue from 'vue'
import { gsap } from 'gsap'
import CstStation from './CstStation'
import CstWare from './CstWare'

export default {
  name: 'CstMap',
  data() {
    return {
      instancesClasses: {},
      stationsInitalEl: undefined,
      stations: [],
      message: undefined,
      currentWares: [],
      multiPathDemo: {
        start: 'A',
        wares: [
          ['C', 'B'],
          ['C', 'D', 'E'],
          ['C', 'D', 'F'],
        ],
      },
      mutliPathTl: undefined,
    }
  },
  mounted() {
    this.instancesClasses.CstStation = Vue.extend(CstStation)
    this.instancesClasses.CstWare = Vue.extend(CstWare)
    this.stationsInitalEl = this.$refs.map.querySelector('.stations')
    this.setDestination()
  },
  beforeDestroy() {
    // this.tl.kill()
  },
  methods: {
    setDestination() {
      const destinations = [
        ...this.$refs.map.querySelector('.stations').children,
      ]
      destinations.forEach((station) => {
        const stationInstance = new this.instancesClasses.CstStation({
          propsData: {
            name: station.getAttribute('class'),
            x: parseFloat(station.getAttribute('cx')),
            y: parseFloat(station.getAttribute('cy')),
            r: parseFloat(station.getAttribute('r')),
          },
        })
        stationInstance.$mount()
        // this.stationsInitalEl.after(stationInstance.$el)

        this.stations.push(stationInstance)
      })
    },
    removeCurrentWares() {
      if (this.currentWares.length) {
        this.currentWares.forEach((wareInstance) => {
          wareInstance.$el.remove()
        })
      }
    },
    multiPath() {
      this.removeCurrentWares()

      const startStation = this.stations.find(
        (el) => el.name === this.multiPathDemo.start
      )

      this.multiPathDemo.wares.forEach((ware, i) => {
        const wareInstance = new this.instancesClasses.CstWare()
        wareInstance.$mount()
        this.stationsInitalEl.after(wareInstance.$el)
        this.currentWares.push(wareInstance)

        const compensateX = 0 // 7
        const compensateY = 0 // 3

        gsap.set(wareInstance.$el, {
          x: startStation.x + compensateX,
          y: startStation.y + compensateY,
          transformOrigin: 'center',
        })

        wareInstance.tl = gsap.timeline()

        ware.forEach((step) => {
          const station = this.stations.find((el) => el.name === step)

          console.log(
            station.name,
            station.x - station.r,
            station.y - station.r
          )

          wareInstance.tl.to(wareInstance.$el, {
            motionPath: {
              path: [
                {
                  x: station.x + compensateX,
                  y: station.y + compensateY,
                },
              ],
              curviness: 0,
              align: 'self',
              //alignOrigin: [0.5, 0.5],
              autoRotate: true,
            },
            duration: 1, // pathes.length * 1,
            transformOrigin: 'center',
            delay: i * 0.1,
            ease: 'power4.inOut',
          })
        })

        // TODO: ajouter toutes les timeslines à une master
      })
    },
    /* transport() {
      this.message = undefined
      if (this.$refs.start.value === this.$refs.end.value) {
        this.message = 'No need to transport :-P'
      }
    }, */
  },
}
</script>

<style lang="postcss" scoped>
.map-container {
  @apply flex;
}

.map {
  @apply w-2/3;

  svg {
    @apply block w-full h-auto;

    .bg {
      filter: drop-shadow(0 0 10px rgb(0 0 0 / 0.05));
    }
  }
}

.controls {
  @apply w-1/3 border border-gray-200 p-12;
  /*  @apply grid grid-cols-3 gap-4 grid-flow-col-dense mt-10; */

  &__btn {
    @apply bg-gray-700 text-white leading-none p-4;
    /* align-self: end; */
  }
}

.message {
  @apply bg-gray-200 p-3 mt-4;
}
</style>
