// src/pages/Contacts.jsx
function Contacts() {
    return (
        <div>
            <h1>Контакти</h1>
            <p>Якщо у вас є питання або ви хочете зв'язатися зі мною, будь ласка, використовуйте одну з наступних форм зв'язку:</p>
            <ul>
                <li>Email: <a href="mailto:example@example.com">example@example.com</a></li>
                <li>Телефон: +123456789</li>
                <li>Адреса: Вулиця ІТ-майдан, 10, Київ, Україна</li>
            </ul>
            <p>Ми також доступні в соціальних мережах:</p>
            <ul>
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
        </div>
    );
}

export default Contacts;
