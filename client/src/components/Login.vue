<script>
export default {
    props: ["page", "postAjax", "getAjax"],
    emits: ["change-page", "push-postings", "push-categories"],
    data() {
        return {
            login: {
                email: "sakirsyarian@mail.com",
                password: "sakirsyarian",
            },

            register: {
                email: "",
                password: "",
            },
        };
    },

    methods: {
        async handlerPush() {
            try {
                const postings = await this.getAjax("posts", {
                    access_token: localStorage.getItem("access_token"),
                });
                const categories = await this.getAjax("categories", {
                    access_token: localStorage.getItem("access_token"),
                });

                this.$emit("change-page", "dashboard");
                this.$emit("push-postings", postings.data.data);
                this.$emit("push-categories", categories.data.data);
            } catch (error) {
                console.log(error);
            }
        },

        async handlerRegister() {
            try {
                const { data } = await this.postAjax("register", {
                    email: this.register.email,
                    password: this.register.password,
                });

                localStorage.setItem("access_token", data.access_token);
                this.handlerPush();
            } catch (error) {
                console.log(error);
            }
        },

        async hadlerPostLogin() {
            try {
                const { data } = await this.postAjax("login", {
                    email: this.login.email,
                    password: this.login.password,
                });

                localStorage.setItem("access_token", data.access_token);
                localStorage.setItem("name", data.data.name);
                this.handlerPush();

                // success toast
                this.$toast.open({
                    message: "Successfully logged in",
                    type: "success",
                    position: "top-right",
                });
            } catch (error) {
                console.log(error);

                // error toast
                this.$toast.open({
                    message: "Invalid email or password",
                    type: "error",
                    position: "top-right",
                });
            }
        },

        async handleCredentialResponse(response) {
            try {
                const { data } = await this.postAjax("google", null, {
                    google_token: response.credential,
                });

                localStorage.setItem("access_token", data.access_token);
                this.handlerPush();
            } catch (error) {
                console.log(error);
            }
        },

        renderButton() {
            google.accounts.id.initialize({
                client_id:
                    "72122631237-lknejvdtsjrildb7s32s208kr9g64dd0.apps.googleusercontent.com",
                callback: this.handleCredentialResponse,
            });

            google.accounts.id.renderButton(
                document.getElementById("buttonDiv"),
                { theme: "outline", size: "large" }
            );
        },
    },
    mounted() {
        this.renderButton();
    },
};
</script>

<template>
    <section class="mx-auto mt-24">
        <div class="text-center">
            <h2 class="font-bold text-4xl">Login Options</h2>
            <p class="mt-5">
                Log in and autocomplete your order with your personal data, or
                sign up to enjoy all the benefits of an IDEA account.
            </p>
        </div>

        <div class="mt-10 grid grid-cols-2 divide-x-2">
            <div class="px-14">
                <h3 class="mb-3 font-semibold text-2xl">Sign up and enjoy</h3>
                <p>
                    Sign up your data to make new account for access this web
                    apllication
                </p>

                <form class="mt-6" @submit.prevent="handlerRegister()">
                    <div class="mb-6">
                        <label for="email" class="label-form">Your email</label>
                        <input
                            v-model="register.email"
                            type="email"
                            name="email"
                            class="input-form"
                            placeholder="Enter email address ..."
                            required
                        />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="label-form"
                            >Your password</label
                        >
                        <input
                            v-model="register.password"
                            type="password"
                            name="password"
                            class="input-form"
                            placeholder="Enter your password ..."
                            required
                        />
                    </div>
                    <button type="submit" class="button-form">Sign Up</button>
                </form>
            </div>

            <div class="px-14">
                <h3 class="mb-3 font-semibold text-2xl">
                    Log in to your account
                </h3>
                <p>
                    Log in on your profile to autocomplete your purchase order
                    with your personal data.
                </p>

                <form class="mt-6" @submit.prevent="hadlerPostLogin()">
                    <div class="mb-6">
                        <label for="email" class="label-form">Your email</label>
                        <input
                            v-model="login.email"
                            type="email"
                            id="email"
                            class="input-form"
                            placeholder="Enter email address ..."
                            required
                        />
                    </div>
                    <div class="mb-6">
                        <label for="password" class="label-form"
                            >Your password</label
                        >
                        <input
                            v-model="login.password"
                            type="password"
                            id="password"
                            class="input-form"
                            placeholder="Enter your password ..."
                            required
                        />
                    </div>
                    <div class="flex items-start mb-6">
                        <div class="flex items-center h-5">
                            <input
                                type="checkbox"
                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                            />
                        </div>
                        <label
                            for="remember"
                            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >Remember me</label
                        >
                    </div>
                    <button type="submit" class="button-form">Log In</button>

                    <div class="text-center flex flex-col">
                        <p class="my-3 text-sm text-gray-400">or</p>
                        <div
                            @click="hadlerPush()"
                            id="buttonDiv"
                            class="mx-auto text-center"
                        ></div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
