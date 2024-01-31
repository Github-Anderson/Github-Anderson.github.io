# 一些小细节

!!! info "提示"

    这里所使用的功能均为免费功能

### 1. 自动启用/关闭暗黑模式 :material-link:

> 来自：[System preference](https://squidfunk.github.io/mkdocs-material/setup/changing-the-colors/#system-preference)

在网站顶栏显示暗黑模式切换按钮，分为自动/日间/暗黑。

=== ":octicons-file-code-16: `mkdocs.yml`"

    ``` yaml title=""
    theme:
      name: material
      palette:
      - media: "(prefers-color-scheme)"
          toggle:
          icon: material/link
          name: 切换至日间模式

      - media: "(prefers-color-scheme: light)"
          scheme: default 
          toggle:
          icon: material/toggle-switch-off-outline
          name: 切换至暗黑模式

      - media: "(prefers-color-scheme: dark)"
          scheme: slate
          toggle:
          icon: material/toggle-switch
          name: 切换至系统默认
    ```

### 2. Emoji/Material Icons 支持 :smile:

> 来自：[Icons, Emojis](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/)

MarkDown拓展，使用 `:xx:` 以插入 Emoji 或 Material icons

=== ":octicons-file-code-16: `mkdocs.yml`"

    ``` yaml title=""
    markdown_extensions:
        - attr_list
        - pymdownx.emoji:
        emoji_index: !!python/name:material.extensions.emoji.twemoji
        emoji_generator: !!python/name:material.extensions.emoji.to_svg
    ```

### 3. 美观的提示标签 :material-information-outline:{ title="我是一个标签！" }

> 来自：[Tooltips](https://squidfunk.github.io/mkdocs-material/reference/tooltips/ "我也是一个标签！")

取代浏览器自带鼠标停留显示标签，使用 Material for MkDocs 提供的样式。

=== ":octicons-file-code-16: `mkdocs.yml`"

    ``` yaml title=""
    markdown_extensions:
        - abbr
        - attr_list
        - pymdownx.snippets

    theme:
        features:
        - content.tooltips
    ```

### 4. 文档 Git 创建时间

> 来自：[Document dates](https://squidfunk.github.io/mkdocs-material/setup/adding-a-git-repository/#document-dates)

显示该文章的创建时间和修改时间。

需要安装一个叫`git-revision-date-localized-plugin` 的包，即在 `.github/workflows/xx.yml` 中加入安装命令 `pip install mkdocs-git-revision-date-localized-plugin` 

=== ":octicons-file-code-16: `.github/workflows/xx.yml`"

    ``` yaml title=""
    jobs:
      deploy:
        steps:
          - run: pip install mkdocs-git-revision-date-localized-plugin
    ```

=== ":octicons-file-code-16: `mkdocs.yml`"

    ``` yaml title=""
    plugins:
    - git-revision-date-localized:
        type: date
        enable_creation_date: true
    ```

### 5. "这篇文章有用吗？"

> 来自：[Was this page helpful?](https://squidfunk.github.io/mkdocs-material/setup/setting-up-site-analytics/?h=page+helpful%3F#was-this-page-helpful)

在文章末尾添加一个互动模块，用以收集用户对文章的反馈，官方教程中则是配合 Google Analysis 来统计数量，我这里只是做了一个壳，如果需要可以加入问卷链接等等。

=== ":octicons-file-code-16: `../feedback.js`"

    ``` js title=""
    var feedback = document.forms.feedback
    feedback.hidden = false 

    feedback.addEventListener("submit", function(ev) {
    ev.preventDefault()

    var page = document.location.pathname 
    var data = ev.submitter.getAttribute("data-md-value")

    feedback.firstElementChild.disabled = true 

    var note = feedback.querySelector(
        ".md-feedback__note [data-md-value='" + data + "']"
    )
    if (note)
        note.hidden = false 
    })
    ```

=== ":octicons-file-code-16: `mkdocs.yml`"

    ``` yaml title=""
    extra:
      analytics: 
        feedback:
          title: 这篇文章有用吗？
          ratings:
            - icon: material/emoticon-happy-outline
              name: 有用！
              data: 1
              note: 很高兴能帮到你！
            - icon: material/emoticon-sad-outline
              name: 需要改善
              data: 0
              note: 感谢反馈！我会尽量改善此页面！

    extra_javascript:
      - ../feedback.js
    ```

### 6. 使用旧版警告提示

> 来自：[Classic admonitions](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#classic-admonitions)

将警告提示样式换为旧版。

!!! classic "笔记"

    这是新版

!!! note "笔记"

    这是旧版

根据个人喜好切换。如果喜欢新版则无需修改。

<style>
  .md-typeset .admonition.classic {
    border-width: 1.5px;
  }
</style>

=== ":octicons-file-code-16: `../extra.css`"

    ``` css
    .md-typeset .admonition,
    .md-typeset details {
      border-width: 0;
      border-left-width: 4px;
    }
    ```

=== ":octicons-file-code-16: `mkdocs.yml`"

    ``` yaml
    extra_css:
      - ../extra.css
    ```
