import Rect from 'react'
import { toast } from 'react-toastify';


interface ICard{
    content:string;
    image:string;
    title:string;
    mutedTitle?:string;
    withImage?:boolean;
    imageName?:string;
    image2?:any;
}

const Card = ({content,image,title,withImage,imageName,mutedTitle,image2}:ICard) => {

    return (
        <>
            <div className="card border-0 ">
                <img className="m-0 p-0 m-auto" src={image} width='300px' height='300px' alt="Card image cap" />
                <div className="card-body text-center">
                    <div className="card-title d-flex align-items-center card-item">
                        <h5>{title} </h5>
                        {withImage&&<small className='text-muted ml-3'>{mutedTitle}</small>}
                    </div>
                    <p className="card-text text-left card-item">{content}</p>
                    {!withImage&&<div style={{cursor:'pointer'}} onClick={() =>toast.success("Explore clicked")}  className='border-bottom w-50 py-2 card-item'>
                        <span className='font-weight-bold mr-4'>Explore page</span> 
                        <i className="fa fa-arrow-right"></i> 
                        {/* <button className="btn">Explore page<i className="fa fa-arrow-right ml-2"></i></button> */}

                    </div>}
                    {
                        withImage &&
                        <div className="d-flex align-items-center card-item">
                            <img src={image2} width="10%" className="align-self-center rounded-circle mr-2"  /> 
                                <small style={{fontSize:'10px'}}>{imageName}</small>
                        </div>

                    }
                </div>
            </div>
        </>

    )



}


export default Card;