import Usuario from './guest.png';

export default function CreateImg({img}) {
    
    let photo;

    if(img){
        if(img.indexOf('/https')){
            photo = 'https://image.tmdb.org/t/p/original' + img;
        }
        else{
            photo = Usuario;
        }
    }
    else{
        photo = Usuario;
    }

    return(
        <img className='usuarioReview' src ={photo} alt='' height='200px' width='200px'/>
    )
}