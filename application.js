class NotesApplication{
  //var notelist = [];

  constructor (author) {
    //validate autor
    this.author = author;
     this.notelist = [];
  }
  /**
   * function to take note content and add to notelist object
  */
  create(note_content){
    this.notelist.push(note_content);
    //return this.notelist;
  }


  /**
  * This function list out note id, note and authors
  */
  listNote(){
    for(var i =0; i < this.notelist.length; i++ ){
      console.log('Note Id :' + i );
      console.log(this.notelist[i]);
    }
    console.log('By Author :' + this.author);

  }

  /**
  *This function takes the note id and return the note content as string
  */
  getNoteId(note_id){
    if(Math.abs(note_id) < this.notelist.length ){
      return this.notelist[note_id];
    }else{
      return "Note Id is Not Valid";
    }
  }


/**
*This function takes in a seach text and returns all note with that text within in
*/

  searchText(search_text){
    for(var i =0; i < this.notelist.length; i++ ){
      if(notelist.indexOf("search_text") >= 0){
        console.log('Showing result for search :' + '['+search_text+']' );
        console.log('Note Id :' + i );
        console.log(this.notelist[i]);
        console.log('By Author :' + this.author);
      }

    }

  }


/**
*This function delete the note from notelist that has its index passed
*/

  deleteNote(note_id){
    if(Math.abs(note_id) < this.notelist.length ){
      delete this.notelist[note_id];
    }else{
      return "Note Id is Not Valid Please Enter a valid Note Id";
    }
  }


/**
*This function replace the content of note with new one at note_id
*/
  editNote(note_id, new_content){
    if(Math.abs(note_id) < this.notelist.length  && new_content !== ""){
      this.notelist[note_id] = new_content;
    }else{
      return "Note Id is Not Valid Please Enter a valid Note Id and Content Must not be Empty";
    }
  }

}
