# TypeScript：ts

## TypeScript 简介

>  TypeScript 由 Microsoft开发和维护的一种开源编程语言。 它可以编译成普通的JavaScript代码。 TypeScript支持任意浏览器，任意环境，任意系统并且是开源的。它支持 JavaScript 的所有语法和语义，同时通过作为 ECMAScript 的超集来提供一些额外的功能，如类型检测和更丰富的语法。TypeScript > ES7 > ES6 > ES5

## 使用 TypeScript 的原因

>  JavaScript 是一门弱类型语言，变量的数据类型具有动态性，只有执行时才能确定变量的类型，这种后知后觉的认错方法会让开发者成为调试大师，但无益于编程能力的提升，还会降低开发效率。TypeScript 的类型机制可以有效杜绝由变量类型引起的误用问题，而且开发者可以控制对类型的监控程度，是严格限制变量类型还是宽松限制变量类型，都取决于开发者的开发需求。添加类型机制之后，副作用主要有两个：增大了开发人员的学习曲线，增加了设定类型的开发时间。总体而言，这些付出相对于代码的健壮性和可维护性，都是值得的。
>
> 此外，类型注释是 TypeScript 的内置功能之一，允许文本编辑器和 IDE 可以对我们的代码执行更好的静态分析。 这意味着我们可以通过自动编译工具的帮助，在编写代码时减少错误，从而提高我们的生产力。
>
> vue-cli 发展到3.0 已经支持 TypeScript

## 安装

 ```bash
### 全局按照 TypeScript
npm install -g typescript
### 查看 TypeScript 版本号
tsc -v 
### ts-node 使用 node 调试 Typescript
npm install ts-node
 ```

