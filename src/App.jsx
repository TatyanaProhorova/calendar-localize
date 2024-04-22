import './css/main.css';
import Calendar from './components/Сalendar';
import "./components/Calendar.css";
import { useState } from 'react';

// import 'react-calendar/dist/Calendar.css'; 
// Custom styling: you can import react-calendar's styles by using str higher,
// If you want to use default react-calendar styling to build upon it

// для локализации проекта
// import { format, setDefaultOptions } from "date-fns";
// setDefaultOptions(options: { locale: ru });

const now = new Date(2017, 2, 8);

function App() {
  const { lang, setLang } = useState("ru");

  console.log(lang);
  
  // const tolang = () => {
  //   setLang(type)

  const handleClickEn = () => {
    setLang("en")
  }
  
  return (
  <>
    <div>
      <button type="en" onClick={() => handleClickEn()}>en</button>
    </div>
    <div>
      <button type="ru">ru</button>
    </div>

    <Calendar date={now} lang={lang} />

  </>
  );
}

export default App;
