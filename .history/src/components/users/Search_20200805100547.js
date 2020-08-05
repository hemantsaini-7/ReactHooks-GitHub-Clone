import React, { useState } from "react";

//Removal of this keyword
//addition of const while making function
//use of arrow to avoid bind()
//removal of this.setState() ==> Just call setText(pass the changed value)
//removal of this.state.text ==> text
//that this.props convertinto just props in function and that too we destructure on top

const Search =()=>{
  const [text, setText]=useState('')

  const onChange = (e) => {
    setText(e.target.value)
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      this.props.setAlert("Please Enter Something..!!", "light");
    } else {
      this.props.searchUsers(text);
      setText('')
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users'
            value={text}
            onChange={onChange}
            autoComplete='off'
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>

        {this.props.showClear && (
          <button
            className='btn btn-light btn-block'
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
