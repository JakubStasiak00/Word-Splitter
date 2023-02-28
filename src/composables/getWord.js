import axios from "axios";
import { ref } from "vue";

export async function useWord(word) {
    console.log(word)
    let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word
    let data = ref(null)
    let errorMessage = ref('')
    let isLoading = ref(true)

    try {
        const response = await axios.get(url)
        data.value = response.data
    } catch (err) {
        errorMessage.value = err.message
        console.log(err)
    } finally {
        isLoading.value = false
    }

    return {data, errorMessage, isLoading}
}