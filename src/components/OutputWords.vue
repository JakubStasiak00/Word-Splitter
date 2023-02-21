<template>
    <label for="providingText"> Filter words: </label><br>
    <input type="text" v-model="inpt" class="providingText" id="providingText" name="providingText">
    <ul class="words">
        <li><button class="words__item" v-for="word in numberedWords" @click="clickedWord = word.name" :key="word"><span class="words__number">{{ word.count }}</span> {{ word.name }}</button></li>
    </ul>
    <WordInformation @togglePopup="toggleWordInfo" v-if="showInfo" :word="wordToShow" :definition="defToShow" />
</template>

<script setup>
import WordInformation from "./WordInformation.vue"
import { computed, ref, watch } from "vue"


    const showInfo = ref(false) // conditionaly render WordInformation component
    let clickedWord = ref('') // prepare variable to store clicked word to handle watcher
    const data = ref(null) // store data from fetch request
    const wordToShow = ref('') // prop for WordInformation storing name of the word
    const defToShow = ref([]) // prop for WordInformation storing array with word definitions


    watch(clickedWord, async () => {  // watching clickedWord for changes and requesting word definitions from API to update defToShow
        if(clickedWord.value === '') { // handling returning variable to starting value to properly execute window closing event in WordInformation
            return
        }
        const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + clickedWord.value)
        if(!response.ok) { // throwing alert if word searched is not present in API 
            window.alert('Sorry ! This word isnt clasified in our data')
            return
        }
        data.value = await response.json()
        wordToShow.value = data.value[0].word
        defToShow.value = data.value[0].meanings
        toggleWordInfo()
        clickedWord.value = '' // setting variable to initial value
    })

    const toggleWordInfo = () => {  // toggling visibility of WordInformation card
        showInfo.value = !showInfo.value
    }

    const inpt = ref('') // grabbing inputs value to determine which words to display

    let props = defineProps({  // receiving words from parent component and defining them as Array type
        words: Array
    })

    const compareItems = (a, b) => { // sorting items by the amount of occurances 
        return b.count - a.count
    }

    const checkInput = (arr) => { // checking if input provided by user is included in words and if so displaying them in template
        return arr.filter(word => word.name.toLowerCase().includes(inpt.value.toLowerCase()))
    }

    let numberedWords = computed( () => {  // using numberedWords as holder of the filtered and sorted words
        let x = props.words.sort(compareItems)
        return checkInput(x)
    })

</script>

<style lang="scss"> 
    $color-name: #24a75b;
    $color-item: #76ce9b8f;

    .providingText {
        border: 3px solid $color-name;
        border-radius: 1rem;
        padding: 0.3rem 0.5rem;
        margin-bottom: 1rem;
    }

    .words {
        max-width: 1024px;
        margin: 0 auto;
        

        &__item {
            display: inline-block;
            background-color: $color-item;
            margin: 0.3rem 0.35rem;
            padding-block: 0.2rem;
            padding-inline: 0.2rem 0.6rem;
            border: 2px solid $color-name;
            border-radius: 1rem;
        }

        &__number {
            font-size: 0.7rem;
            padding: 0.3rem;
            vertical-align: middle;
            font-weight: bold;
            border-radius: 50%;
        }
    }
</style>