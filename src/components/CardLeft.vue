<template>
    <form class="generate">
        <div class="row mb-2">
            <h2 class="fw-bold">Generate your QR Code</h2>
            <p class="fw-light">Adjust the settings below to make your QR code look as you want</p>
        </div>
        <div class="row mb-2 text-start">
            <label>
                <h4 class="mb-1">Text / URL</h4>
                <p class="mb-2 fw-light">Include text or a URL you want the QR code to lead to</p>
                <input class="form-control" type="text" required v-model="data" @keydown.prevent.enter="qrCodeStore.generateQRcode">
            </label>
        </div>
        <div class="row mb-2">
            <div class="col d-flex flex-column">
                <label class="form-label d-flex flex-column align-items-center mb-auto">
                    <h4>Main Color</h4>
                    <input class="form-input mt-auto" type="color" v-model="color" style="width: 75px; height: 75px;">
                </label>
                <p class="mt-1">{{ color }}</p>
            </div>
            <div class="col d-flex flex-column">
                <label class="form-label d-flex flex-column align-items-center mb-auto">
                    <h4 class="d-none d-md-block">Background Color</h4>
                    <h4 class="d-block d-md-none">Bg Color</h4>
                    <input class="form-input mt-auto" type="color" v-model="bgColor" style="width: 75px; height: 75px;">
                </label>
                <p class="mt-1">{{ bgColor }}</p>
            </div>
        </div>
        <div class="row mb-2 text-start">
            <label class="form-label">
                <h4>Size</h4>
                <p class="fw-light">{{ 50 * size }} x {{ 50 * size }}</p>
                <input class="form-range" type="range" min="1" max="20" v-model="size">
            </label>
        </div>
        <div class="row mb-2 text-start">
            <label class="form-label">
                <h4>Margin</h4>
                <p class="fw-light">{{ margin }} px</p>
                <input class="form-range" type="range" min="0" max="50" v-model="margin">
            </label>
        </div>
        <div class="row mb-2 text-start">
            <h4 class="mb-3">Image Format</h4>
            <div class="col">
                <div class="row">
                    <div class="col">
                        <label class="form-check-label d-flex flex-column flex-md-row align-items-center">
                            <input class="form-check-input" checked type="radio" value="png" v-model="format_type">
                            <span class="ms-0 ms-md-2">PNG</span>
                        </label>
                    </div>
                    <div class="col">
                        <label class="form-check-label d-flex flex-column flex-md-row align-items-center">
                            <input class="form-check-input" type="radio" value="gif" v-model="format_type">
                            <span class="ms-0 ms-md-2">GIF</span>
                        </label>
                    </div>
                    <div class="col">
                        <label class="form-check-label d-flex flex-column flex-md-row align-items-center">
                            <input class="form-check-input" type="radio" value="jpeg" v-model="format_type">
                            <span class="ms-0 ms-md-2">JPEG</span>
                        </label>
                    </div>
                    <div class="col">
                        <label class="form-check-label d-flex flex-column flex-md-row align-items-center">
                            <input class="form-check-input" type="radio" value="jpg" v-model="format_type">
                            <span class="ms-0 ms-md-2">JPG</span>
                        </label>
                    </div>
                    <div class="col">
                        <label class="form-check-label d-flex flex-column flex-md-row align-items-center">
                            <input class="form-check-input" type="radio" value="svg" v-model="format_type">
                            <span class="ms-0 ms-md-2">SVG</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <button class="btn btn-orange py-2 mt-3" :disabled="!data" @click.prevent="qrCodeStore.generateQRcode">Generate QR code</button>
      </form>
</template>

<script setup lang="ts">
import { useQRCodeStore } from '@/stores/qrcode'
import { storeToRefs } from 'pinia';

const qrCodeStore = useQRCodeStore();
const { data, size, color, bgColor, margin, format_type } = storeToRefs(qrCodeStore);
</script>