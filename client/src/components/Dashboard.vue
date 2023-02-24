<script>
export default {
    props: ["postings", "categories"],
};
</script>

<template>
    <section class="px-12">
        <h2 class="font-bold text-3xl">Dashboard</h2>

        <div class="mt-10 flex gap-10">
            <div class="px-8 py-5 border-2 rounded-lg">
                <p class="mb-2 text-center font-semibold text-3xl">
                    {{ postings.length }}
                </p>
                <p class="text-gray-500">Total Postings</p>
            </div>
            <div class="px-8 py-5 border-2 rounded-lg">
                <p class="mb-2 text-center font-semibold text-3xl">
                    {{ categories.length }}
                </p>
                <p class="text-gray-500">Total Categories</p>
            </div>
        </div>
    </section>
</template>
