<script>
import axios from "axios";

import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import Content from "./components/Content.vue";

export default {
    components: {
        Navbar,
        Sidebar,
        Content,
    },

    data() {
        return {
            page: "login",
            baseUrl: "http://localhost:3000/",
            postings: [],
            categories: [],
        };
    },

    methods: {
        handlerChangePage(value) {
            this.page = value;
        },

        handlerPostings(value) {
            this.postings = value;
        },

        handlerCategories(value) {
            this.categories = value;
        },

        postAjax(url, data, headers) {
            return axios({
                method: "POST",
                url: `${this.baseUrl}${url}`,
                data,
                headers,
            });
        },

        getAjax(url, headers) {
            return axios({
                method: "GET",
                url: `${this.baseUrl}${url}`,
                headers,
            });
        },

        async getPosts() {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: `${this.baseUrl}posts`,
                    headers: {
                        access_token: localStorage.getItem("access_token"),
                    },
                });

                this.postings = data.data;
            } catch (error) {
                console.log(error);
            }
        },

        async getCategories() {
            try {
                const { data } = await axios({
                    method: "GET",
                    url: `${this.baseUrl}categories`,
                    headers: {
                        access_token: localStorage.getItem("access_token"),
                    },
                });

                this.categories = data.data;
            } catch (error) {
                console.log(error);
            }
        },
    },

    created() {
        if (localStorage.getItem("access_token")) {
            this.page = "dashboard";
            this.getPosts();
            this.getCategories();
        }
    },
};
</script>

<template>
    <header class="mx-auto top-0 z-10 container sticky bg-white">
        <Navbar v-if="page !== 'login'" />
    </header>

    <main class="mx-auto container">
        <section class="grid grid-cols-5 relative h-screen">
            <Sidebar v-if="page !== 'login'" @change-page="handlerChangePage" />
            <Content
                :page="page"
                :postings="postings"
                :categories="categories"
                :getAjax="getAjax"
                :postAjax="postAjax"
                :handlerChangePage="handlerChangePage"
                :handlerPostings="handlerPostings"
                :handlerCategories="handlerCategories"
                @change-page="handlerChangePage"
                @push-postings="handlerPostings"
                @push-categories="handlerCategories"
            />
        </section>
    </main>
</template>
