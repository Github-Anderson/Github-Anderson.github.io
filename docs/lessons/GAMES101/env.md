---
comments: true
---

# 作业环境配置

!!! info "关于作业"

	个人版本作业，经供参考 [:fontawesome-brands-github: Github](https://github.com/Github-Anderson/GAMES101-HW/)
	
!!! warning "注意"

	不推荐使用 Windows 环境，可用作业提供的 VirtualBox 虚拟机

=== ":material-linux: Linux"

	> 以 Ubuntu 22.04 为例，使用 Visual Studio Code 1.90.0

	1. 安装 eigen 及 opencv

	```shell
	sudo apt update
	sudo apt install libeigen3-dev libopencv-dev
	```
	2. 在作业文件夹内新建 `.vscode`，并写入文件：

	=== ":octicons-file-code-16: `c_cpp_properties.json`"
	
		```json
		{
			"configurations": [
				{
					"name": "Linux",
					"includePath": [
						"/usr/include/opencv4",
						"/usr/include/opencv4/opencv2",
					],
					"compilerPath": "/usr/bin/g++",
					"cStandard": "c17",
					"cppStandard": "c++17",
					"intelliSenseMode": "linux-gcc-x64",
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
	
	=== ":simple-cmake: `CMakeLists.txt`"

		```cmake
		// 无需改动
		cmake_minimum_required(VERSION 3.10)
		project(Rasterizer)

		find_package(OpenCV REQUIRED)

		set(CMAKE_CXX_STANDARD 17)

		include_directories(/usr/local/include)

		add_executable(Rasterizer main.cpp rasterizer.hpp rasterizer.cpp Triangle.hpp Triangle.cpp)
		target_link_libraries(Rasterizer ${OpenCV_LIBRARIES})

		```

	3\. 成功，可以正常编译

	```shell
	mkdir build
	cd build
	cmake ..
	make

	./Rasterizer
	```

=== ":material-apple: macOS"

	> 以 macOS Sonoma 14.5 为例，且为 arm64

	1. 安装 eigen 和 opencv

	```shell
	brew install eigen
	brew install opencv
	```
	2. 在作业文件夹内新建 `.vscode`，并写入文件：

	!!! warning "注意"

		这里需要手动设置 opencv 的路径及架构，否则会使用默认的`x86_64`架构导致编译失败

	=== ":octicons-file-code-16: `c_cpp_properties.json`"
	
		```json
		{
			"configurations": [
				{
					"name": "Mac",
					"includePath": [
						"/opt/homebrew/opt/opencv",
						"/opt/homebrew/opt/opencv/include/opencv4",
						"/opt/homebrew/opt/eigen"
					],
					"compilerPath": "/usr/bin/g++",
					"cStandard": "c17",
					"cppStandard": "c++17",
					"intelliSenseMode": "macos-gcc-arm64",
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
	
	=== ":simple-cmake: `CMakeLists.txt`"

		```cmake
		cmake_minimum_required(VERSION 3.10)
		project(Rasterizer)

		find_package(OpenCV REQUIRED)

		set(CMAKE_CXX_STANDARD 17)
		set(CMAKE_OSX_ARCHITECTURES "arm64") // 需选择架构 arm64

		include_directories(/usr/local/include)

		add_executable(Rasterizer main.cpp rasterizer.hpp rasterizer.cpp Triangle.hpp Triangle.cpp)
		target_link_libraries(Rasterizer ${OpenCV_LIBRARIES})


		```

	3\.  成功，可以正常编译

	```shell
	mkdir build
	cd build
	cmake ..
	make

	./Rasterizer
	```