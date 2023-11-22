<template>
  <div class="row text-white">
    <div class="col-12 q-ma-sm">
      <q-card
        class="bg-blue-9 my-card text-white"
      >
        <q-card-section>1</q-card-section>
      </q-card>
    </div>
  </div>
  <div class="row text-white q-pa-xs">
    <div class="col-lg-6 col-md-6 col-sm-12 items-stretch">
      <div class="row">
        <q-card class="bg-blue-9 my-card q-mr-xs">
          <q-card-section>2</q-card-section>
        </q-card>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12">
      <div class="row">
        <q-card class="bg-blue-9 my-card">
          <q-card-section>3</q-card-section>
        </q-card>
      </div>
    </div>
  </div>
  <div class="row q-pa-xs text-white">
    <div class="col-lg-6 col-md-6 items-stretch col-sm-12">
      <q-card class="bg-red-9 my-card-1">
        <q-card-section>4</q-card-section>
      </q-card>
      <div class="row q-py-xs q-gutter-xs">
        <div class="col">
          <q-card class="bg-blue-9 my-card">
            <q-card-section>5</q-card-section>
          </q-card>
        </div>
        <div class="col">
          <q-card class="bg-blue-9 my-card">
            <q-card-section>6</q-card-section>
          </q-card>
        </div>
        <div class="col">
          <q-card class="bg-blue-9 my-card">
            <q-card-section>7</q-card-section>
          </q-card>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-6 col-sm-12 q-gutter-xs col-sm-12">
      <div :class="`${$q.screen.lt.sm ? 'row ' : 'column '} q-gutter-xs`">
        <q-card class="bg-red-9 my-card">
          <q-card-section>8</q-card-section>
        </q-card>
        <q-card class="bg-red-9 my-card">
          <q-card-section>9</q-card-section>
        </q-card>
        <q-card class="bg-red-9 my-card">
          <q-card-section>10</q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.card-blue{
  background: blue;
}
.my-card{
  width: 100%;
}
.my-card-1{
  height: 100%;
  max-height: 115px;
}
</style>
