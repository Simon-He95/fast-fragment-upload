import SparkMD5 from 'spark-md5'

export function createChunk(file: File, index: number, chunkSize: number) {
  return new Promise((resolve) => {
    const start = index * chunkSize
    const end = start + chunkSize
    const spark = new SparkMD5.ArrayBuffer()
    const fileReader = new FileReader()
    fileReader.onload = (e) => {
      spark.append(e.target?.result as ArrayBuffer)
      resolve({
        start,
        end,
        index,
        hash: spark.end(),
      })
    }
    fileReader.readAsArrayBuffer(file.slice(start, end))
  })
}
