export default function Page() {
  return (
    <>
      <div className="user-select-none mx-auto flex h-[200px] flex-col justify-around">
        <h1 className="text-center text-4xl font-light">Контакты</h1>
        <ul className="text-customGrey text-center font-light">
          <li>Кыргызстан, г Бишкек, ул. Горького 1г</li>
          <li>ТЦ Ташрабат, 3 этаж, отдел С10</li>
          <li>телефон/whatsapp +996 555 732 757</li>
        </ul>
      </div>
      <iframe
        className="mx-auto mt-10"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.7537479851426!2d74.61542817664672!3d42.85693257115099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb649ed4a0ae7%3A0xe210637f4f9f53dd!2z0KLQsNGI0YDQsNCx0LDRgiDQodC-0L7QtNCwINKv0LnSrw!5e0!3m2!1sru!2skg!4v1706253236369!5m2!1sru!2skg"
        width="1200"
        height="500"
        loading="eager"
      ></iframe>
    </>
  );
}
