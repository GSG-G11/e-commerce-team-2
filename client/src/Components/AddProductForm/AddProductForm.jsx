import Button from '../Button/Button';
import Input from '../Input/Input';
import Select from '../Select/Select';
import './AddProductForm.css';

const AddProductForm = ({ handleOnClick }) => {
  return (
    <div className="modal" >
      <div className='container'>
      <i className="fa-solid fa-xmark icon" onClick={handleOnClick}></i>
        < Input inputType='text' placeholderText='Enter Product Name' />
        < Input inputType='text' placeholderText='Enter Product Description' />
        < Input inputType='url' placeholderText='Enter Product image URL' />
        < Input inputType='number' placeholderText='Enter Product Price' />
        <Select isAdd ={ true }/>
        <Button text='Submit' />
      </div>
    </div>
  )
}

export default AddProductForm;