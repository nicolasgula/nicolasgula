//ESTILOS
import '../scss/section.scss';

function LinkContact({ url, icon }) {
  return (
      <li >
        {url.includes('@') ?
          <a onClick={() => window.location = 'mailto:' + url} target="_blank"><img  id='icon' src={"/assets/"+ icon + ".svg"} /></a>:
        <a href={url} target="_blank" rel="noopener noreferrer"><img  id='icon' src={"/assets/"+ icon +".svg"}/></a>
        }
      </li>
    
  )
}

export default LinkContact