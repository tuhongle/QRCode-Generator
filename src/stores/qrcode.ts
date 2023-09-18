//! https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&size=400x400&color=ff0000&bgcolor=000000&margin=10&format=gif

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useQRCodeStore = defineStore('QRCode', () => {
    const data = ref<string>();
    const size = ref<number>(4);
    const color = ref<string>('#000000');
    const bgColor = ref<string>('#c7c7c7');
    const margin = ref<number>(1);
    const format_type = ref<string>('png');
    const urlImage = ref<string>();
    const showResult = ref<boolean>(false);

    //? Function for Fetch

    const generateQRcode = () => {
        const url = `https://api.qrserver.com/v1/create-qr-code/`;
        const dataFetch = `?data=${data.value}`;
        const sizeFetch = `&size=${size.value*50}x${size.value*50}`;
        const colorFetch = `&color=${color.value.substring(1)}`
        const bgcolorFetch = `&bgcolor=${bgColor.value.substring(1)}`;
        const marginFetch = `&margin=${margin.value}`;
        const formatFetch = `&format=${format_type.value}`;
        urlImage.value = url.concat(dataFetch, sizeFetch, colorFetch, bgcolorFetch, marginFetch, formatFetch);
        (document.querySelector("#card") as HTMLElement).classList.toggle("isFlipped");
        setTimeout(() => {
            showResult.value = !showResult.value;
        }, 500);
    };

    function $reset() {
        data.value = '';
        size.value = 4;
        color.value = '#000000';
        bgColor.value = '#c7c7c7';
        margin.value = 1;
        format_type.value = 'png';
    }

    function goback() {
        (document.querySelector("#card") as HTMLElement).classList.toggle("isFlipped");
        showResult.value = !showResult.value;
    }

    function goHome() {
        (document.querySelector("#card") as HTMLElement).classList.toggle("isFlipped");
        showResult.value = !showResult.value;
        $reset();
    }

    return {
        data, size, color, bgColor, margin, format_type, urlImage, showResult
        , generateQRcode, goback, goHome
    }
})