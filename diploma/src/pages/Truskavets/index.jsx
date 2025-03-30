import { Footer, Header, PageLayout } from '@components';
import { Box, Typography, TextField, Button, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useState } from 'react';

export function Truskavets() {
  const [checkInDate, setCheckInDate] = useState(dayjs());
  const [checkOutDate, setCheckOutDate] = useState(dayjs().add(1, 'day'));
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [roomType, setRoomType] = useState('standard');
  const [rooms, setRooms] = useState(1); // Додано для кількості кімнат

  const handleBooking = () => {
    if (!name || !email || !phone) {
      alert('Будь ласка, заповніть всі поля перед бронюванням.');
      return;
    }

    alert(`Дякуємо, ${name}! Ви забронювали ${rooms} номер(и) типу ${roomType} з ${checkInDate.format('YYYY-MM-DD')} по ${checkOutDate.format('YYYY-MM-DD')}.\nКількість дорослих: ${adults}, Кількість дітей: ${children}.`);
  };

  const handleToggleForm = () => {
    if (showForm) {
      setName('');
      setEmail('');
      setPhone('');
      setCheckInDate(dayjs());
      setCheckOutDate(dayjs().add(1, 'day'));
      setRoomType('standard');
      setRooms(1); // Скидаємо кількість кімнат при закритті форми
    }
    setShowForm(!showForm);
  };

  return (
    <PageLayout
      renderHeader={() => <Header />}
      renderContent={() => (
        <Box sx={{
          backgroundImage: 'url(https://zahidkurort.com.ua/wp-content/themes/kurort/cache/7f/747b876770de47f_1013x532.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: 3,
        }}>
          <Typography variant="h1" color='red'>Truskavets</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: 600, marginBottom: 2 }}>
            <Button variant="contained" color="info" onClick={() => setShowInfo(!showInfo)}>
              {showInfo ? 'Сховати інформацію' : 'Інформація про готель'}
            </Button>
            <Button variant="contained" color="success" onClick={handleToggleForm}>
              {showForm ? 'Сховати бронювання' : 'Забронювати номер'}
            </Button>
          </Box>
          {showInfo && (
            <Typography paragraph color="blue"
            sx={{
              backgroundColor: 'white',
              padding: 2,
              borderRadius: 2,
              }}>
              Якщо ви шукаєте готель, в якому можна відпочити з королівським розмахом за відносно невеликі гроші, то «Золота корона» - саме те, що потрібно.
              З якою метою ви б не приїхали до Трускавця, у «Золотій короні» на вас чекатимуть 32 номери, оформлені в стилі ар-нуво. 8 номерів – дворівневі та належать до категорії «Люкс»: у них 2 санвузли, джакузі, гідробокс, інфрачервона сауна. 18 номерів «Стандарт» з двоспальними ліжками та 6 з роздільними односпальними ліжками не менш затишні та обставлені новими комфортними меблями.
              У вартість проживання в номерах входить сніданок, причому ви зможете обирати між кількома варіантами: американським, англійським, континентальним і т.д.
              «Золота корона» - це не тільки готель, а й ресторан при ньому, що тішить вишуканістю кухні. Після обіду в ресторані особливо корисно попити мінеральної води, благо, від готелю до центрального бювету не більше 15 хвилин пішки. А якщо ви захочете вирушити в подорож Західною Україною, то і з цим проблем не буде: поруч знаходиться екскурсійне бюро.
            </Typography>
          )}

          {showForm && (
            <Box sx={{ backgroundColor: 'grey', borderRadius: 2, padding: 3, display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, marginTop: 2, color: 'black' }}>
              <TextField label="Ім'я" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
              <TextField label="Email" type="email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
              <TextField label="Телефон" type="tel" fullWidth value={phone} onChange={(e) => setPhone(e.target.value)} />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Дата заїзду" value={checkInDate} onChange={(newValue) => setCheckInDate(newValue)} fullWidth />
                <DatePicker label="Дата виїзду" value={checkOutDate} onChange={(newValue) => setCheckOutDate(newValue)} fullWidth />
              </LocalizationProvider>

              <FormControl fullWidth>
                <InputLabel>Кількість дорослих</InputLabel>
                <Select
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  label="Кількість дорослих"
                >
                  {[...Array(10)].map((_, index) => (
                    <MenuItem key={index} value={index + 1}>
                      {index + 1} {index + 1 === 1 ? 'дорослий' : 'дорослих'}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Кількість дітей</InputLabel>
                <Select
                  value={children}
                  onChange={(e) => setChildren(e.target.value)}
                  label="Кількість дітей"
                >
                  {[...Array(5)].map((_, index) => (
                    <MenuItem key={index} value={index}>
                      {index} {index === 1 ? 'дитина' : 'дітей'}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* Вибір кількості кімнат */}
              <FormControl fullWidth>
                <InputLabel>Кількість кімнат</InputLabel>
                <Select
                  value={rooms}
                  onChange={(e) => setRooms(e.target.value)}
                  label="Кількість кімнат"
                >
                  {[...Array(5)].map((_, index) => (
                    <MenuItem key={index} value={index + 1}>
                      {index + 1} {index + 1 === 1 ? 'кімната' : 'кімнат'}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Тип номера</InputLabel>
                <Select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  label="Тип номера"
                >
                  <MenuItem value="standard">Стандарт</MenuItem>
                  <MenuItem value="lux">Люкс</MenuItem>
                </Select>
              </FormControl>

              <Button variant="contained" color="warning" onClick={handleBooking} fullWidth>
                Підтвердити бронювання
              </Button>
            </Box>
          )}
        </Box>
      )}
      renderFooter={() => <Footer />}
    />
  );
}
