<template>
  <div class="card">
    <slot />
  </div>
</template>

<style scoped>
.card {
  border-radius: 0.8rem;
  padding: 1.5rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
