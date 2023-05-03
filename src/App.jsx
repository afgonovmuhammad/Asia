import './App.css';
import nav1 from './assets/nav1.png'
import nav1A from './assets/nav1A.png'
import nav2 from './assets/nav2.png'
import nav3 from './assets/nav3.png'
import nav4A from './assets/nav4.png'
import blu from './assets/blu.png'
import blu2 from './assets/blu2.png'
import blu3 from './assets/blu3.png'
import main_1 from './assets/main_1.png';
import right_3 from './assets/right_3.png';
import main_5 from './assets/main_5.png';
import main_51 from './assets/main_51.png';
import main_8 from './assets/main_8.png';
import main_9 from './assets/main_9.png';
import main_92 from './assets/main_92.png';
import main_93 from './assets/main_93.png';
import main_94 from './assets/main_94.png';
import main_95 from './assets/main_95.png';
import main_96 from './assets/main_96.png';
import main_97 from './assets/main_97.png';
import tel from './assets/tel.png';
import fece from './assets/fece.png';
import inst from './assets/inst.png';


import Card from './companent/main_2';
import { users } from './data/main_2';

import Card_3 from './companent/main_3';
import { users_3 } from './data/main_3';

import Card_4 from './companent/main_4';
import { users4 } from './data/main_4';

import Card6 from './companent/main_6';
import { users6 } from './data/main_6';


