<script>
import Login from './Login.vue'
import Dashboard from './Dashboard.vue'

export default {
    components: {
        Login,
        Dashboard
    },
}
</script>

<template>
    <section class="padding-section col-span-4 border-t-2 border-gray-50">
        <div class="grid gap-12">
            <Login />
            <Dashboard />
        </div>
    </section>
</template>