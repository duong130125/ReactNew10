import React, { useCallback, useState } from 'react'

export default function B3() {
    const [selectedColor, setSelectedColor] = useState('#000000');

    const handleChangeColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(e.target.value);
      }, []);
    
    return (
        <>
        <h3>Màu người dùng chọn:</h3>
        <input
            type="color"
            value={selectedColor}
            onChange={handleChangeColor}
        />
        <p>Màu hiện thị:</p>
        <div
        style={{
            width: '100px',
            height: '100px',
            backgroundColor: selectedColor,
            border: '1px solid #000',
        }}
        ></div>
        </>
    )
}
