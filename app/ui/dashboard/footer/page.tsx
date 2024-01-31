import Image from 'next/image';
import Link from 'next/link';
import { montserrat } from '../../fonts';
export default function Footer() {
  return (
    <>
      <header
        className={`${montserrat.className} text-customGrey container mx-auto flex h-[200px] items-center justify-around font-light`}
      >
        <div>
          <ul>
            <li>
              <Image
                src={'/logojayjay.png'}
                width={130}
                height={130}
                alt=""
              ></Image>
            </li>
          </ul>
          <ul className="ml-3 mt-5 flex w-[80px] justify-between ">
            <li>
              <Image src={'/insta.png'} width={22} height={22} alt=""></Image>
            </li>
            <li>
              <Image
                src={'/whatsapp.png'}
                width={22}
                height={22}
                alt=""
              ></Image>
            </li>
            <li>
              <Image src={'/telega.png'} width={22} height={22} alt=""></Image>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="mb-4 font-normal">КОНТАКТЫ</li>
            <li>+996555732757</li>
            <li>
              <Link href="mailto:shop-b7@mail.ru">shop-b7@mail.ru</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="gap-4">
            <li className="mb-4 font-normal">АДРЕС</li>
            <li> Бишкек, ул. Горького 1г, ТЦ </li>
            <li>Ташрабат, 3 этаж, отдел С10</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col items-center">
            <li className="mb-4 font-normal">ВРЕМЯ РАБОТЫ</li>
            <li>Ежедневно с 10.00 до 20.00</li>
          </ul>
        </div>
      </header>
    </>
  );
}
