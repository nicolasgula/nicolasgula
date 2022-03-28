//COMPONENTES
import ImgPost from './ImgPost';

function Parragraph({ title, content, img }) {
    
    return (
        <section className="parragraphs">
            <h3 className='subtitlesPost'>{title}</h3>
            <p>{content}</p>
            {img.map((img, idx) => <ImgPost key={idx} img={img} />)}
        </section>
    )
}

export default Parragraph