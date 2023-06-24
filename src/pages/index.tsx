import Head from 'next/head';

import styles from './home.module.scss';
import { MapPin, CaretDown } from "phosphor-react"

export default function Home() {
  function handleButtonLink(link: string) {
    window.location.href= link
  }

  return (
    <div className={styles.container} >
    <Head>
      <title>Links | Dra.Mariana Romão</title>
    </Head>

    <h3>Agendamentos</h3>

      <button
        type="button"
        className={styles.button}
        onClick={() => handleButtonLink('https://wa.me/5548991572774?text=Ol%C3%A1%2C+gostaria+de+agendar+um+exame+com+a+Dra+Mariana%C2%A0Rom%C3%A3o%21')}
      >
        Clínica Romão
        <span> 
          <MapPin size={20} color='#D90000' />
          Criciúma - GastroSlim
        </span>
      </button>

      <button
        type="button"
        className={styles.button}
        onClick={()=> handleButtonLink('https://wa.me/5548996381218?text=Ol%C3%A1%2C+gostaria+de+agendar+um+exame+com+a+Dra+Mariana%C2%A0Rom%C3%A3o%21')}
      >
      Clínica Romão
      <span> 
      <MapPin size={20} color='#D90000' />
        Araranguá - Ostermann
      </span>
      </button>

    <div className={styles.separator} > <CaretDown size={50} color="#FFF"/> </div>

    
  </div>
  )
}
