<script setup>
import {AwesomeQR} from "awesome-qr";

import {Download} from "@element-plus/icons-vue";

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  options: {
    type: Object,
    required: false,
  }
})

const dataURL = ref('');

async function CreateQRCode(text, options) {
  const Options = {
    ...{text: text},
    ...(options !== undefined ? options : {})
  };
  return await new AwesomeQR(Options).draw();
}


onMounted(async () => {
  dataURL.value = await CreateQRCode(props.text, props.options);
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
        <el-image :src="dataURL" :alt="props.text" :zoom-rate="2" :max-scale="7" :min-scale="0.2"
                  :preview-src-list="[dataURL]" :initial-index="1" fit="cover" loading="lazy"/>
        <el-tooltip :content="props.text" placement="top">
          <el-text class="distribution" type="info" size="small" truncated>{{props.text}}</el-text>
        </el-tooltip>
      </div>
      <template #footer>
        <div>
          <el-link :underline="false" :href="dataURL"
                   target="_blank" :download="`QRCode_${getDate()}.png`"
                   class="downloadLink">
            <el-icon style="padding-right: 5px"><Download /></el-icon> Download QRCode
          </el-link>
        </div>
      </template>
    </el-card>

  </div>
</template>

<style>
/* 覆盖element-ui部分样式 */
.el-card__body {
  padding: 10px 10px 0;
}

.el-card__footer {
  padding: 5px;
}
</style>

<style scoped lang="scss">
.content {
  max-height: 270px;
  max-width: 180px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  .box-card {
    width: 100%;

    .el-image {
      width: 160px;
      height: 160px;
    }

    .downloadLink {
      width: 100%;
    }
  }
}
</style>