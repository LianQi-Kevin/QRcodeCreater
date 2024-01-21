<script setup>
import {toDataURL} from 'qrcode'
import {ElMessage} from "element-plus";

import QRCodeCard from "@/components/QRCodeCard.vue";
import QRCodeOptions from "@/components/QRCodeOptions.vue";
import {generateUUID4} from  "@/utils/UUID.js";

const strRef = ref('')
const generateOptions = reactive({
  size: 100,
  colorDark: '#ffffff',
  colorLight: '#000000'
})

const resultList = reactive([])

async function QRCodeCreator() {
  try {
    // 检查 strRef.value 是否为空
    if (!strRef.value) {
      ElMessage({
        message: 'Please enter the text.',
        type: 'warning'
      });
      return;  // 提前退出函数
    }
    console.debug(`Create Text: ${strRef.value}`)
    // todo: generateOptions需休整
    resultList.push({
      id: generateUUID4(),
      text: strRef.value,
      img: await toDataURL(strRef.value, generateOptions)
    })

    // strRef.value = ""    // 创建后清理输入框
  } catch (e) {
    ElMessage({
      message: e,
      type: 'error'
    })
  }
}

</script>

<template>
  <div class="content">
    <p class="title"> QRCode Generator </p>
    <p class="distribution"> Enter a URL or text to generate a QRCode </p>
    <div class="generate">
      <el-input
        v-model="strRef"
        class="url_input"
        clearable
        placeholder="Enter the content for the QRCode"
        :autofocus="true"
        @keyup.enter="QRCodeCreator"
      />
      <el-button @click="QRCodeCreator" size="large" class="submit">Generate</el-button>
    </div>
    <div class="options">
      <QRCodeOptions :generate-options="generateOptions"/>
    </div>
    <div class="result">
      <el-empty description="Please enter text and click generate button" v-if="resultList.length === 0" />
      <el-scrollbar v-else max-height="max(calc(100vh - 300px), 350px)">
        <div class="result_sub">
          <div v-for="card in resultList" :key="card.id" class="result_row">
            <QRCodeCard :text="card.text" :img="card.img" />
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;

  //background-color: var(--el-bg-color);

  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
    color: var(--el-text-color-primary);
    text-align: center;
  }

  .distribution {
    font-size: 17px;
    margin-top: 0;
    margin-bottom: 15px;
    color: var(--el-text-color-primary);
    text-align: center;
  }

  .generate {
    display: flex;
    flex-direction: row;
    width: 80%;

    .url_input {
      flex-grow: 2;
    }

    .submit {
      flex-grow: 0;
      flex-basis: 100px;
      margin-left: 10px;

    }
  }

  .options {
    margin-top: 10px;
    width: 80%;
  }

  .result {
    margin-top: 15px;
    width: 80%;

    .result_sub {
      display: flex;
      flex-flow: row wrap;
      gap: 10px;
      justify-content: space-evenly;

      //max-height: ;
      overflow-y: auto;
    }

    .result_title {
      text-align: left;
      color: var(--el-text-color-primary);
    }
  }
}

</style>
