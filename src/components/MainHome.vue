<template>
<div class="home">
  <v-card
    class="mx-auto"
  >
    <v-list :items="items"></v-list>
  </v-card>
</div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          title: 'Item #1',
          value: 1,
        },
        {
          title: 'Item #2',
          value: 2,
        },
        {
          title: 'Item #3',
          value: 3,
        },
      ],
    }),
  }
</script>