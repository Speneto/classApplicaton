class NotesApplication(){
  let noteList = [];
  constructor (autor) {
    //validate
    this.autor = autor;

  /**
   * function to take note content and add to notelist object
  */
  create(note_content){
    noteList.push(note_content);
  }


  /**
  * This function list out note id, note and authors
  */
  listNote(){
    for(var i =0; i < notelist.length; i++ ){
      console.log('Note Id :' + i );
      console.log(notelist[i]);
    }
    consol.log('By Autho :' + this.autor);

  }

  /**
  *This function takes the note id and return the note content as string
  */
  get(note_id){
      
  }

}

