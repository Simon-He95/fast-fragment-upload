import { fragmentFile } from './fragmentFile'
import type { FileInfo, Options } from './type'

export * from './type'

// 大文件分片上传函数
export function fragmentUpload(selector: string, options?: Options) {
  // ...
  const el = document.querySelector(selector) as HTMLInputElement
  const { perCallback, lastCallback } = options || {}
  el.onchange = async () => {
    const files = el.files ? Array.from(el.files) : []
    const results: FileInfo[] = []
    let fileCount = files.length
    for (const file of files) {
      fragmentFile(file).then((chunks) => {
        fileCount--
        const fileInfo = {
          name: file.name,
          type: file.type,
          size: file.size,
          lastModified: file.lastModified,
          chunks,
        }
        perCallback && perCallback(fileInfo)
        results.push(fileInfo)
        if (fileCount === 0)
          lastCallback && lastCallback(results)
      })
    }
  }
}
