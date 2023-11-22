<template>
  <q-page class="row items-start justify-evenly q-pt-xl">
    <q-card>
      <q-card-section>
        <q-btn
          class="q-my-lg"
          color="primary"
          outline
          unelevated
          @click="onBackToList"
        >
          Back To List
        </q-btn><br>
        <span class="text-h3">{{ dataJob.title }}</span>
        <div class="row">
          <div v-html="dataJob.description.txt" />
        </div>
        <q-form
          @submit="onSubmit"
        >
          <div class="row">
            <span class="text-h4">Send Your Job Application</span>
            <div
              class="col-lg-6 col-md-6 col-sm-5 col-xs-12 q-py-md q-px-xs"
            >
              <q-input
                v-model="dataApplicant.displayName"
                label="Name"
                :rules="[val => !!val || 'Name is required']"
              />
              <q-input
                v-model="dataApplicant.email"
                label="Email Address"
                :rules="[val => !!val || 'Email is required', val => /.+@.+\..+/.test(val) || 'Invalid email format']"
              />
            </div>
            <div
              class="col-lg-5 col-md-5 col-sm-5 col-xs-12 q-py-md q-px-xs"
            >
              <q-input
                v-model="dataApplicant.phone"
                label="Mobile Number"
                type="tel"
                mask="#"
                :rules="[val => !!val || 'Mobile Number is required']"
              />
              <q-input
                v-model="dataApplicant.message"
                label="Write your message here..."
              />
            </div>
          </div>
          <div class="row">
            <div
              class="col-lg-6 col-md-6 col-sm-6 col-xs-12 q-py-md q-px-md"
            >
              <span>File</span><br>
              <q-file
                ref="filePicker"
                v-model="fileUpload"
                label="Pick files"
                filled
                counter
                multiple
                style="display: none;"
              />
              <q-btn
                icon="cloud_upload"
                style="width: 100px"
                color="orange"
                text-color="grey-9"
                @click="uploadBtnClick"
              />
            </div>
          </div>
          <div class="row q-py-sm">
            <q-btn
              label="Send Message"
              type="submit"
              color="primary"
              :loading="isLoading"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">

import { useJobsStore } from 'src/stores/jobs'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const jobStore = useJobsStore()

const fileUpload = ref(null)
const filePicker = ref(null)

const dataJob = computed(() => {
  return jobStore.getJob
})
const isLoading = computed(() => {
  return jobStore.isLoading
})
const dataApplicant = computed(() => {
  return jobStore.getDataApplicant
})

const uploadBtnClick = () => {
  console.log('filePicker.value', filePicker.value)
  filePicker.value.pickFiles()
}
const onBackToList = () => {
  router.push('/soal-b')
}
const onSubmit = async () => {
  await jobStore.postJob()
  router.push('/soal-b')
}
</script>

<style scoped>

</style>
