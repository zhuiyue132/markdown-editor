<template>
  <div>
    <div class="md-code-area" ref="ace"></div>
    <el-popover placement="top-start" width="300" class="hotkey-icon" trigger="hover">
      <div>这里是快捷键提示</div>
      <svg-icon slot="reference" icon-class="hotkey" class-name="hotkey-icon" />
    </el-popover>
  </div>
</template>
<script>
import debounce from 'lodash/debounce'
import Ace from 'ace-builds'
import 'ace-builds/webpack-resolver' // 在 webpack 环境中使用必须要导入

// const DEFAULT_TEMPLATE = 'text'

export default {
  name: 'CodeArea',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data() {
    return {
      ace: null
    }
  },
  mounted() {
    console.log('Ace :>> ', Ace)
    this.ace = Ace.edit(this.$refs.ace, {
      autoScrollEditorIntoView: true,
      copyWithEmptySelection: true,
      fontSize: 16, // 编辑器内字体大小
      tabSize: 2,
      selectionStyle: 'text',
      wrap: true,
      value: this.value ? this.value : ''
    })
    this.ace.setTheme('ace/theme/chrome')

    this.ace.getSession().setMode('ace/mode/markdown')
    this.ace.renderer.setShowPrintMargin(false)

    const handleChangeEvent = debounce(this.handleOnChange, 300)
    this.ace.getSession().on('change', handleChangeEvent)
    this.ace.getSession().selection.on('changeSelection', e => {
      console.log(e)
      console.log('text :>> ', this.ace.session.getTextRange(this.ace.getSelectionRange()))
    })
    // this.ace.renderer.setShowGutter(true) // 行号
    // this.ace.setOption('displayIndentGuides', true) // 缩进指示线
  },
  methods: {
    handleOnChange() {
      this.$emit('change', this.getValue())
    },
    handleInsert() {},
    getSelectionRange() {
      if (!this.ace) return ''
      return this.ace.session.getTextRange(this.ace.getSelectionRange())
    },
    getValue() {
      return this.ace.getSession().getValue()
    }
  }
}
</script>
<style lang="scss" scoped>
.md-code-area {
  height: calc(100vh - 54px);
  overflow: scroll;
}
.hotkey-icon {
  position: fixed;
  font-size: 20px;
  bottom: 10px;
  left: 50%;
  z-index: 9999;
  cursor: pointer;
  height: 20px;
  width: 20px;
  margin: 0 8px;
}
</style>