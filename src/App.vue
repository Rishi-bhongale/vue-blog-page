<template>
  <div id="app" :class="{ 'dark-mode': isDarkMode }">
    <!-- Header -->
    <header>
      <h4>My Blog</h4>
      <button @click="toggleDarkMode">darck mode</button>
    </header>

    <!-- Sidebar -->
    <aside>
      <h2>Categories</h2>
      <ul>
        <li v-for="category in categories" :key="category.id">{{ category.name }}</li>
      </ul>

      <h2>Tags</h2>
      <ul>
        <li v-for="tag in tags" :key="tag.id">{{ tag.name }}</li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main>
      <h2>Latest Posts</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt }}</p>
          <router-link :to="{ name: 'Post', params: { id: post.id }}">Read More</router-link>
        </li>
      </ul>
    </main>

    <!-- Comments Section -->
    <section>
      <h2>Comments</h2>
      <ul>
        <li v-for="comment in comments" :key="comment.id">
          <p>{{ comment.text }}</p>
          <span>By {{ comment.author }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false,
      categories: [
        { id: 1, name: 'Technology' },
        { id: 2, name: 'Travel' },
        { id: 3, name: 'Food' },
      ],
      tags: [
        { id: 1, name: 'Vue.js' },
        { id: 2, name: 'JavaScript' },
        { id: 3, name: 'CSS' },
      ],
      posts: [
        {
          id: 1,
          title: 'Introduction to Vue.js',
          excerpt: 'Learn the basics of Vue.js and get started with building web applications.',
        },
        {
          id: 2,
          title: 'Exploring JavaScript Promises',
          excerpt: 'Discover how to work with JavaScript promises for asynchronous operations.',
        },
        {
          id: 3,
          title: 'Mastering CSS Grid Layout',
          excerpt: 'Deep dive into CSS Grid Layout and create flexible page layouts.',
        },
      ],
      comments: [
        { id: 1, text: 'Great article!', author: 'John Doe' },
        { id: 2, text: 'I learned a lot from this post.', author: 'Jane Smith' },
      ],
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
  },
};
</script>

<style>
/* Base Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

header, main, aside, section {
  padding: 20px;
}
</style>
