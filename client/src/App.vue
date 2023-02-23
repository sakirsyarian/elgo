<script>
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
import Content from './components/Content.vue'

export default {
  components: {
    Navbar,
    Sidebar,
    Content,
  },
}
</script>

<template>
  <header class="container mx-auto">
    <Navbar />
  </header>

  <main class="container mx-auto">
    <section class="grid grid-cols-5">
      <Sidebar />
      <Content />
    </section>
  </main>
</template>