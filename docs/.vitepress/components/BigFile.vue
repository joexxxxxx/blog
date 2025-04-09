<script setup>
import sparkMD5 from 'spark-md5'
import { ref } from 'vue'

/**
 * 文件对象
 * @type {File|null}
 */
const file = ref(null)

/**
 * 文件切片数组
 * @type {Array}
 */
const fileChunks = ref([])

/**
 * 文件哈希值
 * @type {string|null}
 */
const fileHash = ref(null)

/**
 * 处理文件选择变化
 * @param {Event} event - 文件输入事件
 */
function handleFileChange(event) {
  const target = event.target
  if (target.files && target.files.length > 0) {
    file.value = target.files[0]
    console.log(file.value)
    const chunks = sliceFile(file.value)
    console.log('chunks', chunks)
    calculateFileHash(file.value)
  }
}

/**
 * 将文件切片，每片大小为1MB
 * @param {File} file - 要切片的文件
 * @returns {Array} 切片数组
 */
function sliceFile(file) {
  const chunkSize = 5 * 1024 * 1024 // 5MB
  const chunks = []
  let start = 0

  while (start < file.size) {
    const end = Math.min(start + chunkSize, file.size)
    const chunk = file.slice(start, end)
    chunks.push({
      chunk,
      index: chunks.length,
    })
    start = end
  }

  fileChunks.value = chunks
  console.log(`文件 "${file.name}" 已被切片成 ${chunks.length} 个分片，每片大小约 1MB`)
  return chunks
}

/**
 * 计算文件的MD5哈希值
 * @param {File} file - 要计算哈希的文件
 */
function calculateFileHash(file) {
  const fileReader = new FileReader()
  const spark = new sparkMD5.ArrayBuffer()

  // 读取文件的前5MB来计算哈希值，以提高性能
  const chunk = file

  fileReader.onload = (e) => {
    spark.append(e.target.result)
    const hash = spark.end()
    fileHash.value = hash
    console.log(`文件哈希值: ${hash}`)
  }

  fileReader.readAsArrayBuffer(chunk)
}
</script>

<template>
  <section>
    <h3>大文件上传</h3>
    <input type="file" @change="handleFileChange">
    <div v-if="file">
      <p>已选择文件: {{ file.name }}</p>
      <p v-if="fileChunks.length">
        已分片: {{ fileChunks.length }} 片
      </p>
      <p v-if="fileHash">
        文件哈希: {{ fileHash }}
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
}

input {
  margin: 1rem 0;
}
</style>
