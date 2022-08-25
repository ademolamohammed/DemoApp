import Rect from 'react'


interface ICard{
    content:string;
    image:string;
    title:string;
}

const Card = ({content,image,title}:ICard) => {

    return (
        <>
            <div className="card border-0 ">
                <img className="m-0 p-0" src={image} width='300px' height='300px' alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <div className='border-bottom w-50 py-2'>
                        <span className='font-weight-bold mr-4'>Explore page</span>
                        <i className="fa fa-arrow-right"></i>

                    </div>
                </div>
            </div>
        </>

    )



}


export default Card;