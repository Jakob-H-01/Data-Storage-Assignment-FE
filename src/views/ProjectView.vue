<script setup>
import Header from '@/components/Header.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const project = ref({})
const route = useRoute()

onMounted(async () => {
  try {
    const res = await fetch(`https://localhost:7262/api/projects/${route.params.id}`)
    const data = await res.json()
    project.value = data
  } catch {
    console.log('Error fetching project')
  }
})
</script>

<template>
  <Header />
  <main>
    <div class="wrapper">
      <h1>Projekt {{ project.id }}</h1>
      <div class="container">
        <div class="left-container">
          <div class="top-container">
            <div class="field">
              <label>Projektnummer</label>
              <input type="text" :value="project.id" disabled />
            </div>
            <div class="field">
              <label>Benämning</label>
              <input type="text" :value="project.projectName" disabled />
            </div>
          </div>
          <div class="middle-container">
            <div class="field">
              <label>Totalt belopp</label>
              <input type="text" :value="project.price" disabled />
            </div>
            <div class="field">
              <label>Projektledare</label>
              <input type="text" :value="project.employeeId" disabled />
            </div>
          </div>
          <div class="bottom-container">
            <div class="field">
              <label>Tjänst</label>
              <input type="text" :value="project.serviceId" disabled />
            </div>
            <div class="field">
              <label>Kundnamn</label>
              <input type="text" :value="project.customerId" disabled />
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="top-container">
            <div class="field">
              <label>Startdatum</label>
              <input type="text" :value="project.startDate" disabled />
            </div>
            <div class="field">
              <label>Slutdatum</label>
              <input type="text" :value="project.endDate" disabled />
            </div>
            <div class="field">
              <label>Status</label>
              <input type="text" :value="project.statusId" disabled />
            </div>
          </div>
          <div class="field">
            <label>Beskrivning</label>
            <textarea name="" id="" :value="project.description" disabled></textarea>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.container {
  display: flex;
  justify-content: space-between;
}
.left-container {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
.top-container {
  display: flex;
  gap: 3rem;
}
.middle-container {
  display: flex;
  gap: 3rem;
}
.bottom-container {
  display: flex;
  flex-direction: column;
  gap: 8rem;
}
.right-container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
h1 {
  font-size: 3rem;
}
label {
  font-size: 1.4rem;
}
input,
textarea {
  font-size: 1.4rem;
  padding: 0.4em 0.5em;
  background-color: white;
  border: 1px solid #c5c5c5;
  color: var(--primary-text);
  border-radius: 0.3em;
  resize: none;
}
</style>
