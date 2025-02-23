<script setup>
import Header from '@/components/Header.vue'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const project = ref({})
const route = useRoute()
const router = useRouter()

onMounted(async () => {
  try {
    const res = await fetch(`https://localhost:7262/api/projects/${route.params.id}`)
    const data = await res.json()
    project.value = data
  } catch {
    console.log('Error fetching project')
  }
})

async function deleteData() {
  try {
    const res = await fetch(`https://localhost:7262/api/projects/${route.params.id}`, {
      method: 'DELETE',
    })
    console.log(res.status)
    router.push('/projects')
  } catch {
    console.log('Could not delete project')
  }
}
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
          </div>
          <div class="bottom-container">
            <div class="inner-container">
              <div class="field">
                <label>Tjänst</label>
                <input type="text" :value="project.serviceName" disabled />
              </div>
              <div class="field">
                <label>Pris</label>
                <input type="text" :value="project.servicePrice" disabled />
              </div>
            </div>
            <div class="field">
              <label>Kundnamn</label>
              <input type="text" :value="project.customerName" disabled />
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
              <input type="text" :value="project.statusName" disabled />
            </div>
          </div>
          <div class="field">
            <label>Beskrivning</label>
            <textarea name="" id="" :value="project.description" disabled></textarea>
          </div>
          <div class="inner-container">
            <div class="field">
              <label>Förnamn</label>
              <input type="text" :value="project.employeeFirstName" disabled />
            </div>
            <div class="field">
              <label>Efternamn</label>
              <input type="text" :value="project.employeeLastName" disabled />
            </div>
            <div class="field">
              <label>E-post</label>
              <input type="text" :value="project.employeeEmail" disabled />
            </div>
          </div>
          <div class="button-container">
            <RouterLink :to="{ name: 'Edit', params: { id: route.params.id } }" class="btn btn-edit"
              >Ändra projekt</RouterLink
            >
            <button class="btn btn-delete" @click="deleteData">Radera projekt</button>
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
.inner-container {
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
.button-container {
  display: flex;
  gap: 2rem;
  align-self: flex-end;
}
.btn {
  margin-top: 6rem;
  padding: 0.4em 0.6em;
  border-radius: 0.5em;
  background-color: var(--primary);
  color: white;
  font-size: 1.6rem;
  align-self: flex-end;
  cursor: pointer;
}
.btn-edit {
  background-color: var(--primary);

  &:hover {
    background-color: hsl(120, 83%, 22%);
  }
}
.btn-delete {
  background-color: #cd0909;

  &:hover {
    background-color: hsl(0, 92%, 33%);
  }
}
</style>
