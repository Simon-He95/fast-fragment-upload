## Fast Fragment Uploader

> WIP: 一个简单使用并且快速的分片上传封装函数，使用 Worker 进行分片上传，Worker 开启数量根据 CPU 内核数控制，支持多个文件同时上传，每片默认按照 5MB 进行分片，可自己设置。另外提供了 2 个函数，fragmentUpload 会在单个文件全部分完片后依次回调，fragmentUpload1 则是在每分好一个片立即回调，可按照具体需求使用。

## Install

```
npm i fast-fragment-upload
```

## Usage

### fragmentUpload

```typescript
import { fragmentUpload } from 'fast-fragment-upload'

fragmentUpload('input[type="file"]', {
  perCallback: (fileInfo) => {
    console.log('单个文件每一次调用', fileInfo)
  },
  lastCallback: (files) => {
    console.log('所有文件最后一次总和的调用', files)
  },
})
```

### fragmentUpload1

```typescript
fragmentUpload1('input[type="file"]', {
  callback: (chunk) => {
    // 每一个片分片的结果回调，每一个片分好立即回调，能够更快的往服务端去上传
    console.log(chunk)
  },
})
```

## Params

```typescript
export interface FragmentUpload {
  perCallback?: (fileInfo: FileInfo & { isDone: boolean }) => void
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

export interface FragmentUpload1 {
  chunkSize?: number
  callback?: (chunk: ChunkInfo & { isDone: boolean }) => void
}
```

## License

[MIT](./LICENSE) License © 2022 [Simon He](https://github.com/Simon-He95)

<a href="https://github.com/Simon-He95/sponsor" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

<span><div align="center">![sponsors](https://www.hejian.club/images/sponsors.jpg)</div></span>
