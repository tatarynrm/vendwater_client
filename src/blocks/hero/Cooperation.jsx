import React, { useState } from 'react'
import './styles/Cooperation.scss'
import cooperationImage from '../../assets/png/cooperation.png'
import axios from 'axios'
const cooperationItems = [
  {text:"Залишай заявку"},
  {text:"Обирай з менеджером комплектацію апарату та обговорюй деталі"},
  {text:"Підписуємо договір"},
  {text:"Внесення передплати"},
  {text:"Обговорення та вибір місця для розміщення водомату"},
  {text:"Виготовлення і встановлення апарату"},
]
const Cooperation = ({consult,setConsult}) => {
const [name,setName] = useState('')
const [phone,setPhone] = useState('')
const [success,setSuccess] = useState('')
const tgSergeyZyban = 624032162
const tgRomanTataryn = 282039969
const sendMessageToAdmin = async ()=>{
  try {
if (name.length < 2 || phone.length < 4) {
  alert('Заповніть усі поля')
}else {
  const data = await axios.get(
    `https://api.telegram.org/bot6915884675:AAFa79fdOgGQsnBzcy9Gff4IE6fhApFa2Ic/sendMessage?chat_id=${tgRomanTataryn}&text=${name} - <code>${phone}</code>&&parse_mode=html`
  )
  if (data.status === 200) {
    setName('')
    setPhone('')
    setSuccess('Повідомлення успішно відправлено')
  }else {
    setName('')
    setPhone('')
    setSuccess('Виникла якась помилка.')
  }
}
  } catch (error) {
    console.log(error);
  }
}
console.log(name,phone);

  return (
    <section className='cooperation'>
      <div className="block__title">
        <h4><span>Співпраця</span></h4>
      </div>
      <div className="items">
        <div className="left__block">
          <img src={cooperationImage} alt="" />
        </div>
        <div className="right__block cooperation_block">
          <ul>
       {cooperationItems.map((item,idx)=>{
        return <li key={idx} className='cooperation__item'>
          <span>{item.text}</span>
        </li>
       })}
          </ul>
        </div>
      </div>

      <h5>Бажаєте отримати консультацію?</h5>

<div style={{borderColor:consult ?"green" : "blue"}} id='contacts' className="form">
  <span className="form__title">Безкоштовна консультація</span>

<div className="form__section">
<div className="form__control">
    <input type="text" placeholder='ПІБ' value={name} onChange={e=> {
      setName(e.target.value)
      setConsult(false)
    }} />
  </div>
  <div className="form__control">
    <input type="text" placeholder='Телефон' value={phone} onChange={e=> {
      setPhone(e.target.value)
      setConsult(false)
    } }/>
  </div>
</div>

  <button onClick={sendMessageToAdmin}>Отримати консультацію</button>

  {success.length <= 0 ? null : <span style={{color:"green",marginTop:"20px"}}>{success}</span>}
</div>
    </section>
  )
}

export default Cooperation