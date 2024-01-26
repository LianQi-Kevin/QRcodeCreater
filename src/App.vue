<script setup>
import {ElMessage} from "element-plus";

import QRCodeCard from "@/components/QRCodeCard.vue";
import QRCodeOptions from "@/components/QRCodeOptions.vue";
import {generateUUID4} from  "@/utils/UUID.js";

const strRef = ref('')

const generateOptions = ref()

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
    resultList.push({
      id: generateUUID4(),
      text: strRef.value,
      options: toRaw(generateOptions.value.generateOptions),
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
      <el-input v-model="strRef" class="url_input" placeholder="Enter the content for the QRCode"
                :autofocus="true" @keyup.enter="QRCodeCreator" clearable/>
      <el-button @click="QRCodeCreator" size="large" class="submit">Generate</el-button>
    </div>
    <div class="options">
      <QRCodeOptions ref="generateOptions"/>
    </div>
    <div class="result">
      <el-empty description="Please enter text and click generate button" v-if="resultList.length === 0" />
      <el-scrollbar v-else max-height="max(calc(100vh - 300px), 370px)">
        <div class="result_sub">
          <div v-for="card in resultList" :key="card.id">
            <QRCodeCard :text="card.text" :options="card.options" />
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
      justify-content: center;
      gap: 15px;
    }
  }
}

</style>
