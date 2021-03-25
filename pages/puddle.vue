<template>
  <div class="box">
    <h1>Puddle archived({{ archivedCount }})</h1>
    <el-table
      ref="multipleTable"
      :data="list"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="sendAt" label="来自"></el-table-column>
      <el-table-column prop="subject" label="标题" show-overflow-tooltip>
        <template slot-scope="{ row }">
          <span style="cursor: pointer" @click="handleEmailClick(row)">{{
            row.subject
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column label="归档" width="120">
        <template slot-scope="{ row, $index }">
          <el-button
            type="primary"
            size="mini"
            :disabled="row.isArchive"
            @click="handleArchiveToggle($index, row)"
          >
            归档
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="$refs.multipleTable.clearSelection()">
        取消选择
      </el-button>
      <nuxt-link to="/">back</nuxt-link>
    </div>

    <email-dialog :flag.sync="dialogFlag" :email="dialogEmail"></email-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { mapMutations } from 'vuex';

import { EmailType } from '@/types/puddle';
import EmailDialog from '@/components/puddle/EmailDialog.vue';
import emailDialog from '@/minixs/puddle/emailDialog';

export default Vue.extend({
  name: 'Puddle',
  async asyncData(context) {
    const service = context.$axios.create({
      withCredentials: true,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      timeout: 10000,
    });
    service.get('/api/getSomething');
  },
  components: {
    EmailDialog,
  },
  mixins: [emailDialog],
  data() {
    return {
      multipleSelection: [],
      dialogFlag: false,
    };
  },
  computed: {
    ...mapState('puddle', ['list']),
    archivedCount() {
      const arr: EmailType[] = this.list.filter(
        (item: EmailType) => item.isArchive
      );
      if (Array.isArray(arr)) {
        return arr.length;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapMutations('puddle', ['updateArchive']),
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleArchiveToggle(index, row) {
      this.updateArchive({
        index,
        flag: !row.isArchive,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
%center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  @extend %center;
  flex-direction: column;
}
</style>
