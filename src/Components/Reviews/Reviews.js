import CreateImg from './CreateImg';
import './reviews.scss'

export default function Reviews(review) {
    
    return(
        review.review.results.map(f => {
            return(
                <div className='personReview'>
                    <div className='photo'>
                        <CreateImg img={f.author_details.avatar_path} />
                        <h5 className='namePerson'>
                            {f.author}
                        </h5>
                    </div>
                    <div className='contentInfo'>
                        <p className='contentPerson'>
                            {f.content}
                        </p>
                    </div>
                </div>
            )
        })
    )
}