<script setup lang="ts">
import CardLeft from './components/CardLeft.vue'
import CardRight from './components/CardRight.vue'
import { useQRCodeStore } from './stores/qrcode'

const qrCodeStore = useQRCodeStore();

</script>

<template>
  <main>
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid align-items-center">
        <a href="#" class="navbar-brand">
          <img src="/logo-Tu.png" alt="logo-Brand" class="img-fluid" width="200">
        </a>
        <h1 class="display-4 fw-bold text-lusta mb-0">QR CODE GENERATOR</h1>
      </div>
    </nav>
    <section class="content bg-lusta">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-10 col-lg-8 col-xl-6 mx-auto text-center">
              <div class="card my-3 my-lg-5 rounded-5 shadow" id="card">
                <Transition name="card" appear>
                  <div class="card-body p-3 p-lg-5" v-if="!qrCodeStore.showResult">
                    <CardLeft />
                  </div>
                  <div class="card-body p-3 p-lg-5" id="card" v-else>
                    <CardRight />
                  </div>
                </Transition>
              </div>
            </div>
          </div>
        </div>
    </section>
  </main>
</template>

<style scoped>
.card-enter-from {
  opacity: 0.5;
  transform: scale(0.75);
}

.card-leave-to {
  opacity: 0.5;
}

.card-enter-active {
  transition: all 0.75s linear;
}
.card-leave-active {
  transition: all 0.25s linear;
}
</style>
