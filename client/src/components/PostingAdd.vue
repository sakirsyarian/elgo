<script>
export default {
    data() {
        return {
            count: 50,
            limitChar: 50,
            characters: "",
        };
    },
    watch: {
        characters(newCharacters, oldCharacters) {
            const toArray = newCharacters.split("").length;
            this.limitChar = this.count - toArray;
        },
    },
};
</script>

<template>
    <section class="px-12">
        <h2 class="font-bold text-3xl">New Posting</h2>

        <div class="mt-10">
            <form>
                <div class="mb-6">
                    <label for="title" class="label-form">
                        Post Title:
                        <span
                            :class="
                                limitChar < 20
                                    ? 'text-red-500'
                                    : 'text-gray-500'
                            "
                            >{{ limitChar }} characters left</span
                        >
                    </label>
                    <input
                        v-model="characters"
                        :maxlength="count"
                        type="text"
                        name="title"
                        class="input-form"
                        placeholder="Enter post title ..."
                        required
                    />
                </div>
                <div class="mb-6">
                    <label for="imgUrl" class="label-form">Post Image</label>
                    <input
                        type="text"
                        name="imgUrl"
                        class="input-form"
                        placeholder="Enter post image ..."
                        required
                    />
                </div>
                <div class="mb-6">
                    <label for="CategoryId" class="label-form"
                        >Select Category</label
                    >
                    <select name="CategoryId" class="input-select">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </select>
                </div>
                <div class="mb-6">
                    <label for="AuthorId" class="label-form"
                        >Select Author</label
                    >
                    <select name="AuthorId" class="input-select">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </select>
                </div>
                <div class="mb-6">
                    <label for="content" class="label-form">Post Content</label>
                    <textarea
                        name="content"
                        rows="4"
                        class="input-textarea"
                        placeholder="Leave a content ..."
                    ></textarea>
                </div>
                <button type="submit" class="button-form">Add New Post</button>
            </form>
        </div>
    </section>
</template>
