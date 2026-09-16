import PropTypes from 'prop-types';

const SingleView = (props) => {
  const {item, setSelectedItem} = props;

  return (
    <dialog open={item !== null}>
      <h2>{item.title}</h2>
      <p>{item.description}</p>

      {item.media_type === 'video/mp4' ? (
        <video src={item.filename} controls width="500"></video>
      ) : (
        <img src={item.filename} alt={item.title} width="500" />
      )}

      <br />

      <button onClick={() => setSelectedItem(null)}>Close</button>
    </dialog>
  );
};

SingleView.propTypes = {
  item: PropTypes.object.isRequired,
  setSelectedItem: PropTypes.func.isRequired,
};

export default SingleView;
