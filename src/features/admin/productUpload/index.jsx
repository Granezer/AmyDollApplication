import {useState} from 'react';
import './styles/ProductUpload.css';
import {TextField, Button} from '@mui/material';
import {createProductUrl} from '../../../api/Api';
import axios from 'axios';

const ProductUpload = () => {
  const initialValue = {
    name: '',
    price: '',
    salesPrice: '',
    description: '',
    image: null,
  };
  const [value, setValue] = useState (initialValue);

  const handleImageChange = event => {
    const file = event.target.files[0];
    setValue (prevState => ({
      ...prevState,
      image: file,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault ();
    try {
      const formData = new FormData ();
      formData.append ('name', value.name);
      formData.append ('price', value.price);
      formData.append ('salesPrice', value.salesPrice);
      formData.append ('description', value.description);
      if (value.image) {
        formData.append ('image', value.image);
      } else {
        alert ('No image selected');
      }

      const response = await axios.post (createProductUrl, formData);
      if (response.status === 200) {
        setValue (initialValue);
      } else {
        alert('Product upload failed');
      }
    } catch (error) {
      // alert ('Product upload failed:', error);
    }
  };

  const handleSelectImage = () => {
    return (
      <div>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
      </div>
    );
  };

  const handleChange = e => {
    setValue (prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="product-contain">
      <div className="product-upload-container">
        <p>Product Upload</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={value.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={value.price}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="salesPrice">Sales Price:</label>
            <input
              type="number"
              id="salesPrice"
              name="salesPrice"
              value={value.salesPrice}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <TextField
              id="description"
              name="description"
              placeholder="Write your message here"
              multiline
              rows={6}
              value={value.description}
              onChange={handleChange}
              sx={{
                width: '105%',
                border: '0.25px solid #d8d8d8',
                borderRadius: '4px',
                color: '#606060',
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image" className="file-input-label">
              {value.image ? 'Image Selected' : 'Select Image'}
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="image">
            </label>
            <Button onClick={handleSelectImage} sx={{ color: 'transparent', height: '2px !important' }}>
              {value.image ? 'Image Selected' : 'Select Image'}
            </Button>
          </div>
          <Button className="uploadSubmit" type="submit">
            Upload
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ProductUpload;
