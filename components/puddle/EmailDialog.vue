<template>
  <el-dialog :title="email.sendAt" :visible.sync="flag" width="30%">
    <h1>{{ email.subject }}</h1>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('update:flag', false)">取 消</el-button>
      <el-button type="primary">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script lang="ts">
import Vue from 'vue';
import { EmailType } from '@/types/puddle';
let dialogEmail: EmailType;

export default Vue.extend({
  props: {
    flag: {
      type: Boolean,
      default: false,
    },
    email: {
      type: Object,
      default: () => dialogEmail,
    },
  },
});
</script>

<style scoped></style>
