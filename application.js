class NotesApplication(){
  let notelist = [];
  constructor (author) {
    //validate autor
    this.author = author;
  }
  /**
   * function to take note content and add to notelist object
  */
  create(note_content){
    notelist.push(note_content);
  }


  /**
  * This function list out note id, note and authors
  */
  listNote(){
    for(var i =0; i < notelist.length; i++ ){
      console.log('Note Id :' + i );
      console.log(notelist[i]);
    }
    console.log('By Author :' + this.author);

  }

  /**
  *This function takes the note id and return the note content as string
  */
  getNoteId(note_id){
    if(Math.abs(note_id) < notelist.length ){
      return notelist[note_id];
    }else{
      return "Note Id is Not Valid";
    }
  }


/**
*This function takes in a seach text and returns all note with that text within in
*/

  searchText(search_text){
    for(var i =0; i < notelist.length; i++ ){
      if(notelist.indexOf("search_text") >= 0){
        console.log('Note Id :' + i );
        console.log(notelist[i]);
        console.log('By Author :' + this.author);
      }

    }

  }


/**
*This function delete the note from notelist that has its index passed
*/

  deleteNote(note_id){
    if(Math.abs(note_id) < notelist.length ){
      delete notelist[note_id];
    }else{
      return "Note Id is Not Valid";
    }
  }


/**
*This function replace the content of note with new one at note_id
*/
  editNote(note_id, new_content){
    if(Math.abs(note_id) < notelist.length  && new_content != ""){
      notelist[note_id] = new_content;
    }else{
      return "Note Id is Not Valid";
    }
  }

}
