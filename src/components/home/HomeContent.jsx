import Image from 'next/image';
import oliver from '../../assets/banners/oliver-pecker.png';

export default function HomeContent() {
  return (
    <>
      <section className="home-content">
        <aside>
          <Image src={oliver} alt="Oliver Prcker" />
        </aside>

        <section className="story">
          <h1>Watches for entrepreneurs</h1>

          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because.
            <br /> <br />
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because.
          </p>
        </section>
      </section>
    </>
  );
}
