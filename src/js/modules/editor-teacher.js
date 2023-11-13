import Quill from 'quill'


const toolbarOptions = [
  ['bold', 'italic', 'underline', { color: [] }, { list: 'ordered' }, { list: 'bullet' },'script', 'blockquote', '', 'video', 'image'] // toggled buttons
]

let editorTeacher =  new Quill("#editor", {
  modules: {
    toolbar: toolbarOptions, 
  },
  theme: "snow"
})




export default editorTeacher
