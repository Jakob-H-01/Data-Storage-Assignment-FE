<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <div class="wrapper">
      <RouterLink class="logo" to="/">Datalagringsuppgift</RouterLink>
      <nav class="nav">
        <RouterLink to="/">Hem</RouterLink>
        <RouterLink to="/projects">Alla Projekt</RouterLink>
        <RouterLink to="/projects/new">Skapa Projekt</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 2.5rem;
}
.nav {
  display: flex;
  gap: 3rem;
}
a {
  font-size: 1.8rem;
  color: var(--primary-text);

  &:hover {
    color: var(--primary);
  }
}
.logo {
  color: var(--primary);
}
.router-link-active {
  color: var(--primary);
}
</style>
