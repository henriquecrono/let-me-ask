import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';


function Home() {
  return (
    <div>
      <aside>
        <img src={illustrationImg} alt="Ilustração pergunta e resposta" />

        <strong>Crie salas de Q&amp;A ao-vivo</strong>

        <p>Tire as dúvidas de sua audiência em tempo real</p>
      </aside>

      <main>
        <div>
          <img src={logoImg} alt="Let Me Ask" />

          <button>
            <img src={googleIconImg} alt="Logo da Google" />

            Criei sua sala com a Google
          </button>

          <div>
            ou entre em uma sala
          </div>

          <form >
            <input
              type="text"
              placeholder="Digite o código da sala"
            />

            <button type="submit">
              Entrar na sala
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export {
  Home
};
