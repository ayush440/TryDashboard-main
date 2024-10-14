<template>
  <div class="app-container">
    <Sidebar class="sidebar" :class="{ 'sidebar-mobile': isMobileMenuOpen }" />
    <div class="main-content">
      <header class="bg-white shadow-sm p-4 flex justify-between items-center md:hidden">
        <button @click="toggleMobileMenu" class="text-gray-500 hover:text-gray-700">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <h1 class="text-xl font-semibold text-gray-800">Dashboard</h1>
      </header>
      <main class="p-4 ml-60">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Sidebar from './components/Sidebar.vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style>
.app-container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  transition: all 0.3s ease;
}

.main-content {
  flex-grow: 1;
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    left: -250px;
    top: 0;
    bottom: 0;
    z-index: 1000;
  }

  .sidebar-mobile {
    left: 0;
  }

  .main-content {
    margin-left: 0;
  }
}
</style>