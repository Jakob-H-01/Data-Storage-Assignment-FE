<script setup>
import Header from '@/components/Header.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import { ref, onMounted } from 'vue'

const projects = ref([])

onMounted(async () => {
  try {
    const res = await fetch('https://localhost:7262/api/projects')
    const data = await res.json()
    projects.value = data
  } catch {
    console.log('Error fetching projects')
  }
})
</script>

<template>
  <Header />
  <main>
    <div class="wrapper">
      <ProjectCard v-for="project in projects" :key="project.id">
        <div class="card-info">
          <p>{{ project.id }}</p>
          <p>{{ project.projectName }}</p>
          <p>{{ `${project.startDate.split('T')[0]} - ${project.endDate.split('T')[0]}` }}</p>
          <p>{{ project.statusName }}</p>
        </div>
        <RouterLink :to="{ name: 'Project', params: { id: project.id } }" class="btn-details"
          >Mer Info</RouterLink
        >
      </ProjectCard>
    </div>
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.card-info {
  display: flex;
  gap: 3rem;
}
p {
  font-size: 1.4rem;
}
.btn-details {
  padding: 0.4em 0.6em;
  border-radius: 0.5em;
  border: 1px solid var(--primary);
  background-color: transparent;
  color: var(--primary-text);
  font-size: 1.6rem;

  &:hover {
    background-color: var(--primary);
    color: white;
  }
}
</style>
