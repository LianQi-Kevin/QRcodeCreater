<script setup>
import {Download} from "@element-plus/icons-vue";

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
})

function getDate() {
  return new Date().toISOString()
    .replace(/[\-:]/g, '')  // 移除短横线和冒号
    .replace(/\.\d{3}/, ''); // 移除秒后的毫秒部分
}
</script>

<template>
  <div class="content">
    <el-card class="box-card">
      <div>
        <el-image
          :src="props.img"
          :alt="props.text"
          fit="cover"
          loading="lazy"
        />
        <el-tooltip :content="props.text" placement="top">
          <el-text class="distribution" type="info" size="small" truncated>{{props.text}}</el-text>
        </el-tooltip>
      </div>
      <template #footer>
        <div class="card-header">
          <el-link :underline="false" :href="props.img" target="_blank" :download="`QRCode_${getDate()}.png`">
            <el-button text>
              <el-icon style="padding-right: 5px"><Download /></el-icon> Download QRCode
            </el-button>
          </el-link>
        </div>
      </template>
    </el-card>

  </div>
</template>

<style>
/* 重写element-ui部分样式 */
.el-card__body {
  padding: 15px 15px 0;
}

.el-card__footer {
  padding: 5px 10px 5px 10px;
}
</style>

<style scoped lang="scss">
.content {
  border: var(--el-border);
  height: 270px;
  max-height: 270px;
  width: 210px;
  max-width: 210px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  //padding: 10px;
  padding: 0;

  .box-card {
    width: 100%;
    height: 100%;

    .el-image {
      width: 180px;
      height: 180px;
    }
  }


  .distribution {
    word-wrap:break-word;
  }
}
</style>