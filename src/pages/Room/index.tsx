import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';

import logoImg from '../../assets/images/logo.svg';

import '../../styles/room.scss';


const Room = () => {
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Let Me Ask" />

          <RoomCode code="123" />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala Teste</h1>

          <span>X perguntas</span>
        </div>

        <form>
          <textarea
            placeholder="O que você deseja perguntar?"
          />

          <div className="form-footer">
            <span>
              Para enviar uma pergunta, <button>faça seu login</button>.
            </span>

            <Button type="submit">
              Enviar pergunta
            </Button>
          </div>
        </form>
      </main>
    </div>
  )
};

export {
  Room
};
