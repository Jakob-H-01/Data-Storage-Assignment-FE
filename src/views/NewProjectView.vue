<script setup>
import Header from '@/components/Header.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const projectName = ref('')
const price = ref('')
const serviceName = ref('')
const servicePrice = ref('')
const customerName = ref('')
const startDate = ref('')
const endDate = ref('')
const description = ref('')
const firstName = ref('')
const lastName = ref('')
const email = ref('')

async function postData() {
  try {
    const res = await fetch('https://localhost:7262/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        projectName: projectName.value,
        description: description.value,
        startDate: startDate.value,
        endDate: endDate.value,
        price: price.value,
        status: {
          statusName: 'Ej påbörjat',
        },
        service: {
          serviceName: serviceName.value,
          price: servicePrice.value,
        },
        employee: {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
        },
        customer: {
          customerName: customerName.value,
        },
      }),
    })

    console.log(res.status)
    router.push('/projects')
  } catch {
    console.log('Something went wrong when submitting form')
  }
}
</script>

<template>
  <Header />
  <main>
    <div class="wrapper">
      <h1>Skapa Nytt Projekt</h1>
      <form class="container" @submit.prevent="postData">
        <div class="left-container">
          <div class="top-container">
            <div class="field">
              <label for="projectName">Benämning</label>
              <input type="text" name="projectName" v-model="projectName" required />
            </div>
            <div class="field">
              <label for="price">Totalt belopp</label>
              <input type="text" name="price" v-model="price" required />
            </div>
          </div>
          <div class="bottom-container">
            <h2>Tjänst</h2>
            <div class="inner-container">
              <div class="field">
                <label for="serviceName">Tjänst</label>
                <input type="text" name="serviceName" v-model="serviceName" required />
              </div>
              <div class="field">
                <label for="servicePrice">Pris</label>
                <input type="text" name="servicePrice" v-model="servicePrice" required />
              </div>
            </div>
          </div>
          <div class="last-container">
            <h2>Kund</h2>
            <div class="inner-container">
              <div class="field">
                <label for="customerName">Kundnamn</label>
                <input type="text" name="customerName" v-model="customerName" required />
              </div>
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="top-container">
            <div class="field">
              <label for="startDate">Startdatum</label>
              <input type="date" name="startDate" v-model="startDate" required />
            </div>
            <div class="field">
              <label for="endDate">Slutdatum</label>
              <input type="date" name="endDate" v-model="endDate" required />
            </div>
          </div>
          <div class="field">
            <label for="description">Beskrivning</label>
            <textarea name="description" v-model="description" required></textarea>
          </div>
          <div class="bottom-container">
            <h2>Projektledare</h2>
            <div class="inner-container">
              <div class="field">
                <label for="firstName">Förnamn</label>
                <input type="text" name="firstName" v-model="firstName" required />
              </div>
              <div class="field">
                <label for="lastName">Efternamn</label>
                <input type="text" name="lastName" v-model="lastName" required />
              </div>
              <div class="field">
                <label for="email">E-post</label>
                <input type="email" name="email" v-model="email" required />
              </div>
            </div>
          </div>
          <button class="btn-submit">Skapa Projekt</button>
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
  gap: 3rem;
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
  gap: 1.5rem;
}
.last-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.inner-container {
  display: flex;
  gap: 3rem;
}
.right-container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 1.8rem;
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
  resize: vertical;
}
.btn-submit {
  margin-top: 4rem;
  padding: 0.4em 0.6em;
  border-radius: 0.5em;
  background-color: var(--primary);
  color: white;
  font-size: 1.6rem;
  align-self: flex-end;
  cursor: pointer;

  &:hover {
    background-color: hsl(120, 83%, 22%);
  }
}
</style>
