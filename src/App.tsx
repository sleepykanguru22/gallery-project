import styles from './App.module.scss';
import pic from './assets/starry-night/gallery.jpg';
import { data } from './data';
function App() {
    return (
        <div className={styles.App}>
            <ol>
                {data.data.map((name) => (
                    <li key={name.name}>{name.name}</li>
                ))}
            </ol>
            <div>
                {data.data.map((name) => (
                    <li>{name.artist.name}</li>
                ))}
            </div>
            <img src={pic} alt="" />
        </div>
    );
}

export default App;
