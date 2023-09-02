export interface Options {
  perCallback?: (fileInfo: FileInfo) => void
  lastCallback?: (filesInfo: FileInfo[]) => void
  splitCallback?: (fileInfo: FileInfo) => void
  chunkSize?: number
}

export interface FileInfo {
  name: string
  type: string
  size: number
  lastModified: number
  chunks: ChunkInfo[]
}

export interface ChunkInfo {
  start: number
  end: number
  index: number
  hash: string
}
