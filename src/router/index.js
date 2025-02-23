import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ProjectView from '@/views/ProjectView.vue'
import NewProjectView from '@/views/NewProjectView.vue'
import EditProjectView from '@/views/EditProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/projects',
      component: ProjectsView,
    },
    {
      path: '/projects/:id',
      name: 'Project',
      component: ProjectView,
    },
    {
      path: '/projects/new',
      component: NewProjectView,
    },
    {
      path: '/projects/:id/edit',
      name: 'Edit',
      component: EditProjectView,
    },
  ],
})

export default router
