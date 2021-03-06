import { FormEvent, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { Button } from '../../components/Button';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import '../../styles/auth.scss';
import { database } from '../../services/firebase';


const Home = () => {
  const history = useHistory();

  const { user, signInWithGoogle } = useAuth();

  const [roomCode, setRoomCode] = useState('');

  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  };

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (roomCode.trim() === '') return;

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('A sala não existe.');
      return;
    } else if (roomRef.val().closedAt) {
      alert('A sala está fechada.');
      return;
    }

    history.push(`/rooms/${roomCode}`);
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

          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo da Google" />

            Crie sua sala com a Google
          </button>

          <div className="separator">
            ou entre em uma sala
          </div>

          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />

            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}

export {
  Home
};
