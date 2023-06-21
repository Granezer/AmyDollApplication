// import React from 'react'

const BookSession = () => {
  return (
    <div>
        <div>BookSession</div>
        <form action="">
            <div><input type="text" name="clientName" id="clientName" /></div>
            <div><input type="tel" name="PhoneNumber" id="PhoneNumber" /></div>
            <div><input type="date" name="date" id="date" /></div>
            <div><input type="time" name="time" id="time" /></div>
            <div>
                <select name="category" id="category">
                    <option value="product">Products</option>
                    <option value="spa">Spa</option>
                    <option value="saloon">Saloon</option>
                    <option value="pedicure">pedicure & Medicure</option>
                </select>
            </div>
            <div><button type="submit" name="submit" id="submit"></button></div>
        </form>
    </div>
  )
}

export default BookSession