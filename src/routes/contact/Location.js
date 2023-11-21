
//Leaflet
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;
const position = [40.926939,29.3163644];
const Location = () => {
    return (
        <article className="location">
            <h3> <span className="highlight-title">Şirketlerimiz</span></h3>
            <section className="location-content">
                <section className="locations-list">
                    <section>
                        <h4>
                            Pendik
                        </h4>
                        <p>
                             Sanayi, Teknopark Blv No: 1 D:9A, 34906 Pendik/İstanbul
                        </p>
                        <a target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/7Mcr8npJNAxFdndy8">Haritayı görüntüle</a>
                    </section>
                    <section>
                        <h4>
                            Ümraniye
                        </h4>
                        <p>
                             Dudullu OSB Mah DES 2. Caddesi No:D:8, 34776 Ümraniye/İstanbul
                        </p>
                        <a target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/B5JzDfkpRf5YmZsN8">Haritayı görüntüle</a>
                    </section>
                    <section>
                        <h4>
                            Esenler
                        </h4>
                        <p>
                          Yıldız Teknopark, Yıldız Teknik Üniversitesi, Davutpaşa Kampüsü, 34220 Esenler/İstanbul
                        </p>
                        <a target="_blank" rel="noreferrer" href="https://maps.app.goo.gl/xpWsnedmb78ov8Yi6">Haritayı görüntüle</a>
                    </section>
                </section>
                <section className="map">
                    <MapContainer
                        id="map"
                        center={position}
                        zoom={8}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </section>
            </section>
        </article>
    )
}

export default Location;