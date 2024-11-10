// src/global.d.ts
import 'express';

declare module 'express' {
  export interface Request {
    user?: any; // 여기서 `any` 대신 실제 타입을 지정할 수 있다면 더욱 좋습니다.
  }
}