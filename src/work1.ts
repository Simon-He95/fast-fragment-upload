import { createChunk } from './createChunk'

onmessage = async (e) => {
  const { file, CHUNK_SIZE, startIndex, endIndex } = e.data
  for (let i = startIndex; i < endIndex; i++)
    createChunk(file, i, CHUNK_SIZE).then(postMessage)
}
