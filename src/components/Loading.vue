<template>
    <div class="behind">
        <div class="spinner">

        </div>
        <h3>Preparing data, This may take a while</h3>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.behind {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.404);
    backdrop-filter: blur(2px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

h3 {
    color: white;
    font-weight: bold;
}

.spinner {
    width: 4rem;
    height: 4rem;
    border-block: 10px solid rgb(72, 179, 72);
    border-inline: 10px solid rgba(255, 255, 255, 0);
    border-radius: 30px;

    -webkit-animation: rotating 2s linear infinite;
    -moz-animation: rotating 2s linear infinite;
    -ms-animation: rotating 2s linear infinite;
    -o-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
}

@keyframes rotating {
    from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }

    to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>