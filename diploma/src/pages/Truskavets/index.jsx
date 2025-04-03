import { Footer, Header, PageLayout } from '@components';
import { Box, Typography, TextField, Button, Select, FormControl, InputLabel, MenuItem, Snackbar, Alert } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useState } from 'react';
import useInput from '/src/hooks/useInput.js';  // Підключаємо хук

export function Truskavets() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    birthDate: null,
    checkInDate: dayjs(),
    checkOutDate: dayjs().add(1, 'day'),
    adults: 1,
    children: 0,
    roomType: 'standard',
    rooms: 1,
  });
  const [showForm, setShowForm] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const calculateAge = (birthDate) => {
    if (!birthDate) return 0;
    const today = dayjs();
    const age = today.diff(birthDate, 'year');
    return age;
  };

  const handleBooking = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      setSnackbarMessage('Будь ласка, заповніть всі поля перед бронюванням.');
      setSnackbarOpen(true);
      return;
    }

    if (formData.birthDate) {
      const age = calculateAge(formData.birthDate);
      if (age >= 14) {
        setFormData((prevData) => ({
          ...prevData,
          adults: 1,
          children: 0,
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          adults: 0,
          children: 1,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        children: 0,
      }));
    }

    setSnackbarMessage(`Дякуємо, ${formData.name}! Ви забронювали ${formData.rooms} номер(и) типу ${formData.roomType} з ${formData.checkInDate.format('YYYY-MM-DD')} по ${formData.checkOutDate.format('YYYY-MM-DD')}.\nКількість дорослих: ${formData.adults}, Кількість дітей: ${formData.children}.`);
    setSnackbarOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (newValue, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: newValue,
    }));
  };

  const handleToggleForm = () => {
    if (showForm) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        birthDate: null,
        checkInDate: dayjs(),
        checkOutDate: dayjs().add(1, 'day'),
        adults: 1,
        children: 0,
        roomType: 'standard',
        rooms: 1,
      });
    }
    setShowForm(!showForm);
  };

  const nameInputProps = useInput({
    label: "Ім'я",
    value: formData.name,
    onChange: handleChange,
    name: 'name',
  });

  const emailInputProps = useInput({
    label: 'Email',
    type: 'email',
    value: formData.email,
    onChange: handleChange,
    name: 'email',
  });

  const phoneInputProps = useInput({
    label: 'Телефон',
    type: 'tel',
    value: formData.phone,
    onChange: handleChange,
    name: 'phone',
  });

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
              <TextField {...nameInputProps} />
              <TextField {...emailInputProps} />
              <TextField {...phoneInputProps} />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Дата народження"
                  value={formData.birthDate}
                  onChange={(newValue) => handleDateChange(newValue, 'birthDate')}
                  fullWidth
                />
                <DatePicker
                  label="Дата заїзду"
                  value={formData.checkInDate}
                  onChange={(newValue) => handleDateChange(newValue, 'checkInDate')}
                  fullWidth
                />
                <DatePicker
                  label="Дата виїзду"
                  value={formData.checkOutDate}
                  onChange={(newValue) => handleDateChange(newValue, 'checkOutDate')}
                  fullWidth
                />
              </LocalizationProvider>

              <FormControl fullWidth>
                <InputLabel>Кількість дорослих</InputLabel>
                <Select
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
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
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  label="Кількість дітей"
                >
                  {[...Array(5)].map((_, index) => (
                    <MenuItem key={index} value={index}>
                      {index} {index === 1 ? 'дитина' : 'дітей'}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Кількість кімнат</InputLabel>
                <Select
                  name="rooms"
                  value={formData.rooms}
                  onChange={handleChange}
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
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
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

          <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={() => setSnackbarOpen(false)}>
            <Alert onClose={() => setSnackbarOpen(false)} severity="info" sx={{ width: '100%' }}>
              {snackbarMessage}
            </Alert>
          </Snackbar>
        </Box>
      )}
      renderFooter={() => <Footer />}
    />
  );
}
