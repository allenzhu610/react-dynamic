# react-dynamic

#### 项目介绍
异步加载 React 组件
umi/dynamic 的单独提出版，方便在其它非 umi 框架中使用

#### 软件架构
适用于所有 React 组件（应该吧 >_> ）

#### 安装教程

```
yarn add react-dynamic
```
或者
```
npm i -S react-dynamic
```

#### 使用说明

1.基础示例
```
import dynamic from 'react-dynamic';

export default dynamic(import('./component/example'));
```

2.组件还未载入的设置
```
import dynamic from 'react-dynamic';
import Loading from './component/loading';

export default dynamic(import('./component/example'), {
  loading: <Loading />
});
```

#### 参与贡献

1. Fork 本项目
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request