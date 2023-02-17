<template>
  <header class="header">
    <h1 class="appname">Word Splitter</h1>
    <p class="subtitle">Extract and count words used in the text the easy way !</p>
  </header>
  <form class="text-provider" name="text-provider" @submit="prevDefault">
    <label class="text-provider__label" for="text-to-edit">Enter your text here:</label>
    <textarea ref="area" required class='text-provider__area' name="text-to-edit" id="text-to-edit"></textarea>
    <button class="text-provider__bttn" @click="splitWords">Split &amp; count</button>
    <button class="text-provider__bttn" @click="reseting">Reset</button>
  </form>
  <Formatter ref="compFormatter" :fArray="finalArray" />
</template>

<script>
import Formatter from '@/components/Formatter.vue'
import { ref } from '@vue/reactivity';
import { usePrevention } from './composables/prevent-default.js'

export default {
  name: 'App',
  components: {
    Formatter
  },

  setup() {
    // variables //
    let wordArray = []
    let finalArray = ref([])
    const area = ref(null)

    // functions //

    const numering = (a, b) => {
      return b.count - a.count
    }

    const formatText = text => {
      return text.replace(/\W/g, ' ').replace(/\s\s+/g, ' ').trim()
    }

    const pushing = (elem) => {
      finalArray.value.push(
            {
              name: elem,
              count: 1
            }
          )
    }

    const { prevDefault } = usePrevention()

    const splitWords = () => {

      wordArray = []
      finalArray.value = []

      if (!area.value.value) {
        return
      }

      let textToSplit = formatText(area.value.value);

      wordArray = textToSplit.split(' ')

      wordArray.forEach(element => {
        if (!finalArray.value.length) {
          pushing(element)
        } else {
          let wasFound = false

          finalArray.value.forEach(e => {
            if (e.name === element) {
              e.count++
              wasFound = true
              return
            }
          })

          if (!wasFound) {
            pushing(element)
          }
        }
      })

      finalArray.value = finalArray.value.sort(numering)

    }

    const reseting = () => {
      area.value.value = ''
    }

    return { splitWords, prevDefault, reseting, area, finalArray }

  }

}
</script>

<style lang="scss">
$color-name: #24a75b;
$color-sub: #1d7a44;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.header {
  margin-bottom: 3rem;
}

.appname {
  font-size: 2rem;
  padding: 2rem 0 1rem;
  font-weight: bold;
  color: $color-name;
}

.subtitle {
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: bold;
  color: $color-sub;
}

.text-provider {
  display: flex;
  flex-direction: column;

  & * {
    margin: 0 auto;
  }

  &__area {
    width: clamp(5rem, 3rem + 80vw, 80%);
    resize: none;
    min-height: 10rem;
    margin-block: 1rem;
  }

  &__bttn {
    border: 3px solid $color-name;
    border-radius: 0.4rem;
    color: $color-sub;
    width: 10rem;
    text-transform: capitalize;
    padding: 0.5rem 1rem;
    line-height: 1.3rem;
    margin-bottom: 1rem;

  }
}
</style>
