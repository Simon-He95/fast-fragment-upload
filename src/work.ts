import { createChunk } from './createChunk'

onmessage = async (e) => {
  const { file, CHUNK_SIZE, startIndex, endIndex } = e.data
  const promises = []
  for (let i = startIndex; i < endIndex; i++)
    promises.push(createChunk(file, i, CHUNK_SIZE))

  const results = await Promise.all(promises)
  postMessage(results)
}
