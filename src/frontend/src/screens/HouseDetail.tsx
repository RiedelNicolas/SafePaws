import { useParams } from 'react-router-dom';
import { HouseGallery } from '../components/HouseGallery';
import { Publications, getHomeWithEmail } from '../components/ListOfHomes/getHomes';
import { useEffect, useState } from 'react';

export const HouseDetail = () => {

  const { email } = useParams();
  // const [publication, setPublication] = useState<Publications>()

  // const fetchHomes = async () => {
  //   if (email) {
  //     const publication = await getHomeWithEmail(email);
  //     setPublication(publication);
  //   }
  // }

  // useEffect(() => {
  //   fetchHomes();
  // }, [])

  if (!email) {
    return <div>404</div>
  }

  return (
    <div className="p-8" style={{ display: "flex", justifyContent: "center" }}>
      <div className='w-full rounded-3xl bg-white border-4 border-gray-100'>

        <div style={{ display: "flex", justifyContent: "center" }} className="mt-12 mb-12">
          <div className="w-3/4 h-1/2">

            <div className="text-center">
              <div className="text-4xl font-bold">Villa in Croacia</div>
              <div className="text-2xl font-light text-neutral-500 mt-2">Europe, Croatia</div>
            </div>

            <div className="mt-8">
              <HouseGallery />
            </div>

            <div className="mt-8 w-1/2">
              <div className="text-start">
                <div className="text-2xl font-bold">Description</div>
                <div className="font-light text-neutral-500 mt-2">
                  ¡Bienvenido a nuestro alojamiento en Croacia con impresionantes vistas al lago!

                  Nuestro alojamiento está situado en un lugar idílico, en las hermosas tierras de Croacia, rodeado de la majestuosidad de un lago de aguas cristalinas. Este lugar ofrece una escapada perfecta para aquellos que buscan relajarse y disfrutar de la naturaleza en su máximo esplendor.

                  El alojamiento en sí es una encantadora villa o cabaña, construida con materiales tradicionales que se integran perfectamente con el entorno natural. Cada detalle ha sido cuidadosamente diseñado para proporcionar comodidad y hacer que los huéspedes se sientan como en casa.

                  Al entrar, serás recibido por una espaciosa y acogedora sala de estar, decorada con tonos cálidos y muebles confortables. Desde aquí, podrás contemplar las impresionantes vistas al lago a través de grandes ventanales que permiten que la luz natural inunde el espacio.

                  La cocina está completamente equipada con todo lo necesario para preparar deliciosas comidas. Ya sea que desees disfrutar de un desayuno tranquilo con vistas al lago o preparar una cena romántica, encontrarás todo lo que necesitas a tu disposición.

                  El alojamiento cuenta con varias habitaciones exquisitamente decoradas, cada una con su propio encanto y personalidad. Las camas son cómodas y están vestidas con sábanas suaves y acogedoras, garantizando una buena noche de sueño después de un día lleno de actividades.

                  Pero sin duda, la joya de este alojamiento es su amplio balcón o terraza con vista al lago. Aquí podrás relajarte en cómodos asientos mientras disfrutas de la serenidad del paisaje. Ya sea que prefieras contemplar el amanecer sobre las tranquilas aguas del lago o maravillarte con un impresionante atardecer, esta vista panorámica te dejará sin aliento.

                  Además, para aquellos que deseen explorar la zona, hay numerosas actividades disponibles cerca del alojamiento. Podrás disfrutar de paseos en bote por el lago, practicar deportes acuáticos emocionantes o simplemente dar un paseo por los senderos que rodean el lugar.

                  En resumen, nuestro alojamiento en Croacia con vista al lago es un refugio perfecto para aquellos que buscan una experiencia tranquila y relajante en medio de la naturaleza. Con su encanto tradicional, comodidades modernas y vistas impresionantes, estamos seguros de que será una estancia inolvidable.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
