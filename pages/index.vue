<template>
  <div>
    <div
      class="container vh-100 d-flex justify-content-center align-items-center"
    >
      <div class="row">
        <h5 class="text-center">Olá! Escolha uma dificuldade</h5>
        <div class="col-12 my-2">
          <button
            class="btn text-white w-100"
            style="background-color: #111c06"
            @click="startGame(1)"
          >
            Fácil
          </button>
        </div>
        <div class="col-12 my-2">
          <button
            class="btn w-100 text-white"
            disabled
            id="dificil"
            @click="() => {}"
            style="background-color: #111c06"
          >
            Difícil
          </button>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
function startGame(level: number) {
  navigateTo("/game");
}

function tutorial() {
  navigateTo("/tutorial");
}
</script>

<style lang="scss" scoped></style>