function App() {


  return (
    <div className="App">
      <div className="main_1 bg-[#424047] bg-[url('./assets/SS.png')] pb-[20px] bg-no-repeat cover">
        <div className=" bg-[url('./assets/SS.png')] bg-no-repeat cover ">
        <div className="contener">
          <div className="navBar sm:block lg:hidden  ">
          <div className='flex justify-around'>
          <div className='pt-[25px] '>
              <img src={nav1} alt="" />
            </div>
            <div>
            <div className='flex py-[40px] gap-[20px] '>
            <img src={nav2} alt="" />
            <img src={nav3} alt="" />
            </div>
            </div>
          </div>
          </div>
          <div className="navbar lg:flex justify-between sm:hidden lg:block  ">
            <div className='pt-[25px] lg:pl-[340px]'>
              <img src={nav1} alt="" />
            </div>
            <ul className='lg:flex lg:w-[50%] justify-around py-[40px]'>
              <li>Каталог</li>
              <li>Услуги</li>
              <li className='hover:text-[#785445]'><a href="#">Акции/Сидки</a></li>
              <li className='hover:text-[#785445]'><a href="#">Шоурумы</a></li>
              <li className='hover:text-[#785445]'><a href="#">О нас</a></li>
              <li className='hover:text-[#785445]'><a href="#">Контакты</a></li>
            </ul>
            <div className='flex gap-[50px]'>
            <div className='flex py-[20px] gap-[20px] lg:my-[10px] '>
            <img src={nav2} alt="" />
            <img src={nav3} alt="" />
            </div>
            <div className='bg-[#BC1D4A] flex gap-[20px] px-[40px]' >
               <div className='py-[25px]'>
               <p>+998 90 9088313</p>
              <p>+998 90 0548313</p>
               </div>
                <div className='py-[40px]'>
            <img src={nav4A} alt="" />

                </div>
            </div>
            </div>
          </div>
          <div className="main_1A lg:flex py-[60px] lg:w-[100%] sm:w-[60%] sm:mx-auto">
            <div className="left_1 lg:pl-[330px]">
                  <h1 className='xl:text-[66px] lg:text-[36px] lg:w-[100%] xl:w-[80%] sm:text-[34px] font-[500] text-[#fff]'>Единство в интерьере для создания гармоничного дизайна </h1>
                  <button className='bg-[#BC1D4A] text-[#fff] lg:py-[15px] lg:px-[80px]  sm:py-[10px] sm:px-[60px] my-[20px]'>Подробнее</button>

                  <div className='xl:mt-[90px]'>
                    <p className='text-[18px] font-[500] text-[#b1abab]'>Экслюзивная мебельная фуритура от</p>
                    <div className='flex gap-[20px] my-[20px]'>
                    <img className='' src={blu} alt="" />
                    <img className='my-[30px]' src={blu2} alt="" />
                    <img className='' src={blu3} alt="" />
                    </div>
                  </div>
            </div>
            <div className="right_1 lg:w-[63%] xl:">
              <img className=' xl:h-[72.9vh] lg:h-[65vh] lg:w-[100%]' src={main_1} alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="main_2 py-[80px]">
        <div className="contener">
          <h1 className='text-[#424047] lg:text-[38px] sm:text-[36px] pt-[50px]   font-[500] text-center'>Продукция</h1>
          <div className='lg:flex text-[#424047] gap-[140px] py-[50px] lg:w-[100%] sm:w-[20%] sm:mx-auto text-[18px] lg:justify-center'>
            <p className='hover:border-b-[2px] border-[#BC1D4A]  py-[10px] cursor-pointer'>Фартуки</p>
            <p className='hover:border-b-[2px] border-[#BC1D4A]  py-[10px] cursor-pointer'>Фартуки матовые</p>
            <p className='hover:border-b-[2px] border-[#BC1D4A]  py-[10px] cursor-pointer'>Алюминевые профили</p>
            <p className='hover:border-b-[2px] border-[#BC1D4A]  py-[10px] cursor-pointer'>Фартуки матовые</p>
          </div>

          <div className='lg:flex justify-evenly lg:w-[80%] sm:w-[45%]  mx-auto'>
            {users.map((elem)=>{
              return <Card key={elem.id} {...elem} />;
            })}
          </div>
          <div className=' bg-[#C4C4C4] opacity-[0.9] lg:w-[300px] sm:w-[20%] h-[3px] my-[50px] mx-auto rounded-[25px] '></div>
        </div>
      </div>

      <div className="main_3 ">
        <div className="contener">
          <div className="main_3A lg:flex lg:justify-between lg:w-[77%] mx-auto">
            <div className="left_3 lg:w-[50%]">
            <h1 className='text-[#424047] text-[36px] lg:w-[100%] lg:text-start sm:w-[100%] sm:text-center pb-[90px]'>Услуги</h1>
            <div className='lg:flex  flex-wrap lg:w-[100%] sm:w-[45%]  mx-auto'>
            {users_3.map((elem)=>{
              return <Card_3 key={elem.id} {...elem} />;
            })}
          </div>
            </div>
            <div className="right_3 lg:block sm:hidden ">
              <img className='' src={right_3} alt="" />
            </div>

          </div>

      
        </div>
      </div>

      <div className="main_4 bg-[#424047]  py-[50px] w-[100%]">
        <div className="contener">
            <div className= " bg-[url('./assets/dec.png')] bg-cover bg-no-repeat " ></div>
            <h1 className='text-[36px] text-[#ffffff] text-center py-[50px] font-[500]'>ПОЧЕМУ ИМЕННО МЫ?</h1>

            <div className='lg:flex justify-evenly lg:w-[77%] sm:w-[45%]  mx-auto'>
            {users4.map((elem)=>{
              return <Card_4 key={elem.id} {...elem} />;
            })}
          </div>

        </div>
      </div>

      <div className="main_5 my-[180px] lg:w-[100%] ">
        <div className="contener">
          <div className="main_5A lg:flex lg:w-[77%] sm:w-[50%] mx-auto ">
            <div className="left_5 float-left lg:w-[60%] lg:mr-[-40px] text-[#424047]">
              <h1 className='text-[36px] py-[20px] '>Про ASIADECOR </h1>
              <p className='text-[18px] lg:w-[80%] sm:w-[100%] lg:py-[57px] sm:py-[20px]'>Нашим знаком качества «ASIADECOR» мы гарантируем неизменно высокий стандарт качества
                продукции. Мы определяем стандартные характеристики продукта и технологических процессов
                и выбираем однотипное производственное оборудование. Кроме того, мы стремимся существенно
                отличаться благодаря сервису, ориентированному на клиента, и постоянно поддерживаемым контактам
                с клиентами и партнерами.
              </p>
              <img className='lg:h-[34.1vh] lg:w-[100%] lg:my-0 sm:my-[20px]' src={main_5} alt="" />
            </div>
            <div className="right_5 lg:w-[40%] ">
              <div className="right_5A w-[100%]">
                <img src={main_51} alt="" />
              </div>
              <div className="left_5A bg-[#BC1D4A] lg:my-0 sm:my-[20px] lg:p-[69px] sm:p-[39px] lg:w-[99%] sm:w-full">
                <p className=' text-[18px] text-[#fff] lg:w-[80%]'>Наша цель - сложные решения в области разработки декоров, технологий переработки и консультирования
                  по вопросам дизайна. Благодаря этому за три с половиной десятилетия мы создали зарекомендовавший себя
                  в отрасли эталон качества «ASIADECOR».</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="main_6  mb-[120px]">
        <div className="centener">
          <h1 className='text-[36px] py-[20px] text-[#424047] text-center'>4 преимущства работы  с ASIADECOR </h1>

          <div className='lg:flex justify-evenly lg:w-[80%] sm:w-[45%]  mx-auto'>
            {users6.map((elem)=>{
              return <Card6 key={elem.id} {...elem} />;
            })}
          </div>
        </div>
      </div>

      <div className="main_7">
        <div className="centener">
          <h1 className='text-[36px] py-[20px] text-[#424047] text-center'>ЛУЧШЕЕ ПРЕДЛОЖЕНИЕ</h1>
          <div className='lg:flex justify-evenly lg:w-[80%] sm:w-[45%]  mx-auto'>
            {users.map((elem)=>{
              return <Card key={elem.id} {...elem} />;
            })}
          </div>

          <div className=' bg-[#C4C4C4] opacity-[0.9] lg:w-[300px] sm:w-[20%] h-[3px] my-[50px] mx-auto rounded-[25px] '></div>

        </div>
      </div>

      <div className="main_8">
        <div className="contener">
          <div className="main_8A lg:flex ">
            <div className="left_8 text-[#424047] xl:w-[32%] mx-auto sm:w-[80%] ">
              <h1 className='xl:text-[36px] sm:text-[32px] font-[500] lg:w-[100%] lg:text-[33px] py-[40px]'>Оборудование мебельной промышленности</h1>

              <p className='text-[18px] xl:w-[100%] sm:w-[80%]'>Оборудование для мебельной промышленности – это целый комплекс, состоящий из автоматического,
                механического и ручного инструментария, который используется для обработки различных материалов,
                использующихся при изготовлении различных мебельных изделий. <br />
                <p className=' py-[40px] '>Мы готовы предоставить на ваш выбор современное оборудование мебельной промышленности от производителей из разных стран.</p>
              </p>

              <button className='bg-[#BC1D4A] text-[#fff] text-[18px] py-[13px] px-[50px]'>Подробнее</button>
            </div>
            <div className="right_8 xl:w-[45%] sm:w-[80%] lg:mx-0 sm:mx-auto  lg:my-0 sm:my-[30px]">
              <img className=' lg:float-right' src={main_8} alt="" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="main_9 py-[180px]">
        <div className="contener">
          <div className="main_9A lg:w-[77%] mx-auto sm:w-[30%]">
          <h1 className='text-[#424047] xl:text-[36px] sm:text-[32px] font-[500] mx-auto lg:text-[33px] py-[40px]'> НАШИ ПАРТНЁРЫ</h1>

          <div className='lg:flex justify-between lg:w-[100%] sm:w-[55%] mx-auto'>
            <img className='' src={main_9} alt="" />
            <img className='py-[30px]' src={main_92} alt="" />
            <img className='' src={main_93} alt="" />
            <img className='' src={main_94} alt="" />
            <img className='py-[30px]' src={main_95} alt="" />
            <img className='' src={main_96} alt="" />
            <img className='' src={main_97} alt="" />
          </div>
          </div>
        </div>
      </div>


      <div className="futter bg-[#424047]">
        <div className="contener">
          <div className="futter_A lg:flex justify-between text-[#fff] py-[70px] lg:w-[77%] mx-auto sm:w-[50%]">
            <div className='lg:w-[8%] sm:mx-auto lg:mx-0 sm:w-[30%] '>
              <img src={nav1A} alt="" />
            </div>

            <div className='lg:flex sm:flex justify-evenly lg:w-[50%] sm:py-[20px] lg:py-0 sm:w-[100%] text-[18px ] '>
              <ul className=' '>
                <li className='py-[10px] hover:text-[#785445]'><a href="#">О компании</a></li>
                <li className='py-[10px] hover:text-[#785445]'><a href="#">Сертификаты</a></li>
                <li className='py-[10px] hover:text-[#785445]'><a href="#">Юридическим лицам</a></li>
                <li className='py-[10px] hover:text-[#785445]'><a href="#">Реквизиты</a></li>
                <li className='py-[10px] hover:text-[#785445]'><a href="#">Поддержка (FAQ)</a></li>
              </ul>

              <ul>
                <li className='py-[10px] hover:text-[#785445]'><a href="#">Каталог</a></li>
                <li className='py-[10px] hover:text-[#785445]'><a href="#">Как купить</a></li>
                <li className='py-[10px] hover:text-[#785445]'><a href="#">Доставка и оплата</a></li>
                <li className='py-[10px] hover:text-[#785445]'><a href="#">Возврат продукции </a></li>
                <li className='py-[10px] hover:text-[#785445]'><a href="#">Поддержка (FAQ)</a></li>
              </ul>
            </div>

            <div className='sm:w-[50%] lg:w-[18%] lg:p-0 sm:py-[30px] lg:mx-0 sm:mx-auto'>
              <p>+998 90 999 11 11 <br />
                 +998 93 123 45 67 
              </p>

              <p className='py-[40px]'>Адрес: Узбекистан, г.Ташкент <br />
                 Ул. Шота Руставели, дом 1/23кв
              </p>
              <div className='flex gap-[20px]'>
                <img className='hover:opacity-[0.1]' src={tel} alt="" />
                <img className='hover:opacity-[0.1]' src={fece} alt="" />
                <img className='hover:opacity-[0.1]' src={inst} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
