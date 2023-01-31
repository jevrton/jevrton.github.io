import React from 'react'

import './Intro.css'

const Intro = () => {
  return (
    <div class="row">
        <div className="col-md-6">
          <img src="src/assets/person_placeholder.jpg"></img>
        </div>
        <div className="col-md-6">
          <h2>Jeverton Luis da Silva</h2>
          <p>Um garoto de 18 anos, que ama programação e todas as tecnologias que a envolve.<br />
          Muitas <span className="emphasis">habilidades</span> aprendidas, <span className="emphasis">experiências</span> únicas vividas e <span className="emphasis">aprendizados</span> levados para toda a vida</p>
        </div>
    </div>
  )
}

export default Intro