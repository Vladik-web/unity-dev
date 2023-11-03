import Quill from 'quill'

const toolbarOptions = [
  ['bold', 'italic', 'underline', { color: [] }, { list: 'ordered' }, { list: 'bullet' }, '', '', 'video', 'images'] // toggled buttons
]
const editorTeacher = () => {
  const createEditorTeacher = el => {
    const editorElement = document.querySelector(el)

    if (!editorElement) return
    new Quill(editorEl, {
      modules: {
        toolbar: toolbarOptions
      },

      placeholder: '1',

      theme: 'snow'
    })
  }

  createEditorTeacher('.editor__content')
}
export default editorTeacher
