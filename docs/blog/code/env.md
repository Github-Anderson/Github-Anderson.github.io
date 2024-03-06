# 环境变量

## C/C++

=== "Windows 10/11"

	1. 下载安装 [mingw64](https://winlibs.com/)，在解压后放在 `C:\` 或 `D:\` 均可

	2. 按 ++windows++ 搜索 *编辑系统环境变量*

	3. 环境变量(N).. - 选定 Path - 编辑(E).. - 新建(N) - 输入解压后的路径`..\mingw64\bin` - 确定

	4. 运行 VSCode，安装以下插件：
	
	    - C/C++: 解释你的代码，并添加高亮

	    - Code Runner：使用配置文件编译运行你的代码

		- GitHub Theme（可选）: GitHub风颜色主题

		- Material Icon Theme（可选）: 赋予文件/文件夹图标，便于快速定位文件

	5. 打开 .c/.cpp 所在文件夹并新建 `.vscode` 文件夹，在其中创建两个新文件：`settings.json` 和 `c_cpp_properties.json`，内容如下：

		=== ":octicons-file-code-16: `settings.json`"

			``` json title=""
			{
				"code-runner.executorMap": {
					"cpp": "cd $dir && g++ '$fileName' -o '$fileNameWithoutExt' -std=c++17 -Wall -Wpedantic -Wextra && echo 'compilation ends.' && .\\'$fileNameWithoutExt'",
					"c": "clear && cd $dir && gcc '$fileName' -o '$fileNameWithoutExt' -std=c17 -Wall -Wpedantic -Wextra && echo 'compilation ends.' && .\\'$fileNameWithoutExt'"
				},
				//  编译运行C/C++代码
				"code-runner.clearPreviousOutput": true,
				// 清除上次输出
				"code-runner.saveAllFilesBeforeRun": false,
				// 保存所有文件
				"code-runner.saveFileBeforeRun": true,
				// 保存当前文件
				"code-runner.showExecutionMessage": false,
				// 输出执行信息
				"code-runner.runInTerminal": true,
				// 在终端里执行
				"code-runner.preserveFocus": false,
				// 保持窗口在最上层
				"code-runner.ignoreSelection": true
				// 忽略在文档中的选择
			}
			```

		=== ":octicons-file-code-16: `c_cpp_properties.json`"

			``` json title=""
			{
				"configurations": [
					{
						"name": "Win32",
						"compilerPath": "D:\\Program Files\\mingw64\\bin\\gcc.exe",
						"cStandard": "c17",
						"cppStandard": "c++17",
						"intelliSenseMode": "windows-gcc-x64",
						"compilerArgs": [
							"-Wall",
							"-Wpedantic",
							"-Wextra"
						]
					}
				],
				"version": 4
			}
			```

	6. 完成，现在可以编译运行你的代码了！

=== "macOS"

	1. 运行 App Store，搜索下载 [Xcode](https://apps.apple.com/us/app/xcode/id497799835)

		!!! tip "提示"

			若觉得下载完整 Xcode 太慢或太占空间，可选择移步 [Apple Developer](https://developer.apple.com/download/all/) 下载安装 Command Line Tools

	2. 运行 VSCode，安装以下插件：
	
	    - C/C++: 解释你的代码，并添加高亮

	    - Code Runner：使用配置文件编译运行你的代码

		- GitHub Theme（可选）: GitHub风颜色主题

		- Material Icon Theme（可选）: 赋予文件/文件夹图标，便于快速定位文件

	3. 打开 .c/.cpp 所在文件夹并新建 `.vscode` 文件夹，在其中创建两个新文件：`settings.json` 和 `c_cpp_properties.json`，内容如下：
	
		=== ":octicons-file-code-16: `settings.json`"

			``` json title=""
			{
				"files.exclude": {
					"**/*.dSYM": true,
					"**/*.out": true,
				}, // 忽略编译后生成在同目录下的文件
				
				"code-runner.executorMap": {
					"cpp": "g++ $fullFileName -o $dir\"$fileNameWithoutExt\"\".out\" -W -Wall -O2 -std=c++17 && $dir\"$fileNameWithoutExt\"\".out\"",
					"c": "gcc $fullFileName -o $dir\"$fileNameWithoutExt\"\".out\" -W -Wall -O2 -std=c17 && $dir\"$fileNameWithoutExt\"\".out\"",
				},
				"code-runner.clearPreviousOutput": true,
				// 清除上次输出
				"code-runner.saveAllFilesBeforeRun": false,
				// 保存所有文件
				"code-runner.saveFileBeforeRun": true,
				// 保存当前文件
				"code-runner.showExecutionMessage": false,
				// 输出执行信息
				"code-runner.runInTerminal": true,
				// 在终端里执行
				"code-runner.preserveFocus": false,
				// 保持窗口在最上层
				"code-runner.ignoreSelection": true
				// 忽略在文档中的选择
			}
			```

		=== ":octicons-file-code-16: `c_cpp_properties.json`"

			``` json title=""
			{
				"configurations": [
					{
						"name": "Mac",
						"compilerPath": "usr/bin/gcc",
						"cStandard": "c17",
						"cppStandard": "c++17",
						"intelliSenseMode": "macos-clang-x64",
						"compilerArgs": [
							"-Wall",
							"-Wpedantic",
							"-Wextra"
						]
					}
				],
				"version": 4
			}
			```

	4. 完成，现在可以编译运行你的代码了！

## Python
