import Image from 'next/image';
import Link from 'next/link';
export default function Footer() {
  return (
    <>
      <header className="container mx-auto flex h-[200px] items-center justify-around">
        <div className="">
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
          <ul className="flex justify-between ">
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
            <li>КОНТАКТЫ</li>
            <li>+996555732757</li>
            <li>
              <Link href="mailto:shop-b7@mail.ru">shop-b7@mail.ru</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="gap-4">
            <li>АДРЕС</li>
            <li> Бишкек, ул. Горького 1г, ТЦ </li>
            <li>Ташрабат, 3 этаж, отдел С10</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col items-center">
            <li>ВРЕМЯ РАБОТЫ</li>
            <li>Ежедневно с 10.00 до 20.00</li>
          </ul>
        </div>
      </header>
    </>
  );
}
