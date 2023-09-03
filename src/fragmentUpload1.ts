import { fragmentFile1 } from './fragmentFile1'
import type { Options1 } from './type'

export function fragmentUpload1(selector: string, options: Options1) {
  const el = document.querySelector(selector) as HTMLInputElement
  const { callback, chunkSize } = options || {}
  el.onchange = async () => {
    const files = el.files ? Array.from(el.files) : []
    for (const file of files) fragmentFile1(file, chunkSize, callback)
  }
}

// fragmentUpload1('input[type="file"]', {
//   callback: (chunk) => {
//     console.log(chunk)
//   },
//   chunkSize:1024
// })
