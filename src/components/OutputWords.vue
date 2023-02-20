<template>
    <label for="providingText"> Filter words: </label><br>
    <input type="text" v-model="inpt" class="providingText" id="providingText" name="providingText">
    <ul class="words">
        <li class="words__item" v-for="word in numberedWords" :key="word"><span class="words__number">{{ word.count }}</span> {{ word.name }}</li>
    </ul>

</template>

<script setup>
import { computed, ref } from "vue"

    const inpt = ref('') // grabbing inputs value to determine which words to display

    let props = defineProps({  // receiving words from parent component and defining them as Array type
        words: Array
    })

    const compareItems = (a, b) => { // sorting items by the amount of occurances 
        return b.count - a.count
    }

    const checkInput = (arr) => { // checking if input provided by user is included in words and if so displaying them in template
        return arr.filter(word => word.name.includes(inpt.value))
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
            padding: 0.2rem 0.4rem;
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