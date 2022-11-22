<!-- eslint-disable @typescript-eslint/explicit-function-return-type -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import DataService from '../service/DataService'
import { Category } from '../types'

type Filter = {
  categories: Category[]
  keyword: string
}

const dataService = new DataService()

const records = ref([])
const categories = ref<Category[]>([])
const pagination = ref({
  total: 0,
  limit: 10,
  page: 0
})
const filter = ref<Filter>({
  categories: [],
  keyword: ''
})

onMounted(() => {
  dataService.getAll().then((res) => {
    records.value = res.data
    pagination.value.total = res.total
  })
  dataService.getCategories().then((res) => {
    categories.value = res.data
  })
})

const onPaginate = (e) => {
  pagination.value.page = e.page
  pagination.value.limit = e.rows
  loadRecords()
}

const loadRecords = () => {
  dataService
    .getAll({
      keyword: filter.value.keyword,
      categories: JSON.stringify(filter.value.categories.map((category) => category.code)),
      page: pagination.value.page,
      limit: pagination.value.limit
    })
    .then((res) => {
      records.value = res.data
      pagination.value.total = res.total
    })
}
</script>
<template>
  <Card>
    <template #title> Magnetinduktive Seilinspektion </template>
    <template #subtitle> Vue3 + PrimeVue + Electron + TypeScript + Python + FastAPI</template>
    <template #content>
      <div class="mb-3 flex">
        <MultiSelect
          id="category"
          v-model="filter.categories"
          class="w-20rem"
          :options="categories"
          option-label="code"
          placeholder="Select Categories"
          @change="loadRecords"
        />
        <span class="p-input-icon-left ml-auto">
          <i class="pi pi-search"></i>
          <InputText
            v-model="filter.keyword"
            type="text"
            placeholder="Search"
            @change="loadRecords"
          />
        </span>
      </div>
      <DataTable :value="records" responsive-layout="scroll" let-i="rowIndex">
        <Column field="operator.content" header="Operator"></Column>
        <Column field="ordz.content" header="OZL"></Column>
        <Column field="category.content" header="Category"></Column>
        <Column field="description.content" header="Description"></Column>
        <Column field="site.content" header="Designation"></Column>
        <Column field="next_inspection.content" header="n.Pruf"></Column>
      </DataTable>
      <Paginator
        :rows="pagination.limit"
        :total-records="pagination.total"
        :rows-per-page-options="[10, 20, 30]"
        @page="onPaginate"
      />
    </template>
  </Card>
</template>
