<template>
  <header class="header">
    <h1 class="appname"> Word Splitter </h1>
    <p class="subtitle">Extract and count words used in the text the easy way !</p>
  </header>
  <Loading v-if="isPending" />
  <form class="text-provider" name="text-provider" @submit.prevent="changeStatus(area.value)">
    <label class="text-provider__label" for="text-to-edit">Enter your text here:</label>
    <textarea spellcheck="false" ref="area" required class='text-provider__area' name="text-to-edit" id="text-to-edit"></textarea>
    <div class="bttn-wrapper">
      <button class="text-provider__bttn">Split &amp; count</button>
      <button type="reset" class="text-provider__bttn" @click="emptyArr">Reset</button>
    </div>
  </form>
  <OutputWords :words="splitText" />
</template>

<script setup>
import OutputWords from './components/OutputWords.vue'
import Loading from './components/Loading.vue'
import { ref } from '@vue/reactivity'

const delay = ms => new Promise(res => setTimeout(res, ms));
const area = ref(null) // referencing textarea in template
let splitText = ref([]) // creating epmty array to fill with objects containing words in text provided and their number of occurances
const isPending = ref(false)

const textFormat = textToFormat => { // formatting text - excluding symbols like: "." , " ,", '@' etc. replacing multiple spaces with one and trimming white spaces from beggining and end of the string
  return textToFormat.replace(/\W/g, ' ').replace(/\s\s+/g, ' ').trim()
}

const splitWords = wrd => { // splitting formated text into array of words
  return textFormat(wrd).split(' ')
}

const wordsGrouping = wrdArr => {  // transfering words into array of objects in formula { name: word, count: numberofappearances }

  for (let i = 0; i < wrdArr.length; i++) {
    let wordObj = splitText.value.find(obj => obj.name.toLowerCase() === wrdArr[i].toLowerCase())

    if(wordObj) {
      wordObj.count++
    } else {
      splitText.value.push({
        name: wrdArr[i],
        count: 1
      })
    }
  }

  isPending.value = false

}

const changeStatus = async (x) => {
  isPending.value = true
  await delay(10)
  changeHandler(x)
}

const changeHandler = (textToSplit) => { // event for handling provided text 
  console.log(isPending.value)
  splitText.value.splice(0)
  let result = splitWords(textToSplit)
  wordsGrouping(result)
}

const emptyArr = () => {  // emptying object array on emptying textarea
  splitText.value.splice(0)
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
    width: clamp(5rem, 2.5rem + 80vw, 60rem);
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
    margin-inline: 1rem ;
    display: inline-block;
  }
}
</style>
