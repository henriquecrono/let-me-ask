import { FormEvent, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { database } from '../../services/firebase';

import { useAuth } from '../../hooks/useAuth';

import { Button } from '../../components/Button';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import '../../styles/auth.scss';


const NewRoom = () => {
  const { user } = useAuth();

  const history = useHistory();

  const [newRoomName, setNewRoomName] = useState('');

  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (newRoomName.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoomName,
      authorId: user?.id
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  };

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração perguntas e respostas" />

        <strong>Crie salas de Q&amp;A ao-vivo</strong>

        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="Let Me Ask" />

          <h1>
            {user?.name}
          </h1>

          <h2>
            Crie sua nova sala
          </h2>

          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={event => setNewRoomName(event.target.value)}
              value={newRoomName}
            />

            <Button type="submit">
              Criar sala
            </Button>
          </form>

          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}

export {
  NewRoom
};
