import "../Services.css";
import "../../../App.css";
import Material from "./Material";


let ServicesMaterial = (props) => {
    return (
        <div className="ServicesMaterial">
           {
            props.state.materials.map((material) => (
                <Material name = {material.name} image = {material.image} id = {material.id} key = {material.id}/>
            )
            )
           }
        </div>
    )
}


export default ServicesMaterial;