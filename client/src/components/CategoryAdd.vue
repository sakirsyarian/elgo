<script>
export default {
    emits: ["change-page"],
    props: ["postAjax"],
    data() {
        return {
            name: "",
        };
    },
    methods: {
        async handlerSubmit() {
            try {
                const category = await this.postAjax(
                    "categories",
                    { name: this.name },
                    { access_token: localStorage.getItem("access_token") }
                );

                console.log(category);
                this.$emit("change-page", "category");
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<template>
    <section class="px-12">
        <h2 class="font-bold text-3xl">New Category</h2>

        <div class="mt-10">
            <form @submit.prevent="handlerSubmit()">
                <div class="mb-6">
                    <label for="name" class="label-form">Category Name</label>
                    <input
                        v-model="name"
                        type="text"
                        name="name"
                        class="input-form"
                        placeholder="Enter category name ..."
                        required
                    />
                </div>
                <button type="submit" class="button-form">
                    Add New Category
                </button>
            </form>
        </div>
    </section>
</template>
