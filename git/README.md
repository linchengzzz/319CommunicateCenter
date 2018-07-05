# git 和 github 的使用

## 1 git 和 github 区别

### 1.1 git

git是一个版本管理工具，可以关联远程仓库用来提交和拉去代码，即使是提交错误也可以用git来还原你的代码

### 1.2 github

github一个网站，用来存储代码的仓库，具有大量的开源代码，程序员交流基地

## 2 git下载安装

> git 官网 ：https://git-scm.com

安装完成后，打开终端运行命令

```bash
git --version
# 终端显示已安装的git版本
git version 2.16.2
```

## 3 git初始配置

> 初次安装git工具需要进行全局配置，用来在团队开发时，大家能知道你是谁

```bash
git config --global user.name "你的github用户名"    
git config --global user.email "你的github邮箱"
# 查看git配置
git config --global user.name   
git config --global user.email 
# 查看git全部配置
git --list
```

## 4 github 注册

> github官网：https://github.com/
>
> 安装官网提示注册，看不懂英文的建议Google翻译

注册好后在github的repositories界面新建一个远程仓库用来同步代码：new Repository

> 在 新建仓库的时候 下方的 Initialize this repository with a README 不要勾选 ，否则在初始化git仓库后，需要先拉去一遍代码才可同步

## 5 初始化git仓库

```bash
# 新建一个文件夹作为本地git仓库
mkdir my-git
# 进入本地仓库
cd my-git
# 初始化git
git init
```

## 6 git 的三个区介绍

- 工作区
- 暂存区
- 历史区

### 6.1 工作区

当前目录下的没有添加到暂存区的文件，或提交后又重新修改的文件

```bash
# 在当前目录下新建一个文件
touch test.txt
# 查看当文件夹下的git 状态
git status

```



