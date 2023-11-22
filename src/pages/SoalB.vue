<template>
  <div>
    <q-page class="row items-start justify-evenly q-pt-xl">
      <q-card
        class="user-container q-ma-md"
      >
        <q-card-section>
          <div class="row items-center justify-center">
            <div
              v-for="job in dataJobs"
              :key="job.id"
              class="col-lg-6 col-md-6 col-sm-6 col-xs-12 q-py-md q-px-xs"
            >
              <q-card
                flat
                bordered
                class="card-jobs"
              >
                <q-item>
                  <q-item-section>
                    <q-item-label>{{ job.title }}</q-item-label>
                  </q-item-section>
                  <q-space />
                  <q-btn
                    flat
                    round
                    color="primary"
                    @click="onDetail(job)"
                  >
                    See Job
                  </q-btn>
                </q-item>
              </q-card>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-page>
  </div>
</template>

<script setup lang="ts">
import { useJobsStore } from 'src/stores/jobs'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const jobStore = useJobsStore()

const dataJobs = computed(() => {
  return jobStore.getJobList
})

onMounted(async () => {
  await jobStore.fetchJob()
})

const onDetail = (item) => {
  jobStore.setJob(item)
  router.push('/detail-b')
}
</script>

<style scoped>
.card-jobs{
  width: 100%;
  max-width: 1000px;
}
</style>
