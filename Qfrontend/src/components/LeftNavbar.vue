<template>
  <nav class="left-navbar">
    <div class="nav-header">
      <h2>ProjectQ</h2>
    </div>
    <div class="nav-items">
      <router-link to="/" class="nav-item" active-class="active">
        <i class="fas fa-home"></i>
        <span>Dashboard</span>
      </router-link>
      <router-link to="/projects" class="nav-item" active-class="active">
        <i class="fas fa-project-diagram"></i>
        <span>Projects</span>
      </router-link>
      <router-link to="/analytics" class="nav-item" active-class="active">
        <i class="fas fa-chart-bar"></i>
        <span>Analytics</span>
      </router-link>
      <router-link to="/settings" class="nav-item" active-class="active">
        <i class="fas fa-cog"></i>
        <span>Settings</span>
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.nav-header {
  padding: 1rem 0;
  border-bottom: 1px solid #333;
}

.nav-header h2 {
  margin: 0;
  font-size: 1.5rem;
}

.nav-items {
  margin-top: 2rem;
}

.nav-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  transition: background-color 0.2s;
}

.nav-item i {
  margin-right: 1rem;
  width: 20px;
}

.nav-item:hover {
  background-color: #333;
}

.nav-item.active {
  background-color: #42b883;
}
</style>
