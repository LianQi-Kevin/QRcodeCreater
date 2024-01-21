<script setup lang="ts">
import {Setting} from "@element-plus/icons-vue";

// 定义 generateOptions 的接口
interface GenerateOptions {
  size: number;         // 二维码尺寸      300
  colorDark: string;    // 默认的二维码颜色 '#000000'
  colorLight: string;   // 默认的背景颜色   '#ffffff'
}

// 定义 props
const props = defineProps<{ generateOptions: GenerateOptions; }>();
</script>

<template>
  <el-collapse accordion>
    <el-collapse-item title="Options" name="1">
      <template #title>
        <el-icon class="icon"><Setting /></el-icon> Options
      </template>
      <el-form :model="props.generateOptions" label-position="left" label-width="80px">
        <el-form-item label="Size">
          <el-input-number v-model="props.generateOptions.size" :min="100" :max="1000" :step="50"/>
        </el-form-item>
        <el-form-item label="ColorDark">
          <el-color-picker v-model="props.generateOptions.colorDark"/>
        </el-form-item>
        <el-form-item label="ColorLight">
          <el-color-picker v-model="props.generateOptions.colorLight"/>
        </el-form-item>
      </el-form>
    </el-collapse-item>
  </el-collapse>
</template>

<style scoped lang="scss">
.icon {
  margin-left: 5px;
  margin-right: 5px;
}
</style>