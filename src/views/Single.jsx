import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const navigate = useNavigate();

  const item = state.item;

  return (
    <>
      <h2>{item.title}</h2>

      <p>{item.description}</p>

      {item.media_type === 'video/mp4' ? (
        <video src={item.filename} controls width="500"></video>
      ) : (
        <img src={item.filename} alt={item.title} width="500" />
      )}

      <br />

      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};

export default Single;
