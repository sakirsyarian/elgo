<script>
import Login from "./Login.vue";
import Dashboard from "./Dashboard.vue";
import Posting from "./Posting.vue";
import PostingAdd from "./PostingAdd.vue";
import Category from "./Category.vue";
import CategoryAdd from "./CategoryAdd.vue";

export default {
    components: {
        Login,
        Dashboard,
        Posting,
        PostingAdd,
        Category,
        CategoryAdd,
    },

    props: [
        "page",
        "getAjax",
        "postAjax",
        "postings",
        "categories",
        "handlerChangePage",
        "handlerPostings",
        "handlerCategories",
    ],
    emits: ["change-page", "push-postings", "push-categories"],

    data() {
        return {};
    },

    methods: {
        colSpan() {
            const baseCss = "padding-section, border-t-2, border-gray-50";
            if (this.page === "login") {
                return `${baseCss} col-span-5`;
            }

            return `${baseCss} col-span-4`;
        },
    },
};
</script>

<template>
    <section :class="colSpan()">
        <div class="grid gap-12 padding-section">
            <Login
                v-if="page === 'login'"
                :page="page"
                :getAjax="getAjax"
                :postAjax="postAjax"
                @change-page="handlerChangePage"
                @push-postings="handlerPostings"
                @push-categories="handlerCategories"
            />
            <Dashboard
                v-if="page === 'dashboard'"
                :postings="postings"
                :categories="categories"
            />
            <Posting
                v-if="page === 'post'"
                :postings="postings"
                @change-page="handlerChangePage"
            />
            <PostingAdd
                v-if="page === 'post add'"
                :postAjax="postAjax"
                @change-page="handlerChangePage"
            />
            <Category
                v-if="page === 'category'"
                :categories="categories"
                @change-page="handlerChangePage"
            />
            <CategoryAdd
                v-if="page === 'category add'"
                :postAjax="postAjax"
                @change-page="handlerChangePage"
            />
        </div>
    </section>
</template>
