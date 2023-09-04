const THREAD_COUNT = navigator.hardwareConcurrency || 4
export function fragmentFile1(
  file: File,
  CHUNK_SIZE: number = 5 * 1024 * 1024,
  callback?: (chunk: any) => void,
): void {
  const chunkCount = Math.ceil(file.size / CHUNK_SIZE)
  const workerChunkCount = Math.ceil(chunkCount / THREAD_COUNT)
  let finishCount = 0
  for (let i = 0; i < THREAD_COUNT; i++) {
    const worker = new Worker('./dist/work1.js', { type: 'module' })
    const startIndex = i * workerChunkCount
    let endIndex = startIndex + workerChunkCount
    if (endIndex > chunkCount)
      endIndex = chunkCount
    worker.postMessage({ file, i, CHUNK_SIZE, startIndex, endIndex })
    worker.onmessage = ({ data }) => {
      finishCount++
      const params = {
        ...data,
        fileName: file.name,
        type: file.type,
        size: file.size,
        lastModified: file.lastModified,
        isDone: finishCount === THREAD_COUNT,
      }
      callback && callback(params)
      worker.terminate()
    }
  }
}
