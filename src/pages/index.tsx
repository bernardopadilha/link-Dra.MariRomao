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

      <button
        type="button"
        className={styles.button}
        onClick={() => handleButtonLink('https://api.whatsapp.com/send?phone=5548991572774&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dr.Mariana%C2%A0Rom%C3%A3o%F0%9F%91%A9%F0%9F%8F%BC%E2%80%8D%E2%9A%95%0A')}
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
        onClick={()=> handleButtonLink('https://api.whatsapp.com/send?phone=5548996381218&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dr.Mariana%C2%A0Rom%C3%A3o%F0%9F%91%A9%F0%9F%8F%BC%E2%80%8D%E2%9A%95%0A')}
      >
      Clínica Romão
      <span> 
      <MapPin size={20} color='#D90000' />
        Criciúma - Ostermann
      </span>
      </button>

    <div className={styles.separator} > <CaretDown size={50} color="#FFF"/> </div>

    <footer>
      <h2>Obrigado!</h2>
      <span>@romaoclinica</span>
    </footer>
  </div>
  )
}
