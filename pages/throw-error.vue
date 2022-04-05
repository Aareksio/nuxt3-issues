<template>
  <h1>Throw Error</h1>
</template>

<script lang="ts" setup>
  import { throwError } from '#app';

  const error = new Error('Error in setup via throwError');
  throwError(error);

  throw new Error('Error in setup via throw');
</script>
