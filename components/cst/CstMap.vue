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
      Timeline: <br />
      <input
        ref="timelineRange"
        class="slider"
        type="range"
        min="1"
        max="100"
        value="0"
        @input="rangeTimeline"
      />

      <div class="tabs">
        <div class="tabs__header">
          <button :class="{ active: tabsID == 0 }" @click="tabsID = 0">
            Multiple-pathes
          </button>
          <button
            :class="{ active: tabsID == 1 }"
            @click="
              tabsID = 1
              setPathDemo = undefined
            "
          >
            Pathfinder
          </button>
        </div>
        <div class="tabs__content">
          <div v-if="tabsID == 0">
            <button class="button" @click="multiPathes">
              Test multiple-pathes
            </button>
            <pre>{{ JSON.stringify(multiPathesDemo, null, 4) }}</pre>
          </div>

          <div v-if="tabsID == 1" class="space-y-4">
            <CstSelect
              :id="'start'"
              ref="start"
              :label="'Choose start-station'"
              :options="stations"
              :default-value="'A'"
              class="controls__start"
            />
            <CstSelect
              :id="'end'"
              ref="end"
              :label="'Choose end-station'"
              :options="stations"
              :default-value="'F'"
              class="controls__end"
            />
            <button class="button" @click="setPathes">Find path</button>
            <p v-if="message" class="message">{{ message }}</p>
            <pre>{{ JSON.stringify(this.setPathDemo, null, 4) }}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
      currentDemoData: undefined,
      multiPathesDemo: {
        start: 'A',
        wares: [
          ['C', 'B'],
          ['C', 'D', 'E'],
          ['C', 'D', 'F'],
        ],
      },
      setPathDemo: undefined,
      pathConnections: {
        A: ['C'],
        B: ['C'],
        C: ['A', 'B', 'D'],
        D: ['E', 'F', 'C'],
        E: ['D'],
        F: ['D'],
      },
      setPathAlreadySearched: [],
      setPathPossiblePathes: [],
      timeline: undefined,
      tabsID: 0,
    }
  },
  mounted() {
    // ref class for programatical creaction
    this.instancesClasses.CstStation = Vue.extend(CstStation)
    this.instancesClasses.CstWare = Vue.extend(CstWare)

    // ref stations container for injecting new elements
    this.stationsInitalEl = this.$refs.map.querySelector('.stations')

    this.setDestination()

    // demo multipathes, auto launch
    this.multiPathes()
  },
  beforeDestroy() {
    this.timeline.kill()
  },
  methods: {
    setDestination() {
      const destinations = [
        ...this.$refs.map.querySelector('.stations').children,
      ]

      // add final stations components above the default ones
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
        this.stationsInitalEl.after(stationInstance.$el)

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
    multiPathes() {
      this.currentDemoData = this.multiPathesDemo
      this.transort()
    },
    pathFinder(pathArray) {
      const startStation = pathArray[0]
      const trippleDemoWares = []

      pathArray.shift()

      for (let i = 0; i < 3; i++) {
        trippleDemoWares.push(pathArray)
      }

      this.setPathDemo = {
        start: startStation,
        wares: trippleDemoWares,
      }

      this.currentDemoData = this.setPathDemo

      this.transort()
    },
    setPathes() {
      this.message = undefined

      if (this.$refs.start.value === this.$refs.end.value) {
        this.message = 'No need to transport :-P'
        return
      }

      this.findPath(
        this.$refs.start.value,
        this.$refs.end.value,
        [],
        this.pathFinder
      )
    },
    findPath(currentValue, targetValue, historyRegister, callback) {
      const historyRegisterNew = [...historyRegister]
      historyRegisterNew.push(currentValue)

      if (currentValue !== targetValue) {
        const nodes = this.pathConnections[currentValue]

        nodes.forEach((value) => {
          if (historyRegisterNew.includes(value) !== true) {
            this.findPath(value, targetValue, historyRegisterNew, callback)
          }
        })
      } else {
        callback(historyRegisterNew)
      }
    },
    transort() {
      this.removeCurrentWares()

      // create timeline for the full animation
      if (this.timeline) {
        this.timeline.progress(1)
        this.timeline.kill()
      }
      this.timeline = gsap.timeline({
        repeat: -1,
      })
      this.timeline.addLabel('start')
      this.timeline.eventCallback('onUpdate', this.updateTimelineRange)

      // get first station of the multi path demo
      const startStation = this.stations.find(
        (el) => el.name === this.currentDemoData.start
      )

      // create a register of all visited stations, to avoid firing several time the "arrived animation"
      const visitedStation = []

      // for each ware of the multi path demo
      this.currentDemoData.wares.forEach((ware, i) => {
        // create instace of ware object
        const wareInstance = new this.instancesClasses.CstWare()
        wareInstance.$mount()
        this.stationsInitalEl.after(wareInstance.$el)
        this.currentWares.push(wareInstance)

        // initialize to first station position
        gsap.set(wareInstance.$el, {
          x: startStation.x - startStation.r + wareInstance.offsetX,
          y: startStation.y - startStation.r + wareInstance.offsetY,
          transformOrigin: 'center',
        })

        // for each ware, create a timeline
        wareInstance.tl = gsap.timeline()

        // for each steps of the ware, add a step in the timeline with motion path to next station
        ware.forEach((step) => {
          const station = this.stations.find((el) => el.name === step)

          wareInstance.tl.to(wareInstance.$el, {
            motionPath: {
              path: [
                {
                  x: station.x - station.r + wareInstance.offsetX,
                  y: station.y - station.r + wareInstance.offsetY,
                },
              ],
              curviness: 0,
              alignOrigin: [0.5, 0.5],
              autoRotate: true,
            },
            transformOrigin: 'center',
            duration: 1,
            delay: i * 0.1,
            ease: 'power4.inOut',
          })

          // if current station isn't registered in the visited stations already, by another ware
          if (visitedStation.find((el) => el === station.name) === undefined) {
            // add the station to register
            visitedStation.push(station.name)
            // get animation timeline of the station
            const stationArrivedTl = station.getArrivedTl()
            // calculate delay to the start of the full animation
            const stationArrivedTlDelay = wareInstance.tl.duration() - 0.5
            // add the arrived animation to the main timeline, to avoid shifts in the animations of the ware
            this.timeline.add(
              stationArrivedTl,
              'start+=' + stationArrivedTlDelay
            )
          }
        })

        // add the ware timeline to the main timeline
        this.timeline.add(wareInstance.tl, 'start')
      })
    },
    rangeTimeline() {
      this.timeline
        .pause()
        .seek((this.timeline.duration() * this.$refs.timelineRange.value) / 100)
    },
    updateTimelineRange() {
      this.$refs.timelineRange.value = this.timeline.progress() * 100
    },
  },
}
</script>

<style lang="postcss" scoped>
.map-container {
  @apply lg:flex;
}

.map {
  @apply w-full lg:w-1/2 xl:w-2/3;
  @apply lg:pr-10;

  svg {
    @apply block w-full h-auto;

    .bg {
      filter: drop-shadow(0 0 10px rgb(0 0 0 / 0.05));
    }
  }
}

.controls {
  @apply w-full lg:w-1/2 xl:w-1/3;
  @apply border border-gray-300;
  @apply p-6;
  @apply text-sm;
}

.button {
  @apply bg-gray-700 p-4;
  @apply text-white leading-none;
}

.message {
  @apply bg-gray-200 p-3 mt-4;
}

.slider {
  @apply w-full;
}

pre {
  @apply mt-4;
}

.tabs {
  @apply mt-10;
}

.tabs__header {
  @apply border-b border-black;

  button {
    @apply inline-block mr-8 pb-3;

    &.active {
      @apply border-b-4 border-black;
    }
  }
}

.tabs__content {
  @apply mt-12;
}
</style>
