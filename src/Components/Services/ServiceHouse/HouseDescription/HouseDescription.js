import "./HouseDescription.css";
import "../../../../App.css";
import { useState } from "react";
import React from "react";


let HouseDescription = (props) => {

   const [edit, setEdit] = useState(false)

   const [image, setImage] = useState(null);


   const newHouseName = React.useRef();
   const newHouseDescription = React.useRef();
   const newImage = React.useRef();


    let updateNewHousesText = async () => {
        props.updateNewHousesText(newHouseName.current.value, newHouseDescription.current.value, image)
    }


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setImage(file);
        const reader = new FileReader();
        reader.onloadend = () => {

            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
 
                const MAX_WIDTH = 271;
                const MAX_HEIGHT = 305;
 
                let width = img.width;
                let height = img.height;
 
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
 
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
 
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0, width, height);
 
                canvas.toBlob((blob) => {
                    setImage(blob);
                    props.updateNewHousesText(newHouseName.current.value, newHouseDescription.current.value, URL.createObjectURL(blob));
                }, file.type);
            };
            img.src = reader.result;
        };
        reader.readAsDataURL(file);
    };

    let saveChanges = () => {
        const updatedHouseData = {
            ...props.oneHouse,
            name: newHouseName.current.value,
            description: newHouseDescription.current.value,
            image
        };
        props.saveChanges(props.oneHouse.id, updatedHouseData)
        changeEdit()
    }

    let changeEdit = () => {
        edit ? setEdit(false) : setEdit(true)
    }

    return (
        <div className="HouseDescription">
           
            <div className="container">
                <div className="houseWrapper">
                    
                    <img src={image ? URL.createObjectURL(image) : (props.oneHouse && props.oneHouse.image ? props.oneHouse.image : "./images/default.jpg")} alt="House" />
                    
                    {
                        edit ? (
                            <div>
                                <h1>Дом <input type="text" ref={newHouseName} value={props.housesPage.newHouseName} onChange={updateNewHousesText}/></h1>
                                <p>Описание: <input type="text" ref={newHouseDescription} value={props.housesPage.newHouseDescription} onChange={updateNewHousesText}/></p>
                                <input type="file" ref={newImage} onChange={handleImageUpload} accept="image/*"/>
                            </div>
                        ) :
                        (
                            <div>
                                <h1>Дом {props.oneHouse.name}</h1>
                                <p>Описание: {props.oneHouse.description}</p>
                            </div>
                        )
                    }
                    {
                        edit ? (
                            <div>
                                <button onClick={saveChanges}>Сохранить</button>
                                <button onClick={changeEdit}>Отмена</button>
                            </div>
                        ):
                        <button onClick={changeEdit}>Редактировать</button>
                    }
                    
                </div>
            </div>
            
        </div>
    )
}

export default HouseDescription;