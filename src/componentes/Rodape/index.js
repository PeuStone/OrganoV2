import './Rodape.css'

const Rodape = () => {
    return(
        <footer className='footer'>
            <section>
            <ul>
                <li>
                    <a href='facebook.com' target='_blank'> <img src="/imagens/fb.png" alt='Facebook'></img></a>
                </li>
                <li>
                    <a href='twitter.com' target='_blank'> <img src="/imagens/tw.png" alt='Twitter'></img></a>
                </li>
                <li>
                    <a href='Instagram.com' target='_blank'> <img src="/imagens/ig.png" alt='Instagram'></img></a>
                </li>
            </ul>
            </section>

            <section>
            <img src='/imagens/logo.png' alt='Logo da Organo' />
            </section>

            <section>
                <p>Desenvolvido por Alura.</p>
            </section>

        </footer>
    )
}

export default Rodape