<template>
    <div v-for="word in fArray" :key="word.name"> {{ word.name }} appeared {{ word.count }} times. </div>
</template>

<script>
export default {
    props: ['fArray']
}
</script>

<style>

</style>