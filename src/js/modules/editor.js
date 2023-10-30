import Quill from 'quill'



const toolbarOptions = [
  ['bold', 'italic', 'underline', { color: [] }, { list: 'ordered' }, { list: 'bullet' },'table', 'blockquote', 'header', 'video', 'image'] // toggled buttons
]




const editor = () => {
  const createEditor = el => {
    const editorEl = document.querySelector(el)

    if (!editorEl) return
    new Quill(editorEl, {
      modules: {
        toolbar: toolbarOptions
      },

      placeholder: 'Мій коментар',

      theme: 'snow'
    })
  }

  createEditor('.editor__block')
}



export default editor
