export interface Options {
  perCallback?: (fileInfo: FileInfo) => void
  lastCallback?: (filesInfo: FileInfo[]) => void
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
