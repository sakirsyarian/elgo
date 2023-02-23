<script>
import Login from './components/Login.vue'
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Login,
    Navbar,
    Sidebar
  },
}
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main class="container mx-auto">
    <div class="grid grid-cols-5">
      <Sidebar />
      <Login />
    </div>
  </main>
</template>