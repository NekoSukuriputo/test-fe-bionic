import { defineStore } from 'pinia'

import ApiService from 'src/services/ApiService'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Notify } from 'quasar'

import type { job } from 'src/types/entities/job'
import mockup from './mockup'
const INIT_JOB = {
  id: 0,
  title: '',
  createdBy: '',
  createdDate: '',
  lastModifiedBy: '',
  lastModifiedDate: '',
  seq: 0,
  isActive: false,
  description: {
    id: 0,
    txt: ''
  },
  ptJobSkills: [],
  ptJobApplies: null
}

const INIT_APPLICANT = {
  displayName: '',
  phone: '',
  email: '',
  message: ''
}

export const useJobsStore = defineStore('job', {
  state: () => ({
    job: { ...INIT_JOB } as job,
    jobList: [] as job[],
    stateIsLoading: false,
    dataApplicant: {
      ...INIT_APPLICANT
    }
  }),

  getters: {
    isLoading (state) {
      return state.stateIsLoading
    },
    getJob (state) {
      return state.job
    },
    getJobList (state) {
      return state.jobList
    },
    getDataApplicant (state) {
      return state.dataApplicant
    }
  },

  actions: {
    async fetchJob () {
      try {
        this.stateIsLoading = true
        // const res: AxiosResponse<job[]> = await ApiService.get(
        //   '/pt-job-posts/no-auth'
        // )
        this.jobList = mockup
        this.stateIsLoading = false
      } catch (error) {
        this.stateIsLoading = false
        console.error(error)
      }
    },
    setJob (item: job) {
      this.job = item
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setApplicant (item: any) {
      this.dataApplicant = {
        ...item
      }
    },
    async postJob () {
      this.stateIsLoading = true
      setTimeout(() => {
        Notify.create({
          type: 'positive',
          message: 'Success Submit Form Application',
          position: 'top'
        })
      }, 1000)
      this.stateIsLoading = false
    }
  }
})
