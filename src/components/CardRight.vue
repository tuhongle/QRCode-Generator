<template>
    <form class="result">
        <div class="row">
            <h3 class="fw-bold">Your QR code is ready!</h3>
            <p>Scan this image to see it in action</p>
        </div>
        <div class="row mb-3">
            <div class="col">
                <img :src="qrCodeStore.urlImage" alt="QR Code" class="img-fluid p-2 rounded-3 bg-lusta">
            </div>
        </div>
        <div class="row">
            <p>Right click on the image and select <b>"Save Image As"</b> to download the file</p>
            <p>Or need to make some changes?</p>
        </div>
        <div class="row">
            <div class="col">
                <button id="back" class="btn btn-orange me-2" type="button" @click="qrCodeStore.goback">Go back</button>
                <button id="home" class="btn btn-orange" type="button" @click="qrCodeStore.goHome">Home</button>
            </div>
        </div>
      </form>
</template>

<script setup lang="ts">
import { useQRCodeStore } from '@/stores/qrcode'
const qrCodeStore = useQRCodeStore();
</script>