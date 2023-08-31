import React from 'react';

const Type = ({ setPhoneCaseType }) => {

  const handleCaseType = (event) => {
    const selectedValue = event.target.value;
    setPhoneCaseType(selectedValue);
  };

  return (
    <section className='flex justify-between items-center w-full mt-4'>
      {/* HEADING */}
      <h4 className='font-bold mr-[10px]'>Select Type:</h4>

      {/* SELECTION */}
      <label for='caseType'></label>
      <select 
        name='caseType' 
        onChange={handleCaseType}
        className='border border-gray-300 w-[150px] h-[32px] text-gray-500 hover:cursor-pointer hover:bg-gray-500 hover:text-white transition'
      >
        <option value=''>Please Select</option>
        <option value='iphone-14'>iPhone 14</option>
        <option value='iphone-14-pro'>iPhone 14 Pro</option>
        <option value='iphone-14-plus'>iPhone 14 Plus</option>
        <option value='iphone-14-pro-max'>iPhone 14 Pro Max</option>
        <option value='iphone-13'>iPhone 13</option>
        <option value='iphone-13-mini'>iPhone 13 Mini</option>
        <option value='iphone-13-pro'>iPhone 13 Pro</option>
        <option value='iphone-13pro-max'>iPhone 13 Pro Max</option>
        <option value='iphone-12'>iPhone 12</option>
        <option value='iphone-12-mini'>iPhone 12 Mini</option>
        <option value='iphone-12-pro'>iPhone 12 Pro</option>
        <option value='iphone-12-pro-max'>iPhone 12 Pro Max</option>
        <option value='iphone-11'>iPhone 11</option>
        <option value='iphone-11-pro'>iPhone 11 Pro</option>
        <option value='iphone-11-pro-max'>iPhone 11 Pro Max</option>
        <option value='iphone-x'>iPhone X</option>
        <option value='iphone-xr'>iPhone XR</option>
        <option value='iphone-xs'>iPhone XS</option>
        <option value='iphone-xs-max'>iPhone XS Max</option>
        <option value='google-pixel-7'>Google Pixel 7</option>
        <option value='google-pixel-6-pro'>Google Pixel 6 Pro</option>
        <option value='google-pixel-6'>Google Pixel 6</option>
        <option value='google-pixel-5-5g'>Google Pixel 5 5G</option>
        <option value='samsung-galaxy-s23'>Samsung Galaxy S23</option>
        <option value='samsung-galaxy-s23-plus'>Samsung Galaxy S23 Plus</option>
        <option value='samsung-galaxy-s23-ultra'>Samsung Galaxy S23 Ultra</option>
        <option value='samsung-galaxy-s22'>Samsung Galaxy S22</option>
        <option value='samsung-galaxy-s22-plus'>Samsung Galaxy S22 Plus</option>
        <option value='samsung-galaxy-s22-ultra'>Samsung Galaxy S22 Ultra</option>
        <option value='samsung-galaxy'>Samsung Galaxy S21</option>
        <option value='samsung-galaxy-s21-plus'>Samsung Galaxy S21 Plus</option>
        <option value='samsung-galaxy-s21-ultra'>Samsung Galaxy S21 Ultra</option>
        <option value='samsung-galaxy-s21-fe'>Samsung Galaxy S21 FE</option>
        <option value='samsung-galaxy-s20'>Samsung Galaxy S20</option>
        <option value='samsung-galaxy-s20+'>Samsung Galaxy S20+</option>
        <option value='samsung-galaxy-s20-ultra'>Samsung Galaxy S20 Ultra</option>
        <option value='samsung-galaxy-s20-fe'>Samsung Galaxy S20 FE</option>
      </select>
    </section>
  )
};

export default Type;