import React from 'react'
import { DebounceInput } from 'react-debounce-input';

interface IProps {
  inputValue: string,
  radioValue: string,
  placeholder?: string
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchFields = ({ inputValue, radioValue, onInputChange, onRadioChange, placeholder }: IProps) => {
  return (
    <div className="inline-flex flex-col w-1/2 px-8 py-8 space-y-3 bg-white rounded-lg shadow-lg">
      <DebounceInput
        debounceTimeout={300}
        value={inputValue}
        placeholder={placeholder}
        onChange={onInputChange}
        className="block w-full form-input sm:text-sm sm:leading-5"
      />

      <div className="flex space-x-3 text-sm">
        <div className="flex items-center justify-center space-x-1">
          <input id="title" value="title" name="search-type" type="radio" className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer form-radio" checked={radioValue === "title"} onChange={onRadioChange} />
          <label htmlFor="title">title</label>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <input id="author" value="author" name="search-type" type="radio" className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer form-radio" checked={radioValue === "author"} onChange={onRadioChange} />
          <label htmlFor="author">author</label>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <input id="isbn" value="isbn" name="search-type" type="radio" className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer form-radio" checked={radioValue === "isbn"} onChange={onRadioChange} />
          <label htmlFor="isbn">isbn</label>
        </div>
      </div>
    </div>
  )
}

export default SearchFields