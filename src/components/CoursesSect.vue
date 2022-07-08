<template>
  <div class="courses">
    <v-card class="mx-auto">
      <v-list :items="items"></v-list>
    </v-card>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          title: 'Course #1',
          value: 1,
        },
        {
          title: 'Course #2',
          value: 2,
        },
        {
          title: 'Course #3',
          value: 3,
        },
      ],
    }),
  }
</script>