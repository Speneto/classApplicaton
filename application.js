class NotesApplication{

  constructor (author) {
    //validate autor
    this.author = author;
     this.notelist = [];
  }


  /**
   * Method create
   *
   * This function takes note content and add to notelist object
  */
  create(note_content){
    this.notelist.push(note_content);
    //return this.notelist;
  }


  /**
  * Method listNote
  * This function list out note_id, the content and authors
  */
  listNote(){
    for(var i =0; i < this.notelist.length; i++ ){
      console.log('Note Id :' + i );
      console.log(this.notelist[i]);
    }
    console.log('By Author :' + this.author);

  }

  /**
  *Method getNoteId
  *This function takes in the note_id and return the note content as string
  */
  getNoteId(note_id){
    if(Math.abs(note_id) < this.notelist.length ){
      console.log(this.notelist[note_id]);
    }else{
      console.log("Note Id is Not Valid");
    }
  }


/**
*Method searchText
*This function takes in a seach text and returns all note with that text within in
*/

  searchText(search_text){
    for(var i =0; i < this.notelist.length; i++ ){
      if(this.notelist[i].includes(search_text)){
      	console.log('Showing result for search :' + '['+search_text+']');
        console.log('Note Id :' + i );
        console.log(this.notelist[i]);
        console.log('By Author :' + this.author);
      }else{
      	console.log('Search text not in search string');
      }

    }

  }


/**
*Method deleteNote
*This function takes in note_id and delete the corresponding  note from notelist
*/

  deleteNote(note_id){
    if(Math.abs(note_id) < this.notelist.length ){
      delete this.notelist[note_id];
    }else{
      console.console.log("Note Id is Not Valid");
    }
  }


/**
*Method editNote
*This function takes in note_id and a new content and replace the old one
*/
  editNote(note_id, new_content){
    if(Math.abs(note_id) < this.notelist.length  && new_content !== ""){
      this.notelist[note_id] = new_content;
    }else{
      console.log( "Note Id is Not Valid");
    }
  }

}
