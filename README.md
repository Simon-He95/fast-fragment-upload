## Fast Fragment Uploader

> WIP: 一个简单使用并且快速的分片上传封装函数，使用 Worker 进行分片上传，Worker 开启数量根据 CPU 内核数控制，支持多个文件同时上传，每片按照 5MB 进行分片，支持控制单个文件的分片结果回调。

## Install

```
npm i fast-fragment-upload
```

## Usage

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

## Params

```typescript
{
  selector: string; // 选择器
  options: {
    perCallback?: (fileInfo) => void; // 单个文件每一次调用
    lastCallback?: (files) => void // 所有文件最后一次总和的调用
  }
}
```

## License

[MIT](./LICENSE) License © 2022 [Simon He](https://github.com/Simon-He95)

<a href="https://github.com/Simon-He95/sponsor" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

<span><div align="center">![sponsors](https://www.hejian.club/images/sponsors.jpg)</div></span>
