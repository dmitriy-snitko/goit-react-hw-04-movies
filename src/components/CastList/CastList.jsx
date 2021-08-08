import noImage from '../../images/noImage.png';

export default function CastList({ actors }) {
  return (
    <ul>
      {actors.map(actor => (
        <li key={actor.id}>
          {actor.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w342${actor.profile_path}`}
              alt=""
            />
          ) : (
            <img src={noImage} alt="" />
          )}
          <p>{actor.name}</p>
        </li>
      ))}
    </ul>
  );
}
