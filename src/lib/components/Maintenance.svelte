<script>
  const contacts = {
    phone: '+7 (912) 815-95-44',
    phoneLink: '+79128159544',
    email: 'info@spectech-surgut.ru',
    address: 'г. Сургут, ул. Иосифа Каролинского, д. 9',
    company: 'ИП Мастеров Денис Иванович',
    inn: '8602026226',
    ogrnip: '313860224700058'
  };
</script>

<div class="maintenance">
  <div class="maintenance__card">
    <div class="maintenance__icon">🛠️</div>
    <h1>Сайт на техническом обслуживании</h1>
    <p class="maintenance__lead">
      Проводим плановое обслуживание сайта, чтобы сделать его быстрее и удобнее.
      Пожалуйста, загляните позже.
    </p>

    <div class="maintenance__contacts">
      <h2>Связаться с нами</h2>
      <ul>
        <li>
          <span class="contact__icon">📞</span>
          <a href="tel:{contacts.phoneLink}">{contacts.phone}</a>
        </li>
        <li>
          <span class="contact__icon">✉️</span>
          <a href="mailto:{contacts.email}">{contacts.email}</a>
        </li>
        <li>
          <span class="contact__icon">📍</span>
          <span>{contacts.address}</span>
        </li>
      </ul>
    </div>

    <div class="maintenance__requisites">
      <p>{contacts.company}</p>
      <p>ИНН: {contacts.inn} · ОГРНИП: {contacts.ogrnip}</p>
    </div>
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
  }

  .maintenance {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    background: linear-gradient(135deg, #1a3a52 0%, #2c5f7f 100%);
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    color: #333;
  }

  .maintenance__card {
    background: #fff;
    max-width: 560px;
    width: 100%;
    padding: 48px 40px;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    text-align: center;
  }

  .maintenance__icon {
    width: 96px;
    height: 96px;
    margin: 0 auto 24px;
    background: #f0a500;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 44px;
  }

  h1 {
    margin: 0 0 16px;
    font-size: 1.5rem;
    color: #1a3a52;
  }

  .maintenance__lead {
    color: #666;
    font-size: 1rem;
    line-height: 1.6;
    margin: 0 0 28px;
  }

  /* Контакты */
  .maintenance__contacts {
    border-top: 1px solid #eee;
    padding-top: 24px;
  }

  .maintenance__contacts h2 {
    font-size: 1.1rem;
    color: #1a3a52;
    margin: 0 0 16px;
  }

  .maintenance__contacts ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .maintenance__contacts li {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 0.95rem;
    color: #555;
  }

  .contact__icon {
    font-size: 1.1rem;
    flex-shrink: 0;
  }

  .maintenance__contacts a {
    color: #2c5f7f;
    text-decoration: none;
    font-weight: 600;
  }

  .maintenance__contacts a:hover {
    text-decoration: underline;
  }

  /* Реквизиты */
  .maintenance__requisites {
    margin-top: 28px;
    padding-top: 20px;
    border-top: 1px solid #eee;
    font-size: 0.8rem;
    color: #999;
  }

  .maintenance__requisites p {
    margin: 2px 0;
  }

  /* Адаптивность */
  @media (max-width: 480px) {
    .maintenance__card {
      padding: 32px 24px;
      border-radius: 8px;
    }

    h1 {
      font-size: 1.3rem;
    }

    .maintenance__icon {
      width: 72px;
      height: 72px;
      font-size: 36px;
    }
  }
</style>
