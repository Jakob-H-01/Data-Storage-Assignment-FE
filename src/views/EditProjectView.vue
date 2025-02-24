<script setup>
import Header from '@/components/Header.vue'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const project = ref({})

const projectName = ref('')
const price = ref('')
const serviceName = ref('')
const servicePrice = ref('')
const customerName = ref('')
const startDate = ref('')
const endDate = ref('')
const description = ref('')
const statusName = ref('')
const firstName = ref('')
const lastName = ref('')
const email = ref('')

async function modifyData() {
  try {
    const res = await fetch(`https://localhost:7262/api/projects/${route.params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: project.value.id,
        projectName: projectName.value,
        description: description.value,
        startDate: startDate.value,
        endDate: endDate.value,
        price: price.value,
        status: {
          Id: project.value.statusId,
          statusName: statusName.value,
        },
        service: {
          Id: project.value.serviceId,
          serviceName: serviceName.value,
          Price: servicePrice.value,
        },
        employee: {
          Id: project.value.employeeId,
          FirstName: firstName.value,
          LastName: lastName.value,
          Email: email.value,
        },
        customer: {
          Id: project.value.customerId,
          customerName: customerName.value,
        },
      }),
    })
    console.log(res.status)
    router.push(`/projects/${route.params.id}`)
  } catch {
    console.log('Could not update project')
  }
}

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
      <form class="container" @submit.prevent="modifyData">
        <div class="left-container">
          <div class="top-container">
            <div class="field">
              <label>Projektnummer</label>
              <input type="text" :value="project.id" disabled />
            </div>
            <div class="field">
              <label>Benämning</label>
              <input type="text" :placeholder="project.projectName" v-model="projectName" />
            </div>
          </div>
          <div class="middle-container">
            <div class="field">
              <label>Totalt belopp</label>
              <input type="text" :placeholder="project.price" v-model="price" />
            </div>
          </div>
          <div class="bottom-container">
            <div class="inner-container">
              <div class="field">
                <label>Tjänst</label>
                <input type="text" :placeholder="project.serviceName" v-model="serviceName" />
              </div>
              <div class="field">
                <label>Pris</label>
                <input type="text" :placeholder="project.servicePrice" v-model="servicePrice" />
              </div>
            </div>
            <div class="field">
              <label>Kundnamn</label>
              <input type="text" :placeholder="project.customerName" v-model="customerName" />
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="top-container">
            <div class="field">
              <label>Startdatum</label>
              <input type="date" :placeholder="project.startDate" v-model="startDate" />
            </div>
            <div class="field">
              <label>Slutdatum</label>
              <input type="date" :placeholder="project.endDate" v-model="endDate" />
            </div>
            <div class="field">
              <label>Status</label>
              <select type="text" v-model="statusName">
                <option value="Ej påbörjat">Ej påbörjat</option>
                <option value="Pågående">Pågående</option>
                <option value="Avslutat">Avslutat</option>
              </select>
            </div>
          </div>
          <div class="field">
            <label>Beskrivning</label>
            <textarea
              name=""
              id=""
              :placeholder="project.description"
              v-model="description"
            ></textarea>
          </div>
          <div class="inner-container">
            <div class="field">
              <label>Förnamn</label>
              <input type="text" :placeholder="project.employeeFirstName" v-model="firstName" />
            </div>
            <div class="field">
              <label>Efternamn</label>
              <input type="text" :placeholder="project.employeeLastName" v-model="lastName" />
            </div>
            <div class="field">
              <label>E-post</label>
              <input type="text" :placeholder="project.employeeEmail" v-model="email" />
            </div>
          </div>
          <div class="button-container">
            <button class="btn btn-save">Spara</button>
            <RouterLink
              :to="{ name: 'Project', params: { id: route.params.id } }"
              class="btn btn-cancel"
              >Avbryt</RouterLink
            >
          </div>
        </div>
      </form>
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
textarea,
select {
  font-size: 1.4rem;
  padding: 0.4em 0.5em;
  background-color: white;
  border: 1px solid #c5c5c5;
  color: var(--primary-text);
  border-radius: 0.3em;
  resize: none;
}
option {
  color: var(--primary-text);
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
.btn-save {
  background-color: var(--primary);

  &:hover {
    background-color: hsl(120, 83%, 22%);
  }
}
.btn-cancel {
  background-color: #cd0909;

  &:hover {
    background-color: hsl(0, 92%, 33%);
  }
}
</style>
