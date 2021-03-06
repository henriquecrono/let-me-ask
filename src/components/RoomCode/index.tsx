import copyImg from '../../assets/images/copy.svg';

import '../../styles/roomCode.scss';


type RoomCodeProps = {
  code: string;
};

const RoomCode = (props: RoomCodeProps) => {
  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(props.code);
  };

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copiar código da sala" />
      </div>

      <span>Sala #{props.code}</span>
    </button>
  );
};

export {
  RoomCode
};
