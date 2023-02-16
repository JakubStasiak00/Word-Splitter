<template>
    <div v-for="word in numberedWords.sort(numering)" :key="word.name"> {{ word.name }} appeared {{ word.count }} times. </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';

export default {
    props: ['wordArray'],

    setup (props) {
        let numberedWords = ref([])

        props.wordArray.forEach(e => {
            if(!numberedWords.value.length){
                numberedWords.value.push({
                    name: e,
                    count: 1
                })
            } else {
                let wasFound = false
                numberedWords.value.forEach(element => {
                    if(element.name === e) {
                        element.count++
                        wasFound = true
                    }
                })
                if(!wasFound){
                    numberedWords.value.push( {
                        name: e,
                        count: 1
                    } )
                }

            }
        })

        const numering = (a, b) => {
            return b.count - a.count
        }

        return { numberedWords, numering }
    }
}
</script>

<style>

</style>