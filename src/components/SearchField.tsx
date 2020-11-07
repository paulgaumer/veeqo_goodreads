import React from 'react'
import { DebounceInput } from 'react-debounce-input';

interface IProps {
  inputValue: string,
  radioValue: string,
  placeholder?: string
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchField = ({ inputValue, radioValue, onInputChange, onRadioChange, placeholder }: IProps) => {

  return (
    <div>
      <DebounceInput
        debounceTimeout={300}
        value={inputValue}
        placeholder={placeholder}
        onChange={onInputChange} />

      <div className="flex space-x-3">
        <div className="flex justify-center items-center space-x-1">
          <input id="title" value="title" name="search-type" type="radio" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer" checked={radioValue === "title"} onChange={onRadioChange} />
          <label htmlFor="title">title</label>
        </div>
        <div className="flex justify-center items-center space-x-1">
          <input id="author" value="author" name="search-type" type="radio" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer" checked={radioValue === "author"} onChange={onRadioChange} />
          <label htmlFor="author">author</label>
        </div>
        <div className="flex justify-center items-center space-x-1">
          <input id="isbn" value="isbn" name="search-type" type="radio" className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer" checked={radioValue === "isbn"} onChange={onRadioChange} />
          <label htmlFor="isbn">isbn</label>
        </div>
      </div>
    </div>
  )
}

export default SearchField
