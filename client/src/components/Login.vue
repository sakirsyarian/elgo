<script></script>

<template>
    <section class="padding-section col-span-4">
        <div class="container mx-auto">
            <div class="text-center">
                <h1 class="font-bold text-4xl">Login Options</h1>
                <p class="mt-5">Log in and autocomplete your order with your personal data, or sign up to enjoy all the
                    benefits of an IDEA account.</p>
            </div>

            <div class="mt-10 py-8 grid grid-cols-2 divide-x-2">
                <div class="px-14">
                    <h3 class="mb-3 font-semibold text-center text-2xl">Sign up and enjoy</h3>
                    <p>Sign up your data to make new account for access this web apllication</p>

                    <form class="mt-6">
                        <div class="mb-6">
                            <label for="email" class="label-form">Your
                                email</label>
                            <input type="email" id="email" class="input-form" placeholder="Enter email address ..."
                                required>
                        </div>
                        <div class="mb-6">
                            <label for="password" class="label-form">Your
                                password</label>
                            <input type="password" id="password" class="input-form" placeholder="Enter your password ..."
                                required>
                        </div>
                        <button type="submit" class="button-form">Sign Up</button>
                    </form>

                </div>

                <div class="px-14">
                    <h3 class="mb-3 font-semibold text-center text-2xl">Log in to your account</h3>
                    <p>Log in on your profile to autocomplete your purchase order with your personal data.</p>

                    <form class="mt-6">
                        <div class="mb-6">
                            <label for="email" class="label-form">Your
                                email</label>
                            <input type="email" id="email" class="input-form" placeholder="Enter email address ..."
                                required>
                        </div>
                        <div class="mb-6">
                            <label for="password" class="label-form">Your
                                password</label>
                            <input type="password" id="password" class="input-form" placeholder="Enter your password ..."
                                required>
                        </div>
                        <div class="flex items-start mb-6">
                            <div class="flex items-center h-5">
                                <input type="checkbox"
                                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300">
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember
                                me</label>
                        </div>
                        <button type="submit" class="button-form">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>