<script>
import Login from './Login.vue'
import Dashboard from './Dashboard.vue'
import Posting from './Posting.vue'

export default {
    components: {
        Login,
        Dashboard,
        Posting,
    },
}
</script>

<template>
    <section class="padding-section col-span-4 border-t-2 border-gray-50">
        <div class="grid gap-12">
            <Login />
            <Dashboard />
            <Posting />
        </div>
    </section>
</template>