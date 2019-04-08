// DOM-Document Object Model
const notes = getSavedNotes()

const filters = {
  searchText: ''
}
saveNotes(notes)
renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
  notes.push({
    title: '',
    body: ''
  })
  
  renderNotes(notes, filters)
})

 document.querySelector('#search-text').addEventListener('input', function(e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})













