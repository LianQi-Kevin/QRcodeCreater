<script setup lang="ts">
import {Setting} from "@element-plus/icons-vue";

// 定义 generateOptions 参数
// https://github.com/sumimakito/Awesome-qr.js?tab=readme-ov-file#componentoptions
interface ComponentOptions {
  data?: {
    scale?: number;   // default 0.4
  };
  timing?: {
    scale?: number;   // default 0.5
    protectors?: boolean;   // default false
  };
  alignment?: {
    scale?: number;   // default 0.5
    protectors?: boolean;   // default false
  };
  cornerAlignment?: {
    scale?: number;   // default 0.5
    protectors?: boolean;   // default true
  };
}

// https://github.com/sumimakito/Awesome-qr.js?tab=readme-ov-file#options
interface GenerateOptions {
  size?: number;    // Size of the QR code in pixel. default 400
  margin?: number;  // Size of margins around the QR code body in pixel. default 20
  correctLevel?: number;  // Error correction level of the QR code.  default 0. 0-3 L/M/Q/H
  maskPattern?: number;   // advanced option. Specify the mask pattern to be used in QR code encoding.
  version?: number;   // advanced option. Specify the version to be used in QR code encoding. [1 ~ 40]
  components?: ComponentOptions;
  colorDark?: string;   // Color of the blocks on the QR code. default #000000
  colorLight?: string;  // Color of the empty areas on the QR code. default #ffffff
  autoColor?: boolean;  // Automatically calculate the colorDark value from the QR code's background. default true
  backgroundImage?: string | Buffer;
  backgroundDimming?: string;   // Color of the dimming mask above the background image. default rgba(0, 0, 0, 0)
  gifBackground?: ArrayBuffer;  // GIF background image to be used in the QR code.
  whiteMargin?: boolean;  // Use a white margin instead of a transparent one which reveals the background of the QR code on margins. default true
  logoImage?: string | Buffer;
  logoScale?: number;   // Size of margins around the logo image in pixels. default 0.2
  logoMargin?: number;  // Ratio of the logo size to the QR code size. default 6
  logoCornerRadius?: number;  // Corner radius of the logo image in pixels. default 8
}

// 定义 configs
const generateOptions = reactive<GenerateOptions>({
  size: 400,
  margin: 20,
  colorDark: "#000000",
  colorLight: "#ffffff",
  backgroundDimming: "rgba(0,0,0,0)",
  logoImage: undefined,
  logoScale: 0.2,
  logoMargin: 4,
  logoCornerRadius: 8,
  whiteMargin: true,
  autoColor: true,
})

// 暴露到父元素
defineExpose({
  generateOptions,
})
</script>

<template>
  <el-collapse accordion>
    <el-collapse-item title="Options" name="1">
      <template #title>
        <el-icon class="icon"><Setting /></el-icon> Options
      </template>
      <el-form :model="generateOptions" label-position="left" label-width="150px" class="formContent">
        <el-form-item label="Size">
          <el-slider v-model="generateOptions.size" :step="50" :min="150" :max="1000" show-stops/>
<!--          <el-input-number v-model="generateOptions.size" :min="150" :max="1000" :step="50"/>-->
        </el-form-item>
        <el-form-item label="ColorDark">
          <el-color-picker v-model="generateOptions.colorDark"/>
        </el-form-item>
        <el-form-item label="ColorLight">
          <el-color-picker v-model="generateOptions.colorLight"/>
        </el-form-item>
        <el-form-item label="backgroundDimming">
          <el-color-picker v-model="generateOptions.backgroundDimming"/>
        </el-form-item>
        <el-form-item label="logoScale" v-if="generateOptions.logoImage !== undefined">
          <el-slider v-model="generateOptions.logoScale" :step="0.1" :min="0.1" :max="0.8" show-stops/>
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

.formContent {
  width: 90%;
}
</style>