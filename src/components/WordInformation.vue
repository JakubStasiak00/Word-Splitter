<template>
    <div class="backbone">
        <ul class="backbone__content">
            <button class="backbone__close" @click="$emit('togglePopup')"> X </button>
            <h2> {{ props.word }}</h2>
            <li v-for="element in arrayToDisplay" :key="element.speechPart">
                <h3> {{ element.speechPart }} </h3>
                <p> {{ element.definition }} </p>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed } from "vue"


let props = defineProps({
    word: String,
    definition: Array
})

const arrayToDisplay = computed( () => {  // preparing array of objects for easier display of values in template
    let arr = []
    props.definition.forEach(meaning => {
        arr.push({
            speechPart: meaning.partOfSpeech,
            definition: meaning.definitions[0].definition
        })
    })
    return arr
})

</script>

<style scoped lang="scss">
    .backbone {
        top: 0;
        left: 0;
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.377);

        &__close {
            position: absolute;
            top: 2rem;
            right: 2rem;
        }

        &__content {
            background-color: white;
            width: min(80%, 700px);
            margin: 0 auto;
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translate(-50%);
            padding: min(1rem, 3rem);
        }

        h2 {
            font-size: 1.75rem;
            font-weight: bold;
            color: #31af66;
        }

        h3 {
            font-size: 1.4rem;
            margin-block: 1rem;
            color: #24a75b;
        }

    }
</style>
