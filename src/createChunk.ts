import SparkMD5 from 'spark-md5'
import type { ChunkInfo } from './type'

export function createChunk(
  file: File,
  index: number,
  chunkSize: number,
): Promise<ChunkInfo> {
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
