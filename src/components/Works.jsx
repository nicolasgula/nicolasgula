import ContainerCards from "./ContainerCards"

const title = {
  title: "Trabajos",
  subtitle: "25 de Marzo de 2022 - 6:22 AM"
}

function Works() {
  return (
    <div className="displaySection adjustPage">
      <div className='containerTitleBlack'>
        <h1 id='title'>{title.title}</h1>
        <h2 id='subTitle'>{title.subtitle}</h2>
      </div>
      <ContainerCards />
    </div>
  )
}

export default Works